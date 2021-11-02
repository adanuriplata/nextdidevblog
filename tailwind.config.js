module.exports = {
  purge: {
    enabled: true,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // My Colors
        "bg-ddev": "#0D0A1C",
        "green-ddev": "#0EF9FC",
        "white-ddev": "#8892b0",
        "white-l-ddev": "#ccd6f6",
        "orange-ddev": "#D48A2A",
      },
      fontFamily: {
        mono: ['"Fira Mono"'],
        sans: ["Montserrat"],
        serif: ['"Red Hat Display"', "Merriweather"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
