import { Phone } from "lucide-react"
import { PHONE, PHONE_LINK, frontOfficeHoursText } from "@/lib/site"

// Front office (phone and text) hours, shared by both offices.
// Shown on the office pages and the Hours & Location page so patients know they can
// call any weekday, even when an office isn't seeing patients that day.
export default function FrontOfficeHours({ className = "" }: { className?: string }) {
    return (
        <div className={`rounded-lg border bg-sand p-5 md:p-6 text-foreground ${className}`}>
            <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 shrink-0 mt-1 text-primary" aria-hidden="true" />
                <div>
                    <h3 className="text-[18px] md:text-[20px] font-semibold">Front office hours</h3>
                    <p className="text-base md:text-lg font-bold mt-1">{frontOfficeHoursText()}</p>
                    <p className="text-base mt-2 leading-relaxed">
                        Call or text{" "}
                        <a href={PHONE_LINK} className="text-primary underline font-semibold">{PHONE}</a>{" "}
                        any weekday to schedule, reschedule or ask a question about either office, even on days
                        we&apos;re not seeing patients at that location.
                    </p>
                </div>
            </div>
        </div>
    )
}
