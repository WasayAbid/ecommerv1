import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#181818] text-white py-10">
      {/* Made By Abdul Wasay Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold">Made By Abdul Wasay Abid</h1>
      </div>

      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Models */}
        <div>
          <h3 className="font-bold mb-4">Models</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/">Gaming computers</Link>
            </li>
            <li>
              <Link href="/">Accessories</Link>
            </li>
            <li>
              <Link href="/">Gaming Monitors</Link>
            </li>
            <li>
              <Link href="/">Gaming Laptops</Link>
            </li>
            <li>
              <Link href="/">Choose a PC</Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/">Modernization</Link>
            </li>
            <li>
              <Link href="/">Maintenance</Link>
            </li>
            <li>
              <Link href="/">Modding and customization</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-bold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/">Payment and delivery</Link>
            </li>
            <li>
              <Link href="/">Installment</Link>
            </li>
            <li>
              <Link href="/">Refund policy</Link>
            </li>
            <li>
              <Link href="/">FAQ</Link>
            </li>
          </ul>
        </div>

        {/* Projects */}
        <div>
          <h3 className="font-bold mb-4">Projects</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/">Game clubs</Link>
            </li>
            <li>
              <Link href="/">eSports</Link>
            </li>
            <li>
              <Link href="/">Events</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/">Contacts</Link>
            </li>
            <li>
              <Link href="/">About us</Link>
            </li>
            <li>
              <Link href="/">Our production</Link>
            </li>
            <li>
              <Link href="/">Why us?</Link>
            </li>
            <li>
              <Link href="/">News and Articles</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center">
        {/* Social Media Links */}
        <div className="flex space-x-4 mb-4 sm:mb-0"></div>

        {/* Contact Information */}
        <div className="text-center text-gray-400 text-sm">
          <p>© 2009-2024 TheGamerVault. All rights reserved.</p>
          <p>Terms of service | Privacy policy </p>
        </div>

        <div className="flex space-x-4"></div>
      </div>
    </footer>
  );
};

export default Footer;
