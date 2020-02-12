const white = "#FFFFFF";
const black = "#161617";
const gray = "#F8F8F9";

const lightTheme = {
  background: gray,
  body: black
};

const darkTheme = {
  background: black,
  body: white
};

const theme = mode => (mode === "dark" ? darkTheme : lightTheme);

export default theme;