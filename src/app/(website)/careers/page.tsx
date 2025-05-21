"use client"

import { useState, useEffect, useRef } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Check } from "lucide-react"
import emailjs from "@emailjs/browser"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import ReCAPTCHA from "react-google-recaptcha"
import Consultation from "@/components/Consultation/Consultation"

const formSchema = z.object({
  position: z.string({
    required_error: "Please select a position",
  }),
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z
    .string()
    .min(10, {
      message: "Please enter a valid phone number.",
    })
    .regex(/^[0-9+\-\s()]*$/, {
      message: "Please enter a valid phone number format.",
    }),
  coverLetter: z
    .string()
    .min(10, {
      message: "Cover letter must be at least 10 characters.",
    })
    .max(1000, {
      message: "Cover letter must not exceed 1000 characters.",
    }),
  recaptcha: z.string({
    required_error: "Please complete the CAPTCHA verification",
  }),
})

export default function JobApplicationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [captchaValue, setCaptchaValue] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      position: "",
      fullName: "",
      email: "",
      phone: "",
      coverLetter: "",
      recaptcha: "",
    },
  })

  // Update form when captcha is completed
  useEffect(() => {
    if (captchaValue) {
      form.setValue("recaptcha", captchaValue)
    }
  }, [captchaValue, form])

  // Handle reCAPTCHA loading errors
  useEffect(() => {
    // Add window error handler for reCAPTCHA
    const handleRecaptchaError = () => {
      setError("There was an issue loading the CAPTCHA. Please refresh the page and try again.")
    }

    window.addEventListener("error", handleRecaptchaError)

    return () => {
      window.removeEventListener("error", handleRecaptchaError)
    }
  }, [])

  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const resetCaptcha = () => {
    if (recaptchaRef.current) {
      recaptchaRef.current.reset()
      setCaptchaValue(null)
    }
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setError(null)

    // Get position label instead of value
    const positionMap: Record<string, string> = {
      "medical-assistant": "Medical Assistant",
      "front-office": "Front Office",
      "medical-billing": "Medical Billing/Prior Authorization",
      "office-manager": "Office Manager",
    }

    // Prepare template parameters for EmailJS
    const templateParams = {
      position: positionMap[values.position] || values.position,
      fullName: values.fullName,
      email: values.email,
      phone: values.phone,
      coverLetter: values.coverLetter,
      to_email: "your-receiver-email@example.com", // Replace with your email
    }

    // Send email using EmailJS
    emailjs
      .send(
        "service_0rivgj3", // Replace with your EmailJS service ID
        "template_547k4ay", // Replace with your EmailJS template ID
        templateParams,
        "h6cGOJXp6Ex9nhFqS", // Replace with your EmailJS public key
      )
      .then((response) => {
        console.log("Email sent successfully:", response)
        setIsSubmitting(false)
        setIsSubmitted(true)
      })
      .catch((err) => {
        console.error("Email sending failed:", err)
        setIsSubmitting(false)
        setError("Failed to send your application. Please try again later.")
        resetCaptcha() // Add this line
      })
  }

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value)
    if (value) {
      form.setValue("recaptcha", value)
      form.clearErrors("recaptcha")
    } else {
      form.setError("recaptcha", {
        type: "manual",
        message: "Please complete the CAPTCHA verification",
      })
    }
  }

  if (isSubmitted) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
          <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <Check className="h-6 w-6 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-green-800 mb-2">Application Submitted!</h2>
          <p className="text-green-700">
            Thank you for your interest in joining our team. We&apos;ll review your application and contact you soon.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="container px-4 py-12 md:py-16 lg:py-20">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h1 className="text-3xl md:text-[32px] font-semibold text-[#C7925B] mb-[30px]">Join Our Team</h1>
            <p className="text-base text-[#333333] font-normal mb-[30px]">
              We are looking for dedicated professionals to join our team in the following roles:
            </p>
            <ul className="space-y-3 mb-[30px]">
              {["Medical Assistant", "Front Office", "Medical Billing/Prior Authorization", "Office Manager"].map(
                (role) => (
                  <li key={role} className="flex items-start">
                    <div className="mr-2 mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#A66A47] flex items-center justify-center">
                      <Check className="h-3 w-3 text-[#FFFFFF]" />
                    </div>
                    <span className="text-base text-[#333333] font-medium">{role}</span>
                  </li>
                ),
              )}
            </ul>
            <p className="text-base text-[#333333] font-normal">
              If you are passionate about patient care and have the required skills, we would love to hear from you.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-[#A66A47] mb-8">Apply for a Position</h2>

            {error && <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md text-red-700">{error}</div>}

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="position"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-[#698B8F] font-medium">Position</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-[#698B8F] focus:ring-[#698B8F] h-[50px]">
                            <SelectValue placeholder="Select Position" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="medical-assistant">Medical Assistant</SelectItem>
                          <SelectItem value="front-office">Front Office</SelectItem>
                          <SelectItem value="medical-billing">Medical Billing/Prior Authorization</SelectItem>
                          <SelectItem value="office-manager">Office Manager</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-[#698B8F] font-medium">Full Name</FormLabel>
                      <FormControl>
                        <Input {...field} className="border-[#698B8F] focus:ring-[#698B8F] h-[50px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-[#698B8F] font-medium">Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} className="border-[#698B8F] focus:ring-[#698B8F] h-[50px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-[#698B8F] font-medium">Phone Number</FormLabel>
                      <FormControl>
                        <Input {...field} className="border-[#698B8F] focus:ring-[#698B8F] h-[50px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="coverLetter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm text-[#698B8F] font-medium">Cover Letter</FormLabel>
                      <FormControl>
                        <Textarea className="min-h-[120px] border-[#698B8F] focus:ring-[#698B8F]" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="recaptcha"
                  render={() => (
                    <FormItem>
                      <FormLabel className="text-sm text-[#698B8F] font-medium">Verification</FormLabel>
                      <FormControl>
                        <div className="flex justify-start">
                          <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={
                            "6LeCeRUrAAAAAAL4NYgskHMET7rIipz7liZgv02z"
                            }
                            onChange={handleCaptchaChange}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full bg-[#C7925B] hover:bg-[#C7925B]/80 text-base h-[51px] font-midium text-white"
                  disabled={isSubmitting || !captchaValue}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>

                <p className="text-center text-gray-600 text-sm">We look forward to hearing from you!</p>
              </form>
            </Form>
          </div>
        </div>
      </div>
      <Consultation />
    </div>
  )
}
