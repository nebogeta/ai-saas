"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
    {
        name: "Yoni",
        avatar: "Y",
        title: "Fullstack Developer",
        description: "This is the best app I have ever used, I love it!",
    },
    {
        name: "Neba",
        avatar: "N",
        title: "Designer",
        description: "Expanding my horizons with this app, it's amazing!",
    },
    {
        name: "Zee",
        avatar: "Z",
        title: "Water Resources Engineer",
        description: "I love this app, it's the best thing since sliced bread!",
    },
    {
        name: "Issac",
        avatar: "I",
        title: "Software Tester",
        description: "Successfully passed all scenarios, this app is the best!",
    },
];

export const LandingContent = () => {
    return (
        <div className="px-10 pb-20">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((item) => (
                    <Card key={item.description} className="bg-[#192339] border-none text-white">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-x-2">
                                <div>
                                    <p className="text-lg">{item.name}</p>
                                    <p className="text-zinc-400 text-sm">{item.title}</p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {item.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}