/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                "custom-soft-blue": "hsl(215, 51%, 70%)",
                "custom-cyan": "hsl(178, 100%, 50%)",
                "custom-very-dark-blue-mainbg": "hsl(217, 54%, 11%)",
                "custom-very-dark-blue-cardbg": "hsl(216, 50%, 16%)",
                "custom-very-dark-blue-line": "hsl(215, 32%, 27%)",
                "custom-white": "hsl(0, 0%, 100%)"
            }
        }
    },
    plugins: []
};
