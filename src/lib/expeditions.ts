export type Expedition = {
  id: string;
  title: string;
  peak: string;
  elevation: string;
  duration: string;
  groupSize: string;
  difficulty: number;
  minAge: string;
  pickupLocation: string;
  tourType: string;
  description: string;
  image: string;
  rating?: number;
  reviews?: number;
  price?: string;
};

import k2Image from "@/assets/k2-expedition.jpg";
import broadPeakImage from "@/assets/broad-peak.jpg";
import nangaParbatImage from "@/assets/nanga-parbat.jpg";
import gasherbrumImage from "@/assets/gasherbrum.jpg";

export const expeditions: Expedition[] = [
  {
    id: "k2-expedition",
    title: "K2 PEAK (8611M) EXPEDITION",
    peak: "K2",
    elevation: "8611M",
    duration: "47 Days",
    groupSize: "8-15",
    difficulty: 5,
    minAge: "18+",
    pickupLocation: "Islamabad Airport",
    tourType: "Guided Expedition",
    description:
      "K2, at 8,611 metres above sea level, is the second highest mountain in the world, after Mount Everest. The ultimate mountaineering challenge in the Karakoram range of Pakistan.",
    image: k2Image,
    rating: 4.9,
    reviews: 86,
    price: "$12,500",
  },
  {
    id: "broad-peak-expedition",
    title: "BROAD PEAK (8047M) EXPEDITION",
    peak: "Broad Peak",
    elevation: "8047M",
    duration: "45 Days",
    groupSize: "8-15",
    difficulty: 4,
    minAge: "18+",
    pickupLocation: "Islamabad Airport",
    tourType: "Guided Expedition",
    description:
      "Broad Peak is the 12th highest mountain in the world at 8,047 metres. First ascended in 1957, it offers a challenging yet achievable 8000m summit experience.",
    image: broadPeakImage,
    rating: 4.8,
    reviews: 62,
    price: "$11,900",
  },
  {
    id: "nanga-parbat-expedition",
    title: "NANGA PARBAT (8126M) EXPEDITION",
    peak: "Nanga Parbat",
    elevation: "8126M",
    duration: "40 Days",
    groupSize: "8-15",
    difficulty: 5,
    minAge: "18+",
    pickupLocation: "Islamabad Airport",
    tourType: "Extreme Expedition",
    description:
      "Known as the 'Killer Mountain', Nanga Parbat is the ninth highest mountain in the world. A formidable challenge requiring extensive mountaineering experience.",
    image: nangaParbatImage,
    rating: 4.7,
    reviews: 41,
    price: "$11,500",
  },
  {
    id: "gasherbrum-i-expedition",
    title: "GASHERBRUM I (8080M) EXPEDITION",
    peak: "Gasherbrum I",
    elevation: "8080M",
    duration: "45 Days",
    groupSize: "8-15",
    difficulty: 4,
    minAge: "18+",
    pickupLocation: "Islamabad Airport",
    tourType: "Technical Expedition",
    description:
      "Hidden Peak, as it's also known, offers technical climbing through the beautiful Baltoro Glacier region with stunning views of the Karakoram giants.",
    image: gasherbrumImage,
    rating: 4.8,
    reviews: 73,
    price: "$11,800",
  },
  {
    id: "gasherbrum-ii-expedition",
    title: "GASHERBRUM II (8035M) EXPEDITION",
    peak: "Gasherbrum II",
    elevation: "8035M",
    duration: "42 Days",
    groupSize: "8-15",
    difficulty: 4,
    minAge: "18+",
    pickupLocation: "Islamabad Airport",
    tourType: "Guided Expedition",
    description:
      "Often considered the most accessible of the 8000m peaks, Gasherbrum II provides excellent training for aspiring high-altitude mountaineers.",
    image: gasherbrumImage,
    rating: 4.6,
    reviews: 91,
    price: "$11,200",
  },
];

export const expeditionsById: Record<string, Expedition> = Object.fromEntries(
  expeditions.map((e) => [e.id, e])
);
