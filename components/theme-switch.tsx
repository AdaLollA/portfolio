'use client'

import { useTheme } from '@/context/theme-context'
import React from 'react'
import { BsMoon, BsSun } from 'react-icons/bs'

export default function ThemeSwitch() {
    const { toggleTheme, theme } = useTheme();
    return (
        <button
            onClick={toggleTheme}
            className='fixed bottom-5 right-5 bg-white/70 w-[3rem] h-[3rem] backdrop-blur-[0.5rem] border border-white/40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all
            dark:bg-gray-950'>
            {
                theme === 'light' ? <BsSun /> : <BsMoon />
            }
        </button>
    )
}
