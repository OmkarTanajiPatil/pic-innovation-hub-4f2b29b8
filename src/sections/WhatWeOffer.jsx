import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Calendar } from "lucide-react";
import { offerings } from "@/data/offerings";


const WhatWeOffer = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch events from JSON file
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch("/events.json");
                const data = await response.json();

                // Filter out past events
                const today = new Date();
                today.setHours(0, 0, 0, 0);

                const upcomingEvents = data.filter((event) => {
                    const eventDate = new Date(event.date);
                    return eventDate >= today;
                });

                setEvents(upcomingEvents);
            } catch (error) {
                console.error("Error loading events:", error);
                setEvents([]);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    // Format date for display
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <section id="activities" className="py-20 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* What We Offer Section */}
                <div className="mb-20">
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                            Our Initiatives
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                            Empowering students with resources, mentorship, and opportunities to excel in innovation and research.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {offerings.map((offering, index) => {
                            const Icon = offering.icon;
                            return (
                                <Card
                                    key={offering.title}
                                    className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur animate-fade-in"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <CardHeader>
                                        <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 w-fit group-hover:scale-110 transition-transform">
                                            <Icon className="h-8 w-8 text-primary" />
                                        </div>
                                        <CardTitle className="text-xl font-bold">{offering.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-foreground/70">
                                            {offering.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>

                {/* Upcoming Events Section */}
                <div>
                    <div className="text-center mb-16 animate-fade-in">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                            Mark Your Calendar
                        </h2>
                        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                            Join us for exciting workshops, hackathons, and tech events throughout the year.
                        </p>
                    </div>

                    {loading ? (
                        <div className="text-center py-12">
                            <p className="text-muted-foreground">Loading events...</p>
                        </div>
                    ) : events.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {events.map((event, index) => (
                                <Card
                                    key={event.title}
                                    className="group hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 hover:-translate-y-2 border-border/50 bg-card/80 backdrop-blur animate-fade-in"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <CardHeader>
                                        <div className="flex items-start justify-between gap-4">
                                            <div className="flex-1">
                                                <CardTitle className="text-xl font-bold mb-2">{event.title}</CardTitle>
                                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                    <Calendar className="h-4 w-4" />
                                                    <span>{formatDate(event.date)}</span>
                                                </div>
                                            </div>
                                            <div className="p-3 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 group-hover:scale-110 transition-transform">
                                                <Award className="h-6 w-6 text-accent" />
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-foreground/70">
                                            {event.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <Card className="border-border/50 bg-card/80 backdrop-blur">
                            <CardContent className="py-12 text-center">
                                <Award className="h-16 w-16 text-muted-foreground/30 mx-auto mb-4" />
                                <p className="text-lg text-muted-foreground">
                                    No upcoming events at the moment. Check back soon!
                                </p>
                            </CardContent>
                        </Card>
                    )}
                </div>
            </div>
        </section>
    );
};

export default WhatWeOffer;
