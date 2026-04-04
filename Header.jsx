import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_a60c5f4c-daba-4532-8be4-54fb1f5e4f81/artifacts/k2xdqk98_VNV%20logo.png";
const BANNER_THUMBNAIL = "https://customer-assets.emergentagent.com/job_veil-vine-header/artifacts/9acvrsq9_VnV%20BB.jpg";

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Schedule Service', path: '/schedule' },
  { name: 'Contact Us', path: '/contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Banner */}
      <div className="top-banner" data-testid="top-banner">
        <div className="flex items-center justify-center gap-3">
          <img 
            src={BANNER_THUMBNAIL} 
            alt="V&V" 
            className="h-6 w-6 rounded-full object-cover"
            data-testid="banner-thumbnail"
          />
          <Phone className="w-4 h-4" />
          <span>Call us today for a free estimate! We're here to help.</span>
        </div>
      </div>

      {/* Sticky Header */}
      <header 
        className={`sticky-header ${isScrolled ? 'scrolled' : ''}`}
        data-testid="sticky-header"
      >
        <div className="max-w-7xl mx-auto">
          {/* Logo */}
          <div className="logo-container">
            <Link to="/" data-testid="logo-link">
              <img 
                src={LOGO_URL} 
                alt="Veil & Vine Cleaning Co." 
                className="logo-image"
                data-testid="logo-image"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex justify-center items-center gap-8 pb-4" data-testid="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                data-testid={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 text-[#f5f0e6]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="mobile-menu-button"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu" data-testid="mobile-menu">
          <button
            className="absolute top-4 right-4 p-2 text-[#f5f0e6]"
            onClick={() => setIsMobileMenuOpen(false)}
            data-testid="close-mobile-menu"
          >
            <X className="w-8 h-8" />
          </button>
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className="mobile-nav-link animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
