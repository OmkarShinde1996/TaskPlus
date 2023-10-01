'use client'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'
import { Tabs, TabsList } from './ui/tabs'
import { TabsTrigger } from './ui/tabs'
import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    //useEffect only run on the client so we can safely show the UI
    //with this trick we are avoiding hydration errors
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null
    return (
        <Tabs defaultValue={theme}>
            <TabsList className='border dark:border-neutral-800 dark:bg-[#030303]'>
                <TabsTrigger value='light' onClick={(e)=>setTheme('light')}>
                    <SunIcon className='w-[1.2rem] h-[1.2rem] rotate-90 transition-all dark:rotate-0' />
                </TabsTrigger>
                <TabsTrigger value='dark' onClick={(e)=>setTheme('dark')}>
                    <MoonIcon className='w-[1.2rem] h-[1.2rem] rotate-90 transition-all dark:rotate-0'/>
                </TabsTrigger>
                <TabsTrigger value='system' onClick={(e)=>setTheme('system')}>
                    <DesktopIcon className='w-[1.2rem] h-[1.2rem]'/>
                </TabsTrigger>
            </TabsList>
        </Tabs>
    )
}

export default ThemeSwitcher