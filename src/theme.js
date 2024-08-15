import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';
import { create } from '@mui/material/styles/createTransitions';

export const tokens = (mode) => ({
    ...(mode === 'dark' ? 
    {
        grey: {
            100: "#e0e0e0",
            200: "#c2c2c2",
            300: "#a3a3a3",
            400: "#858585",
            500: "#666666",
            600: "#525252",
            700: "#3d3d3d",
            800: "#292929",
            900: "#141414"
        },
        primary: {
            100: "#fbfbfb",
            200: "#f8f8f8",
            300: "#f4f4f4",
            400: "#f1f1f1",
            500: "#ededed",
            600: "#bebebe",
            700: "#8e8e8e",
            800: "#5f5f5f",
            900: "#2f2f2f"
        },
        greenAccent: {
            100: "#cce6d0",
            200: "#99cca1",
            300: "#66b371",
            400: "#339942",
            500: "#008013",
            600: "#00660f",
            700: "#004d0b",
            800: "#003308",
            900: "#001a04"
        },
        redAccent: {
            100: "#fbcece",
            200: "#f89e9e",
            300: "#f46d6d",
            400: "#f13d3d",
            500: "#ed0c0c",
            600: "#be0a0a",
            700: "#8e0707",
            800: "#5f0505",
            900: "#2f0202"
        },
        blueAccent: {
            100: "#cfd2f4",
            200: "#9fa5e9",
            300: "#6e78df",
            400: "#3e4bd4",
            500: "#0e1ec9",
            600: "#0b18a1",
            700: "#081279",
            800: "#060c50",
            900: "#030628"
        },
    } : {
        grey: {
            100: "#141414",
            200: "#292929",
            300: "#3d3d3d",
            400: "#525252",
            500: "#666666",
            600: "#858585",
            700: "#a3a3a3",
            800: "#c2c2c2",
            900: "#e0e0e0",
        },
        primary: {
            100: "#2f2f2f",
            200: "#5f5f5f",
            300: "#8e8e8e",
            400: "#bebebe",
            500: "#ededed",
            600: "#f1f1f1",
            700: "#f4f4f4",
            800: "#f8f8f8",
            900: "#fbfbfb",
        },
        greenAccent: {
            100: "#001a04",
            200: "#003308",
            300: "#004d0b",
            400: "#00660f",
            500: "#008013",
            600: "#339942",
            700: "#66b371",
            800: "#99cca1",
            900: "#cce6d0",
        },
        redAccent: {
            100: "#2f0202",
            200: "#5f0505",
            300: "#8e0707",
            400: "#be0a0a",
            500: "#ed0c0c",
            600: "#f13d3d",
            700: "#f46d6d",
            800: "#f89e9e",
            900: "#fbcece",
        },
        blueAccent: {
            100: "#030628",
            200: "#060c50",
            300: "#081279",
            400: "#0b18a1",
            500: "#0e1ec9",
            600: "#3e4bd4",
            700: "#6e78df",
            800: "#9fa5e9",
            900: "#cfd2f4",
        },
    }),
});

export const themeSettings = (mode) => {
    const colors = tokens(mode)
    return {
        palette: {
            mode: mode,
            ...(mode === 'dark' ? {
                primary: {
                    main: colors.primary[500]
                },
                secondary: {
                    main: colors.greenAccent[500]
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100]
                },
                background: {
                    default: colors.primary[500],
                }
            } : {
                primary: {
                    main: colors.primary[100],
                },
                secondary: {
                    main: colors.greenAccent[500],
                },
                neutral: {
                    dark: colors.grey[700],
                    main: colors.grey[500],
                    light: colors.grey[100]
                },
                background: {
                    default: "#fcfcfc",
                }
            }),
        },
        typography: {
            fontFamily: ["Source Sans 3", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans 3", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    }
}

export const ColorModeContext = createContext({
    toggleColorMode: () => {}
});

export const useMode = () => {
    const [mode, setMode] = useState("dark")
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => 
                setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
        }), [])
    

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])
    return [theme, colorMode]
}