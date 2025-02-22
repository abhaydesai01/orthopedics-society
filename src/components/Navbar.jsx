import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import { Button } from './ui/Button'
import { SearchModal } from './SearchModal'
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
  { name: "Members", href: "/members" },
  { name: "Events", href: "/events" },
  // { name: "Links", href: "/links" },
  // { name: "Journals", href: "/journals" },
  // { name: "Downloads", href: "/downloads" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav
          className={cn(
            'transition-all duration-300 ease-in-out',
            isScrolled
              ? 'bg-slate-800/90 backdrop-blur-sm'
              : 'bg-transparent'  // Removed pt-4 from here
          )}
        >
          <div className="container mx-auto px-4">
            <div
              className={cn(
                'flex items-center justify-between transition-all duration-300',
                isScrolled ? 'h-16' : 'h-20' // Reduced heights to minimize gap
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

              {/* Search button */}
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
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
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Bangalore Orthopedics Society
            </h1>
            <p className="text-xl font-medium md:text-2xl lg:text-3xl">
              Advancing Orthopedic Excellence Through Innovation and Collaboration
            </p>
          </div>
        </div>
      </div>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  )
}