import React from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-default border-t mt-6 border-gray-100 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Main footer content - stacks on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo section - centered on mobile, left-aligned on desktop */}
          <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-auto">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="https://i.ibb.co/dpSMLyd/Brown-Simple-Circle-Restaurant-Logo-photoaidcom-cropped.png"
                alt="Share Bites Logo"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-2xl font-bold text-gray-800">
                Share Bites
              </span>
            </div>
            {/* Description - full width on mobile, max-width on desktop */}
            <p className="text-gray-600 text-center md:text-left max-w-xs w-full">
              Bringing people together through the joy of shared meals and
              delicious experiences.
            </p>
          </div>

          {/* Contact info - centered on mobile, left-aligned on desktop */}
          <div className="flex flex-col items-center md:items-start gap-3 w-full md:w-auto">
            <h3 className="font-semibold text-gray-800 text-lg">Contact Us</h3>
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">(123) 456-7890</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">
                  radhanath1542@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">
                  123 Food Street, India
                </span>
              </div>
            </div>
          </div>

          {/* Social links - centered on all screens */}
          <div className="flex flex-col items-center gap-3 w-full md:w-auto">
            <h3 className="font-semibold text-gray-800 text-lg">Follow Us</h3>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-600 hover:text-primary-main transition-colors"
              >
                <Instagram className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary-main transition-colors"
              >
                <Facebook className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-primary-main transition-colors"
              >
                <Twitter className="w-6 h-6 sm:w-7 sm:h-7" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright - centered on all screens */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <p className="text-center text-gray-600 text-xs sm:text-sm">
            © {new Date().getFullYear()} Share Bites. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
