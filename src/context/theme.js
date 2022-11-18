import { createTheme } from "@mui/material/styles";
import { createContext, useState, useMemo } from "react";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        primary: {
          100: "#d4d4d8",
          200: "#a9aab0",
          300: "#7e7f89",
          400: "#535561",
          500: "#282a3a",
          600: "#20222e",
          700: "#181923",
          800: "#101117",
          900: "#08080c",
        },
        purpleAccent: {
          100: "#e4d9f8",
          200: "#c9b4f1",
          300: "#ad8ee9",
          400: "#9269e2",
          500: "#7743db",
          600: "#5f36af",
          700: "#472883",
          800: "#301b58",
          900: "#180d2c",
        },
        blueAccent: {
          100: "#d3daf4",
          200: "#a6b5e9",
          300: "#7a90dd",
          400: "#4d6bd2",
          500: "#2146c7",
          600: "#1a389f",
          700: "#142a77",
          800: "#0d1c50",
          900: "#070e28",
        },
        grey: {
          100: "#dde3dd",
          200: "#bbc6ba",
          300: "#99aa98",
          400: "#778d75",
          500: "#557153",
          600: "#445a42",
          700: "#334432",
          800: "#222d21",
          900: "#111711",
        },
        redAccent: {
          100: "#f9d0db",
          200: "#f3a1b7",
          300: "#ec7294",
          400: "#e64370",
          500: "#e0144c",
          600: "#b3103d",
          700: "#860c2e",
          800: "#5a081e",
          900: "#2d040f",
        },
      }
    : {
        primary: {
          100: "#08080c",
          200: "#101117",
          300: "#181923",
          400: "#20222e",
          500: "#282a3a",
          600: "#535561",
          700: "#7e7f89",
          800: "#a9aab0",
          900: "#d4d4d8",
        },
        purpleAccent: {
          100: "#180d2c",
          200: "#301b58",
          300: "#472883",
          400: "#5f36af",
          500: "#7743db",
          600: "#9269e2",
          700: "#ad8ee9",
          800: "#c9b4f1",
          900: "#e4d9f8",
        },
        blueAccent: {
          100: "#070e28",
          200: "#0d1c50",
          300: "#142a77",
          400: "#1a389f",
          500: "#2146c7",
          600: "#4d6bd2",
          700: "#7a90dd",
          800: "#a6b5e9",
          900: "#d3daf4",
        },
        grey: {
          100: "#111711",
          200: "#222d21",
          300: "#334432",
          400: "#445a42",
          500: "#557153",
          600: "#778d75",
          700: "#99aa98",
          800: "#bbc6ba",
          900: "#dde3dd",
        },
        redAccent: {
          100: "#2d040f",
          200: "#5a081e",
          300: "#860c2e",
          400: "#b3103d",
          500: "#e0144c",
          600: "#e64370",
          700: "#ec7294",
          800: "#f3a1b7",
          900: "#f9d0db",
        },
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.blueAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.blueAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Lato", "sans - serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Lato", "sans - serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Lato", "sans - serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Lato", "sans - serif"].join(","),
        fontSize: 32,
      },
      h4: {
        fontFamily: ["Lato", "sans - serif"].join(","),
        fontSize: 24,
      },
      h5: {
        fontFamily: ["Lato", "sans - serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Lato", "sans - serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
