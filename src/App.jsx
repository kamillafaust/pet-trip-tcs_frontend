import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Home } from "./pages/Home";
import theme from "./styles/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
};

export default App;
