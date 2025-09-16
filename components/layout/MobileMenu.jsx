'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const MobileMenu = ({ mobileOpen, toggleMenu }) => {
    if(!mobileOpen) return null;

    const menuItems = [
        { name: 'Home', href: '/' },
        { name: 'Politics', href: '/politics' },
        { name: 'Sports', href: '/sports' },
        { name: 'Entertainment', href: '/entertainment' },
    ]; 

  return (
    <div className='md:hidden bg-background border-t'>
        <nav className='flex flex-col items-start gap-4 p-4'>
            {menuItems.map((item) => (
                <Link 
                    key={item.name}
                    href={item.href}
                    className='text-sm font-medium text-slate-600 hover:text-[var(--primary-color)]'
                    onClick={toggleMenu}
                >
                    {item.name}
                </Link>
            ))}

            {/* Login Button */}
            <Button variant="outline" className='w-full'>
                <Link href="/login" className='w-full text-center'>
                    Log In
                </Link>
            </Button>
        </nav>
    </div>
  )
}

export default MobileMenu