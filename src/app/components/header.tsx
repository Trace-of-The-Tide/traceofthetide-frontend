"use client"

import React from "react"
import { Globe, MapPin, Users, Gift, BookOpen, Languages } from "lucide-react"
import Image from "next/image"

interface NavigationItemProps {
  icon: React.ReactNode
  label: string
  onClick?: () => void
}

interface ButtonProps {
  children: React.ReactNode
  variant: 'primary' | 'secondary'
  onClick?: () => void
}

/**
 * Navigation item component for header menu items
 */
function NavigationItem({ icon, label, onClick }: NavigationItemProps): React.JSX.Element {
  return (
    <button
      className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-white/5 transition-colors"
      onClick={onClick}
      type="button"
    >
      <div className="w-5 h-5 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-sm text-gray-400 font-normal leading-5">
        {label}
      </span>
    </button>
  )
}

/**
 * Button component for header actions
 */
function Button({ children, variant, onClick }: ButtonProps): React.JSX.Element {
  const baseClasses = "px-2 py-1 rounded-md text-sm font-normal leading-5 transition-colors"
  const variantClasses = {
    primary: "bg-[#C9A96E] text-[#332217] font-medium shadow-[0px_1px_0px_rgba(255,255,255,0.4)_inset] hover:bg-[#B89A5E]",
    secondary: "bg-[#333333] text-white shadow-[0px_1px_1px_rgba(255,255,255,0.08)_inset] hover:bg-[#404040]"
  }

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}

/**
 * Logo component for the header
 */
function Logo(): React.JSX.Element {
  return (
    <div className="flex items-center gap-3">
      <Image src="/Brand.png" alt="Logo" width={200} height={150} />
    </div>
  )
}

/**
 * Language selector component
 */
function LanguageSelector(): React.JSX.Element {
  return (
    <button
      className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-white/5 transition-colors"
      type="button"
    >
      <div className="w-5 h-5 flex items-center justify-center">
        <Languages className="w-4 h-4 text-gray-400" />
      </div>
      <span className="text-sm text-gray-400 font-normal leading-5">
        EN
      </span>
    </button>
  )
}

/**
 * Main header component with navigation and authentication
 */
export function Header(): React.JSX.Element {
  const navigationItems = [
    { icon: <MapPin className="w-4 h-4 text-gray-400" />, label: "Fields" },
    { icon: <Users className="w-4 h-4 text-gray-400" />, label: "Be a neighbor" },
    { icon: <Gift className="w-4 h-4 text-gray-400" />, label: "Gift a trace" },
    { icon: <BookOpen className="w-4 h-4 text-gray-400" />, label: "Trace a story" }
  ]

  const handleLogin = (): void => {
    // TODO: Implement login functionality
    console.log("Login clicked")
  }

  const handleSignUp = (): void => {
    // TODO: Implement sign up functionality
    console.log("Sign up clicked")
  }

  return (
    <header className="w-full relative h-auto p-6 bg-gradient-to-b from-[#171717] via-[#171717]/90 to-transparent flex items-center justify-center gap-10">
      <Logo />
      
      <div className="flex-1 flex items-center justify-end gap-4">
        <nav className="flex items-center gap-1">
          {navigationItems.map((item, index) => (
            <NavigationItem
              key={index}
              icon={item.icon}
              label={item.label}
            />
          ))}
        </nav>
        
        <div className="w-px h-4 bg-white/12" />
        
        <LanguageSelector />
        
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={handleLogin}>
            Login
          </Button>
          <Button variant="primary" onClick={handleSignUp}>
            Sign up
          </Button>
        </div>
      </div>
      
    </header>
  )
}
