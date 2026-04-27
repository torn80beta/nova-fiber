"use client";

import MobileMenu from "@/app/components/shared/MobileMenu";

export default function Hero() {
  return (
    <section className="bg-[url('/image/hero.jpg')] bg-cover bg-center min-h-screen min-w-full flex flex-col justify-between">
      <header className="box-border w-full max-w-360 mx-auto ">
        {/* Menu */}
        <nav className="flex justify-between items-center py-5 md:py-10 px-5 md:px-20 mb-20 md:mb-10">
          <div className="text-white text-[1.75rem] font-bold">
            NovaFiber LLC
          </div>
          <div className="hidden md:flex space-x-10">
            <a href="#features" className="navbar-item">
              Features
            </a>
            <a href="#products" className="navbar-item">
              Products
            </a>
            <a href="#experiences" className="navbar-item">
              Experience
            </a>
            <a href="#materials" className="navbar-item">
              Materials
            </a>
            <a href="#testimonials" className="navbar-item">
              Testimonials
            </a>
            <a href="#contacts" className="navbar-item">
              Contacts
            </a>
          </div>
          {/* Mobile Menu */}
          <MobileMenu />
        </nav>

        {/* Hero Content */}
        <div className="grow flex items-center justify-center text-center px-12">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to NovaFiber LLC
            </h1>
            <p className="text-xl md:text-2xl">
              Professional upholstery and carpet cleaning service
            </p>
          </div>
        </div>
      </header>
      <span className="h-20 bg-linear-to-t from-white to-transparent"></span>
    </section>
  );
}
