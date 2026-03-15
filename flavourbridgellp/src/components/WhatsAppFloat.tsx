import { useState } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => {
  const [isHovered, setIsHovered] = useState(false);

  const phoneNumber = "919177718097"; // without + or spaces
  const message =
    "Hi! I'm interested in your premium Indian products. Please provide more details about your products and pricing.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-16 right-0 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-lg whitespace-nowrap">
            <div className="text-sm font-medium">Need to order? Click here!</div>
            <div className="absolute bottom-0 right-4 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900"></div>
          </div>
        )}

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

        {/* Ripple */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-ping pointer-events-none"></span>
      </div>
    </div>
  );
};

export default WhatsAppFloat;