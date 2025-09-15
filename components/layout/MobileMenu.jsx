'use client'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const MobileMenu = ({ mobileOpen, toggleMenu }) => {
    if(!mobileOpen) return null;

    const menuItems = [
        { name: 'Home', href: '/' },
        { name: 'Politics', href: '/politics' },
        { name: 'Sports', href: '/sports' },
        { name: 'Entertainment', href: '/entertainment' },
    ]; 

  return (
    <div>MobileMenu</div>
  )
}

export default MobileMenu