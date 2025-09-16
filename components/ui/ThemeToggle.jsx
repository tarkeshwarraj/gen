'use client'
import React from 'react'
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Button } from "@/components/ui/Button";

export default function ThemeToggle () {
    const  { theme, setTheme, systemTheme } = useTheme();

    // अगर theme "system" है तो systemTheme use होगा
    const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
    >
        {currentTheme === "dark" ? (
            <Sun className="h-5 w-5" />
        ):(
            <Moon className="h-5 w-5" />
        )}

    </Button>
  )
}