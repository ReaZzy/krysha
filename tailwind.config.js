module.exports = {
  content: [
    './content/**/*.html',
    './static/**/*.{.js,.tsx, .html, .css}',
    './themes/krysha/layouts/**/*{.html, .css}',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require('@tailwindcss/forms')],
};
