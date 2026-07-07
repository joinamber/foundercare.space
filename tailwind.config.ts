
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '1.5rem',
			screens: {
				'2xl': '1200px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// FounderCare "calm garden" palette — one coherent warm-natural system.
				founder: {
					cream: '#FCFBF8',
					'cream-deep': '#F5F1E8',
					coral: '#FF6B5E',
					'coral-dark': '#E8543F',
					'coral-soft': '#FFE7E2',
					sage: '#7C9A82',
					'sage-soft': '#E4ECE1',
					terracotta: '#C97B54',
					'terracotta-soft': '#F3E2D6',
					gold: '#D8A44B',
					'gold-soft': '#F6EBD3',
					plum: '#9B7A93',
					'plum-soft': '#EDE3EB',
					ink: '#2B2724',
					muted: '#6B635B',
					// Legacy aliases mapped onto the new palette so nothing breaks.
					red: '#FF6B5E',
					green: '#7C9A82',
					dark: '#2B2724',
					light: '#FCFBF8',
					beige: '#F5F1E8',
					gray: '#6B635B',
					accent: '#C97B54',
					gradient: {
						start: '#FF6B5E',
						end: '#E8543F'
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				blob: '42% 58% 63% 37% / 41% 44% 56% 59%'
			},
			boxShadow: {
				soft: '0 18px 40px -20px rgba(120, 80, 60, 0.28)',
				'soft-sm': '0 10px 24px -16px rgba(120, 80, 60, 0.25)',
				'soft-lg': '0 28px 60px -28px rgba(120, 80, 60, 0.32)',
				bloom: '0 12px 30px -8px rgba(255, 107, 94, 0.45)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(12px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'50%': { transform: 'translateY(-14px) rotate(3deg)' }
				},
				'float-soft': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				drift: {
					'0%, 100%': { transform: 'translate(0, 0) rotate(-4deg)' },
					'50%': { transform: 'translate(8px, -12px) rotate(4deg)' }
				},
				sway: {
					'0%, 100%': { transform: 'rotate(-5deg)' },
					'50%': { transform: 'rotate(5deg)' }
				},
				'sparkle-pop': {
					'0%, 100%': { opacity: '0.35', transform: 'scale(0.85)' },
					'50%': { opacity: '1', transform: 'scale(1.15)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out both',
				float: 'float 9s ease-in-out infinite',
				'float-soft': 'float-soft 7s ease-in-out infinite',
				drift: 'drift 12s ease-in-out infinite',
				sway: 'sway 6s ease-in-out infinite',
				'sparkle-pop': 'sparkle-pop 4s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
