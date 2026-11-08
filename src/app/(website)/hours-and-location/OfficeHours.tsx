import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone } from "lucide-react"
import { offices, WEEK, formatTime, PHONE, PHONE_LINK } from "@/lib/site"

export default function BusinessHours() {
    return (
        <div className="w-full py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {offices.map((office) => (
                    <Card key={office.key} className="border border-[#C7925B] rounded-lg overflow-hidden">
                        <CardContent className="p-6 md:p-10">
                            <h4 className="text-[24px] md:text-[28px] text-[#A66A47] font-semibold text-center">
                                {office.name}
                            </h4>

                            <div className="flex items-start justify-center gap-2 mt-4 text-[#333333] text-center">
                                <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-[#C7925B]" />
                                <address className="not-italic text-base md:text-lg">
                                    {office.street} {office.suite}
                                    <br />
                                    {office.city}, AZ {office.zip}
                                </address>
                            </div>

                            <div className="w-full mt-6">
                                {WEEK.map((day) => {
                                    const open = office.hours.find((h) => h.day === day)
                                    return (
                                        <div
                                            key={day}
                                            className="flex items-center justify-between py-3 px-2 sm:px-6 border-b border-[#C7925B]/20 last:border-b-0"
                                        >
                                            <span className={`text-base md:text-xl text-[#333333] ${open ? "font-bold" : "font-semibold"}`}>
                                                {day}
                                            </span>
                                            <span className={`text-base md:text-xl ${open ? "text-[#333333] font-bold" : "text-[#595959] font-semibold"}`}>
                                                {open ? `${formatTime(open.opens)} – ${formatTime(open.closes)}` : "Closed"}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="flex justify-center mt-6">
                                <a
                                    href={office.directionsUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="border border-[#8A5536] text-[#8A5536] hover:bg-[#8A5536] hover:text-white transition-colors px-6 py-2 rounded-sm text-sm font-semibold"
                                >
                                    Get Directions
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="mt-10 space-y-2 text-[#8A5536] font-medium px-2 text-center">
                <p className="text-sm sm:text-base">Dr. Lavian sees patients at both offices on the days shown above.</p>
                <p className="text-sm sm:text-base flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>
                        Call or text to schedule: <a href={PHONE_LINK} className="underline">{PHONE}</a>
                    </span>
                </p>
            </div>
        </div>
    )
}
