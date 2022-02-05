module.exports = {
  content: [
    './content/**/*.html',
    './static/js/**/*.{.jsx,.tsx}',
    './themes/krysha/layouts/**/*{.html, .css}',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};
