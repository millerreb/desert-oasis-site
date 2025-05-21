import { Card, CardContent } from "@/components/ui/card"

export default function BusinessHours() {
    const schedule = [
        { day: "Monday", open: "8:00 AM", close: "5:00 PM" },
        { day: "Tuesday", open: "8:00 AM", close: "5:00 PM" },
        { day: "Wednesday", open: "8:00 AM", close: "5:00 PM" },
        { day: "Thursday", open: "8:00 AM", close: "5:00 PM" },
        { day: "Friday", open: "8:00 AM", close: "5:00 PM" },
        { day: "Saturday (Closed)", open: "Closed", close: "Closed" },
        { day: "Sunday (Closed)", open: "Closed", close: "Closed" },
    ]

    return (
        <div className="w-full py-10">
            <Card className="border border-[#C7925B] rounded-lg overflow-hidden">
                <CardContent className="p-0 md:p-[80px]">
                    <div className="w-full">
                        {schedule.map((item, index) => (
                            <div
                                key={item.day}
                                className={`flex flex-col sm:flex-row sm:items-center justify-between py-4 px-6 
                  ${index !== schedule.length - 1 ? "" : ""}`}
                            >
                                <div
                                    className={`text-base md:text-xl text-[#333333] w-1/2 text-left sm:text-center ${item.day === "Friday" ? "font-bold" : " font-semibold"}`}
                                >
                                    {item.day}
                                </div>
                                <div className="flex justify-between sm:w-2/3">
                                    <div
                                        className={`text-base md:text-xl text-[#333333] w-1/2 text-left sm:text-center ${item.day === "Friday" ? "font-bold" : " font-semibold"}`}
                                    >
                                        {item.open}
                                    </div>
                                    <div
                                        className={`text-base md:text-xl text-[#333333] text-right sm:text-center ${item.day === "Friday" ? "font-bold" : "font-semibold"}`}
                                    >
                                        {item.close}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <div className="mt-10 space-y-2 text-[#C7925B] px-2">
                <p className="text-sm sm:text-base">Front office open Monday-Friday 8:00AM-5:00PM, but appointments will initially only be available Friday.</p>
                <p className="text-sm sm:text-base">More appointment days coming soon.</p>
            </div>
        </div>
    )
}

