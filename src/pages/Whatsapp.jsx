import { MessageCircle } from "lucide-react";

const WhatsAppContact = () => {
  const phoneNumber = "919999999999"; // country code + number
  const message = "Hi, I want to know more about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 to-emerald-100">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">
          Connect on WhatsApp
        </h1>

        <p className="text-gray-600 max-w-md mx-auto">
          One click. Instant conversation. No forms, no delays.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white text-lg font-semibold rounded-full shadow-lg transition-all hover:scale-105"
        >
          <MessageCircle className="w-6 h-6" />
          Chat on WhatsApp
        </a>
      </div>

    </div>
  );
};

export default WhatsAppContact;

