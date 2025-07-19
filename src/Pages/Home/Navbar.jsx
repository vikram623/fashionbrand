import React, { useState } from 'react';
import { Heart, ShoppingCart, Menu } from 'react-feather';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <nav className="bg-black shadow-md fixed top-0 left-0 w-full bg-gray-600 text-white z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-blue-600">ElectroHut</a>

        {/* Search Box (desktop) */}
        <div className="hidden md:flex flex-1 mx-6 max-w-xl">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Navigation Links & Icons (desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="/products" className="text-gray-700 hover:text-blue-600">Products</a>

          {/* Wishlist */}
          <a href="/Wishlisting" className="relative">
            <Heart className="w-5 h-5 text-gray-700 hover:text-red-500" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">2</span>
          </a>

          {/* Cart */}
          <a href="/Addcart" className="relative">
            <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-red-600" />
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-1.5">3</span>
          </a>
          <a href="/cart" className="relative bg-gray-300 px-2 rounded-full">
           <i class="fa-solid fa-user text-gray-700"></i> <span>Login</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <a href="/" className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="/products" className="block text-gray-700 hover:text-blue-600">Products</a>

          <div className="flex gap-6 mt-2">
            <a href="/wishlist" className="relative">
              <Heart className="w-5 h-5 text-gray-700 hover:text-red-500" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">2</span>
            </a>
            <a href="/cart" className="relative">
              <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-blue-600" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full px-1.5">3</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

