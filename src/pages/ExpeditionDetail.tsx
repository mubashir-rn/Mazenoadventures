import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, MapPin, Calendar, Star, CheckCircle, XCircle, Gift } from "lucide-react";
import k2Image from "@/assets/k2-expedition.jpg";
import { expeditionsById } from "@/lib/expeditions";
import ShareBookingButtons from "@/components/ShareBookingButtons";

const ExpeditionDetail = () => {
  const { id } = useParams();

  // Load from shared dataset, fallback to K2 if id not found
  const expedition = (id && expeditionsById[id]) || expeditionsById["k2-expedition"];

  const priceIncludes = [
    "Air fares",
    "3 Nights Hotel Accommodation",
    "Tour Guide",
    "Entrance Fees",
    "All transportation in destination location"
  ];

  const priceExcludes = [
    "Guide Service Fee",
    "Driver Service Fee", 
    "Any Private Expenses",
    "Room Service Fees"
  ];

  const complementaries = [
    "Umbrella",
    "Sunscreen",
    "T-Shirt",
    "Entrance Fees"
  ];

  const itinerary = [
    { day: 1, title: "Islamabad Arrival", description: "Arrival in Islamabad, hotel check-in, expedition briefing" },
    { day: 2, title: "Fly to Skardu", description: "Morning flight to Skardu, weather dependent" },
    { day: 3, title: "Drive to Askoli valley", description: "Drive through scenic Shigar valley to Askoli" },
    { day: 4, title: "Trek to Jhola", description: "Begin trekking, first camp at Jhola (3200m)" },
    { day: 5, title: "Trek to Paiyu", description: "Continue trek to Paiyu camp (3450m)" },
    { day: 6, title: "Trek to Urdukas", description: "Trek to beautiful Urdukas camp (4100m)" },
    { day: 7, title: "Trek to Goro-II", description: "Trek to Goro-II camp (4380m)" },
    { day: 8, title: "Trek to Concordia", description: "Trek to Concordia - heart of Karakoram" },
    { day: 9, title: "Trek to K-2 Base", description: "Reach K2 base camp (5150m)" },
    { day: "10-39", title: "Base Camp Climbing Time Period", description: "Acclimatization and summit attempts" },
    { day: 40, title: "Base Camp – Goro-2", description: "Begin descent from base camp" },
    { day: 47, title: "Fly back to home", description: "Departure from Islamabad" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={expedition.image} 
          alt={expedition.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero flex items-center">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-white">
              <Badge variant="secondary" className="mb-4">
                {expedition.elevation}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {expedition.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{expedition.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>{expedition.groupSize} People</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>{expedition.pickupLocation}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="details" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="photos">Photos</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="details" className="mt-8">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">About This Expedition</h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {expedition.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2 text-green-600">
                            <CheckCircle className="h-5 w-5" />
                            <span>Price Includes</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {priceIncludes.map((item, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <CheckCircle className="h-4 w-4 text-green-500" />
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2 text-red-600">
                            <XCircle className="h-5 w-5" />
                            <span>Price Excludes</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {priceExcludes.map((item, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <XCircle className="h-4 w-4 text-red-500" />
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2 text-primary">
                            <Gift className="h-5 w-5" />
                            <span>Complementaries</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {complementaries.map((item, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <Gift className="h-4 w-4 text-primary" />
                                <span className="text-sm">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="itinerary" className="mt-8">
                  <h2 className="text-2xl font-bold mb-6">Detailed Itinerary</h2>
                  <div className="space-y-4">
                    {itinerary.map((day, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold">
                              {day.day}
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">{day.title}</h3>
                              <p className="text-muted-foreground">{day.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="photos" className="mt-8">
                  <h2 className="text-2xl font-bold mb-6">Expedition Photos</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[...Array(9)].map((_, index) => (
                      <div key={index} className="aspect-square">
                        <img 
                          src={expedition.image} 
                          alt={`${expedition.title} photo ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews" className="mt-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-secondary fill-secondary" />
                      ))}
                    </div>
                    <span className="text-2xl font-bold">{expedition.rating}</span>
                    <span className="text-muted-foreground">({expedition.reviews} reviews)</span>
                  </div>
                  
                  <div className="space-y-6">
                    {[...Array(3)].map((_, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                              <span className="font-bold text-primary">JD</span>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2 mb-2">
                                <span className="font-semibold">John Doe</span>
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 text-secondary fill-secondary" />
                                  ))}
                                </div>
                              </div>
                              <p className="text-muted-foreground">
                                "Incredible expedition with professional guides. The K2 base camp trek was challenging but rewarding. Highly recommend Mazano Adventures for serious mountaineers."
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Book This Expedition</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-semibold">{expedition.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Group Size:</span>
                      <span className="font-semibold">{expedition.groupSize} People</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Difficulty:</span>
                      <div className="flex">
                        {[...Array(expedition.difficulty)].map((_, i) => (
                          <div key={i} className="w-2 h-5 bg-red-500 mr-1 rounded-sm"></div>
                        ))}
                        {[...Array(5 - expedition.difficulty)].map((_, i) => (
                          <div key={i} className="w-2 h-5 bg-gray-300 mr-1 rounded-sm"></div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span>Min Age:</span>
                      <span className="font-semibold">{expedition.minAge}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg">Starting from:</span>
                      <span className="text-2xl font-bold text-primary">{expedition.price || "$0"}</span>
                    </div>
                    <ShareBookingButtons
                      title={expedition.title}
                      kind="Expedition"
                      duration={expedition.duration}
                      groupSize={expedition.groupSize}
                      pickupLocation={expedition.pickupLocation}
                      price={expedition.price || "$0"}
                      emails={["akhtar_nangaparbat@yahoo.com", "akhtarnagabarbat@gmail.com"]}
                    />
                  </div>

                  <div className="text-center text-sm text-muted-foreground">
                    <p>Free cancellation up to 90 days</p>
                    <p>24/7 customer support included</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ExpeditionDetail;