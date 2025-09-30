'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark';

type ThemeContextType = {
    toggleTheme: () => void,
    theme: Theme,
}
const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            window.localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add("dark");
        } else {
            setTheme('light');
            window.localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove("dark");
        }
    }

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme') as Theme | null;
        if (localTheme) {
            setTheme(localTheme);
            if (localTheme === 'dark') {
                document.documentElement.classList.add("dark");
            }
        } else if (window.matchMedia('(prefers-color-scheme: dark').matches) {
            setTheme('dark');
            document.documentElement.classList.add("dark");
        }
    }, []); // empty dependency array -> only run once

    return <ThemeContext.Provider value={{ theme, toggleTheme }}> {children} </ThemeContext.Provider>
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === null) {
        throw new Error(
            "ThemeContext must be used within an ThemeContextProvider"
        )
    }
    return context;
}