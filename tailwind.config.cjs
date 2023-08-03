/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                main: [
                    "Atkinson",
                    "system-ui",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Oxygen",
                    "Ubuntu",
                    "Cantarell",
                    "Open Sans",
                    "Helvetica Neue",
                    "sans-serif"
                ]
            }
        }
    },
    plugins: []
};
