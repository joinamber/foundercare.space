
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { Sprout } from "./Doodles";

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" })
});

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    try {
      contactSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            newErrors[err.path[0]] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // 1. Store submission in Supabase
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);
        
      if (dbError) throw new Error(dbError.message);
      
      // 2. Send email notifications
      const response = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });
      
      if (!response.data.success) {
        throw new Error("Failed to send email notifications");
      }
      
      toast.success("Message sent! We'll get back to you soon.");
      
      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-founder-cream">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="eyebrow mb-4">
            <Sprout className="h-5 w-5 text-founder-sage" />
            Say hello
          </span>
          <h2 className="mb-4 text-founder-ink">Let&rsquo;s find your people</h2>
          <p className="text-lg text-founder-muted">
            Tell us a little about where you&rsquo;re at, and we&rsquo;ll help you find your circle.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6 founder-card p-8 md:p-10">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-founder-ink mb-2">
                Full Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`w-full rounded-xl border-founder-cream-deep focus:border-founder-coral focus:ring-founder-coral ${errors.name ? 'border-red-500' : ''}`}
                required
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-founder-ink mb-2">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className={`w-full rounded-xl border-founder-cream-deep focus:border-founder-coral focus:ring-founder-coral ${errors.email ? 'border-red-500' : ''}`}
                required
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-founder-ink mb-2">
                Write a message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Drop us a message today to get help..."
                className={`w-full min-h-[150px] rounded-xl border-founder-cream-deep focus:border-founder-coral focus:ring-founder-coral ${errors.message ? 'border-red-500' : ''}`}
                required
                disabled={isSubmitting}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>
            
            <div>
              <Button
                type="submit"
                className="bg-founder-coral hover:bg-founder-coral-dark hover:shadow-bloom text-white w-full py-6 rounded-full flex items-center justify-center gap-2 text-base font-semibold transition-all duration-300 ease-in-out motion-safe:hover:-translate-y-0.5"
                disabled={isSubmitting}
              >
                <Send className="h-5 w-5" />
                {isSubmitting ? 'Sending...' : 'Join the network'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
