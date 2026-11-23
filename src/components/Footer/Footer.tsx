"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Logo from "@/../../public/image/Logo.png"

export default function Footer() {
  const pathname = usePathname()

  return (
    <footer className="w-full border-t bg-sand border">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 xl:gap-20">
          {/* Logo Section */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="w-[180px] h-[100px] sm:w-[200px] sm:h-[120px] md:w-[230px] md:h-[130px] relative">
              <Link href="/">
                <Image
                  src={Logo || "/placeholder.svg"}
                  alt="Desert Oasis Dermatology Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 180px, (max-width: 768px) 200px, 230px"
                />
              </Link>
            </div>
          </div>

          {/* Company Section */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold text-primary-hover mb-3 sm:mb-4">Company</h3>
            <nav className="flex flex-col space-y-2 items-center sm:items-start">
              <Link
                href="/about"
                className={`${pathname === "/about" ? "text-primary" : "text-foreground"} hover:text-primary text-sm sm:text-base transition-colors`}
              >
                About
              </Link>
              <Link
                href="/reviews"
                className={`${pathname === "/reviews" ? "text-primary" : "text-foreground"} hover:text-primary text-sm sm:text-base transition-colors`}
              >
                Reviews
              </Link>
              <Link
                href="/accessibility"
                className={`${pathname === "/accessibility" ? "text-primary" : "text-foreground"} hover:text-primary text-sm sm:text-base transition-colors`}
              >
                Accessibility
              </Link>
              <Link
                href="/careers"
                className={`${pathname === "/careers" ? "text-primary" : "text-foreground"} hover:text-primary text-sm sm:text-base transition-colors`}
              >
                Careers
              </Link>
              <Link
                href="/patient-info"
                className={`${pathname === "/patient-info" ? "text-primary" : "text-foreground"} hover:text-primary text-sm sm:text-base transition-colors`}
              >
                Patient Information
              </Link>
              <Link
                href="/maricopa-dermatologist"
                className={`${pathname === "/maricopa-dermatologist" ? "text-primary" : "text-foreground"} hover:text-primary text-sm sm:text-base transition-colors`}
              >
                Maricopa Office
              </Link>
              <Link
                href="/chandler-dermatologist"
                className={`${pathname === "/chandler-dermatologist" ? "text-primary" : "text-foreground"} hover:text-primary text-sm sm:text-base transition-colors`}
              >
                Chandler Office
              </Link>
            </nav>
          </div>

          {/* Contact Us Section */}
          <div className="flex flex-col items-center sm:items-start mt-4 sm:mt-0">
            <h3 className="text-lg font-semibold text-primary-hover mb-3 sm:mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-2 items-center sm:items-start">
              <p className="text-foreground text-sm sm:text-base">Call us: <a href="tel:+14804183314" className="text-primary underline">(480) 418-3314</a></p>
              <p className="text-foreground text-sm sm:text-base">Text for appointments: <a href="sms:+14804183314" className="text-primary underline">(480) 418-3314</a></p>
              <div className="mt-2 sm:mt-4 text-xs sm:text-sm text-muted-foreground flex flex-col items-center sm:items-start">
                <p>Message/Data Rates May Apply</p>
                <p>Message Frequency May Vary</p>
                <p>Text {'"STOP"'} to cancel</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-6 sm:mt-8 pt-4 border-t">
          <p className="text-center text-xs sm:text-sm text-muted-foreground">
            © Copyright 2025, All Rights Reserved by DESERT OASIS DERMATOLOGY
          </p>
        </div>
      </div>
    </footer>
  )
}

