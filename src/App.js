// @ts-nocheck
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./App.css";
import { ColorModeContext, useMode } from "./context/theme";
import Header from "./container/window/Header";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <main className="content">
            <Header />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
