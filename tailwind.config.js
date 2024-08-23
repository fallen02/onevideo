/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Poppins
        pExlight: ["Poppins-ExtraLight", "sans-serif"],
        pBlack: ["Poppins-Black", "sans-serif"],
        pBold: ["Poppins-Bold", "sans-serif"],
        pExbold: ["Poppins-ExtraBold", "sans-serif"],
        pItalic: ["Poppins-Italic", "sans-serif"],
        pLight: ["Poppins-Light", "sans-serif"],
        pMedium: ["Poppins-Medium", "sans-serif"],
        pRegular: ["Poppins-Regular", "sans-serif"],
        pSemiBold: ["Poppins-SemiBold", "sans-serif"],
        pThin: ["Poppins-Thin", "sans-serif"],
        // Montserrat
        mBlack: ["Montserrat-Black", "sans-serif"],
        mBold: ["Montserrat-Bold", "sans-serif"],
        mMedium: ["Montserrat-Medium", "sans-serif"],
        mRegular: ["Montserrat-Regular", "sans-serif"],
        // Roboto
        rBlack: ["Roboto-Black", "sans-serif"],
        rBold: ["Roboto-Bold", "sans-serif"],
        rMedium: ["Roboto-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
