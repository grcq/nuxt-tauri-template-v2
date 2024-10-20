/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,ts,jsx,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: "#3490dc",
                secondary: "#ffed4a",
                danger: "#e3342f"
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};