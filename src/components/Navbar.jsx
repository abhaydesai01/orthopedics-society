import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { Button } from "./ui/Button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/NavigationMenu";

const navigationItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about-us" },
  { name: "Office Bearers", href: "/office-bearers" },
  { name: "Gallery", href: "/gallery" },
  { name: "Events", href: "/events" },
  { name: "Circulars", href: "/circulars" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <nav
          className={cn(
            "transition-all duration-300 ease-in-out",
            isScrolled ? "bg-slate-800/90 backdrop-blur-sm" : "bg-transparent"
          )}
        >
          <div className="container mx-auto px-4">
            <div
              className={cn(
                "flex items-center justify-between transition-all duration-300",
                isScrolled ? "h-24" : "h-20"
              )}
            >
              {/* Logo */}
              <Link to="/" className="flex items-center">
                <img
                  src="/logo.jpg"
                  alt="Medico Healthcare"
                  className={cn(
                    "object-contain transition-all duration-300",
                    isScrolled ? "h-20 w-auto" : "h-20 w-auto"
                  )}
                  onError={(e) => {
                    e.currentTarget.src = "/fallback-logo.png";
                    console.error("Error loading logo image");
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
    "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
    "hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50",
    isScrolled ? "bg-black text-white" : "text-black"
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
    className={cn(
      "lg:hidden transition-colors duration-300", 
      isScrolled ? "text-white" : "text-black"
    )}
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
          "block px-4 py-2 text-sm font-medium rounded-md transition-colors duration-300",
          isScrolled ? "text-white hover:bg-slate-700" : "text-black hover:bg-gray-200",
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

      {/* Hero Section with Light Blue Background */}
<div className="relative h-[100vh] bg-blue-100 flex flex-col items-center justify-center text-center px-4">
  {/* Hero Text */}
  <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-900">
    Bangalore Orthopedic Society
  </h1>
  <p className="text-lg font-medium sm:text-xl md:text-2xl lg:text-3xl text-gray-700">
    Advancing Orthopedic Excellence Through Innovation and Collaboration
  </p>
</div>

      {/* Search Modal - Removed */}
    </>
  );
}
