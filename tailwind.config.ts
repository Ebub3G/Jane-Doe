
import type { Config } from "tailwindcss";

export default {
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
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif']
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
				// New Electric Blue Tech Color Scheme
				'electric-blue': '#007BFF',
				'ghost-white': '#F8F9FA',
				'charcoal-black': '#212529',
				'neon-aqua': '#00E5FF',
				'soft-purple': '#9B59B6',
				// Shades and variations
				blue: {
					50: '#E3F2FD',
					100: '#BBDEFB',
					200: '#90CAF9',
					300: '#64B5F6',
					400: '#42A5F5',
					500: '#007BFF', // Electric Blue
					600: '#0056B3',
					700: '#004085',
					800: '#002752',
					900: '#001429'
				},
				gray: {
					50: '#F8F9FA', // Ghost White
					100: '#E9ECEF',
					200: '#DEE2E6',
					300: '#CED4DA',
					400: '#ADB5BD',
					500: '#6C757D',
					600: '#495057',
					700: '#343A40',
					800: '#212529', // Charcoal Black
					900: '#0D1117'
				},
				purple: {
					50: '#F3E5F5',
					100: '#E1BEE7',
					200: '#CE93D8',
					300: '#BA68C8',
					400: '#AB47BC',
					500: '#9B59B6', // Soft Purple
					600: '#8E44AD',
					700: '#7B1FA2',
					800: '#6A1B9A',
					900: '#4A148C'
				},
				cyan: {
					50: '#E0F7FF',
					100: '#B3EBFF',
					200: '#80DEEA',
					300: '#4DD0E1',
					400: '#26C6DA',
					500: '#00E5FF', // Neon Aqua
					600: '#00B8D4',
					700: '#0097A7',
					800: '#00838F',
					900: '#006064'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-out': 'fade-out 0.5s ease-out'
			},
			screens: {
				'xs': '320px',
				'sm': '640px',
				'md': '768px',
				'lg': '1024px',
				'xl': '1280px',
				'2xl': '1536px',
				'3xl': '1920px',
				'4xl': '2560px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
