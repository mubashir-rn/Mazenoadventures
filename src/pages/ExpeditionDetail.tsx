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
import k2Img1 from "@/assets/k2 expedition 1.jpg";
import k2Img2 from "@/assets/k2 expedition 2.jpg";
import k2Img3 from "@/assets/k2 expedition 3.jpg";
import k2Img4 from "@/assets/k2 expedition 4.jpg";
import k2Img5 from "@/assets/k2 expedition 5.jpg";
import k2Img6 from "@/assets/k2 expedition 6.jpg";
import bpImg1 from "@/assets/BROAD PEAK expedition 1.jpg";
import bpImg2 from "@/assets/BROAD PEAK expedition 2.jpg";
import bpImg3 from "@/assets/BROAD PEAK expedition 3.jpg";
import bpImg4 from "@/assets/BROAD PEAK expedition 4.jpg";
import bpImg5 from "@/assets/BROAD PEAK expedition 5.jpg";
import bpImg6 from "@/assets/BROAD PEAK expedition 6.jpg";
import npImg1 from "@/assets/NANGA PARBAT  EXPEDITION 1.jpg";
import npImg2 from "@/assets/NANGA PARBAT  EXPEDITION 2.jpg";
import npImg3 from "@/assets/NANGA PARBAT  EXPEDITION 3.jpg";
import npImg4 from "@/assets/NANGA PARBAT  EXPEDITION 4.jpg";
import npImg5 from "@/assets/NANGA PARBAT  EXPEDITION 5.jpg";
import npImg6 from "@/assets/NANGA PARBAT  EXPEDITION 6.jpg";
import g1Img1 from "@/assets/GASHERBRUM I EXPEDITION 1.jpg";
import g1Img2 from "@/assets/GASHERBRUM I EXPEDITION 2.jpg";
import g1Img3 from "@/assets/GASHERBRUM I EXPEDITION 3.jpg";
import g1Img4 from "@/assets/GASHERBRUM I EXPEDITION 4.jpg";
import g1Img5 from "@/assets/GASHERBRUM I EXPEDITION 5.jpg";
import g1Img6 from "@/assets/GASHERBRUM I EXPEDITION 6.jpg";
import ShareBookingButtons from "@/components/ShareBookingButtons";
// Hunza Tour images
import hunzaAltit5 from "@/assets/HunzaTour/Altit-fort-hunza-valley-pakistan-5.jpg";
import hunzaAttabad3 from "@/assets/HunzaTour/attabad-3.jpg";
import hunzaAttabadTunnel1 from "@/assets/HunzaTour/attabad-tunnel-1.jpg";
import hunzaBabusar3 from "@/assets/HunzaTour/babusar-pass-top-3.jpg";
import hunzaBaltit1 from "@/assets/HunzaTour/baltit-1.jpg";
import hunzaBaltit2 from "@/assets/HunzaTour/baltit-2.jpg";
import hunzaBaltit7 from "@/assets/HunzaTour/baltit-7.jpg";
import hunzaEmbassyHotel2 from "@/assets/HunzaTour/embassy-hotel-hunza-2.jpg";
import hunzaKarimabad1 from "@/assets/HunzaTour/karimabad-1.jpg";
import hunzaKarimabad from "@/assets/HunzaTour/karimabad.jpg";
import hunzaKhunjerab1 from "@/assets/HunzaTour/khunjerab-1.jpg";
import hunzaKhunjerab4 from "@/assets/HunzaTour/khunjerab-4.jpg";
import hunzaNaran2 from "@/assets/HunzaTour/naran-2.jpg";
import hunzaPassu1 from "@/assets/HunzaTour/passu-1.jpg";
import hunzaPassu4 from "@/assets/HunzaTour/passu-4.jpg";
import hunzaPradoClassic1 from "@/assets/HunzaTour/prado-classic-1.jpg";
// Deosai Tour images
import deosaiCover2 from "@/assets/Deosai National Park Tour/Deosai-Plain-plateau-baltistan-karakoram-west-2.jpg";
import deosaiCover3 from "@/assets/Deosai National Park Tour/Deosai-Plain-plateau-baltistan-karakoram-west-3.jpg";
import deosaiCover4 from "@/assets/Deosai National Park Tour/Deosai-Plain-plateau-baltistan-karakoram-west-4.jpg";
import deosaiCover5 from "@/assets/Deosai National Park Tour/Deosai-Plain-plateau-baltistan-karakoram-west-5.jpg";
import deosai1 from "@/assets/Deosai National Park Tour/deosai-1.jpg";
import deosai3 from "@/assets/Deosai National Park Tour/deosai-3.jpg";
import deosaii from "@/assets/Deosai National Park Tour/Deosai-National-Park-Tour-6.jpeg";
// Lahore Tour images
import lahore11 from "@/assets/lahoretour/Lahore-11.jpeg";
import lahore5 from "@/assets/lahoretour/Lahore-5.jpeg";
import lahore2 from "@/assets/lahoretour/lahore-tour-2.jpg";
import lahore5b from "@/assets/lahoretour/lahore-tour-5.jpg";
import lahoreFort from "@/assets/lahoretour/lahore-tour-Oposite-the-mosque-Lahore-Fort-Mughal-emperor-Shah-Jahans-palace.jpg";

const ExpeditionDetail = () => {
  const { id } = useParams();

  // Load from shared dataset, fallback to K2 if id not found
  const expedition = (id && expeditionsById[id]) || expeditionsById["k2-expedition"];

  // Photos gallery: specific set for K2, Broad Peak, Nanga Parbat, and Gasherbrum I; otherwise fallback to primary image
  const photos = expedition.id === "k2-expedition"
    ? [k2Img1, k2Img2, k2Img3, k2Img4, k2Img5, k2Img6]
    : expedition.id === "broad-peak-expedition"
      ? [bpImg1, bpImg2, bpImg3, bpImg4, bpImg5, bpImg6]
    : expedition.id === "nanga-parbat-expedition"
      ? [npImg1, npImg2, npImg3, npImg4, npImg5, npImg6]
    : expedition.id === "gasherbrum-i-expedition"
          ? [g1Img1, g1Img2, g1Img3, g1Img4, g1Img5, g1Img6]
          : expedition.id === "hunza-valley-tour"
            ? [
                hunzaBaltit1,
                hunzaBaltit2,
                hunzaBaltit7,
                hunzaAltit5,
                hunzaKarimabad,
                hunzaKarimabad1,
                hunzaAttabad3,
                hunzaAttabadTunnel1,
                hunzaKhunjerab1,
                hunzaKhunjerab4,
                hunzaPassu1,
                hunzaPassu4,
                hunzaBabusar3,
                hunzaNaran2,
                hunzaEmbassyHotel2,
                hunzaPradoClassic1,
              ]
          : expedition.id === "skardu-deosai-tour"
            ? [
                deosaiCover2,
                deosaiCover3,
                deosaiCover4,
                deosaiCover5,
                deosai1,
                deosai3,
                deosaii,
              ]
          : expedition.id === "lahore-cultural-tour"
            ? [
                lahore5b,
                lahoreFort,
                lahore2,
                lahore11,
                lahore5,
              ]
          : Array.from({ length: 6 }, () => expedition.image);

  // Custom display title and description overrides for certain expeditions
  const displayTitle = expedition.id === "nanga-parbat-expedition"
    ? "NANGA PARBAT (8126M) EXPEDITION"
    : expedition.id === "hunza-valley-tour"
      ? "Hunza Valley Tour"
      : expedition.title;

  const displaySubtitle = expedition.id === "nanga-parbat-expedition" ? "DIAMIR FACE" : "";

  // Use Tour wording for Holiday Tours
  const isTour = expedition.tourType?.toLowerCase().includes("tour");

  const description = expedition.id === "nanga-parbat-expedition"
    ? "Nanga Parbat means “necked mountain” in Sanskrit and called by few other nicknames such as “Killer Mountain” “Mountain of destiny” & Mountain of demons etc. Its gigantic mass forms Western bastion of the Himalaya. It is the ninth highest mountain in the world and the second highest in Pakistan after K2. Steeped in a history matched by few others in Asia it has staged some of the greatest Himalayan ascents of all time. From Hermann Buhl’s solo first ascent in 1953 via the Upper North ridge to Gunther and Reinhold Messner’s first ascent of the Rupal Face in 1970 via the South South East Spur, Messner’s solo climb of the Diamir Face in 1978, and more recently Vince Anderson and Steve House’s Alpine-style ascent of the Central Pillar of the Rupal Face. These epic climbs continue to inspire climbers to attempt yearly what is considered to be the second hardest 8000m mountain after K2. Nanga Parbat is a truly awesome spectacle. The south face is the largest in the world extending over four kilometers above base camp. To date there have only been five ascents from the south. Nanga Parbat means “Naked Mountain” in Hindi/Urdu and is with reference to the south face’s exposed rock buttresses. The north face is equally intimidating. In contrast to the south face’s steep rock and ice the snowy north face is guarded by a broad barrier of seracs that extend the width of the mountain."
    : expedition.id === "gasherbrum-i-expedition"
    ? "Gasherbrum I (8080m) is the lowest of the Karakoram’s 8000ers by a small margin, offering a serious yet achievable high‑altitude climb. Approached via one of the world’s greatest treks to Concordia, the route tackles steep snowy faces and mixed terrain above the heavily crevassed Gasherbrum Glacier. From the Banana Ridge, climbers progress through technical pitches to the shoulder near 7490m, then traverse to the summit pyramid on the East Ridge for a committing finish on breathtaking terrain."
    : expedition.id === "hunza-valley-tour"
    ? "Hunza Valley Tour is one the most popular tours of the world. It is located in the far Northern territory of Pakistan. It is widely believed by many people that James Hilton’s famous novel “Lost Horizon” was inspired from Hunza Valley. The world acclaim the Hunza Valley as the “Land Of Legends” and it is famous worldwide for its culture, landscape, friendliness and hospitality. Travelers and adventurers from around the world make their visit to this point of Earth every year.\n\nThe mighty peaks of Karakoram Range surround Hunza Valley. Rakaposhi Peak (7,788 m), Diran Peak (7,266 m), Spantik (7,072 m), Shishper Peak (7,611 m), Ultar Peak (7,388 m) and many other above 6,000 m peaks and mountains can be clearly viewed from any point in central Hunza valley. Hunza valley is home to many species of Flora and Fauna. You will experience sights of beautiful lakes, huge mountains, unique culture, history, architecture, wild life, glaciers and the community system. The itinerary for Hunza valley tour is given below."
    : expedition.id === "skardu-deosai-tour"
    ? "Deosai National Park Tour is an amazing light adventure for families, friends, students, couples and infact everyone. The national park is a must-see for every Pakitani once in life. Many international tourists appreciate the natural environment by flying to the area from thousands of miles away.\n\nAlso known as the land of Giant, Deosai plains provides the perfect environment for camping. The average height is 4,000m. The area is covered by lush green grass, streams, mountains etc.\n\nThe park is located on the boundary of Western end of Himalayas with Karakoram. Deosai National park is snow-covered for seven months. The perfect time to visit the Park is between July and September when snow has melted enough to make the area green. The natural environment is also made up of hundreds of varities of beautiful flowers of all colors and hues.\n\nWe provide two options for this amazing tour starting from Islamabad. One is by road and the other is via flight to Skardu Airport from Islamabad. Below is the itinerary for a road trip. Leave an inquiry for a trip by air."
    : expedition.id === "lahore-cultural-tour"
    ? "Tour of Lahore (2025-26) – 03 Days. Tour of Lahore is a must if you are in town for a few days. Lahore (Punjab province’s capital) is also famous for its culture and traditions. The city has been a hub of arts, literature, and music for centuries and has produced many renowned artists and writers. Lahore is also renowned for its spicy and flavorful cuisine, which is a mix of traditional Pakistani and Mughlai dishes. The city’s bazaars, including the famous Anarkali bazaar, offer a wide range of street food such as fried fish and spicy kebabs, as well as traditional dishes like haleem and biryani. Lahore also has many monuments and attractions, making it a reasonable tourist destination for visitors from all over the world. Three day tour of Lahore is a guided sightseeing tour offered by Mazeno Adventures Tours. Our fixed departures (group tours) & private tour of Lahore are given in the table below."
    : expedition.description;

  const priceIncludes = expedition.id === "nanga-parbat-expedition"
    ? [
        "Use of trekking poles and Microspike Crampons if necessary",
        "Entrance fees and national park permits",
        "Emergency equipment including a company-issued first-aid kit and satellite phone",
        "Roundtrip transportation from your hotel in Flagstaff, Arizona to the Grand Canyon and back",
        "All meals are included from breakfast the first day through lunch on the last day",
      ]
    : [
        "Air fares",
        "3 Nights Hotel Accommodation",
        "Tour Guide",
        "Entrance Fees",
        "All transportation in destination location"
      ];

  const priceExcludes = expedition.id === "nanga-parbat-expedition"
    ? [
        "Clothes, rain-gear, and footwear",
        "Sunscreen, toiletries and personal items",
        "Water bottles and a headlamp or flashlight",
        "Guide gratuity (industry recommendation is 10-15% of trip cost)",
      ]
    : [
        "Guide Service Fee",
        "Driver Service Fee", 
        "Any Private Expenses",
        "Room Service Fees"
      ];

  const complementaries = expedition.id === "nanga-parbat-expedition"
    ? [
        "Umbrella",
        "T-Shirt",
        "Deuter or Osprey backpacks",
        "Microspike crampons when necessary",
      ]
    : [
        "Umbrella",
        "Sunscreen",
        "T-Shirt",
        "Entrance Fees"
      ];

  const itinerary = expedition.id === "broad-peak-expedition"
    ? [
        { day: 1, title: "Islamabad", description: "Arrival in Islamabad" },
        { day: 2, title: "Islamabad – Skardu", description: "Flight or drive to Skardu (weather dependent)" },
        { day: 3, title: "Skardu – Free Day", description: "Rest and preparations in Skardu" },
        { day: 4, title: "Skardu – Jhola (3200m)", description: "Drive/trek towards Jhola camp" },
        { day: 5, title: "Jhola – Paiya (3450m)", description: "Trek along Braldu river towards Paiya" },
        { day: 6, title: "Paiya – Urdukas (4100m)", description: "Glacier trekking to Urdukas" },
        { day: 7, title: "Urdukas – Goro-II (4380m)", description: "Traverse Baltoro glacier to Goro-II" },
        { day: 8, title: "Goro-II – Broad Peak Base Camp", description: "Arrive Broad Peak BC" },
        { day: "09-30", title: "Base Camp Climbing", description: "Acclimatization rotations and summit push window" },
        { day: 40, title: "Base Camp – Goro-II", description: "Begin return from BC" },
        { day: 41, title: "Goro-II – Urdukas", description: "Glacier return to Urdukas" },
        { day: 42, title: "Urdukas – Paiyu", description: "Descend to Paiyu" },
        { day: 43, title: "Paiyu – Jhola", description: "Further descent to Jhola" },
        { day: 44, title: "Jhola – Skardu", description: "Return to Skardu" },
        { day: 45, title: "Skardu – Islamabad", description: "Fly/drive back to Islamabad" },
      ]
    : expedition.id === "nanga-parbat-expedition"
    ? [
        { day: 1, title: "Islamabad", description: "Arrival in Islamabad" },
        { day: 2, title: "Islamabad – Chilas", description: "Drive to Chilas" },
        { day: 3, title: "Chilas – Sair Valley", description: "Transfer to Sair Valley" },
        { day: 4, title: "Sair Valley – Kutagali", description: "Trek to Kutagali" },
        { day: 5, title: "Kutagali – Nanga Parbat Base Camp", description: "Reach Nanga Parbat BC" },
        { day: "6-36", title: "Base Camp Climbing", description: "Acclimatization rotations and summit push window" },
        { day: 37, title: "Nanga Parbat BC – Sair Valley", description: "Return to Sair Valley" },
        { day: 38, title: "Sair Valley – Halal – Bonar Das – Chilas", description: "Transit via Halal and Bonar Das to Chilas" },
        { day: 39, title: "Naran Valley – Islamabad", description: "Return to Islamabad via Naran Valley" },
        { day: 40, title: "Fly Back", description: "Departure" },
      ]
    : expedition.id === "gasherbrum-i-expedition"
    ? [
        { day: 1, title: "Islamabad", description: "Arrival in Islamabad" },
        { day: 2, title: "Islamabad – Skardu", description: "Flight or drive to Skardu" },
        { day: 3, title: "Skardu – Askoli", description: "Drive to Askoli" },
        { day: 4, title: "Askoli – Jhola (3200m)", description: "Trek to Jhola" },
        { day: 5, title: "Jhola – Paiya (3450m)", description: "Trek to Paiya" },
        { day: 6, title: "Paiya – Urdukas (4100m)", description: "Glacier trekking to Urdukas" },
        { day: 7, title: "Urdukas – Goro-II (4380m)", description: "Traverse Baltoro to Goro-II" },
        { day: 8, title: "Goro-II – Concordia BC (4650m)", description: "Reach Concordia base area" },
        { day: 9, title: "Concordia – Gasherbrum BC (5000m)", description: "Arrive at Gasherbrum base camp" },
        { day: "10-30", title: "Base Camp Climbing", description: "Acclimatization rotations and summit window" },
        { day: 40, title: "Base Camp – Ali Camp", description: "Cross towards Ali Camp" },
        { day: 41, title: "Ali Camp – Khuspang (GLL)", description: "Traverse to Khuspang (Gondogoro La approach)" },
        { day: 42, title: "Khuspang (GLL) – Sahischu", description: "Descend to Sahischu" },
        { day: 43, title: "Sahischu – Hushe Valley", description: "Trek out to Hushe" },
        { day: 44, title: "Hushe – Skardu City", description: "Drive to Skardu" },
        { day: 45, title: "Skardu – Islamabad", description: "Fly/drive back to Islamabad" },
      ]
    : expedition.id === "hunza-valley-tour"
    ? [
        { day: 1, title: "Hunza Valley Tour – Islamabad to Naran", description: "Depart for Kaghan Valley via Haripur, Abbottabad and Balakot. Scenic drive with lush green hills, streams, glaciers and alpine trees along River Kunhar. Tea stops en route. Lunch and rest at hotel, followed by optional walk or sightseeing. Hotel at Naran." },
        { day: 2, title: "Hunza Valley Tour – Naran to Hunza", description: "Early start. Stop at Lulusar Lake and tea at Babusar Pass (4,173 m). Enter Chilas with a shift from green hills to rugged mountains. Travel on Karakoram Highway, view Nanga Parbat, and stop at Rakaposhi viewpoint before arriving at hotel in Hunza Valley. Night stay in Hunza." },
        { day: 3, title: "Hunza Valley Travel Guide", description: "Visit Baltit Fort (700 years old) and Altit Fort (900 years old) with local cultural guide. Explore Leif Larson Music School and Royal Gardens. Try local food at Khabasi Café. Visit Duikar before sunset for panoramic views of Karakoram peaks. Night stay in Hunza." },
        { day: 4, title: "Hunza Valley Tour – Khunjerab Pass (Pak-China Border)", description: "Depart for Khunjerab Pass via Ganish (ancient rock carvings), Attabad Lake, Hussaini Glacier, Passu village, and conservation areas. See Shispar, Passu Peak and Passu Cones. Reach Khunjerab Pass (4,733 m), meet travelers, enjoy landscape and possible summer snowfall. Shopping stop at Sost and free time in Karimabad Market for herbs, caps, dry fruits, handicrafts and gemstones. Night stay in Hunza." },
        { day: 5, title: "Return to Naran Kaghan Valley", description: "Travel back to Naran via same route with quick scenic stops. Visit Naran Bazaar upon arrival. Night stay in Naran." },
        { day: 6, title: "Islamabad City", description: "Continue journey to Islamabad with quick stops. 7–8 hours drive from Naran. Tour ends upon arrival in Islamabad." },
      ]
    : expedition.id === "skardu-deosai-tour"
    ? [
        { day: 1, title: "Naran/Kaghan", description: "Leave Islamabad and drive to Naran/Kaghan via Abbottabad, Mansehra, Balakot for night stay. Enjoyable drive through beautiful valleys." },
        { day: 2, title: "Skardu via Babusar", description: "Long drive to Skardu. Parallel drive along Lulusar Lake up to Babusar Pass for a short rest and photography. Continue via Diamer district to Karakoram Highway, Alam bridge to Skardu road along Indus. Night stay in Skardu." },
        { day: 3, title: "Deosai National Park Tour", description: "Drive towards Deosai Plains via Sadpara lake and village. First night camping at Bara Pani, Deosai." },
        { day: 4, title: "Deosai Plains Tour", description: "Day for fishing, camping, BBQ, hiking, sunrise/sunset photography. Second night camping at Bara Pani, Deosai." },
        { day: 5, title: "Skardu", description: "Drive back to Skardu town for lunch. Optional sightseeing: Shangrila Resort, Kharpocho Fort, Shigar desert etc. Night stay in Skardu." },
        { day: 6, title: "Naran/Kaghan", description: "Drive back to Naran and rest." },
        { day: 7, title: "Islamabad", description: "Drop in Islamabad." },
      ]
    : expedition.id === "lahore-cultural-tour"
    ? [
        { day: 1, title: "Lahore Fort, Badshahi & Wazir Khan, Anarkali", description: "9:00 AM – Visit Lahore Fort (UNESCO), 2–3 hours. 12:00 PM – Badshahi Mosque next to the Fort, 1–2 hours. 2:00 PM – Wazir Khan Mosque in the old city, 1–2 hours. 4:00 PM – Stroll through Anarkali Bazaar, 1–2 hours." },
        { day: 2, title: "Shalimar Gardens, Museum, Minar-e-Pakistan, Food Street", description: "9:00 AM – Shalimar Gardens (2–3 hours). 12:00 PM – Lahore Museum (1–2 hours). 2:00 PM – Minar-e-Pakistan at Iqbal Park (1–2 hours). 4:00 PM – Food Street in old city (1–2 hours)." },
        { day: 3, title: "Zoo, Model Town Park, Emporium Mall, Canal Road", description: "9:00 AM – Lahore Zoo (2–3 hours). 12:00 PM – Model Town Park (2–3 hours). 3:00 PM – Emporium Mall (2–3 hours). 6:00 PM – Walk along Canal Road (1–2 hours)." },
      ]
    : [
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
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-hero flex items-center">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="text-white">
              <Badge variant="secondary" className="mb-4">
                {expedition.elevation}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-1">
                {displayTitle}
              </h1>
              {displaySubtitle && (
                <div className="text-sm md:text-base tracking-wide text-white/90 mb-3">
                  {displaySubtitle}
                </div>
              )}
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
                      <h2 className="text-2xl font-bold mb-4">{isTour ? "About This Tour" : "About This Expedition"}</h2>
                      <p className="text-muted-foreground leading-relaxed">
                        {description}
                      </p>
                    </div>

                    {expedition.id === "nanga-parbat-expedition" && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                          <CardHeader>
                            <CardTitle>Recommended Airport</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">Islamabad International Airport (Google Map)</p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader>
                            <CardTitle>Meeting Point</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">Grand Canora Flagstaff</p>
                          </CardContent>
                        </Card>
                      </div>
                    )}

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
                  <h2 className="text-2xl font-bold mb-6">Expedition Photos</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {photos.map((src, index) => (
                      <div key={index} className="aspect-square">
                        <img 
                          src={src} 
                          alt={`${expedition.title} photo ${index + 1}`}
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
                                {`"Incredible expedition with professional guides. The ${expedition.title} was challenging but rewarding. Highly recommend Mazano Adventures for serious mountaineers."`}
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
                  <CardTitle>{isTour ? "Book This Tour" : "Book This Expedition"}</CardTitle>
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