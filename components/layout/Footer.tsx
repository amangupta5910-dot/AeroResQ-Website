import {
  Mail,
  Phone,
  MapPin,
 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#030712] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold text-orange-500">
              AeroResQ
            </h2>

            <p className="text-gray-400 mt-5 leading-7">
              AI Powered Autonomous Search & Rescue Platform
              for Disaster Response, Defence and Emergency
              Management.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li><a href="/">Home</a></li>

              <li><a href="/about">About</a></li>

              <li><a href="/technology">Technology</a></li>

              <li><a href="/products">Products</a></li>

              <li><a href="/contact">Contact</a></li>

            </ul>

          </div>

          {/* Solutions */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Solutions
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Disaster Response</li>

              <li>Border Surveillance</li>

              <li>Forest Monitoring</li>

              <li>Smart Rescue</li>

              <li>Mission Control</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex items-center gap-3">

                <Mail size={18} />

                aeroresq0309@gmail.com

              </div>

              <div className="flex items-center gap-3">

                <Phone size={18} />

                +91 8840669968

              </div>

              <div className="flex items-start gap-3">

                <MapPin size={18} className="mt-1" />

                India

              </div>

            </div>

            <div className="flex gap-4 mt-8">

             
              

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} AeroResQ. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-gray-500 text-sm">

            <a href="/privacy">Privacy Policy</a>

            <a href="/terms">Terms & Conditions</a>

          </div>

        </div>

      </div>

    </footer>
  );
}