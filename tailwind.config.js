/** @type {import('tailwindcss').Config} */
module.exports = {
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
      padding: "1.6rem", // Reduced by 20% from 2rem
      screens: {
        "2xl": "1120px", // Reduced by 20% from 1400px
      },
    },
    fontSize: {
      xs: ["0.576rem", { lineHeight: "0.792rem" }],
      sm: ["0.72rem", { lineHeight: "1.008rem" }],
      base: ["0.864rem", { lineHeight: "1.224rem" }],
      lg: ["1.008rem", { lineHeight: "1.44rem" }],
      xl: ["1.08rem", { lineHeight: "1.512rem" }],
      "2xl": ["1.224rem", { lineHeight: "1.656rem" }],
      "3xl": ["1.44rem", { lineHeight: "1.8rem" }],
      "4xl": ["1.728rem", { lineHeight: "2.088rem" }],
      "5xl": ["2.16rem", { lineHeight: "1" }],
      "6xl": ["2.736rem", { lineHeight: "1" }],
      "7xl": ["3.312rem", { lineHeight: "1" }],
      "8xl": ["4.32rem", { lineHeight: "1" }],
      "9xl": ["5.76rem", { lineHeight: "1" }],
    },
    spacing: {
      px: "0.8px",
      0: "0px",
      0.5: "0.08rem",
      1: "0.16rem",
      1.5: "0.24rem",
      2: "0.32rem",
      2.5: "0.4rem",
      3: "0.48rem",
      3.5: "0.56rem",
      4: "0.64rem",
      5: "0.8rem",
      6: "0.96rem",
      7: "1.12rem",
      8: "1.28rem",
      9: "1.44rem",
      10: "1.6rem",
      11: "1.76rem",
      12: "1.92rem",
      14: "2.24rem",
      16: "2.56rem",
      20: "3.2rem",
      24: "3.84rem",
      28: "4.48rem",
      32: "5.12rem",
      36: "5.76rem",
      40: "6.4rem",
      44: "7.04rem",
      48: "7.68rem",
      52: "8.32rem",
      56: "8.96rem",
      60: "9.6rem",
      64: "10.24rem",
      72: "11.52rem",
      80: "12.8rem",
      96: "15.36rem",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colors for Nexus Finance app
        nexus: {
          // Light mode
          light: {
            sidebar: "#1a2233",
            sidebarHover: "#1e293b",
            sidebarActive: "#00c2cb",
            sidebarText: "#cbd5e1",
            sidebarActiveText: "#ffffff",
            sidebarBorder: "#1e293b",
            logo: "#00c2cb",
            header: "#1a2233",
            headerText: "#ffffff",
            tableHeader: "#1a2233",
            tableHeaderText: "#ffffff",
            statusPending: "#ffc107",
            statusOverdue: "#ff5252",
            statusPaid: "#4caf50",
          },
          // Dark mode
          dark: {
            sidebar: "#1a2233",
            sidebarHover: "#1e293b",
            sidebarActive: "#00c2cb",
            sidebarText: "#cbd5e1",
            sidebarActiveText: "#ffffff",
            sidebarBorder: "#1e293b",
            logo: "#00c2cb",
            header: "#1a2233",
            headerText: "#ffffff",
            tableHeader: "#1a2233",
            tableHeaderText: "#ffffff",
            statusPending: "#ffc107",
            statusOverdue: "#ff5252",
            statusPaid: "#4caf50",
          },
        },
      },
      borderRadius: {
        lg: "calc(var(--radius) * 0.8)", // Reduced by 20%
        md: "calc(var(--radius) * 0.8 - 1.6px)", // Reduced by 20%
        sm: "calc(var(--radius) * 0.8 - 3.2px)", // Reduced by 20%
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
