/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff6f2",
          100: "#ffece6",
          200: "#ffd0bf",
          300: "#ffb499",
          400: "#ff7c4d",
          500: "#ff4400",
          600: "#e63d00",
          700: "#bf3300",
          800: "#992900",
          900: "#7d2100",
        },
        blueChill: {
          50: "#f0fdfa",
          100: "#cbfcf2",
          200: "#98f7e7",
          300: "#5cecd8",
          400: "#2bd6c5",
          500: "#12baac",
          600: "#0ca197",
          700: "#0e7771",
          800: "#105f5c",
          900: "#124f4c",
          950: "#033030",
        },
        shakespeare: {
          50: "#f6fafc",
          100: "#edf6fa",
          200: "#d3e7f2",
          300: "#b8d9eb",
          400: "#82bddb",
          500: "#4da0cc",
          600: "#4590b8",
          700: "#3a7899",
          800: "#2e607a",
          900: "#264e64",
        },
        woodsmoke: {
          50: "#f3f3f3",
          100: "#e7e7e7",
          200: "#c4c4c4",
          300: "#a0a0a0",
          400: "#595959",
          500: "#121212",
          600: "#101010",
          700: "#0e0e0e",
          800: "#0b0b0b",
          900: "#090909",
        },
        amber: {
          50: "#fffcf3",
          100: "#fff9e6",
          200: "#fff0c1",
          300: "#ffe69c",
          400: "#ffd451",
          500: "#FFC107",
          600: "#e6ae06",
          700: "#bf9105",
          800: "#997404",
          900: "#7d5f03",
        },
        makara: {
          50: "#f9f9f8",
          100: "#f3f2f1",
          200: "#e1dfdc",
          300: "#ceccc7",
          400: "#aaa59c",
          500: "#857f72",
          600: "#787267",
          700: "#645f56",
          800: "#504c44",
          900: "#413e38",
        },
        "shuttle-gray": {
          50: "#f7f8f8",
          100: "#eff1f2",
          200: "#d8dbde",
          300: "#c0c5cb",
          400: "#909aa3",
          500: "#616e7c",
          600: "#576370",
          700: "#49535d",
          800: "#3a424a",
          900: "#30363d",
        },
        lynch: {
          50: "#f7f9fa",
          100: "#eff2f5",
          200: "#d8dfe5",
          300: "#c0cbd6",
          400: "#91a4b7",
          500: "#627d98",
          600: "#587189",
          700: "#4a5e72",
          800: "#3b4b5b",
          900: "#303d4a",
        },
        ceruleanBlue: {
          50: "#f6f7fc",
          100: "#edeff9",
          200: "#d1d7f1",
          300: "#b6bfe9",
          400: "#7f8fd8",
          500: "#485fc7",
          600: "#4156b3",
          700: "#364795",
          800: "#2b3977",
          900: "#232f62",
        },
        zeus: {
          50: "#f4f4f4",
          100: "#eae9e9",
          200: "#cac9c8",
          300: "#aaa8a7",
          400: "#6b6665",
          500: "#2b2523",
          600: "#272120",
          700: "#201c1a",
          800: "#1a1615",
          900: "#151211",
        },
        danube: {
          50: "#f5f9fd",
          100: "#ecf4fa",
          200: "#cfe3f3",
          300: "#b2d2ec",
          400: "#78b0de",
          500: "#3e8ed0",
          600: "#3880bb",
          700: "#2f6b9c",
          800: "#25557d",
          900: "#1e4666",
        },
        grenadier: {
          50: "#fdf5f2",
          100: "#fbece6",
          200: "#f5cfbf",
          300: "#efb399",
          400: "#e2794d",
          500: "#d64000",
          600: "#c13a00",
          700: "#a13000",
          800: "#802600",
          900: "#691f00",
        },
        tiaMaria: {
          50: "#fcf5f2",
          100: "#f8ebe6",
          200: "#efcdbf",
          300: "#e5af99",
          400: "#d1744d",
          500: "#bd3800",
          600: "#aa3200",
          700: "#8e2a00",
          800: "#712200",
          900: "#5d1b00",
        },
        goldenrod: {
          50: "#fffdf8",
          100: "#fffbf1",
          200: "#fff6db",
          300: "#fff0c6",
          400: "#ffe49b",
          500: "#ffd970",
          600: "#e6c365",
          700: "#bfa354",
          800: "#998243",
          900: "#7d6a37",
        },
        twitter: {
          50: "#f4fafe",
          100: "#e8f6fe",
          200: "#c7e8fc",
          300: "#a5d9fa",
          400: "#61bdf6",
          500: "#1da1f2",
          600: "#1a91da",
          700: "#1679b6",
          800: "#116191",
          900: "#0e4f77",
        },
        facebook: {
          50: "#f3f8fe",
          100: "#e8f1fe",
          200: "#c5ddfc",
          300: "#a3c9fa",
          400: "#5da0f6",
          500: "#1877f2",
          600: "#166bda",
          700: "#1259b6",
          800: "#0e4791",
          900: "#0c3a77",
        },
        instagram: {
          50: "#fcf5f9",
          100: "#f9ebf3",
          200: "#f0cde0",
          300: "#e6aece",
          400: "#d472a9",
          500: "#c13584",
          600: "#ae3077",
          700: "#912863",
          800: "#74204f",
          900: "#5f1a41",
        },
        github: {
          50: "#f5f5f5",
          100: "#ebebeb",
          200: "#cccccc",
          300: "#adadad",
          400: "#707070",
          500: "#333333",
          600: "#2e2e2e",
          700: "#262626",
          800: "#1f1f1f",
          900: "#191919",
        },
        vimeo: {
          50: "#f4fbfe",
          100: "#e8f8fd",
          200: "#c6edfa",
          300: "#a3e2f7",
          400: "#5fcdf0",
          500: "#1ab7ea",
          600: "#17a5d3",
          700: "#1489b0",
          800: "#106e8c",
          900: "#0d5a73",
        },
        lynch: {
          50: "#f7f9fa",
          100: "#eff2f5",
          200: "#d8dfe5",
          300: "#c0cbd6",
          400: "#91a4b7",
          500: "#627d98",
          600: "#587189",
          700: "#4a5e72",
          800: "#3b4b5b",
          900: "#303d4a",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
