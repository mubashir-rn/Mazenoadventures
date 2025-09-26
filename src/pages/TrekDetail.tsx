import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, MapPin, Calendar, Star, Mail, Tag } from "lucide-react";
import ShareBookingButtons from "@/components/ShareBookingButtons";
import biafoImg1 from "@/assets/BIAFO GLACIER TREK img1.jpg";
import biafoImg2 from "@/assets/BIAFO GLACIER TREK img2.jpg";
import biafoImg3 from "@/assets/BIAFO GLACIER TREK img3.jpg";

interface TrekData {
  id: string;
  title: string;
  elevation?: string;
  duration: string;
  groupSize: string;
  difficulty: number; // 1-5
  minAge: string;
  pickupLocation: string;
  tourType: string;
  description: string;
  images: string[];
  rating?: number;
  reviews?: number;
  bestTime?: string;
  price?: string;
  emails?: string[];
  itinerary: { day: string; title: string; description?: string }[];
}

const treks: Record<string, TrekData> = {
  "biafo-glacier-trek": {
    id: "biafo-glacier-trek",
    title: "BIAFO GLACIER TREK",
    elevation: "5151m",
    duration: "22 Days",
    groupSize: "3-8",
    difficulty: 5,
    minAge: "18+",
    pickupLocation: "Islamabad Airport",
    tourType: "Technical Trek",
    description:
      "Difficult trek that requires glacier crossing, harness and rope. The traverse of the Biafo and Hispar glaciers proceeds through a wilderness of rock and ice over the Hispar La and down to the meadows of Hispar.",
    images: [biafoImg1, biafoImg2, biafoImg3],
    rating: 4.8,
    reviews: 0,
    bestTime: "July to September",
    price: "$3000",
    emails: [
      "akhtar_nangaparbat@yahoo.com",
      "akhtarnagabarbat@gmail.com"
    ],
    itinerary: [
      { day: "1", title: "We meet in the international airport of Islamabad and go to hotel." },
      { day: "2", title: "Drive to Gilgit. Night in hotel." },
      { day: "3", title: "Drive to Skardu. Night in hotel." },
      { day: "4", title: "Skardu to Askole by jeep." },
      { day: "5", title: "Trekking. Askole to Namla (6 – 8 h)." },
      { day: "6", title: "Trekking. Namla to Mango (5 – 6 h). -30 m" },
      { day: "7-8", title: "Trekking. Mango to Baintha +330 m." },
      { day: "9", title: "Trekking. Baintha to Napina or Marpongoro or Glacier camp (4 – 6 h)." },
      { day: "10", title: "Trekking. Napina or Marpongoro or Glacier camp to Hispar pass Base Camp (4 – 5 h)." },
      { day: "11", title: "Trekking. Climb to Hispar pass (3 – 5 h). 5151 m +350 m." },
      { day: "12", title: "Trekking. Hispar pass to Khanibasa (4 – 5 h). 4500 m -650 m." },
      { day: "13", title: "Trekking. Khanibasa to Yutmaru (4 – 6 h). 4300 m -200 m." },
      { day: "14", title: "Trekking. Yutmaru to Shikam Baris (5 – 7 h). 4150 m -200 m." },
      { day: "15", title: "Trekking. Shikam Baris to Dachigan (5 – 7 h). 3950 m -200 m." },
      { day: "16", title: "Trekking. From Dachigan we cross the Kunyang glacier (5 – 7 h). 3850 m -100 m." },
      { day: "17", title: "Trekking. Down to Hispar village (4 h). 3250 m -600 m." },
      { day: "18", title: "Trekking. Hispar village to Huru (4 – 5 h). 2800 m -450 m." },
      { day: "19", title: "By car. Huru to Nagar and Hunza." },
      { day: "20", title: "By car. Hunza to Gilgit. Night in hotel." },
      { day: "21", title: "By car. Gilgit to Rawalpindi or Islamabad. Night in hotel." },
      { day: "22", title: "By car. Rawalpindi to International Airport of Islamabad and back home." }
    ]
  }
};

const TrekDetail = () => {
  const { id } = useParams();
  const trek = id ? treks[id] : undefined;

  if (!trek) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h1 className="text-3xl font-bold mb-4">Trek not found</h1>
            <p className="text-muted-foreground mb-6">The trek you are looking for does not exist or hasn’t been added yet.</p>
            <Button variant="mountain" asChild>
              <a href="/trekkings">Back to Trekkings</a>
            </Button>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img src={trek.images[0]} alt={trek.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero flex items-center">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-white">
              {trek.elevation && (
                <Badge variant="secondary" className="mb-4">
                  {trek.elevation}
                </Badge>
              )}
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{trek.title}</h1>
              <div className="flex flex-wrap gap-6 text-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span>{trek.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5" />
                  <span>{trek.groupSize} People</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>{trek.pickupLocation}</span>
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
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                </TabsList>

                <TabsContent value="details" className="mt-8">
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-2xl font-bold mb-4">About This Trek</h2>
                      <p className="text-muted-foreground leading-relaxed">{trek.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <Tag className="h-5 w-5 text-primary" />
                            <span>Key Facts</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li><strong>Length:</strong> {trek.duration}</li>
                            <li><strong>Level:</strong> Strenous</li>
                            <li><strong>Best time:</strong> {trek.bestTime}</li>
                            <li><strong>Group:</strong> {trek.groupSize} people</li>
                            <li><strong>Price:</strong> {trek.price}</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <Calendar className="h-5 w-5 text-primary" />
                            <span>Departure</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li><strong>Pickup Location:</strong> {trek.pickupLocation}</li>
                            <li><strong>Minimum Age:</strong> {trek.minAge}</li>
                            <li><strong>Tour Type:</strong> {trek.tourType}</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <Star className="h-5 w-5 text-secondary" />
                            <span>Reviews</span>
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`h-4 w-4 ${i < Math.floor(trek.rating || 0) ? 'text-secondary fill-secondary' : 'text-gray-300'}`} />
                              ))}
                            </div>
                            <span className="text-sm text-muted-foreground">({trek.reviews || 0})</span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="itinerary" className="mt-8">
                  <h2 className="text-2xl font-bold mb-6">Detailed Itinerary</h2>
                  <div className="space-y-4">
                    {trek.itinerary.map((d, idx) => (
                      <Card key={idx}>
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold">
                              {d.day}
                            </div>
                            <div>
                              <h3 className="font-semibold text-lg">{d.title}</h3>
                              {d.description && <p className="text-muted-foreground">{d.description}</p>}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="photos" className="mt-8">
                  <h2 className="text-2xl font-bold mb-6">Gallery</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {trek.images.map((src, index) => (
                      <div key={index} className="aspect-square">
                        <img
                          src={src}
                          alt={`${trek.title} photo ${index + 1}`}
                          className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="contact" className="mt-8">
                  <h2 className="text-2xl font-bold mb-6">Contact</h2>
                  <Card>
                    <CardContent className="p-6">
                      <div className="space-y-3">
                        {trek.emails?.map((em) => (
                          <div key={em} className="flex items-center space-x-2">
                            <Mail className="h-5 w-5 text-primary" />
                            <a className="text-primary hover:underline" href={`mailto:${em}`}>{em}</a>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Book This Trek</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Length:</span>
                      <span className="font-semibold">{trek.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Group Size:</span>
                      <span className="font-semibold">{trek.groupSize} People</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Difficulty:</span>
                      <div className="flex">
                        {[...Array(trek.difficulty)].map((_, i) => (
                          <div key={i} className="w-2 h-5 bg-red-500 mr-1 rounded-sm"></div>
                        ))}
                        {[...Array(5 - trek.difficulty)].map((_, i) => (
                          <div key={i} className="w-2 h-5 bg-gray-300 mr-1 rounded-sm"></div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span>Best Time:</span>
                      <span className="font-semibold">{trek.bestTime}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg">Starting from:</span>
                      <span className="text-2xl font-bold text-primary">{trek.price}</span>
                    </div>
                    <ShareBookingButtons 
                      title={trek.title}
                      kind="Trek"
                      duration={trek.duration}
                      groupSize={trek.groupSize}
                      pickupLocation={trek.pickupLocation}
                      bestTime={trek.bestTime}
                      price={trek.price}
                      emails={trek.emails}
                    />
                  </div>

                  <div className="text-center text-sm text-muted-foreground">
                    <p>Technical glacier travel experience recommended</p>
                    <p>24/7 customer support included</p>
                  </div>

                  <div className="pt-4">
                    <h4 className="font-semibold mb-2">Contacts</h4>
                    <div className="space-y-1">
                      {trek.emails?.map((em) => (
                        <div key={em} className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-primary" />
                          <a href={`mailto:${em}`} className="text-sm text-primary hover:underline">
                            {em}
                          </a>
                        </div>
                      ))}
                    </div>
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

export default TrekDetail;
