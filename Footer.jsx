import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const LOGO_URL = "https://customer-assets.emergentagent.com/job_a60c5f4c-daba-4532-8be4-54fb1f5e4f81/artifacts/k2xdqk98_VNV%20logo.png";

export const Footer = () => {
  return (
    <footer className="footer py-16 px-6 md:px-12 lg:px-24" data-testid="footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-4">
            <img 
              src={LOGO_URL} 
              alt="Veil & Vine Cleaning Co." 
              className="h-20 w-auto"
              data-testid="footer-logo"
            />
            <p className="text-[#f5f0e6]/80 text-sm leading-relaxed">
              Premium cleaning services with a touch of botanical elegance. 
              Making your space sparkle, naturally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl text-[#f5d547] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#f5f0e6]/80 hover:text-[#f5d547] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#f5f0e6]/80 hover:text-[#f5d547] transition-colors text-sm">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/schedule" className="text-[#f5f0e6]/80 hover:text-[#f5d547] transition-colors text-sm">
                  Schedule Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#f5f0e6]/80 hover:text-[#f5d547] transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl text-[#f5d547] mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#f5f0e6]/80 text-sm">
                <Phone className="w-4 h-4 text-[#b39ddb]" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-[#f5f0e6]/80 text-sm">
                <Mail className="w-4 h-4 text-[#b39ddb]" />
                <span>hello@veilandvine.com</span>
              </li>
              <li className="flex items-start gap-3 text-[#f5f0e6]/80 text-sm">
                <MapPin className="w-4 h-4 text-[#b39ddb] mt-0.5" />
                <span>123 Botanical Lane<br />Garden City, ST 12345</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-xl text-[#f5d547] mb-4">Business Hours</h3>
            <ul className="space-y-2 text-[#f5f0e6]/80 text-sm">
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#b39ddb]" />
                <div>
                  <p>Mon - Fri: 8am - 6pm</p>
                  <p>Saturday: 9am - 4pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#7a8069]/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#f5f0e6]/60 text-sm">
              © {new Date().getFullYear()} Veil & Vine Cleaning Co. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-[#f5f0e6]/60 hover:text-[#b39ddb] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-[#f5f0e6]/60 hover:text-[#b39ddb] transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
