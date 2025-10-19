import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MapPin, Calendar, Star, Gift, Users } from "lucide-react";
import ShareBookingButtons from "@/components/ShareBookingButtons";
import { destinationsById } from "@/lib/destinations";

const DestinationDetail = () => {
  const { id } = useParams();

  const destination = (id && destinationsById[id]) || destinationsById["hunza-valley"];

  const photos = destination.photos && destination.photos.length > 0
    ? destination.photos
    : Array.from({ length: 6 }, () => destination.image);

  const displayTitle = destination.title;

  const priceIncludes = [
    "Accommodation (as per plan)",
    "Transport and fuel",
    "Local guide",
    "Entrance fees (where applicable)",
  ];

  const priceExcludes = [
    "Personal expenses",
    "Travel insurance",
    "Tips and gratuities",
    "Meals not mentioned",
  ];

  const complementaries = [
    "Bottled water",
    "Sunscreen",
    "City map (where available)",
    "Memories & Photos",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img 
          src={destination.image} 
          alt={destination.title}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-hero flex items-center">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-white">
              {destination.elevation && (
                <Badge variant="secondary" className="mb-4">
                  {destination.elevation}
                </Badge>
              )}
              <h1 className="text-4xl md:text-6xl font-bold mb-1">
                {displayTitle}
              </h1>
              <div className="flex flex-wrap gap-6 text-lg">
                {destination.duration && (
                  <div className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>{destination.duration}</span>
                  </div>
                )}
                {destination.pickupLocation && (
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>{destination.pickupLocation}</span>
                  </div>
                )}
                {destination.bestTime && (
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span>Best: {destination.bestTime}</span>
                  </div>
                )}
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
                      <h2 className="text-2xl font-bold mb-4">About This Tour</h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {destination.description}
                      </p>
                      {destination.category === "Cultural" && destination.heritage && (
                        <p className="text-sm text-muted-foreground mt-3">
                          <span className="font-medium text-foreground">Heritage Focus:</span> {destination.heritage}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2 text-green-600">
                            <Gift className="h-5 w-5" />
                            <span>Price Includes</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {priceIncludes.map((item, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <Gift className="h-4 w-4 text-green-500" />
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

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2 text-red-600">
                            <Gift className="h-5 w-5" />
                            <span>Price Excludes</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {priceExcludes.map((item, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <Gift className="h-4 w-4 text-red-500" />
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
                    {(destination.itinerary || []).map((day, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className={`bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0`}>
                              <span className={`${typeof day.day === 'string' ? 'text-[10px] leading-tight text-center' : ''}`}>{day.day}</span>
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
                  <h2 className="text-2xl font-bold mb-6">Tour Photos</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {photos.map((src, index) => (
                      <div key={index} className="aspect-square">
                        <img 
                          src={src} 
                          alt={`${destination.title} photo ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                          loading="lazy"
                          decoding="async"
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
                    <span className="text-2xl font-bold">{destination.rating || 4.7}</span>
                    <span className="text-muted-foreground">({destination.reviews || 120} reviews)</span>
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
                                {`"Wonderful tour with professional guides. ${destination.title} was memorable. Highly recommend Mazano Adventures."`}
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
                  <CardTitle>Book This Tour</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {destination.duration && (
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-semibold">{destination.duration}</span>
                      </div>
                    )}
                    {destination.region && (
                      <div className="flex justify-between">
                        <span>Region:</span>
                        <span className="font-semibold">{destination.region}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Pickup:</span>
                      <span className="font-semibold">{destination.pickupLocation || "On Request"}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg">Starting from:</span>
                      <span className="text-2xl font-bold text-primary">{destination.price || "$0"}</span>
                    </div>
                    <ShareBookingButtons
                      title={destination.title}
                      kind="Tour"
                      duration={destination.duration || ""}
                      groupSize={"On Request"}
                      pickupLocation={destination.pickupLocation || "On Request"}
                      price={destination.price || "$0"}
                      emails={["akhtar_nangaparbat@yahoo.com", "akhtarnagabarbat@gmail.com"]}
                    />
                  </div>

                  <div className="text-center text-sm text-muted-foreground">
                    <p>Free cancellation up to 7 days</p>
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

export default DestinationDetail;
