import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {

  return (
    <footer className="bg-gray-900 text-white py-12">

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">

        {/* Title */}
        <h3 className="text-xl font-semibold mb-6 tracking-wide">
          Follow & Connect
        </h3>

        {/* Social Icons */}
        <div className="flex space-x-6 mb-8">

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/18EkgzKoWx/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition"
          >
            <Facebook className="w-5 h-5" />
          </a>

          {/* Twitter / X */}
          <a
            href="https://x.com/FlavourBridge"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition"
          >
            <Twitter className="w-5 h-5" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/flavour_bridge_overseas?utm_source=qr&igsh=eGI3bnZ0Z3duZml4"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition"
          >
            <Instagram className="w-5 h-5" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/flavourbridge-overseasllp-0416383b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          {/* Email */}
          <a
            href="mailto:support@flavourbridgellp.com"
            className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition"
          >
            <Mail className="w-5 h-5" />
          </a>

        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm space-y-2">

          <p>
            © {new Date().getFullYear()} Flavour Bridge. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;