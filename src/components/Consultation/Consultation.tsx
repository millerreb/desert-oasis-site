"use client"

import type React from "react"
import { MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { useState, type FormEvent } from "react"
import socailicon1 from "@/../../Public/image/white-goole.png"
import socailicon2 from "@/../../Public/image/whit-facebook.png"
import socailicon3 from "@/../../Public/image/white-instragram.png"
import socailicon4 from "@/../../Public/image/white-yelp.png"
import socailicon5 from "@/../../Public/image/white-tiktok.png"
import socailicon6 from "@/../../Public/image/white-youtube.png"
import Image from "next/image"
import emailjs from "emailjs-com"
import ReCAPTCHA from "react-google-recaptcha"

export default function Consultation() {
  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  // Validation errors
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [captchaVerified, setCaptchaVerified] = useState(false)

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  // Handle CAPTCHA verification
  const handleCaptchaChange = (value: string | null) => {
    setCaptchaVerified(!!value)
  }

  // Validate form
  const validateForm = () => {
    let valid = true
    const newErrors = { ...errors }

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
      valid = false
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
      valid = false
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      valid = false
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
      valid = false
    } else if (!/^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
      valid = false
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      console.log("Form Data Submitted:", formData) // Log form data

      setIsSubmitting(true)

      // Prepare EmailJS parameters
      const emailParams = {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }

      // Send email using EmailJS
      emailjs
        .send(
          "service_f5vn2jk", // Replace with your EmailJS service ID
          "template_4qz8xqv", // Replace with your EmailJS template ID
          emailParams,
          "h6cGOJXp6Ex9nhFqS", // Replace with your EmailJS public key
        )
        .then(
          (response) => {
            console.log("Email sent successfully:", response)
            setIsSubmitting(false)
            setSubmitSuccess(true)

            // Reset form after success
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              message: "",
            })

            // Reset success message after 5 seconds
            setTimeout(() => {
              setSubmitSuccess(false)
            }, 5000)
          },
          (error) => {
            console.error("Failed to send email:", error)
            setIsSubmitting(false)
          },
        )
    }
  }

  return (
    <div className=" bg-[#C7925B] py-[60px]">
      <div className="container  grid md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="text-white ">
          <div className="space-y-2">
            <h1 className="text-[30px] md:text-[48px] font-bold leading-tight">
              Schedule a
              <br />
              Consultation
            </h1>
          </div>

          <div className="flex items-center gap-4 text-xl mt-[150px]">
            <Phone className="h-6 w-6 shrink-0" />
            <span className="font-medium">Please: (480) 418-3314</span>
          </div>

          <div className="flex items-start gap-4 mt-[30px]">
            <MapPin className="h-6 w-6 shrink-0 mt-1" />
            <span className="font-medium">21300 N John Wayne Pkwy STE 108, Maricopa, AZ 85139</span>
          </div>

          <div className="rounded-lg mt-7 overflow-hidden border-2 border-white/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.8634452736515!2d-112.04917711882933!3d33.075172293480286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872afb13db300289%3A0xa1cbdb5513efe36f!2sDesert%20Oasis%20Dermatology!5e0!3m2!1sen!2sbd!4v1743574353740!5m2!1sen!2sbd"
              className="w-full h-[350px] md:h-[350px] border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-white rounded-lg  p-8 md:p-0 relative">
          <h2 className="text-3xl font-bold text-[#b27c43] mb-5 text-center mt-3">Send Us a Message</h2>

          {submitSuccess ? (
            <div className=" w-[90%] mx-auto bg-green-50 border border-green-200 text-green-700 px-4 p-2 rounded-md mb-6">
              <p className="font-normal">Thank you for your message!</p>
              <p>We will get back to you as soon as possible.</p>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-2 p-0 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
              <div className="space-y-2">
                <label htmlFor="firstName" className="block text-gray-700">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 ${errors.firstName ? "border-red-300 focus:ring-red-200" : "border-gray-300 focus:ring-[#c69c6d]"
                    }`}
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="lastName" className="block text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name"
                  className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 ${errors.lastName ? "border-red-300 focus:ring-red-200" : "border-gray-300 focus:ring-[#c69c6d]"
                    }`}
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className={`w-full pl-10 pr-4 py-3 rounded-md border focus:outline-none focus:ring-2 ${errors.email ? "border-red-300 focus:ring-red-200" : "border-gray-300 focus:ring-[#c69c6d]"
                    }`}
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-gray-700">
                Phone number
              </label>
              <div className="flex">
                <button
                  type="button"
                  className="flex items-center justify-center px-3 py-3 border border-gray-300 border-r-0 rounded-l-md bg-gray-50"
                >
                  <span>US</span>
                  <svg className="ml-1 h-4 w-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className={`w-full px-4 py-3 border rounded-r-md focus:outline-none focus:ring-2 ${errors.phone ? "border-red-300 focus:ring-red-200" : "border-gray-300 focus:ring-[#c69c6d]"
                    }`}
                />
              </div>
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Include a message..."
                className={`w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 ${errors.message ? "border-red-300 focus:ring-red-200" : "border-gray-300 focus:ring-[#c69c6d]"
                  }`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <div className="">
              <ReCAPTCHA
                sitekey="6LeFeRUrAAAAADyqkSnEtC_NOaBgReVOawCaExWI" 
                onChange={handleCaptchaChange}
              />
            </div>

            {!captchaVerified && (
              <p className="text-sm text-gray-500 text-center mt-2">
                Please complete the CAPTCHA to enable the send button
              </p>
            )}

            <button
              type="submit"
              disabled={isSubmitting || !captchaVerified}
              className="w-full py-3 px-4 bg-[#C7925B] text-white font-medium rounded-md hover:bg-[#C7925B]/80 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
        <div className="pt-4">
          <h3 className="text-base text-[#FFFFFF] font-medium mb-4">Follow Us</h3>
          <div className="flex gap-4 items-center">
            <Link
              href="https://www.google.com/maps/place/Desert+Oasis+Dermatology/@33.0739956,-112.0454332,17z/data=!3m1!4b1!4m6!3m5!1s0x872afb13db300289:0xa1cbdb5513efe36f!8m2!3d33.0739956!4d-112.0454332!16s%2Fg%2F11m6sg0qh8?hl=en&entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
              className="text-white hover:opacity-80 transition-opacity"
            >
              <Image
                src={socailicon1 || "/placeholder.svg"}
                alt="Gooole Business Profile"
                width={20}
                height={20}
                className="object-contain"
              />
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=61574712775280"
              className="text-white hover:opacity-80 transition-opacity"
            >
              <Image
                src={socailicon2 || "/placeholder.svg"}
                alt="Facebook Business Profile"
                width={20}
                height={20}
                className="object-contain"
              />
            </Link>
            <Link
              href="https://www.instagram.com/desert_oasis_dermatology/"
              className="text-white hover:opacity-80 transition-opacity"
            >
              <Image
                src={socailicon3 || "/placeholder.svg"}
                alt=" instragram Business Profile"
                width={20}
                height={20}
                className="object-contain"
              />
            </Link>
            <Link href="future-comming-soon" className="text-white hover:opacity-80 transition-opacity">
              <Image
                src={socailicon4 || "/placeholder.svg"}
                alt="Facebook Business Profile"
                width={20}
                height={20}
                className="object-contain"
              />
            </Link>
            <Link
              href="https://www.tiktok.com/@desert.oasis.dermatology"
              className="text-white hover:opacity-80 transition-opacity"
            >
              <Image
                src={socailicon5 || "/placeholder.svg"}
                alt="Facebook Business Profile"
                width={18}
                height={18}
                className="object-contain"
              />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCSIbaqDBbdiEulTQlpOjd3A"
              className="text-white hover:opacity-80 transition-opacity"
            >
              <Image
                src={socailicon6 || "/placeholder.svg"}
                alt="Facebook Business Profile"
                width={25}
                height={25}
                className="object-contain"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
