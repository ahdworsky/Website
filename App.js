
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="text-gray-800 font-sans">
      {/* Hero Section with Full-Page Background Image */}
      <section
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <div className="bg-black bg-opacity-60 p-6 rounded-2xl">
          <img
            src="/logo-skysure.png"
            alt="SkySure Logo"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h1 className="text-4xl font-bold">SkySure Inspections</h1>
          <p className="text-lg mt-2">See the Roof Before the Offer—SkySure Delivers the Truth from Above.</p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-xl transition"
          >
            Book an Inspection
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="p-8 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 border rounded-2xl shadow">
            <h3 className="text-xl font-semibold">Residential Roof Inspections</h3>
            <p className="mt-2 text-sm">Detailed inspections for storm damage, leaks, and aging roofs.</p>
          </div>
          <div className="p-6 border rounded-2xl shadow">
            <h3 className="text-xl font-semibold">Commercial Properties</h3>
            <p className="mt-2 text-sm">Fast, high-resolution imaging for buildings of all sizes.</p>
          </div>
          <div className="p-6 border rounded-2xl shadow">
            <h3 className="text-xl font-semibold">Partner Services</h3>
            <p className="mt-2 text-sm">Inspection support for roofers, realtors, and insurance adjusters.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="p-8 bg-gray-50">
        <h2 className="text-2xl font-semibold text-center mb-6">Inspection Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6 border rounded-2xl shadow bg-white">
            <h3 className="text-xl font-semibold mb-2">Basic</h3>
            <p className="text-2xl font-bold mb-2">$149</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✔️ Aerial photos only</li>
              <li>✔️ Next-day turnaround</li>
              <li>✔️ Up to 2,000 sq ft</li>
            </ul>
          </div>
          <div className="p-6 border-2 border-blue-600 rounded-2xl shadow bg-white">
            <h3 className="text-xl font-semibold mb-2">Standard</h3>
            <p className="text-2xl font-bold mb-2">$199</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✔️ Aerial photos + 4K video</li>
              <li>✔️ Same-day delivery</li>
              <li>✔️ Full inspection report</li>
            </ul>
          </div>
          <div className="p-6 border rounded-2xl shadow bg-white">
            <h3 className="text-xl font-semibold mb-2">Premium</h3>
            <p className="text-2xl font-bold mb-2">$279</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✔️ Everything in Standard</li>
              <li>✔️ Thermal imaging</li>
              <li>✔️ On-site consultation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="p-8 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-6">Book an Inspection</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" placeholder="Your Name" className="border p-3 rounded-lg" />
          <input type="email" placeholder="Email Address" className="border p-3 rounded-lg" />
          <input type="text" placeholder="Property Address" className="border p-3 rounded-lg" />
          <textarea rows="4" placeholder="Additional Details" className="border p-3 rounded-lg" />
          <button type="submit" className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Submit Request
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 text-center text-sm">
        © {new Date().getFullYear()} SkySure Inspections · Charlotte, NC · All rights reserved.
      </footer>
    </div>
  );
}

export default App;
