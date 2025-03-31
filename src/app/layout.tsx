import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Carioz - Premium Car Parts",
  description: "Your one-stop shop for high-quality car parts and accessories",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-orange-600">
                  Carioz
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Link href="/shop" className="text-gray-700 hover:text-orange-600">
                  Shop
                </Link>
                <Link href="/categories" className="text-gray-700 hover:text-orange-600">
                  Categories
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-orange-600">
                  About
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-orange-600">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-50 border-t mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">About Carioz</h3>
                <p className="text-gray-700">Your trusted source for premium car parts and accessories.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/shop" className="text-gray-700 hover:text-orange-600">
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link href="/categories" className="text-gray-700 hover:text-orange-600">
                      Categories
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-gray-700 hover:text-orange-600">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-700 hover:text-orange-600">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact Us</h3>
                <p className="text-gray-700">Email: info@carioz.com</p>
                <p className="text-gray-700">Phone: (123) 456-7890</p>
              </div>
            </div>
            <div className="border-t mt-8 pt-8 text-center text-gray-500">
              <p>© {new Date().getFullYear()} Carioz. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
