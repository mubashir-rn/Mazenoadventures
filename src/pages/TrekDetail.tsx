import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Users, MapPin, Calendar, Star, Mail, Tag, ChevronDown } from "lucide-react";
import ShareBookingButtons from "@/components/ShareBookingButtons";
import biafoImg1 from "@/assets/BIAFO GLACIER TREK img1.jpg";
import biafoImg2 from "@/assets/BIAFO GLACIER TREK img2.jpg";
import biafoImg3 from "@/assets/BIAFO GLACIER TREK img3.jpg";
import aroundNpImg1 from "@/assets/arround nangaparbat/np-from-latobo  nangaparbat.jpeg";
import aroundNpImg2 from "@/assets/arround nangaparbat/np-from-mazaeno-pass nangaparbat.jpeg";
import aroundNpImg3 from "@/assets/arround nangaparbat/bazin-glacier-2 nangaparbat.jpeg";
import aroundNpImg4 from "@/assets/arround nangaparbat/enroute-mazen-high-camp nangaparbat.jpeg";
import aroundNpImg5 from "@/assets/arround nangaparbat/heli-coffer-bc nangaparbat.jpeg";
import aroundNpImg6 from "@/assets/arround nangaparbat/latabo-meadows nangaparbat.jpeg";
import aroundNpImg7 from "@/assets/arround nangaparbat/local-houses-rupal-valley nangaparbat.jpeg";
import aroundNpImg8 from "@/assets/arround nangaparbat/mazeno-glacier nangaparbat.jpeg";

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
  "around-nanga-parbat-trek": {
    id: "around-nanga-parbat-trek",
    title: "AROUND NANGA PARBAT TREK",
    elevation: "5400m",
    duration: "21 Days / 20 Nights",
    groupSize: "6-12",
    difficulty: 5,
    minAge: "18+",
    pickupLocation: "Islamabad Airport",
    tourType: "Technical Trek",
    description: "Around Nanga Parbat Trek is a challenging but rewarding adventure that takes you on a circular route around the majestic Nanga Parbat, the ninth-highest mountain in the world. This trek offers stunning views of the mountain's various faces, including the iconic Rupal Face, as well as other impressive peaks in the surrounding region. The trek involves crossing three high passes: Mazeno La (5,400 meters), Kado Sagar Pass (4,900 meters), and Khustu Pass (4,840 meters). While Mazeno La presents technical challenges, particularly during the descent, the other two passes are generally less demanding. The trek offers breathtaking panoramic views of Nanga Parbat, its surrounding glaciers, and the surrounding Himalayan landscape. The Around Nanga Parbat Trek is a unique opportunity to explore a remote and unspoiled region of Pakistan, far from the tourist crowds. The trek also offers opportunities to interact with local communities and learn about their culture and traditions.",
    images: [aroundNpImg1, aroundNpImg2, aroundNpImg3, aroundNpImg4, aroundNpImg5, aroundNpImg6, aroundNpImg7, aroundNpImg8],
    rating: 4.9,
    reviews: 27,
    bestTime: "June to September",
    price: "$4500",
    emails: [
      "akhtar_nangaparbat@yahoo.com",
      "akhtarnagabarbat@gmail.com"
    ],
    itinerary: [
      { day: "1", title: "Islamabad (600m)", description: "Arrival at Islamabad Transfer to hotel, afternoon visit of the twin towns of Islamabad and Rawalpindi. Evening presentation of the program." },
      { day: "2", title: "Chilas (1200m) 12 hrs", description: "Drive to Chilas by the Karakorum Highway (KKH). After Islamabad situated on the Potwar plateau (500m) we will reach fresh hills and forested ridges whose cool climate attracts many people in summer. Abbottabad (1220m) was founded as a British garrison town in the 1850s. It's one of the best Hill Station of the country. Chilas on the edge of Indus River is famous for the petroglyphs. The oldest Inscriptions dating of around first AD. Meals and overnight at hotel." },
      { day: "3", title: "Tarishing (2911m) 6 hrs", description: "After breakfast drive to Tarshing along the Astore River. Gurikot and Astore are the principal villages on the way. Tarshing at the end of the jeep road is a colored village surrounded by snowed summits and departure of our trek Meals and overnight at camp." },
      { day: "4", title: "Latoba (4000m) 5 hrs", description: "You will cross Tarshing glacier, Bashin glacier and discover the Rupal villages in middle of green meadows. The campsite is a beautiful place in front of the Rupal face of Nanga Parbat. Most of glaciers in north Pakistan are recovered by thick cover of stones and gravel which gives them their black color in most of their course. Meals and overnight at camp." },
      { day: "5", title: "Shaigiri 4450m 4-5 hrs", description: "The path follows the northern lateral moraine of the Toshain glacier with views to Leila and Rupal peaks on one side and Nanga Parbat on the other. From the camp you can admire the 20 long km Toshain glacier that fill the whole head of the valley. Meals and overnight at camp." },
      { day: "6", title: "Shaigri", description: "Rest day at Shaigri. Explore the nearby mountains walls. Overnight at Camp." },
      { day: "7", title: "Mazeno BC (4700m) 6 hrs", description: "Early in the morning we start our trek. This is going to be the highest point in our trekking to cross the Mazeno pass. This is where the place where mostly changes the potters which we took from Tarishing. This evening going to be quite cold and higher place. Overnight at camp." },
      { day: "8", title: "Mazeno high Camp. 5399m 4 hrs", description: "Early in the morning we start our trek. This is going to be the highest point in our trekking to cross the Mazeno pass. This is where the place where mostly changes the potters which we took from Tarishing. This evening going to be quite cold and higher place. Overnight at camp." },
      { day: "9", title: "Upper Loiba (4300m) 6 hrs", description: "The climb up is not difficult. The other side is a steady slope of about 300m on glacier: ice on the first meters, then covered with gravel and stones.at the foot of the slope birch woods and green meadows are waiting for you. Meals and overnight at camp." },
      { day: "10", title: "Sargialo Pass (4843m) 7 hrs", description: "Today we will cross one other small pass called Sargialo Pass, from the pass we have magnificent view of snow covered mountains including Nanga Parbat diamber side. After we will decent to reach our camp side Sargialo. Overnight at camp." },
      { day: "11", title: "Kotghali (3000m) 4 hrs", description: "After breakfast we will walk on the Diamir glacier towards Kotghali. This is last village where local people use as a summer settlement with their animals for two to three months. Here we can have fresh milk, cheese, butter lassi. Of course we will have an interaction with locals to know their way of life on the mountains. Overnight at camp." },
      { day: "12", title: "Kotghali 6 hrs Rest day", description: "Today we will have a relaxing at at Kotghali and also some people can walk on the glacier and surroundings to explore, how every from our campsite we will see Nanga Parbat from Camp1 till top. Free time to wash laundry and relaxing. Overnight at camp." },
      { day: "13", title: "Day excursion Nanga Parbat Base Camp", description: "After breakfast we will walk towards first base camp, which is around is at 3850m. The meadows with flowers of all colors look like painting of Van Gogh or Monet. The second Base Camp at 4250m is the departure of most expeditions. A line of ridges culminating in ice crest of 8125m forms the huge mountain. High ranked ninth highest peak in the world and second In Pakistan. After acclimatization climb Diamerio peak 6000m. Meals and overnight at camp." },
      { day: "14", title: "Kutgali Pass to Karu Sagar 6-7 hrs", description: "After breakfast we will hike up to Kutgali Pass it is an easy walk with a lot of mazing view of Nanga Parbat. It will take around 6 to 7 hrs to reach at Karu Sagar. Overnight at camp." },
      { day: "15", title: "Trekking to Gutum Sagar / Base Camp of Jiliper Pass 4 to 5 hrs.", description: "In the morning we will walk towards Gutum Sagar, the walk is mixture to hiking up and the decenting for a while, but overall we will be on green meadows and passing small summer villages. Meals and overnight at camp." },
      { day: "16", title: "Crossing of Jiliper Pass to Bayal", description: "Today it will be our last camp on the mountains, as we will be approaching the famous Fairy Meadows region or North face of Nanga Parbat, where hot shower will be waiting for us and we can finally sleep on a bed with." },
      { day: "17", title: "Nanga Parbat Base camp (3300m) Option", description: "Excursions to the Base Camp (4300m) of the north face of Nanga Parbat. It will take about 4 to 5 hours to reach the place of departure of the first expeditions in the 1934 s. There were German expeditions which try to reach the summit but the first success arrived only with German / Austrian expedition in 1953 the first Man who reached the summit was Herman Buhl. After visiting the memorial we will trek back to Fairy Meadows. Overnight at wooden huts." },
      { day: "18", title: "Fairy Meadows – Naran 7-8 hrs", description: "After breakfast we will trek back to Tato from there we will decent with jeeps to KKH and drive further towards Naran over the Babusar pass. overnight at Hotel." },
      { day: "19", title: "Naran - Islamabad", description: "Today we will drive towards the well-developed cities of the country. On our way if time allows us we will visit, Taxila museum and sites, which is an archaeological location dated from (600 BC to 500 AD) are located around Taxila museum. For over one Thousand-year Taxila remained famous as a center of learning Gandhara art of sculpture, architecture, education, and Buddhism in the days of Buddhist glory. Later we will drive to Islamabad. Overnight at Islamabad hotel." },
      { day: "20", title: "Islamabad", description: "Day free for Rawalpindi & Islamabad for sightseen. We will start our day from Rawalpindi Raja Bazar, which is an traditional bazar, where you can see the real lifestyle. We we walk through different bazar, where you can see almost every products in different location with small shops. Later we will enter into modern capital of Pakistan and visit the Margala hills including Shah Faisal Mosque. The dinner going to be from Nanga Parbat adventure. Overnight in Hotel." },
      { day: "21", title: "Departure", description: "Transfer to airport for onward international flight." }
    ]
  },
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
                  <Accordion type="single" collapsible className="w-full space-y-4">
                    {trek.itinerary.map((d, idx) => (
                      <AccordionItem key={idx} value={`day-${idx}`} className="border rounded-lg">
                        <AccordionTrigger className="px-6 py-4 hover:no-underline">
                          <div className="flex items-center space-x-4 w-full">
                            <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                              {d.day}
                            </div>
                            <div className="flex-1 text-left">
                              <h3 className="font-semibold text-lg text-foreground">{d.title}</h3>
                              <p className="text-sm text-muted-foreground mt-1">
                                {d.description ? `${d.description.substring(0, 80)}...` : 'Click to see details'}
                              </p>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-6">
                          <div className="ml-16">
                            {d.description ? (
                              <div className="space-y-3">
                                <p className="text-muted-foreground leading-relaxed">{d.description}</p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                  <Badge variant="outline" className="text-xs">
                                    Day {d.day}
                                  </Badge>
                                  {d.title.includes('hrs') && (
                                    <Badge variant="secondary" className="text-xs">
                                      <Clock className="h-3 w-3 mr-1" />
                                      {d.title.match(/\d+[\s-]*\d*\s*hrs?/)?.[0] || 'Duration varies'}
                                    </Badge>
                                  )}
                                  {d.title.match(/\(\d+m\)/) && (
                                    <Badge variant="outline" className="text-xs">
                                      📍 {d.title.match(/\(\d+m\)/)?.[0] || ''}
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            ) : (
                              <p className="text-muted-foreground italic">Detailed information for this day will be provided during the trek briefing.</p>
                            )}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
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
