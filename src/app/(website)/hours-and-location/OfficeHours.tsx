import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import { offices, WEEK, formatTime } from "@/lib/site"
import FrontOfficeHours from "@/components/Location/FrontOfficeHours"

export default function BusinessHours() {
    return (
        <div className="w-full py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {offices.map((office) => (
                    <Card key={office.key} className="border rounded-lg overflow-hidden">
                        <CardContent className="p-6 md:p-10">
                            <h4 className="text-[24px] md:text-[28px] text-primary font-semibold text-center">
                                {office.name}
                            </h4>

                            <div className="flex items-start justify-center gap-2 mt-4 text-foreground text-center">
                                <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                                <address className="not-italic text-base md:text-lg">
                                    {office.street} {office.suite}
                                    <br />
                                    {office.city}, AZ {office.zip}
                                </address>
                            </div>

                            <h5 className="text-[18px] md:text-[20px] text-foreground font-semibold text-center mt-6">Appointment hours</h5>
                            <div className="w-full mt-2">
                                {WEEK.map((day) => {
                                    const open = office.hours.find((h) => h.day === day)
                                    return (
                                        <div
                                            key={day}
                                            className="flex items-center justify-between py-3 px-2 sm:px-6 border-b border last:border-b-0"
                                        >
                                            <span className={`text-base md:text-xl text-foreground ${open ? "font-bold" : "font-semibold"}`}>
                                                {day}
                                            </span>
                                            <span className={`text-base md:text-xl ${open ? "text-foreground font-bold" : "text-muted-foreground font-semibold"}`}>
                                                {open ? `${formatTime(open.opens)} – ${formatTime(open.closes)}` : "No appointments"}
                                            </span>
                                        </div>
                                    )
                                })}
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                                <Link
                                    href={office.slug}
                                    className="bg-primary hover:bg-primary-hover text-white transition-colors px-6 py-2 rounded-sm text-sm font-semibold"
                                >
                                    About the {office.city} Office
                                </Link>
                                <a
                                    href={office.directionsUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="border border-primary text-primary hover:bg-primary hover:text-white transition-colors px-6 py-2 rounded-sm text-sm font-semibold"
                                >
                                    Get Directions
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <FrontOfficeHours className="mt-10 max-w-[760px] mx-auto" />
        </div>
    )
}
