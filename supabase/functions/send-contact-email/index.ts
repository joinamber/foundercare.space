
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { Resend } from "npm:resend@1.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactSubmission {
  name: string;
  email: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, message }: ContactSubmission = await req.json();
    
    console.log(`Processing contact submission from ${name} (${email})`);
    
    // Send notification email to admin
    const adminEmailResult = await resend.emails.send({
      from: "FounderCare <onboarding@resend.dev>",
      to: "foundercare.space@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });
    
    // Send confirmation email to the user
    const userEmailResult = await resend.emails.send({
      from: "FounderCare <onboarding@resend.dev>",
      to: email,
      subject: "Thank you for contacting FounderCare",
      html: `
        <h2>Thank you for reaching out to FounderCare!</h2>
        <p>Hello ${name},</p>
        <p>We've received your message and will get back to you soon.</p>
        <p>Here's a copy of your message:</p>
        <p><em>${message}</em></p>
        <br>
        <p>Best regards,</p>
        <p>The FounderCare Team</p>
      `,
    });

    console.log("Email sent successfully:", { admin: adminEmailResult, user: userEmailResult });

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error sending emails:", error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message,
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
});
