import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/Button'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from './ui/NavigationMenu'
import { cn } from '../lib/utils'
import { Link, useLocation } from 'react-router-dom'

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Office Bearers", href: "/office-bearers" },
  // { name: "Members", href: "/members" },
  { name: "Events", href: "/events" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav
          className={cn(
            'transition-all duration-300 ease-in-out',
            isScrolled
              ? 'bg-slate-800/90 backdrop-blur-sm'
              : 'bg-transparent'
          )}
        >
          <div className="container mx-auto px-4">
            <div
              className={cn(
                'flex items-center justify-between transition-all duration-300',
                isScrolled ? 'h-16' : 'h-20'
              )}
            >
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <img
                  src="/logo.jpg"
                  alt="Medico Healthcare"
                  className={cn(
                    'object-contain transition-all duration-300',
                    isScrolled ? 'h-12 w-auto' : 'h-16 w-auto'
                  )}
                  onError={(e) => {
                    e.currentTarget.src = '/fallback-logo.png'
                    console.error('Error loading logo image')
                  }}
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex lg:items-center lg:space-x-8">
                <NavigationMenu>
                  <NavigationMenuList>
                    {navigationItems.map((item) => (
                      <NavigationMenuItem key={item.name}>
                        <Link to={item.href}>
                          <NavigationMenuLink
                            className={cn(
                              "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                              "text-white",
                              location.pathname === item.href && "bg-slate-700/50",
                            )}
                          >
                            {item.name}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>

              {/* Mobile Menu Button - Search Button Removed */}
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white lg:hidden"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                  <span className="sr-only">Menu</span>
                </Button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            <div
              className={cn(
                "lg:hidden transition-all duration-300 ease-in-out overflow-hidden",
                isMobileMenuOpen ? "max-h-96" : "max-h-0"
              )}
            >
              <div className="space-y-2 pb-4">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "block px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-slate-700",
                      location.pathname === item.href && "bg-slate-700/50"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section with Text Overlay */}
      <div className="relative h-[100vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/image7.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 to-slate-900/10" />
          {/* Hero Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Bangalore Orthopedics Society
            </h1>
            <p className="text-lg font-medium sm:text-xl md:text-2xl lg:text-3xl">
              Advancing Orthopedic Excellence Through Innovation and Collaboration
            </p>
          </div>
        </div>
      </div>

      {/* Search Modal - Removed */}
    </>
  )
}