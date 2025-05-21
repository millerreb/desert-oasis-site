"use client"

import type React from "react"
import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import logo from "@/../../Public/image/Fav-icon.png"
import social1 from "@/../../Public/image/goole.png"
import social2 from "@/../../Public/image/Facebook.png"
import social3 from "@/../../Public/image/Instagram.png"
import social4 from "@/../../Public/image/flower.png"
import social5 from "@/../../Public/image/tiktok.png"
import social6 from "@/../../Public/image/youtube.png"
import { Menu } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [aboutPopoverOpen, setAboutPopoverOpen] = useState(false)
  const [patientInfoPopoverOpen, setPatientInfoPopoverOpen] = useState(false)
  const [servicesPopoverOpen, setServicesPopoverOpen] = useState(false)

  // Refs for tracking hover state
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const aboutTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const patientInfoTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Cleanup timeouts on unmount

  const handleMouseEnter = (
    setter: React.Dispatch<React.SetStateAction<boolean>>,
    timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>,
  ) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setter(true)
  }

  const handleMouseLeave = (
    setter: React.Dispatch<React.SetStateAction<boolean>>,
    timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>,
  ) => {
    timeoutRef.current = setTimeout(() => {
      setter(false)
    }, 300) // Increased delay for smoother interaction
  }

  const isActive = (href: string) => pathname === href

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50 ">
      <div className="container flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <Image
              src={logo || "/placeholder.svg"}
              alt="Desert Oasis Dermatology Logo"
              className="object-contain"
              width={70}
              height={60}
            />
            <span className=" sm:inline text-base md:text-base lg:text-[18px] font-normal text-[#A66A47]">
              DESERT OASIS
              <br />
              DERMATOLOGY
            </span>
          </div>
        </Link>

        {/* Center Navigation */}
        <nav className="hidden items-center justify-center space-x-4 lg:space-x-10 md:flex">
          <Link
            href="/"
            className={`text-sm font-normal text-[#363636] hover:text-amber-700 ${isActive("/") ? "text-amber-700 font-bold" : ""}`}
          >
            Home
          </Link>

          {/* Services popover */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter(setServicesPopoverOpen, servicesTimeoutRef)}
            onMouseLeave={() => handleMouseLeave(setServicesPopoverOpen, servicesTimeoutRef)}
          >
            <Popover open={servicesPopoverOpen} onOpenChange={setServicesPopoverOpen}>
              <PopoverTrigger asChild>
                <Link
                  href=""
                  className={`text-sm font-normal text-[#363636] hover:text-amber-700 flex items-center gap-1 ${isActive("/services") ? "text-amber-700 font-bold" : ""}`}
                >
                  Services
                </Link>
              </PopoverTrigger>
              <PopoverContent
                className="w-48 p-2 shadow-md border-none"
                align="center"
                sideOffset={10}
                onMouseEnter={() => handleMouseEnter(setServicesPopoverOpen, servicesTimeoutRef)}
                onMouseLeave={() => handleMouseLeave(setServicesPopoverOpen, servicesTimeoutRef)}
              >
                <div className="flex flex-col gap-2">
                  <Link
                    href="/services?category=Medical"
                    className="w-full text-sm text-[#363636] hover:bg-amber-50 hover:text-amber-700 p-2 rounded-md"
                    onClick={(e) => {
                      e.stopPropagation()
                      setTimeout(() => setServicesPopoverOpen(false), 100)
                    }}
                  >
                    Medical
                  </Link>
                  <Link
                    href="/services?category=Surgical"
                    className="w-full text-sm text-[#363636] hover:bg-amber-50 hover:text-amber-700 p-2 rounded-md"
                    onClick={(e) => {
                      e.stopPropagation()
                      setTimeout(() => setServicesPopoverOpen(false), 100)
                    }}
                  >
                    Surgical
                  </Link>
                  <Link
                    href="/services?category=Cosmetic"
                    className="w-full text-sm text-[#363636] hover:bg-amber-50 hover:text-amber-700 p-2 rounded-md"
                    onClick={(e) => {
                      e.stopPropagation()
                      setTimeout(() => setServicesPopoverOpen(false), 100)
                    }}
                  >
                    Cosmetic
                  </Link>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* About popover */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter(setAboutPopoverOpen, aboutTimeoutRef)}
            onMouseLeave={() => handleMouseLeave(setAboutPopoverOpen, aboutTimeoutRef)}
          >
            <Popover open={aboutPopoverOpen} onOpenChange={setAboutPopoverOpen}>
              <PopoverTrigger asChild>
                <Link
                  href=""
                  className={`text-sm font-normal text-[#363636] hover:text-amber-700 flex items-center gap-1 ${isActive("/about") ? "text-amber-700 font-bold" : ""}`}
                >
                  About
                </Link>
              </PopoverTrigger>
              <PopoverContent
                className="w-48 p-2 shadow-md border-none"
                align="center"
                sideOffset={10}
                onMouseEnter={() => handleMouseEnter(setAboutPopoverOpen, aboutTimeoutRef)}
                onMouseLeave={() => handleMouseLeave(setAboutPopoverOpen, aboutTimeoutRef)}
              >
                <div className="flex flex-col gap-2">
                  <Link
                    href="/about"
                    className="w-full text-sm text-[#363636] hover:bg-amber-50 hover:text-amber-700 p-2 rounded-md"
                    onClick={(e) => {
                      e.stopPropagation()
                      setTimeout(() => setAboutPopoverOpen(false), 100)
                    }}
                  >
                    Meet Dr. Lavian
                  </Link>
                  <Link
                    href="/blog"
                    className="w-full text-sm text-[#363636] hover:bg-amber-50 hover:text-amber-700 p-2 rounded-md"
                    onClick={(e) => {
                      e.stopPropagation()
                      setTimeout(() => setAboutPopoverOpen(false), 100)
                    }}
                  >
                    Blog
                  </Link>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          {/* Patient Info popover */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter(setPatientInfoPopoverOpen, patientInfoTimeoutRef)}
            onMouseLeave={() => handleMouseLeave(setPatientInfoPopoverOpen, patientInfoTimeoutRef)}
          >
            <Popover open={patientInfoPopoverOpen} onOpenChange={setPatientInfoPopoverOpen}>
              <PopoverTrigger asChild>
                <Link
                  href="/patient-info"
                  className={`text-sm font-normal text-[#363636] hover:text-amber-700 flex items-center gap-1 ${isActive("/patient-info") ? "text-amber-700 font-bold" : ""}`}
                >
                  Patient Info
                </Link>
              </PopoverTrigger>
              <PopoverContent
                className="w-64 p-2 shadow-md border-none"
                align="center"
                sideOffset={10}
                onMouseEnter={() => handleMouseEnter(setPatientInfoPopoverOpen, patientInfoTimeoutRef)}
                onMouseLeave={() => handleMouseLeave(setPatientInfoPopoverOpen, patientInfoTimeoutRef)}
              >
                <div className="flex flex-col gap-2">
                  <a
                    href="https://forms.gle/nyXeSuvA7sgZ7juz9"
                    target="_blank"
                    className="w-full text-sm text-[#363636] hover:bg-amber-50 hover:text-amber-700 p-2 rounded-md"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Online Scheduling
                  </a>
                  <Link
                    href="/pay-bill"
                    className="w-full text-sm text-[#363636] hover:bg-amber-50 hover:text-amber-700 p-2 rounded-md"
                    onClick={(e) => {
                      e.stopPropagation()
                      setTimeout(() => setPatientInfoPopoverOpen(false), 100)
                    }}
                  >
                    Pay Your Bill
                  </Link>
                  <Link
                    href="/billing-questions"
                    className="w-full text-sm text-[#363636] hover:bg-amber-50 hover:text-amber-700 p-2 rounded-md"
                    onClick={(e) => {
                      e.stopPropagation()
                      setTimeout(() => setPatientInfoPopoverOpen(false), 100)
                    }}
                  >
                    Billing Questions
                  </Link>
                  <Link
                    href="/chat-with-us"
                    className="w-full text-sm text-[#363636] hover:bg-amber-50 hover:text-amber-700 p-2 rounded-md"
                    onClick={(e) => {
                      e.stopPropagation()
                      setTimeout(() => setPatientInfoPopoverOpen(false), 100)
                    }}
                  >
                    Chat With Us
                  </Link>
                  <Link
                    href="/patient-portal"
                    className="w-full text-sm text-[#363636] hover:bg-amber-50 hover:text-amber-700 p-2 rounded-md"
                    onClick={(e) => {
                      e.stopPropagation()
                      setTimeout(() => setPatientInfoPopoverOpen(false), 100)
                    }}
                  >
                    Patient Portal
                  </Link>
                  <Link
                    href="/dermatology-patient-forms"
                    className="w-full text-sm text-[#363636] hover:bg-amber-50 hover:text-amber-700 p-2 rounded-md"
                    onClick={(e) => {
                      e.stopPropagation()
                      setTimeout(() => setPatientInfoPopoverOpen(false), 100)
                    }}
                  >
                    Dermatology Patient Forms
                  </Link>
                  <Link
                    href="/insurance-accepted"
                    className="w-full text-sm text-[#363636] hover:bg-amber-50 hover:text-amber-700 p-2 rounded-md"
                    onClick={(e) => {
                      e.stopPropagation()
                      setTimeout(() => setPatientInfoPopoverOpen(false), 100)
                    }}
                  >
                    Insurance Accepted
                  </Link>
                  <Link
                    href="/recommended-products"
                    className="w-full text-sm text-[#363636] hover:bg-amber-50 hover:text-amber-700 p-2 rounded-md"
                    onClick={(e) => {
                      e.stopPropagation()
                      setTimeout(() => setPatientInfoPopoverOpen(false), 100)
                    }}
                  >
                    Recommended Products
                  </Link>
                  <Link
                    href="/hours-and-location"
                    className="w-full text-sm text-[#363636] hover:bg-amber-50 hover:text-amber-700 p-2 rounded-md"
                    onClick={(e) => {
                      e.stopPropagation()
                      setTimeout(() => setPatientInfoPopoverOpen(false), 100)
                    }}
                  >
                    Hours & Location
                  </Link>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </nav>

        {/* Right Side - CTA Buttons, Social Icons, and Mobile Menu */}
        <div className="flex items-center">
          <div className="hidden md:block">
            <div className="flex flex-col lg:flex-row gap-1">
              <a href="https://forms.gle/nyXeSuvA7sgZ7juz9" target="_blank" rel="noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 text-xs lg:text-sm border-[#C7925B] text-[#C7925B] hover:bg-amber-50 hover:text-amber-900 hover:border-amber-700"
                >
                  Schedule Appointment
                </Button>
              </a>
              <Link href="/chat-with-us">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 text-xs lg:text-sm border-[#C7925B] text-[#C7925B] hover:bg-amber-50 hover:text-amber-900 hover:border-amber-700"
                >
                  Chat With Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Social Media Icons - Desktop */}
          <div className="hidden justify-end md:flex ml-2 md:ml-3 lg:ml-4">
            <div className="flex items-center gap-1 lg:gap-2">
              <Link
                href="https://www.google.com/maps/place/Desert+Oasis+Dermatology/@33.0739956,-112.0454332,17z/data=!3m1!4b1!4m6!3m5!1s0x872afb13db300289:0xa1cbdb5513efe36f!8m2!3d33.0739956!4d-112.0454332!16s%2Fg%2F11m6sg0qh8?hl=en&entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                aria-label="Google Business Profile"
              >
                <div className="flex h-5 w-5 items-center justify-center rounded-full">
                  <Image
                    src={social1 || "/placeholder.svg"}
                    alt="Google Business Profile"
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61574712775280" aria-label="Facebook">
                <Image
                  src={social2 || "/placeholder.svg"}
                  alt="Facebook Business Profile"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </Link>
              <Link href="https://www.instagram.com/desert_oasis_dermatology/" aria-label="Instagram">
                <Image
                  src={social3 || "/placeholder.svg"}
                  alt="Instagram Business Profile"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </Link>
              <Link href="future-comming-soon" aria-label="Yelp">
                <Image
                  src={social4 || "/placeholder.svg"}
                  alt="Yelp Business Profile"
                  width={20}
                  height={20}
                  className="object-contain"
                />
              </Link>
              <Link href="https://www.tiktok.com/@desert.oasis.dermatology" aria-label="TikTok">
                <Image
                  src={social5 || "/placeholder.svg"}
                  alt="TikTok Business Profile"
                  width={18}
                  height={18}
                  className="object-contain"
                />
              </Link>
              <Link href="https://www.youtube.com/channel/UCSIbaqDBbdiEulTQlpOjd3A" aria-label="Youtube">
                <Image
                  src={social6 || "/placeholder.svg"}
                  alt="TikTok Business Profile"
                  width={25}
                  height={25}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden ml-auto">
              <Button
                className="hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                variant="ghost"
                size="icon"
                aria-label="Menu"
              >
                <Menu size={64} className="!h-10 !w-10" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%] xs:w-[80%] sm:w-[350px] border-l border-amber-100">
              <div className="flex flex-col gap-4 xs:gap-6 pt-4 xs:pt-6">
                <nav className="flex flex-col gap-4">
                  <Link
                    href="/"
                    className={`text-base xs:text-lg font-medium text-amber-900 hover:text-amber-700 ${isActive("/") ? "text-amber-700 font-bold" : ""}`}
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>

                  {/* Services dropdown for mobile */}
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <Link
                        href="/services"
                        className={`text-base xs:text-lg font-medium text-amber-900 hover:text-amber-700 ${isActive("/services") ? "text-amber-700 font-bold" : ""}`}
                        onClick={() => {
                          // Allow the link to work normally
                        }}
                      >
                        Services
                      </Link>
                    </div>
                    <div className="flex flex-col pl-4 gap-2">
                      <Link
                        href="/services?category=Medical"
                        className="text-sm xs:text-base font-normal text-amber-800 hover:text-amber-700"
                        onClick={() => setIsOpen(false)}
                      >
                        Medical
                      </Link>
                      <Link
                        href="/services?category=Surgical"
                        className="text-sm xs:text-base font-normal text-amber-800 hover:text-amber-700"
                        onClick={() => setIsOpen(false)}
                      >
                        Surgical
                      </Link>
                      <Link
                        href="/services?category=Cosmetic"
                        className="text-sm xs:text-base font-normal text-amber-800 hover:text-amber-700"
                        onClick={() => setIsOpen(false)}
                      >
                        Cosmetic
                      </Link>
                    </div>
                  </div>

                  {/* About dropdown for mobile */}
                  <div className="flex flex-col gap-1">
                    <Link
                      href=""
                      className={`text-base xs:text-lg font-medium text-amber-900 hover:text-amber-700 ${isActive("/about") ? "text-amber-700 font-bold" : ""}`}
                      onClick={() => setIsOpen(false)}
                    >
                      About
                    </Link>
                    <div className="flex flex-col pl-4 gap-2">
                      <Link
                        href="/about"
                        className="text-sm xs:text-base font-normal text-amber-800 hover:text-amber-700"
                        onClick={() => setIsOpen(false)}
                      >
                        Meet Dr. Lavian
                      </Link>
                      <Link
                        href="/blog"
                        className="text-sm xs:text-base font-normal text-amber-800 hover:text-amber-700"
                        onClick={() => setIsOpen(false)}
                      >
                        Blog
                      </Link>
                    </div>
                  </div>

                  {/* Patient Info dropdown for mobile */}
                  <div className="flex flex-col gap-1">
                    <Link
                      href="/patient-info"
                      className={`text-base xs:text-lg font-medium text-amber-900 hover:text-amber-700 ${isActive("/patient-info") ? "text-amber-700 font-bold" : ""}`}
                      onClick={() => setIsOpen(false)}
                    >
                      Patient Info
                    </Link>
                    <div className="flex flex-col pl-4 gap-2">
                      <a
                        href="https://forms.gle/nyXeSuvA7sgZ7juz9"
                        target="_blank"
                        className="text-sm xs:text-base font-normal text-amber-800 hover:text-amber-700"
                        onClick={() => setIsOpen(false)}
                        rel="noreferrer"
                      >
                        Online Scheduling
                      </a>

                      <Link
                        href="/pay-bill"
                        className="text-sm xs:text-base font-normal text-amber-800 hover:text-amber-700"
                        onClick={() => setIsOpen(false)}
                      >
                        Pay Your Bill
                      </Link>
                      <Link
                        href="/billing-questions"
                        className="text-sm xs:text-base font-normal text-amber-800 hover:text-amber-700"
                        onClick={() => setIsOpen(false)}
                      >
                        Billing Questions
                      </Link>
                      <Link
                        href="/chat-with-us"
                        className="text-sm xs:text-base font-normal text-amber-800 hover:text-amber-700"
                        onClick={() => setIsOpen(false)}
                      >
                        Chat With Us
                      </Link>
                      <Link
                        href="/patient-portal"
                        className="text-sm xs:text-base font-normal text-amber-800 hover:text-amber-700"
                        onClick={() => setIsOpen(false)}
                      >
                        Patient Portal
                      </Link>
                      <Link
                        href="/dermatology-patient-forms"
                        className="text-sm xs:text-base font-normal text-amber-800 hover:text-amber-700"
                        onClick={() => setIsOpen(false)}
                      >
                        Dermatology Patient Forms
                      </Link>
                      <Link
                        href="/insurance-accepted"
                        className="text-sm xs:text-base font-normal text-amber-800 hover:text-amber-700"
                        onClick={() => setIsOpen(false)}
                      >
                        Insurance Accepted
                      </Link>
                      <Link
                        href="/recommended-products"
                        className="text-sm xs:text-base font-normal text-amber-800 hover:text-amber-700"
                        onClick={() => setIsOpen(false)}
                      >
                        Recommended Products
                      </Link>
                      <Link
                        href="/hours-and-location"
                        className="text-sm xs:text-base font-normal text-amber-800 hover:text-amber-700"
                        onClick={() => setIsOpen(false)}
                      >
                        Hours & Location
                      </Link>
                    </div>
                  </div>
                </nav>

                <div className="flex flex-col gap-3">
                  <a href="https://forms.gle/nyXeSuvA7sgZ7juz9" target="_blank" rel="noreferrer">
                    <Button className="w-full bg-[#C7925B] text-white hover:bg-[#C7925B]/80">
                      Schedule Appointment
                    </Button>
                  </a>

                  <Link href="/chat-with-us">
                    <Button
                      variant="outline"
                      className="w-full border-amber-500 text-amber-800 hover:bg-amber-50 hover:text-amber-900"
                      onClick={() => setIsOpen(false)}
                    >
                      Chat With Us
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center gap-4 pt-4">
                  <Link
                    href="https://www.google.com/maps/place/Desert+Oasis+Dermatology/@33.0739956,-112.0454332,17z/data=!3m1!4b1!4m6!3m5!1s0x872afb13db300289:0xa1cbdb5513efe36f!8m2!3d33.0739956!4d-112.0454332!16s%2Fg%2F11m6sg0qh8?hl=en&entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
                    aria-label="Google Business Profile"
                  >
                    <div className="flex h-6 w-6 items-center justify-center rounded-full ">
                      <Image
                        src={social1 || "/placeholder.svg"}
                        alt="Google Business Profile"
                        width={20}
                        height={20}
                        className="object-contain"
                      />
                    </div>
                  </Link>
                  <Link href="https://www.facebook.com/profile.php?id=61574712775280" aria-label="Facebook">
                    <Image
                      src={social2 || "/placeholder.svg"}
                      alt="Facebook Business Profile"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </Link>
                  <Link href="https://www.instagram.com/desert_oasis_dermatology/" aria-label="Instagram">
                    <Image
                      src={social3 || "/placeholder.svg"}
                      alt="Instagram Business Profile"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </Link>
                  <Link onClick={() => setIsOpen(false)} href="future-comming-soon" aria-label="Yelp">
                    <Image
                      src={social4 || "/placeholder.svg"}
                      alt="Yelp Business Profile"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </Link>
                  <Link href="https://www.tiktok.com/@desert.oasis.dermatology" aria-label="TikTok">
                    <Image
                      src={social5 || "/placeholder.svg"}
                      alt="TikTok Business Profile"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </Link>
                  <Link href="https://www.youtube.com/channel/UCSIbaqDBbdiEulTQlpOjd3A" aria-label="Youtube">
                    <Image
                      src={social6 || "/placeholder.svg"}
                      alt="TikTok Business Profile"
                      width={25}
                      height={25}
                      className="object-contain"
                    />
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

