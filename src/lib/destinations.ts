export type Destination = {
  id: string;
  title: string;
  category: "Mountain" | "Northern" | "Cultural";
  region?: string;
  location?: string;
  elevation?: string;
  description: string;
  image: string;
  photos?: string[];
  rating?: number;
  reviews?: number;
  bestTime?: string;
  attractions?: string[];
  heritage?: string;
  heritageSites?: string[];
  price?: string;
  duration?: string;
  pickupLocation?: string;
  itinerary?: { day: number | string; title: string; description: string }[];
  whyVisit?: string;
  whenToVisitDetailed?: string;
  howToGetThere?: string;
};

// Assets
import k2Img from "@/assets/k2 expedition 1.jpg";
import broadPeakImg from "@/assets/BROAD PEAK expedition 1.jpg";
import nangaParbatImg from "@/assets/NANGA PARBAT  EXPEDITION 1.jpg";
import snowLakeImage from "@/assets/snow-lake-trek.jpg";
import fairyMeadowsImage from "@/assets/fairy-meadows.jpg";
import gondogoroImage from "@/assets/gondogoro-trek.jpg";

// Hunza
import hunza1 from "@/assets/HunzaTour/baltit-1.jpg";
import hunza2 from "@/assets/HunzaTour/baltit-2.jpg";
import hunza3 from "@/assets/HunzaTour/baltit-7.jpg";
import hunza4 from "@/assets/HunzaTour/Altit-fort-hunza-valley-pakistan-5.jpg";
import hunza5 from "@/assets/HunzaTour/attabad-3.jpg";
import hunza6 from "@/assets/HunzaTour/khunjerab-1.jpg";

// Deosai
import deosai2 from "@/assets/Deosai National Park Tour/Deosai-Plain-plateau-baltistan-karakoram-west-2.jpg";
import deosai3 from "@/assets/Deosai National Park Tour/Deosai-Plain-plateau-baltistan-karakoram-west-3.jpg";
import deosai4 from "@/assets/Deosai National Park Tour/Deosai-Plain-plateau-baltistan-karakoram-west-4.jpg";
import deosai5 from "@/assets/Deosai National Park Tour/Deosai-Plain-plateau-baltistan-karakoram-west-5.jpg";
import deosaiA from "@/assets/Deosai National Park Tour/deosai-1.jpg";
import deosaiB from "@/assets/Deosai National Park Tour/deosai-3.jpg";
import deosaiC from "@/assets/Deosai National Park Tour/Deosai-National-Park-Tour-6.jpeg";

// Lahore
import lahoreCover from "@/assets/lahoretour/lahore-tour-5.jpg";
import lahoreFort from "@/assets/lahoretour/lahore-tour-Oposite-the-mosque-Lahore-Fort-Mughal-emperor-Shah-Jahans-palace.jpg";
import lahore2 from "@/assets/lahoretour/lahore-tour-2.jpg";
import lahore11 from "@/assets/lahoretour/Lahore-11.jpeg";
import lahore5 from "@/assets/lahoretour/Lahore-5.jpeg";

// Shimshal
import shimshal1 from "@/assets/shimshal/shimshal 1.jpeg";
import shimshal2 from "@/assets/shimshal/shimshal 2.jpeg";
import shimshalCover from "@/assets/shimshal/Shimshal-Autumn-Forest-CMP.jpg";

// Latobah
import latobahCover from "@/assets/latbo/latbo 1.jpeg";
import latobahKid from "@/assets/latbo/latbi kid.jpeg";

export const destinations: Destination[] = [
  // Mountain Peaks (brief sightseeing style)
  {
    id: "k2-peak",
    title: "K2 (8611M) – Second Highest Peak",
    category: "Mountain",
    location: "Karakoram Range",
    elevation: "8611m",
    description:
      "The savage mountain, offering the ultimate mountaineering challenge. Stunning views from Skardu region and scenic flights when weather allows.",
    image: k2Img,
    rating: 4.9,
    reviews: 120,
    duration: "3 Days",
    price: "$450",
    pickupLocation: "Skardu Airport",
    itinerary: [
      { day: 1, title: "Skardu Arrival & City Sights", description: "Arrive in Skardu, short city tour: Kharpocho Fort, Shangrila Resort." },
      { day: 2, title: "Viewpoints & River Drive", description: "Drive along Indus with photo stops; local culture and cuisine." },
      { day: 3, title: "Departure", description: "Free morning; transfer to airport." }
    ],
    photos: [k2Img, gondogoroImage, snowLakeImage]
  },
  {
    id: "broad-peak",
    title: "Broad Peak (8047M)",
    category: "Mountain",
    location: "Karakoram Range",
    elevation: "8047m",
    description:
      "The 12th highest mountain in the world with a classic pyramid shape—best admired from Concordia flights or photo viewpoints in Baltistan.",
    image: broadPeakImg,
    rating: 4.8,
    reviews: 96,
    duration: "3 Days",
    price: "$420",
    pickupLocation: "Skardu Airport",
    itinerary: [
      { day: 1, title: "Skardu Highlights", description: "City highlights and sunset point." },
      { day: 2, title: "Valley Drive", description: "Drive to Shigar/Khaplu valleys for mountain vistas." },
      { day: 3, title: "Departure", description: "Leisure time and airport drop." }
    ],
    photos: [broadPeakImg, gondogoroImage, snowLakeImage]
  },
  {
    id: "nanga-parbat",
    title: "Nanga Parbat (8126M) – Killer Mountain",
    category: "Mountain",
    location: "Western Himalayas",
    elevation: "8126m",
    description:
      "The ninth highest mountain known for dramatic relief—visible from Fairy Meadows and viewpoints near Chilas and Raikot bridge.",
    image: nangaParbatImg,
    rating: 4.7,
    reviews: 141,
    duration: "3 Days",
    price: "$400",
    pickupLocation: "Islamabad Airport",
    itinerary: [
      { day: 1, title: "Drive to Raikot", description: "Scenic drive and viewpoints." },
      { day: 2, title: "Fairy Meadows Day", description: "Optional hike/jeep track (if accessible) and photography." },
      { day: 3, title: "Return", description: "Drive back to Islamabad." }
    ],
    photos: [fairyMeadowsImage, nangaParbatImg, snowLakeImage]
  },
  {
    id: "rakaposhi",
    title: "Rakaposhi (7788M)",
    category: "Mountain",
    location: "Karakoram Range",
    elevation: "7788m",
    description:
      "Mother of Mist—spectacular pyramid-shaped peak easily admired from Hunza along the Karakoram Highway.",
    image: snowLakeImage,
    rating: 4.6,
    reviews: 88,
    duration: "2 Days",
    price: "$350",
    pickupLocation: "Gilgit Airport",
    itinerary: [
      { day: 1, title: "Gilgit to Hunza", description: "Arrive and transfer to Hunza; evening Rakaposhi viewpoint." },
      { day: 2, title: "Local Sights", description: "Short village walk and return." }
    ],
    photos: [snowLakeImage, fairyMeadowsImage]
  },

  // Northern Pakistan
  {
    id: "skardu",
    title: "Skardu",
    category: "Northern",
    region: "Gilgit-Baltistan",
    description: "Gateway to the world's highest peaks and basecamp for major expeditions.",
    image: gondogoroImage,
    attractions: ["Shangrila Resort", "Skardu Fort", "Satpara Lake", "Cold Desert"],
    bestTime: "Apr-Oct",
    duration: "4 Days",
    price: "$480",
    pickupLocation: "Skardu Airport",
    itinerary: [
      { day: 1, title: "Arrival & City Tour", description: "Skardu Fort, bazaar, local dinner." },
      { day: 2, title: "Shangrila & Upper Kachura", description: "Boat ride and photo ops." },
      { day: 3, title: "Deosai Day Trip (seasonal)", description: "Sheosar Lake, plains, wildlife (Jun-Sep)." },
      { day: 4, title: "Cold Desert & Departure", description: "Morning dune visit and airport drop." }
    ],
    photos: [gondogoroImage, deosai2, deosai5]
  },
  {
    id: "hunza-valley",
    title: "Hunza Valley",
    category: "Northern",
    region: "Gilgit-Baltistan",
    description: "Land of longevity with ancient culture and stunning mountain views.",
    image: hunza1,
    attractions: ["Baltit Fort", "Altit Fort", "Rakaposhi View", "Apricot Orchards"],
    bestTime: "Mar-Nov",
    duration: "4 Days",
    price: "$500",
    pickupLocation: "Gilgit Airport",
    itinerary: [
      { day: 1, title: "Altit & Baltit", description: "Visit both forts, Royal gardens." },
      { day: 2, title: "Attabad & Passu", description: "Lake cruise, Passu cones, suspension bridge." },
      { day: 3, title: "Khunjerab", description: "Pak-China border day trip (seasonal)." },
      { day: 4, title: "Karimabad & Departure", description: "Souvenirs, coffee, and airport transfer." }
    ],
    photos: [hunza1, hunza2, hunza3, hunza4, hunza5, hunza6]
  },
  {
    id: "fairy-meadows",
    title: "Fairy Meadows",
    category: "Northern",
    region: "Diamer District",
    description: "A piece of heaven with unobstructed views of Nanga Parbat.",
    image: fairyMeadowsImage,
    attractions: ["Nanga Parbat Views", "Alpine Meadows", "Base Camp Trek", "Sunset Point"],
    bestTime: "May-Sep",
    duration: "3 Days",
    price: "$420",
    pickupLocation: "Islamabad Airport",
    itinerary: [
      { day: 1, title: "Islamabad to Raikot", description: "Drive via scenic Kaghan (seasonal) or KKH." },
      { day: 2, title: "Fairy Meadows Day", description: "Hike from Tato, meadow exploration." },
      { day: 3, title: "Return", description: "Drive back to Islamabad." }
    ],
    photos: [fairyMeadowsImage, nangaParbatImg]
  },
  {
    id: "deosai-plains",
    title: "Deosai National Park",
    category: "Northern",
    region: "Skardu-Astore",
    description: "Land of Giants - second highest plateau with unique wildlife.",
    image: deosai2,
    attractions: ["Brown Bears", "Wildflowers", "Sheosar Lake", "Rolling Plains"],
    bestTime: "Jun-Sep",
    duration: "3 Days",
    price: "$450",
    pickupLocation: "Skardu Airport",
    itinerary: [
      { day: 1, title: "Skardu to Deosai", description: "Via Sadpara; camp at Bara Pani." },
      { day: 2, title: "Deosai Fun Day", description: "Fishing, BBQ, photography, sunsets." },
      { day: 3, title: "Sheosar & Return", description: "Sheosar Lake and back to Skardu." }
    ],
    photos: [deosai2, deosai3, deosai4, deosai5, deosaiA, deosaiB, deosaiC]
  },
  {
    id: "shimshal",
    title: "Shimshal The Lost Valley of Hunza",
    category: "Northern",
    region: "Hunza, Gilgit-Baltistan",
    description:
      "Shimshal. A word that evokes feelings of adventure and even danger. Hidden deep in the Karakoram, Shimshal Valley is famed for its remote beauty and the notorious road that leads there. Renowned yet rarely visited due to its secluded, hard-to-reach nature, it rewards those willing to venture far off the beaten path with jagged peaks, vast landscapes, the chance to spot exotic wildlife, and an incomparable silence far from Hunza’s crowds.",
    image: shimshalCover,
    attractions: [
      "Karakoram panoramas",
      "Remote valley villages",
      "Wildlife encounters",
      "High alpine meadows"
    ],
    bestTime: "May-Oct",
    duration: "3–5 Days",
    price: "$0",
    pickupLocation: "Gilgit / Hunza (Passu–Gulmit corridor)",
    whyVisit:
      "Straight away, Shimshal is not a casual, easy-to-reach destination. Getting to this valley requires effort and going out of your way, and more than likely braving danger to some degree. Experiencing Shimshal, peeling back its many layers, and soaking in its exquisite, remote beauty requires a level of commitment that pays off in a BIG way. Shimshal is for adventurous visitors looking for epic treks, an escape from civilization, and plenty of peaceful places to relax in silence. Jagged peaks, vast landscapes, the potential to see exotic wildlife, and the risk of danger await. If that appeals and you want to get away from Hunza’s often-stifling crowds, Shimshal is the place to be.",
    whenToVisitDetailed:
      "Shimshal Valley is defined by rugged terrain and a harsh, unforgiving climate. It’s best visited between May and October when temperatures are more bearable and the road is in an acceptable state. Summer months see the most visitors, but overcrowding is never an issue. Autumn is stunning but cold; by late October water pipes can freeze, so expect limited running water and come prepared for the trade-off: breathtaking colors and near-solitude.",
    howToGetThere:
      "The approach road to Shimshal is one of Pakistan’s most thrilling drives, carved into the cliffs deep in the Karakoram. Travel with care and local knowledge. With Mazano Adventures, you can choose peaceful trek and tour options—contact us for planning, safety-first logistics, and bookings.",
    itinerary: [
      { day: 1, title: "Approach to Shimshal", description: "Drive from Hunza towards Shimshal via the dramatic valley road; photography stops and village check-in." },
      { day: 2, title: "Explore The Lost Valley", description: "Short hikes to meadows and viewpoints; optional cultural walk through the village; serene downtime away from crowds." },
      { day: 3, title: "Return / Extensions", description: "Drive back towards Hunza or add extra days for deeper treks with Mazano Adventures." }
    ],
    photos: [shimshalCover, shimshal1, shimshal2]
  },
  {
    id: "latobah",
    title: "Latobah (Rupal Valley, Nanga Parbat)",
    category: "Northern",
    region: "Astore District, Gilgit-Baltistan",
    elevation: "3,530m (11,580 ft)",
    description:
      "Latobah, also known as Latboh or Latobah Meadow, is situated in the Rupal Valley of Astore District, Gilgit-Baltistan, Pakistan. The meadow lies at an altitude of approximately 3,530 meters (11,580 feet), positioned on the south-eastern face of Nanga Parbat (8,126 meters) — the world's highest mountain face, with a near-vertical rise of over 4,600 meters.",
    image: latobahCover,
    attractions: [
      "Direct views of the Rupal Wall, the world's highest mountain face",
      "Bazhin Glacier views",
      "Alpine meadows with pastoral scenery",
      "Exceptional photography conditions",
      "Clear night skies for stargazing",
      "Remote wilderness experience"
    ],
    bestTime: "mid-Jun to early Sep",
    duration: "6 Days",
    price: "$500",
    pickupLocation: "Islamabad",
    whyVisit:
      "Latobah offers a serene and authentic high-altitude experience on the Rupal Face of Nanga Parbat. It is ideal for trekkers seeking solitude, dramatic mountain scenery, and a close connection with Pakistan's raw alpine landscapes. Located just above the Bazhin Glacier and opposite Herligkoffer Base Camp, Latobah serves as a major base for trekkers approaching the Rupal Face of Nanga Parbat. The site combines dramatic alpine scenery, expansive grassy pastures, and proximity to glacier routes, making it a key stop for high-altitude expeditions and adventure travelers.",
    whenToVisitDetailed:
      "The ideal trekking season extends from mid-June to early September, when the meadows are lush, the glacier crossings are stable, and the weather is generally favorable. Daytime temperatures range from 10–20°C, while nights can drop below freezing. During the warmer months, local herders bring their sheep, goats, and horses to graze in the meadow, adding to the pastoral atmosphere of the region.",
    howToGetThere:
      "Access Route (Most Common):\n\n**Option 1: From Islamabad via Karakoram Highway**\n• Islamabad → Chilas: Drive via Karakoram Highway through Mansehra and Naran (when open) or via Babusar Top (9–11 hours, 420 km)\n• Chilas → Astore: Turn off from Raikot Bridge toward Astore Valley (3 hours, 80 km)\n• Astore → Tarashing: Jeep track; narrow mountain road suitable for 4x4 vehicles (2 hours, 30 km)\n• Tip: An overnight stay in Astore is recommended before beginning the trek.\n\n**Option 2: Via Gilgit**\n• Islamabad → Gilgit: Flight (1 hr 15 min) or by road (12–14 hrs)\n• Gilgit → Astore: Drive via Jaglot and Astore Bridge (4–5 hours, 120 km)\n• Astore → Tarashing: Jeep track (2 hours, 30 km)\n\n**Trek Route:**\n• Day 1: Trek from Tarashing to Herligkoffer Base Camp (approximately 3–4 hours). The route ascends gradually along the Bazhin Glacier.\n• Day 2: Trek from Herligkoffer Base Camp to Latobah Meadow (approximately 3–4 hours). The trail crosses the lateral moraine of the Bazhin Glacier and rises to a vast grassy plateau surrounded by mountains.\n• Optional Extensions: Continue to Latboi Camp, Mazeno Base Camp, or advanced viewpoints on the Rupal Face.",
    itinerary: [
      {
        day: 1,
        title: "Islamabad → Chilas / Astore",
        description:
          "Scenic mountain drive via Karakoram Highway through Mansehra and Naran (when open) or via Babusar Top. Alternatively, take a flight to Gilgit and drive to Astore. Overnight stay in Astore (2,600m)."
      },
      {
        day: 2,
        title: "Astore → Tarashing (by jeep) → Trek to Herligkoffer Base Camp",
        description:
          "2-hour jeep drive from Astore to Tarashing (last jeep-accessible settlement at 2,900m). Begin 3–4 hour trek along the Bazhin Glacier to Herligkoffer Base Camp (3,550m). Overnight camping."
      },
      {
        day: 3,
        title: "Herligkoffer Base Camp → Latobah Meadow",
        description:
          "Trek 3–4 hours crossing the lateral moraine of Bazhin Glacier to reach Latobah Meadow (3,530m). Set up camp on the wide grassy plateau with panoramic views of Rupal Face, Laila Peak, Mazeno Ridge, and Shaigiri Peak. Enjoy the pastoral atmosphere with streams and alpine flowers."
      },
      {
        day: 4,
        title: "Exploration at Latobah",
        description:
          "Full day to explore the meadow and surrounding areas. Optional hikes toward Latboi Camp or Mazeno Ridge for advanced viewpoints. Photography, wildlife spotting, and stargazing. Experience the pristine environment with fewer visitors than Fairy Meadows (Raikot) side."
      },
      {
        day: 5,
        title: "Latobah → Tarashing",
        description:
          "Descend back to Tarashing (2,900m) via Herligkoffer Base Camp. Overnight rest in Tarashing or continue to Astore."
      },
      {
        day: 6,
        title: "Tarashing → Astore → Islamabad",
        description:
          "Drive back to Astore and then to Islamabad (or flight from Gilgit to Islamabad if preferred). End of trek."
      }
    ],
    photos: [latobahCover, latobahKid, nangaParbatImg, fairyMeadowsImage]
  },

  // Cultural
  {
    id: "lahore",
    title: "Lahore",
    category: "Cultural",
    description: "Cultural capital of Pakistan with Mughal architecture and vibrant traditions.",
    image: lahoreCover,
    heritage: "Badshahi Mosque, Lahore Fort, Walled City",
    heritageSites: ["Badshahi Mosque", "Lahore Fort", "Shalimar Gardens", "Walled City", "Minar-e-Pakistan"],
    duration: "3 Days",
    price: "$600",
    pickupLocation: "Lahore Airport",
    itinerary: [
      { day: 1, title: "Fort & Mosques", description: "Lahore Fort, Badshahi & Wazir Khan, Anarkali." },
      { day: 2, title: "Gardens & Museum", description: "Shalimar Gardens, Lahore Museum, Minar-e-Pakistan, Food Street." },
      { day: 3, title: "Zoo & Mall", description: "Lahore Zoo, Model Town Park, Emporium & Canal Road." }
    ],
    photos: [lahoreCover, lahoreFort, lahore2, lahore11, lahore5]
  },
  {
    id: "islamabad",
    title: "Islamabad",
    category: "Cultural",
    description: "Modern capital city nestled against the scenic Margalla Hills.",
    image: fairyMeadowsImage,
    heritage: "Faisal Mosque, Daman-e-Koh, Margalla Hills",
    heritageSites: ["Faisal Mosque", "Pakistan Monument", "Daman-e-Koh", "Margalla Trails"],
    duration: "2 Days",
    price: "$300",
    pickupLocation: "Islamabad Airport",
    itinerary: [
      { day: 1, title: "City Icons", description: "Faisal Mosque, Pakistan Monument, Lok Virsa." },
      { day: 2, title: "Margalla", description: "Daman-e-Koh, hiking trail, Saidpur Village." }
    ],
    photos: [fairyMeadowsImage]
  },
  {
    id: "taxila",
    title: "Taxila – UNESCO Heritage",
    category: "Cultural",
    description: "Archaeological ruins showcasing Buddhist and Hindu heritage.",
    image: snowLakeImage,
    heritage: "Ancient Gandhara Civilization",
    heritageSites: ["Taxila Museum", "Dharmarajika Stupa", "Sirkap", "Jaulian Monastery"],
    duration: "1 Day",
    price: "$180",
    pickupLocation: "Islamabad Airport",
    itinerary: [
      { day: 1, title: "Taxila Highlights", description: "Museum, Sirkap ruins, Dharmarajika, Jaulian." }
    ],
    photos: [snowLakeImage]
  }
];

export const destinationsById: Record<string, Destination> = Object.fromEntries(
  destinations.map((d) => [d.id, d])
);
