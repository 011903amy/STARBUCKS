/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E3932",
        secondary: "#D4E9E2",
        tertiary: "#F1F8F5",
        quaternary: "#F2F0EB",
        quinary: "#046241",
        button: "#00754A",
        buttonn: "#0E7D54",
        signn: "#EEEEEE",
      },
      fontFamily: {
        poppins: "Poppins",
      },
      backgroundImage: {
        banner: "url('../img/hero-mobile_2021.jpg')",
        desktop: "url('../img/xl-hero-desktop_2021.webp')",
        rewards: "url('../img/partners__img.png')",
      },
    },
  },
  plugins: [],
};

