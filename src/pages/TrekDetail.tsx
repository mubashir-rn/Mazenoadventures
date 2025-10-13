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
import fmImg1 from "@/assets/Fairy Meadows Trek/1647270477-fairy_meadows_and_the_view_of_nanga_parbat.webp";
import fmImg2 from "@/assets/Fairy Meadows Trek/Nanga-Parbat-base-camp-trek-in-Pakistan-scaled.jpg";
import fmImg3 from "@/assets/Fairy Meadows Trek/fairy-meadows-tour-package-3.jpg";
import fmImg4 from "@/assets/Fairy Meadows Trek/fairy-meadows-tour-prices-2.jpg";
import fmImg5 from "@/assets/Fairy Meadows Trek/fairy-meadows-trek-3.jpg";
import fmImg6 from "@/assets/Fairy Meadows Trek/fairy-meadows-trek-6.jpg";
import wakhan1 from "@/assets/WAKHAN CORRIDOR AND CHILINJI PASS TREK/WAKHAN CORRIDOR AND CHILINJI PASS TREK 1.jpg";
import wakhan2 from "@/assets/WAKHAN CORRIDOR AND CHILINJI PASS TREK/WAKHAN CORRIDOR AND CHILINJI PASS TREK 2.jpg";
import wakhan3 from "@/assets/WAKHAN CORRIDOR AND CHILINJI PASS TREK/WAKHAN CORRIDOR AND CHILINJI PASS TREK 3.jpg";
import wakhan4 from "@/assets/WAKHAN CORRIDOR AND CHILINJI PASS TREK/WAKHAN CORRIDOR AND CHILINJI PASS TREK 4.jpg";
import mazenoImg1 from "@/assets/NANGA PARBAT & MAZENO PASS TREK/bazin-glacier-1.jpeg";
import mazenoImg2 from "@/assets/NANGA PARBAT & MAZENO PASS TREK/bazin-glacier-2.jpeg";
import mazenoImg3 from "@/assets/NANGA PARBAT & MAZENO PASS TREK/down-to-sergalio-base-camp.jpeg";
import mazenoImg4 from "@/assets/NANGA PARBAT & MAZENO PASS TREK/enroute-mazen-high-camp.jpeg";
import mazenoImg5 from "@/assets/NANGA PARBAT & MAZENO PASS TREK/kaeo-pass-lunch.jpeg";
import mazenoImg6 from "@/assets/NANGA PARBAT & MAZENO PASS TREK/karo-pass-3.jpeg";
import mazenoImg7 from "@/assets/NANGA PARBAT & MAZENO PASS TREK/latabo-meadows.jpeg";
import rdbImg1 from "@/assets/Rakaposhi & Diran Base Camp/Altit-Garden Rakaposhi Diran Base Camp .jpg";
import rdbImg2 from "@/assets/Rakaposhi & Diran Base Camp/Altit-old-village-2 Rakaposhi & Diran Base Camp.jpg";
import rdbImg3 from "@/assets/Rakaposhi & Diran Base Camp/Rakaposhi-Wall-1 Rakaposhi & Diran Base Camp.jpg";
import rdbImg4 from "@/assets/Rakaposhi & Diran Base Camp/Rakaposhi1 Rakaposhi & Diran Base Camp.jpg";
import rdbImg5 from "@/assets/Rakaposhi & Diran Base Camp/Rakaposhi_KKH1 Rakaposhi & Diran Base Camp.jpg";
import rdbImg6 from "@/assets/Rakaposhi & Diran Base Camp/Rakaposhi_Peak2-1 Rakaposhi & Diran Base Camp.jpg";
import rdbImg7 from "@/assets/Rakaposhi & Diran Base Camp/rakaposhi-1 Rakaposhi & Diran Base Camp.jpg";
import aroundNpImg1 from "@/assets/arround nangaparbat/np-from-latobo  nangaparbat.jpeg";
import aroundNpImg2 from "@/assets/arround nangaparbat/np-from-mazaeno-pass nangaparbat.jpeg";
import aroundNpImg3 from "@/assets/arround nangaparbat/bazin-glacier-2 nangaparbat.jpeg";
import aroundNpImg4 from "@/assets/arround nangaparbat/enroute-mazen-high-camp nangaparbat.jpeg";
import aroundNpImg5 from "@/assets/arround nangaparbat/heli-coffer-bc nangaparbat.jpeg";
import aroundNpImg6 from "@/assets/arround nangaparbat/latabo-meadows nangaparbat.jpeg";
import aroundNpImg7 from "@/assets/arround nangaparbat/local-houses-rupal-valley nangaparbat.jpeg";
import aroundNpImg8 from "@/assets/arround nangaparbat/mazeno-glacier nangaparbat.jpeg";
import k2BaseImg from "@/assets/k2-basecamp-trek.jpg";
import k2Exp1 from "@/assets/k2 expedition 1.jpg";
import k2Exp2 from "@/assets/k2 expedition 2.jpg";
import k2Trek1 from "@/assets/k2 trekking/k2 trekking 1.jpg";
import k2Trek2 from "@/assets/k2 trekking/K2 Trekking 2.jpg";
import k2Trek3 from "@/assets/k2 trekking/K2 Trekking 3.jpeg";
import k2Trek4 from "@/assets/k2 trekking/K2 Trekking 4.jpeg";
import k2Trek5 from "@/assets/k2 trekking/K2 Trekking 5.jpeg";
import k2Trek6 from "@/assets/k2 trekking/K2 Trekking 6.jpg";
import k2Trek8 from "@/assets/k2 trekking/K2 Trekking 8.jpg";
import k2Trek9 from "@/assets/k2 trekking/K2 Trekking 9.jpg";
import ggl1 from "@/assets/K2 Gondogoro La Trek/K2 Gondogoro La Trek 1.jpg";
import ggl2 from "@/assets/K2 Gondogoro La Trek/K2 Gondogoro La Trek 2.jpg";
import ggl3 from "@/assets/K2 Gondogoro La Trek/K2 Gondogoro La Trek 3.jpeg";
import ggl4 from "@/assets/K2 Gondogoro La Trek/K2 Gondogoro La Trek 4.jpeg";
import ggl5 from "@/assets/K2 Gondogoro La Trek/K2 Gondogoro La Trek 5.jpg";
import ggl6 from "@/assets/K2 Gondogoro La Trek/K2 Gondogoro La Trek 6.jpg";
import rupal1 from "@/assets/Nanga parbat Rupal Face Trek/Nanga parbat Rupal Face Trek 1.jpeg";
import rupal2 from "@/assets/Nanga parbat Rupal Face Trek/Nanga parbat Rupal Face Trek 2.jpeg";
import rupal3 from "@/assets/Nanga parbat Rupal Face Trek/Nanga parbat Rupal Face Trek 3.jpeg";
import rupal4 from "@/assets/Nanga parbat Rupal Face Trek/Nanga parbat Rupal Face Trek 4.jpeg";
import rupal5 from "@/assets/Nanga parbat Rupal Face Trek/ Nanga parbat Rupal Face Trek 5.jpeg";
import rupal6 from "@/assets/Nanga parbat Rupal Face Trek/Nanga parbat Rupal Face Trek 6.jpeg";
import snow1 from "@/assets/arround nangaparbat/BIAFO SNOW LAKE TREK/BIAFO SNOW LAKE TREK 1.jpeg";
import snow2 from "@/assets/arround nangaparbat/BIAFO SNOW LAKE TREK/BIAFO SNOW LAKE TREK 2.jpg";
import snow3 from "@/assets/arround nangaparbat/BIAFO SNOW LAKE TREK/BIAFO SNOW LAKE TREK 3.jpg";
import snow4 from "@/assets/arround nangaparbat/BIAFO SNOW LAKE TREK/BIAFO SNOW LAKE TREK 4.jpg";
import snow5 from "@/assets/arround nangaparbat/BIAFO SNOW LAKE TREK/BIAFO SNOW LAKE TREK 5.jpg";
import snow6 from "@/assets/arround nangaparbat/BIAFO SNOW LAKE TREK/BIAFO SNOW LAKE TREK 6.jpg";
import snow7 from "@/assets/arround nangaparbat/BIAFO SNOW LAKE TREK/BIAFO SNOW LAKE TREK 7.jpg";
import rushImg1 from "@/assets/Rush Phari Lake Trek/RUSH LAKE TREK.jpg";
import rushImg3 from "@/assets/Rush Phari Lake Trek/RUSH LAKE TREK 3.jpg";

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
    images: [
      aroundNpImg1,
      aroundNpImg2,
      aroundNpImg3,
      aroundNpImg4,
      aroundNpImg5,
      aroundNpImg6,
      aroundNpImg7,
      aroundNpImg8
    ],
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
  "rush-lake-trek": {
    id: "rush-lake-trek",
    title: "Rush Phari Lake Trek",
    duration: "14 DAYS / 13 NIGHTS",
    groupSize: "6-12",
    difficulty: 3,
    minAge: "14+",
    pickupLocation: "Gilgit Airport",
    tourType: "Trekking",
    description:
      "Rush Phari Trek in the Karakoram (Rush Phari means sparkling Lake), is one of the most recommended treks for those who want to have a first time trekking experience with a life long pleasant memory. We walk on glaciers, through villages to a look at the real life of those living at foot steps of mighty glaciers along the irrigated terraced fields with the impressive view of the mighty Karakoram Mountains from summit of Rush Peak (5098 Meters). It is the junction of two famous glaciers of Barpu and Bualter. It is interesting that local legends talk about the gender of these glaciers of being male and female and also about their meeting and birth of the new glaciers. Our trek starts at Hoper, a marvelous valley with green fields and fruit orchards which is also famous for its potato seeds which are exported to other parts of Pakistan especially in the Northern Areas. If you have enough skill you can climb Push Peak.",
    images: [rushImg1, rushImg3],
    rating: 4.6,
    reviews: 7,
    bestTime: "June to October",
    price: "$1150",
    itinerary: [
      { day: "1", title: "Islamabad - Arrival at Islamabad. Transfer to Hotel." },
      { day: "2", title: "Islamabad - Chilas - Drive to Chilas 8-10hrs. Overnight at hotel." },
      { day: "3", title: "Chilas - Hopar" },
      { day: "4", title: "Hopar - Shiskin - Trek to Shiskin. Overnight at camp" },
      { day: "5", title: "Shikin - Barpu Giram - Trek to Barpu Giram. Overnight in Camp." },
      { day: "6", title: "Barpu Giram -Rusk Lake - Trek to Rush Lake. Overnight at Camp." },
      { day: "7", title: "Rush Lake and Rest Day" },
      { day: "8", title: "Rush Lake and Rest Day" },
      { day: "9", title: "Datchugan - Hamdar - Trek to Datchugan and Hamdar. Overnight in camp." },
      { day: "10", title: "Hamdar - Hopar - Karimabad - Trek to Hopar, Drive to Karimabad. Overnight at hotel." },
      { day: "11", title: "Karimabad - Khunjerab Pass - Gulmit" },
      { day: "12", title: "Gulmit - Chilas" },
      { day: "13", title: "Chilas - Islamabad - Drive back to Islamabad. Overnight at Hotel." },
      { day: "14", title: "Departure - Transfer to airport" }
    ]
  },
  "mazeno-pass-trek": {
    id: "mazeno-pass-trek",
    title: "NANGA PARBAT & MAZENO PASS TREK",
    elevation: "5400m",
    duration: "21 DAYS / 20 NIGHTS",
    groupSize: "6-10",
    difficulty: 5,
    minAge: "18+",
    pickupLocation: "Islamabad Airport",
    tourType: "Trekking",
    description:
      "Around Nanga Parbat Trek is a challenging but rewarding adventure that takes you on a circular route around the majestic Nanga Parbat, the ninth-highest mountain in the world. This trek offers stunning views of the mountain's various faces, including the iconic Rupal Face, as well as other impressive peaks in the surrounding region. The trek involves crossing three high passes: Mazeno La (5,400 meters), Kado Sagar Pass (4,900 meters), and Khustu Pass (4,840 meters). While Mazeno La presents technical challenges, particularly during the descent, the other two passes are generally less demanding. The trek offers breathtaking panoramic views of Nanga Parbat, its surrounding glaciers, and the surrounding Himalayan landscape. The Around Nanga Parbat Trek is a unique opportunity to explore a remote and unspoiled region of Pakistan, far from the tourist crowds. The trek also offers opportunities to interact with local communities and learn about their culture and traditions.",
    images: [mazenoImg7, mazenoImg1, mazenoImg2, mazenoImg3, mazenoImg4, mazenoImg5, mazenoImg6],
    rating: 4.5,
    reviews: 42,
    bestTime: "May to October",
    price: "$3500",
    emails: [
      "akhtar_nangaparbat@yahoo.com",
      "akhtarnagabarbat@gmail.com"
    ],
    itinerary: [
      { day: "1", title: "Islamabad (600m)", description: "Arrival at Islamabad. Transfer to hotel, afternoon visit of the twin towns of Islamabad and Rawalpindi. Evening presentation of the program." },
      { day: "2", title: "Chilas (1200m) 12 hrs", description: "Drive to Chilas by the Karakorum Highway (KKH). Visit Abbottabad and see petroglyphs in Chilas. Meals and overnight at hotel." },
      { day: "3", title: "Tarishing (2911m) 6 hrs", description: "Drive to Tarshing along the Astore River via Gurikot and Astore. Tarshing is the departure point of the trek. Meals and overnight at camp." },
      { day: "4", title: "Latoba (4000m) 5 hrs", description: "Cross Tarshing and Bashin glaciers, discover Rupal villages. Campsite offers a view of the Rupal face of Nanga Parbat. Meals and overnight at camp." },
      { day: "5", title: "Shaigiri 4450m 4-5 hrs", description: "Follow the northern lateral moraine of the Toshain glacier with views of Leila, Rupal peaks, and Nanga Parbat. View of the Toshain glacier. Meals and overnight at camp." },
      { day: "6", title: "Shaigri", description: "Rest day at Shaigri. Explore the nearby mountains walls. Overnight at Camp." },
      { day: "7", title: "Mazeno BC (4700m) 6 hrs", description: "Trek towards Mazeno pass. This is a high and cold location where porters from Tarishing are often changed. Overnight at camp." },
      { day: "8", title: "Mazeno high Camp. 5399m 4 hrs", description: "Early morning trek to the highest point to cross the Mazeno pass. Overnight at camp." },
      { day: "9", title: "Upper Loiba (4300m) 6 hrs", description: "Climb up is not difficult. The other side is a steady slope on a glacier. Reach birch woods and green meadows at the foot. Meals and overnight at camp." },
      { day: "10", title: "Sargialo Pass (4843m) 7 hrs", description: "Cross Sargialo Pass for a magnificent view of snow-covered mountains including Nanga Parbat Diamer side. Descend to Sargialo campsite. Overnight at camp." },
      { day: "11", title: "Kotghali (3000m) 4 hrs", description: "Walk on the Diamir glacier towards Kotghali, a summer settlement. Interact with locals and enjoy local dairy products. Overnight at camp." },
      { day: "12", title: "Kotghali 6 hrs Rest day", description: "Relaxing day at Kotghali. Option to walk on the glacier and surroundings. View of Nanga Parbat. Free time for laundry. Overnight at camp." },
      { day: "13", title: "Day excursion Nanga Parbat Base Camp", description: "Walk towards the first base camp (3850m) and second Base Camp (4250m), the departure point for most expeditions. View of the ninth highest peak in the world. Option for acclimatization climb of Diamerio peak (6000m). Meals and overnight at camp." },
      { day: "14", title: "Kutgali Pass to Karu Sagar 6-7 hrs", description: "Hike up to Kutgali Pass with amazing views of Nanga Parbat. Reach Karu Sagar. Overnight at camp." },
      { day: "15", title: "Trekking to Gutum Sagar / Base Camp of Jiliper Pass 4 to 5 hrs.", description: "Walk towards Gutum Sagar on green meadows, passing small summer villages. Meals and overnight at camp." },
      { day: "16", title: "Crossing of Jiliper Pass to Bayal", description: "Cross Jiliper Pass to approach the Fairy Meadows region (North face of Nanga Parbat). Overnight at camp." },
      { day: "17", title: "Nanga Parbat Base camp (3300m) Option", description: "Excursions to the Base Camp (4300m) of the north face of Nanga Parbat. Visit the memorial of early expeditions, including the first successful 1953 expedition. Trek back to Fairy Meadows. Overnight at wooden huts." },
      { day: "18", title: "Fairy Meadows – Naran 7-8 hrs", description: "Trek back to Tato, then take jeeps to KKH and drive over Babusar pass to Naran. Overnight at Hotel." },
      { day: "19", title: "Naran - Islamabad", description: "Drive towards Islamabad. If time allows, visit Taxila museum and archaeological sites. Overnight at Islamabad hotel." },
      { day: "20", title: "Islamabad", description: "Sightseeing in Rawalpindi (Raja Bazar) and modern Islamabad (Shah Faisal Mosque, Margala hills). Farewell dinner. Overnight in Hotel." },
      { day: "21", title: "Departure", description: "Transfer to airport for onward international flight." }
    ]
  },
  "wakhan-corridor-trek": {
    id: "wakhan-corridor-trek",
    title: "WAKHAN CORRIDOR AND CHILINJI PASS TREK",
    elevation: "5290m",
    duration: "22 Days",
    groupSize: "6-8",
    difficulty: 3,
    minAge: "18+",
    pickupLocation: "Islamabad Airport",
    tourType: "Trekking",
    description:
      "Ancient Wakhan Corridor is truly one of the finest treks offered within Hindukush Range in Pakistan, exploring an area visited by very few tourists as it has recently been opened for foreigners. We trek through the beautiful and scenic mountain villages in Chitral valley under the shadow of Tirichmir peak rising to 7708 meters, the highest peak in the Hindukush range. Alexander the great passed through this mountain range in 326 B.C leaving behind Greek traditions and customs, which to this day are reflected in the indigenous tribes residing in isolated Kalash valleys. After driving through the fabulous Hindukush and Hindu Raj mountains we reach the Yarkhun valley from where the exciting trek begins.\nFrom here you trek on one of the offshoots of the legendry Silk Road, traversed by camels and yak caravans of ancient times from the bazaars of Samarkand and Bukhara of central Asia to the Indian Sub Continent. It's an enchanting land of extensive high grazing pastures with serene lakes set against the back drop of high towering snow caped peaks and evergreen meadows.\nThe locals call this the roof of the world as it serves the beautiful landscape, large herds of Yaks, goats and sheep can be seen grazing across the fertile and sweet grassy meadows of this high plateau. From here we trek down to the Ishkoman valley or ascend to the path leading to Chilinji Pass at 5290 meters and enter Chupurson valley in upper Hunza. The trek ends at Babagundi Ziarat, an ancient Sufi shrine with a large following. From here you drive by jeep to the Karakoram Highway and proceed to Hunza and Gilgit.",
    images: [wakhan1, wakhan2, wakhan3, wakhan4],
    rating: 4.6,
    reviews: 34,
    bestTime: "June to October",
    price: "$2300",
    emails: [
      "akhtar_nangaparbat@yahoo.com",
      "akhtarnagabarbat@gmail.com"
    ],
    itinerary: [
      { day: "1", title: "Islamabad", description: "Morning arrive Islamabad international airport, meet and Transfer to hotel. Afternoon visit the Shah Faisal Mosque and Daman-e-Koh in Margalla hills to have a magnificent view of Islamabad and the colorful bazaars of Rawalpindi. Meals and overnight in hotel." },
      { day: "2", title: "Islamabad – Dir", description: "Morning drive to Dir, a scenic town at the foot of Lowari Pass; en-route visit the archaeological museum at Chakdara. Meals and overnight at hotel." },
      { day: "3", title: "Lowari Pass – Chitral", description: "Drive over scenic and adventurous Lowari Pass (3118m) with panoramic views of Hindukush, through pine forests and valleys to Chitral. Meals and overnight at hotel." },
      { day: "4", title: "Kalash Valley", description: "Full day excursion to Bomboret and Rambur to explore, visit local houses and learn customs and traditions of Kalash tribes. Return to Chitral. Overnight hotel." },
      { day: "5", title: "Yarkhun – Lasht", description: "4x4 jeep through scenic mountain villages under snow-covered peaks, lush meadows along Chitral River, to Yarkhun and Lasht. Meals and overnight in tents." },
      { day: "6", title: "Kishmanja", description: "First trekking day along green meadows on the Yarkhun River past summer shepherd settlements. Meals and overnight in tents." },
      { day: "7", title: "Iskharwaz", description: "Gentle walk through meadows with wild willow and birch forest at altitude. Meals and overnight in tents." },
      { day: "8", title: "Chikar", description: "Easy walk through lush meadows beneath hanging snow peaks and glaciers to Chikar, a scenic village at the mouth of Darkot Pass. Overnight tents." },
      { day: "9", title: "Broghil", description: "Scenic walk on high plateaus of the Wakhan, near the famous Broghil Pass; Gujar nomads and high pastures. Meals and overnight in tents." },
      { day: "10", title: "Karumber Lake", description: "Continue across high plateaus of the Wakhan; Gujar nomads with herds in high grazing pastures. Meals and overnight in tents." },
      { day: "11", title: "Warghut", description: "Beautiful and easy trek towards the Chilinji Pass and Ishkoman valley through juniper/birch forests and Gujar summer settlements. Meals and overnight in tents." },
      { day: "12", title: "Chilinji Base Camp", description: "Trek to green meadows of high grazing pastures; camp at foot of Chilinji Pass amid high snow-capped peaks. Meals and overnight tents." },
      { day: "13", title: "Chilinji Base Camp", description: "Rest and exploration day at base; prepare for pass crossing. Meals and overnight in tents." },
      { day: "14", title: "Chilinji Pass – Babaghundi Ziarat", description: "Early start to cross Chilinji Pass (5290m). Steep ascent over rocky trail to panoramic summit, then descend into Chupurson valley to Babaghundi Ziarat. Meals and overnight tents." },
      { day: "15", title: "Babaghundi Ziarat", description: "Contingency/rest/exploration day in beautiful mountain village at Sufi shrine. Meals and overnight tents." },
      { day: "16", title: "Khunjerab Pass – Gulmit", description: "Drive through Chupurson valley to KKH; continue to Khunjerab Pass (4733m). After brief stop at Pak-China border, return to Gulmit in Upper Hunza. Overnight hotel." },
      { day: "17", title: "Karimabad", description: "Drive to Karimabad, capital of Hunza; visit ancient rock carvings, old wooden mosques and watch-towers in Ganesh. Visit Baltit and Altit Forts; free afternoon. Overnight hotel." },
      { day: "18", title: "Karimabad", description: "Free day to explore or drive to Duikar meadows for sunset views; enjoy views from Eagles Nest Hotel. Overnight hotel." },
      { day: "19", title: "Karimabad – Gilgit", description: "Drive back to Gilgit; stop at Rakaposhi viewpoint (7788m). Visit 7th-century Buddha Rock and explore Gilgit bazaars. Overnight hotel." },
      { day: "20", title: "Gilgit – Besham", description: "Drive to Besham with views of Nanga Parbat (8125m), passing villages along the Indus; visit 4th-century rock carvings at Chilas and Shatial. Overnight hotel." },
      { day: "21", title: "Besham – Islamabad", description: "Drive to Islamabad via Mansehra and Abbottabad; visit Taxila Museum and the excavated cities of Sirkap, Sirsukh and Julian Monastery. Overnight hotel." },
      { day: "22", title: "Departure", description: "Fly out." }
    ]
  },
  "rakaposhi-base-camp-trek": {
    id: "rakaposhi-base-camp-trek",
    title: "Fairy Meadows Nanga Parbat base camp Trek",
    duration: "10 Days",
    groupSize: "4-12",
    difficulty: 2,
    minAge: "12+",
    pickupLocation: "Islamabad Airport",
    tourType: "Trekking",
    description:
      "Fairy Meadows Trek offers an adventure of a lifetime in just 5 days. It offers a drive along Indus River, a small hike, a view of Nanga Parbat (8126m), clear view of stars and short hikes in to meadows through small valleys of diamer district. Fairy Meadows Trek starts with a jeep ride from Raikot Bridge to Tatu Village. The first stop of the trek is Chilas, a city located in the region of Gilgit-Baltistan.\n\nThere are three ways to reach Chilas for the Fairy Meadows Trek, the first one and most feasible in terms of exploring scenic beauty is via NaranKaghan. It takes about 10-12 hrs to reach Chilas via Naran-Kaghan and Babusar Top. Second option is via Karakoram Highway. Babusar Top is closed due to heavy snowfall in winters from November to May, so the alternate route that adventurer’s take is via Karakoram Highway through Mansehra, Besham and Kohistan region. This route take about 14-16 hours from Islamabad. Third option is to take a one hour flight from Islamabad to Gilgit and a 2-3 hour drive to Chilas by road.\n\nThe best time to do this trek is from April-September, the greenery of the meadows with snow on the top of the mountains takes you close to nature, away from hectic urban life. Any health person can do this trek, it is an easy, short and perfect for beginners. This trek also offers a lot of adventure. The jeep track from Raikot Bridge to Tatu village is one of the most dangerous jeep tracks in the world, yet the local jeep driver will drive like a walk in the park.\n\nPricing (per person):\n- USD 990 for 8-member foreign group\n- USD 1,190 for 6-member foreign group\n- USD 1,390 for 4-member foreign group\n- USD 1,590 for 2-member foreign group\n- USD 1,750 for a single-member tour.",
    rating: 4.6,
    reviews: 10,
    bestTime: "June to September",
    images: [fmImg1, fmImg2, fmImg3, fmImg4, fmImg5, fmImg6],
    emails: [
      "akhtar_nangaparbat@yahoo.com",
      "akhtarnagabarbat@gmail.com"
    ],
    itinerary: [
      { day: "1", title: "Arrival of the Fairy Meadows Trek Participants", description: "Tour guide and driver pick up from airport. Hotel check-in, refresh, and Islamabad city tour (Shakarparian, Pakistan Monument, Faisal Mosque, Daman-e-Koh). Optional Rawalpindi visit. Lunch at Monal, dinner at hotel." },
      { day: "2", title: "Departure for the Fairy Meadows Trek", description: "Drive via Karakoram Highway along the Indus River (weather/flight dependent). Route via Taxila, Haripur, Mansehra, Besham, Kohistan. Lunch at Besham. Expect 14–16 hours to reach Chilas. Dinner and overnight at Chilas hotel." },
      { day: "3", title: "Fairy Meadows Jeep ride and Trek", description: "Early start. One-hour drive to Raikot Bridge, then jeep to Tatu village (dramatic jeep track). Hike 3–4 hours to Fairy Meadows. Overnight in camps." },
      { day: "4", title: "Full day at Fairy Meadows", description: "Breakfast in camps. Free day for rest, short hikes, local interaction, photography, star gazing. Lunch and dinner in camps. Overnight in camps." },
      { day: "5", title: "Final Day of Fairy Meadows Trek", description: "Hike down to Tatu, jeep to Raikot Bridge, drive to Karimabad (Hunza). Tea at Rakaposhi viewpoint en route. Evening walk in Karimabad bazaar if time allows. Overnight at Karimabad (Baltit Inn – Serena Hotels)." },
      { day: "6", title: "Trek to Tour (Hunza Valley)", description: "Visit Baltit Fort (900+ years) and Altit Fort (700+ years). Stroll Royal Gardens of Altit. Sunset at Eagle’s Nest View Point. Overnight in Karimabad (Baltit Inn – Serena Hotels)." },
      { day: "7", title: "Visit to Khunjerab Top", description: "Early breakfast and depart for Pak-China border. Cover Ganish Bridge, Attabad Lake, Pak-China tunnels, Passu Cathedral, Batura Glacier, Wildlife Conservation Area (possible ibex, snow leopard, marmots). Return to Karimabad for overnight." },
      { day: "8", title: "Visit to Nagar Valley", description: "Excursion to Hopper Glacier View Point (Nagar). Free time for shopping and local food (don’t miss walnut cake). Overnight in Karimabad (Baltit Inn – Serena Hotels)." },
      { day: "9", title: "Drive Back to Chilas", description: "Drive back along KKH to Chilas for overnight. If Babusar Top is open, Naran may be used as alternate stop on Day 8." },
      { day: "10", title: "Islamabad", description: "Departure for Islamabad and drop at the hotel." }
    ]
  },
  "snow-lake-bifo-hispar-trek": {
    id: "snow-lake-bifo-hispar-trek",
    title: "Biafo Hispar Snow Lake",
    elevation: "5151m",
    duration: "23 DAYS / 22 NIGHTS",
    groupSize: "6-10",
    difficulty: 5,
    minAge: "18+",
    pickupLocation: "Islamabad Airport",
    tourType: "Wilderness Trek",
    description:
      "Biafo & Hispar Glaciers have a total length of 126 km and are the longest of their kind outside of the Polar Regions. They meet at the 5,150 m high Hispar Pass. This immense highway of ice and rock connects the antique kingdoms of Nagar in the West and Askoli (little Tibet) in the East. This route was extensively used to connect the Silk Route with the Indian Sub-Continent, China and Tibet. Mr. H.W. Tilman, an English trekker, claimed in 1937 that he had seen the footprints of Yeti on the glacier. The same way served the people of Hunza to invade Askoli. Later it was used as a more progressive way between Hunza and Askoli and the people of Hunza came over to Askoli to play Polo with them. This life-long trekking experience ends at the beautiful Hunza Valley, the Valley of Eternal Youth and home of the most progressive people compared with other parts of the Northern Areas. The people of Hunza are known for their longevity. In Karimabad we visit Altit and Baltit Fort and enjoy the unforgettable view from the roof-top of Baltit on Rakaposhi and Diran. Glaciologists after conducting tests on the Snow Lake confirmed that the thickness of snow is one mile. Here one can observe the rare species of animals in abundance like Snow Leopards, Himalayan Bears, Ibex, Markhore and some times the Marco Polo Sheep.",
    images: [snow1, snow2, snow3, snow4, snow5, snow6, snow7],
    rating: 4.9,
    reviews: 67,
    bestTime: "July to September",
    price: "$3500",
    emails: [
      "akhtar_nangaparbat@yahoo.com",
      "akhtarnagabarbat@gmail.com"
    ],
    itinerary: [
      { day: "1", title: "Departure from your hometown", description: "Depart From Your Home Country." },
      { day: "2", title: "Islamabad", description: "Meeting upon arrival at Islamabad airport and transfer to hotel. Afternoon tour of Rawalpindi and Islamabad including Folk Heritage Museum, Faisal Mosque, Shakarparian, Daman-e-Koh. Overnight hotel." },
      { day: "3", title: "Fly to Skardu or Drive to Chilas", description: "Fly to Skardu (weather permitting). If flight cancelled, drive KKH to Chilas (460 km, 10–12 hrs)." },
      { day: "4", title: "Day free at Skardu or Drive from Chilas to Skardu", description: "Free day in Skardu with optional excursions (Satpara Lake, Skardu Rock). If flight cancelled Day 3, drive Chilas–Skardu (8–10 hrs)." },
      { day: "5", title: "Drive to Askole (3000m)", description: "Drive north through Shigar valley to Askole, trailhead village. Final jeep section may require walking. Overnight tents (7–8 hrs)." },
      { day: "6", title: "Trek to Namla", description: "Begin along Braldu River through Askole to reach Biafo Glacier and Namla camp at 3400m. Approx. 6–7 hrs." },
      { day: "7", title: "Trek to Mango", description: "Continue on Biafo glacier/fringe to Mango (yak herders’ summer grounds). Camp at 3650m. Approx. 3–4 hrs." },
      { day: "8", title: "Trek to Baintha", description: "Easy glacier day towards Baintha (4000m) with views of Latok group and nearby big walls; ablation valley meadows. Approx. 4–6 hrs." },
      { day: "9", title: "Free Day", description: "Acclimatization day at Baintha." },
      { day: "10", title: "Trek to Karfogoro", description: "Ablation valley lakes and willow bushes, then onto smooth glacier ice; habitat of bears and ibex; camp ~4400m. Approx. 7–8 hrs." },
      { day: "11", title: "Trek to Snow Lake", description: "Rope up over snow-bridged crevasses to reach the western border of Snow Lake near Hispar Pass at ~4780m. Approx. 2–3 hrs." },
      { day: "12", title: "Free Day to Explore Snow Lake", description: "Optional exploration across the vast Snow Lake; possible rare snow leopard sightings. Named by Martin Conway (1892)." },
      { day: "13", title: "Trek to Base of Hispar Pass", description: "Cross Snow Lake and gradually ascend towards Hispar La camp." },
      { day: "14", title: "Cross Hispar Pass (5151m) – Khanibasa", description: "Pre-dawn rope team ascent; traverse among seracs. Panoramic views across Snow Lake. Descend and camp near 4580m. Approx. 7–8 hrs." },
      { day: "15", title: "Trek Khanibasa – Yutmaru", description: "Cross Khanibasa Glacier; views of Kanjut Sar (7700m). Follow lateral moraine to Yutmaru (4330m). Approx. 5–6 hrs." },
      { day: "16", title: "Trek Yutmaru – Bitanmal", description: "Traverse Yutmaru Glacier, then climb cliff with views back to Hispar Pass; vistas of Kunyang Chhish (7852m). Camp ~3902m. Approx. 6–7 hrs." },
      { day: "17", title: "Rest day at Bitanmal", description: "Summer pasture with willows and flowers; shepherd settlements in season." },
      { day: "18", title: "Trek to Hispar", description: "Green ablation valley pastures to Hispar River; cross bridge and climb to Hispar village; camp near river at ~3200m. Approx. 5–6 hrs." },
      { day: "19", title: "Drive to Karimabad", description: "If needed, short walk to Huru then 4×4 jeeps to Karimabad in Hunza; views of Rakaposhi, Ultar, and Golden Peak. Overnight hotel." },
      { day: "20", title: "Free day in Karimabad and Visit Forts", description: "Explore Karimabad; visit Baltit and Altit Forts on the Silk Route branch of the Karakoram." },
      { day: "21", title: "Karimabad – Chilas (1265m)", description: "Drive to Chilas; visit Thalpan rock carvings en route. Overnight hotel (4–5 hrs)." },
      { day: "22", title: "Chilas to Islamabad via Babusar", description: "Early start over Babusar Pass (4173m); lunch at Naran; continue to Islamabad. Overnight hotel." },
      { day: "23", title: "Departure", description: "Morning transfer to airport for international flight." }
    ]
  },
  "nanga-parbat-rupal-face-trek": {
    id: "nanga-parbat-rupal-face-trek",
    title: "Nanga parbat Rupal Face Trek",
    elevation: "4600m",
    duration: "10 DAYS / 09 NIGHTS",
    groupSize: "4-15",
    difficulty: 3,
    minAge: "14+",
    pickupLocation: "Islamabad Airport",
    tourType: "Trekking",
    description:
      "Nanga Parbat Rupal Face Trek is a challenging yet rewarding trek that offers stunning views of the second-highest mountain in Pakistan. Nanga Parbat is not a single peak but consists of a 20km long series of peaks and ridges culminating in an ice crest of 8125m. Its South Face known as Rupal Face is ~5000m high, while the North or Raikot Face plunges over 7000m from the summit to the Indus forming one of the world’s deepest gorges. This trek follows the south side of Nanga Parbat through the lush Rupal Valley to Herrligkoffer Base Camp at ~4600m, offering breathtaking views of the massive Rupal Face rising over 5,000m from the valley floor.",
    images: [rupal1, rupal2, rupal3, rupal4, rupal5, rupal6],
    rating: 4.7,
    reviews: 203,
    bestTime: "June to September",
    price: "$1800",
    emails: [
      "akhtar_nangaparbat@yahoo.com",
      "akhtarnagabarbat@gmail.com"
    ],
    itinerary: [
      { day: "1", title: "Islamabad", description: "Arrival at Islamabad. Transfer to hotel; afternoon visit of the twin towns of Islamabad and Rawalpindi. Evening program presentation." },
      { day: "2", title: "Islamabad - Chilas (1200m)", description: "Drive via Karakoram Highway and Potwar plateau into forested ridges; pass Abbottabad (1220m). Chilas lies on the Indus, famous for petroglyphs. Overnight hotel. Option: Fly to Gilgit then drive to Tarishing; or drive via Babusar to Chilas." },
      { day: "3", title: "Tarishing (2911m) – 6 hrs", description: "Drive along Astore River via Gurikot and Astore to Tarishing, at the end of the jeep road and start point of trek. Overnight camp." },
      { day: "4", title: "Herrligkoffer BC", description: "Begin trekking with porters towards Herrligkoffer Base Camp. Cross Lower and Upper Rupal villages, Tarshing and Bashin glaciers, and meadows with grand Rupal Face views. Lunch at BC; explore while team sets camp. Overnight tents." },
      { day: "5", title: "Latoboh (4000m)", description: "Break camp and trek towards Latoboh; support team and porters rendezvous at lunch. Overnight camp." },
      { day: "6", title: "Latoba (4000m) & Shaigiri (4450m)", description: "Follow northern lateral moraines of Toshain and Shaigiri glaciers with views to Leila and Rupal peaks and Nanga Parbat. Overnight camp." },
      { day: "7", title: "Tarishing (2911m)", description: "Trek back to Tarishing, interact with locals and learn mountain lifestyle. Overnight at Tarishing hotel." },
      { day: "8", title: "Chilas – 6 hrs", description: "Drive to Chilas. Overnight hotel." },
      { day: "9", title: "Chilas to Islamabad", description: "Follow Indus and KKH to Islamabad; lunch at Besham. Transfer to hotel. Overnight hotel." },
      { day: "10", title: "Explore Rawalpindi & Islamabad", description: "Explore bazaars (Saddar, Moti, Raja, Kashmiri; Sarafa for gold/silverware). Afternoon visit Lok Virsa, Pakistan Monument Museum, Faisal Mosque, Daman-e-Koh. Farewell dinner with Nanga Parbat Adventure team. Overnight hotel." },
      { day: "11", title: "Departure", description: "Morning transfer to airport for international flight." }
    ]
  },
  "gondogoro-la-trek": {
    id: "gondogoro-la-trek",
    title: "K2 Gondogoro La Trek",
    elevation: "5585m",
    duration: "22 DAYS / 21 NIGHTS",
    groupSize: "6-12",
    difficulty: 5,
    minAge: "18+",
    pickupLocation: "Islamabad Airport",
    tourType: "Technical Trek",
    description:
      "K2 Gondogoro La Trek is a popular adventurous trek. This Trek takes you through some of the most stunning scenery in the Karakoram Mountains, Including K2 Base Camp, Gondogoro La pass, and the Baltoro Glacier. K2 and Gondogoro La Trek, interesting and challenging trek for passionate trekkers. It brings you landscapes where four 8000 meters peaks give a breathtaking view. It is one of the most famous and impressive trek routes in Pakistan. Highlights: Panoramic Flight over the Mighty Nanga Parbat. Concordia: View of four 8000m Mountain Peaks, Broad Peak, Gasherbrums, and K2. Walk on the Baltoro Glacier – one of the longest glaciers outside the polar regions. One of the world's most interesting treks. Cultural interactions.",
    images: [ggl1, ggl2, ggl3, ggl4, ggl5, ggl6],
    rating: 4.8,
    reviews: 98,
    bestTime: "June to September",
    price: "$4800",
    emails: [
      "akhtar_nangaparbat@yahoo.com",
      "akhtarnagabarbat@gmail.com"
    ],
    itinerary: [
      { day: "1", title: "Departure from Home Town", description: "Most flights depart in the afternoon and land in Islamabad the next morning." },
      { day: "2", title: "Arrival in Islamabad", description: "Arrive Islamabad and transfer to hotel. Afternoon city tour of Rawalpindi and Islamabad. Overnight hotel." },
      { day: "3", title: "Flight Islamabad – Skardu (2,228m) +1688m", description: "Short but spectacular 60-minute flight to Skardu. Transfer to hotel (Masherbrum Hotel or K2 Concordia Motel)." },
      { day: "4", title: "Free Day at Skardu", description: "Preparation day; visit Skardu bazaar and Khurpucho Fort. Note: If day-2 flight was cancelled, this day is used to fly Islamabad–Skardu (no free day)." },
      { day: "5", title: "Drive Skardu – Askoli (3000m) +772m", description: "Spectacular 6–7 hrs (129 km) 4x4 drive crossing Braldu River multiple times via Dassu, Apligon, Pakora, Hoto Chongo, Thongal. Overnight tents." },
      { day: "6", title: "Trek Askoli – Jhola (3200m) +200m", description: "6–7 hrs (12.6 km). Walk along Braldu River, via Korofoung to Jhola. Views of Bakhor Das (5809m) and Biafo Glacier. Cross Dumordo River. Overnight tents." },
      { day: "7", title: "Jhola – Paiju (3450m) +250m", description: "6–7 hrs (16.6 km). Undulating walk with first dramatic mountain views: Baltoro snout, Cathedral & Trango Towers, and distant K2 triangle. Overnight tents." },
      { day: "8", title: "Rest day at Paiju (3450m)", description: "Local exploration and porter prep day for further K2 & Gondogoro La trek; short acclimatization hike; evening songs/dance with porters." },
      { day: "9", title: "Paiju – Khubertse (3990m) +540m", description: "5–6 hrs (10.8 km). Views of Paiyu Peak (6610m), Uli Biaho (6417m), Great Trango (6286m), Lobsang Spire (5707m), Cathedral group. Overnight tents." },
      { day: "10", title: "Khubertse – Urdukas (4050m) +60m", description: "3–4 hrs (5.1 km). Traverse glacier and ablation valleys near Liligo, alternating lateral moraine and glacier. Camp with extraordinary views." },
      { day: "11", title: "Urdukas – Goro II (4380m) +330m", description: "5–6 hrs (12.1 km). Spectacular views of Masherbrum (7821m), Muztagh Tower (7284m), Biarchedi (6781m), Gasherbrum IV (7925m). Overnight tents." },
      { day: "12", title: "Goro II – Concordia (4650m) +270m", description: "4–5 hrs (9.2 km). Golden opportunity to see K2 (8611m), Broad Peak (8047m), GI (8068m), GII (8035m), Sia Kangri (7422m), Muztagh Tower, GIV, etc." },
      { day: "13", title: "Excursion to Broad Peak BC and K2 Base Camp (5135m) +485m", description: "8–10 hrs day trip to Broad Peak BC and K2 BC with immense 7000–8000m panoramas. Return to Concordia for overnight." },
      { day: "14", title: "Concordia – Ali Camp (5010m) +360m", description: "4–5 hrs (9.5 km). Traverse Baltoro crevasses, then gradual snow/ice. Mighty Chogolisa (7665m) to the south. Early sleep for pass day." },
      { day: "15", title: "Ali Camp – Hispung via Gondogoro La (5680m)", description: "9–10 hrs. Pre-dawn start. Steep snow ascent with possible fixed ropes; unmatched views from pass of K2, Broad Peak, Gasherbrums, Masherbrum. Steep descent on Hushe side. Overnight tents." },
      { day: "16", title: "Hispung – Saicho (3330m) -1260m", description: "5–6 hrs. Descend from icy landscapes to meadows/pastures at Saicho with views of Namika Peak and Defokhar. Overnight tents." },
      { day: "17", title: "Saicho – Hushe (3050m) -280m", description: "4–5 hrs (9.3 km). Along Gondogoro River with views of K6, K7 and Link Sar. Pass summer settlements to green fields of Hushe. Overnight tents." },
      { day: "18", title: "Rest day at Hushe / Free day", description: "Optional treks for K2 viewpoint from Homebrok (6–8 hrs) or Mashabrum glacier viewpoint (6–7 hrs)." },
      { day: "19", title: "Hushe – Skardu (2228m) -822m", description: "6–7 hrs (180 km) 4x4 drive to Skardu. Overnight at Masherbrum Hotel or K2 Concordia Motel." },
      { day: "20", title: "Skardu – Islamabad (507m)", description: "Fly to Islamabad (weather dependent). If cancelled, wait for next day flight. Sightseeing at Taxila museum and sites if time allows. Overnight hotel." },
      { day: "21", title: "Sightseeing of Islamabad (507m)", description: "If day-20 flight cancelled, use this day for Skardu–Islamabad. Otherwise Islamabad sightseeing: Lok Virsa Museum, bazaars, farewell dinner at Monal." },
      { day: "22", title: "Fly back to Home", description: "Transfer to Islamabad airport for international departure." }
    ]
  },
  "k2-base-camp-trek": {
    id: "k2-base-camp-trek",
    title: "K2 BASE CAMP TREK",
    elevation: "5150m",
    duration: "22 DAYS / 21 NIGHTS",
    groupSize: "6-12",
    difficulty: 4,
    minAge: "16+",
    pickupLocation: "Islamabad Airport",
    tourType: "Classic Trek",
    description:
      "K2 Base Camp Trek is one of the most adventurous trek in Karakoram starts from the village of Askoli, the last permanent settlement on the Braldu River in Shigar valley of Baltistan and Skardu, the headquarter town of Baltistan, known as little Tibet. It offers a gateway for adventure lovers to the beautiful valleys of Shangri-La, 'Heaven on Earth' the name described by James Hilton in his Novel 'The Last Horizons'. The K2 Base Camp Trek is more than just a physical journey—it's an expedition into one of the planet's last true wildernesses, offering a rare chance to stand beneath the towering spire of a mountain that has humbled even the greatest climbers in history. Highlights: Concordia: Known as the 'Throne Room of the Mountain Gods' with 4 of the 14 eight-thousanders visible. K2 Base Camp: A remote, stark landscape beneath one of the most legendary peaks. Baltoro Glacier: One of the largest glaciers outside the polar regions. Mountain Views: K2, Broad Peak, Gasherbrum I–IV, Trango Towers, and more. Overview: The K2 Base Camp Trek is a legendary high-altitude adventure that leads trekkers through the heart of the Karakoram Range in northern Pakistan, to the foot of the world's second-highest mountain, K2 (8,611 meters / 28,251 feet). Renowned for its remote wilderness, dramatic mountain scenery, and physical demands, this trek is considered one of the most spectacular and challenging in the world. Starting from the rugged village of Askole near Skardu, the route follows the mighty Baltoro Glacier, passing iconic peaks such as Trango Towers, Broad Peak, and the Gasherbrum group. The journey culminates at Concordia, a natural amphitheater surrounded by some of the tallest and most striking mountains on Earth, and then continues to K2 Base Camp, where climbers prepare for their summit attempts. Unlike popular commercial routes like Everest Base Camp, the K2 trek remains wild, raw, and largely untouched by mass tourism. Due to the region's remoteness and technical terrain, it requires proper preparation, acclimatization, and the support of licensed local guides and porters. Preparation: Fitness: Excellent physical condition required — long, high-altitude trekking. Previous experience in multi-day treks or mountaineering is highly recommended. Gear: Cold-weather and glacier trekking gear (layers, crampons, sleeping bag rated to -20°C, etc.) Trekking poles, UV protection, high-calorie food/snacks Satellite communication gear (recommended). Challenges & Considerations: Long glacier walks (sometimes over unstable moraine). Unpredictable weather. Limited medical facilities. Altitude sickness risk. Logistics can be complex – experienced support staff essential.",
    images: [
      k2BaseImg,
      k2Trek1,
      k2Trek2,
      k2Trek3,
      k2Trek4,
      k2Trek5,
      k2Trek6,
      k2Trek8,
      k2Trek9,
      k2Exp1,
      k2Exp2
    ],
    rating: 4.9,
    reviews: 156,
    bestTime: "June to September",
    price: "$4500",
    emails: [
      "akhtar_nangaparbat@yahoo.com",
      "akhtarnagabarbat@gmail.com"
    ],
    itinerary: [
      { day: "1", title: "Islamabad", description: "Morning arrive Islamabad international airport, meet and transfer to hotel. Afternoon city sight seeing of Rawalpindi and Islamabad, visit the Shah Faisal Mosque and Daman-e-Koh viewpoint. Overnight hotel." },
      { day: "2", title: "Skardu", description: "Morning fly to Skardu (weather permitting). Spectacular 45-minute flight over Himalayas and Karakoram with views of Nanga Parbat and K2 on clear days. Transfer to hotel." },
      { day: "3", title: "Askoli", description: "Drive by 4x4 jeeps to Askoli via Shigar Fort and 17th-century mosque, passing scenic villages along the Braldu River. Overnight camp (7–8 hours)." },
      { day: "4", title: "Korofan", description: "First trekking day along Braldu River, crossing Biafo Glacier moraines to a beautiful campsite. Meals and overnight in camp (4 hours)." },
      { day: "5", title: "Jollah", description: "Trek towards Jolah with magnificent views of Biafo Glacier and surrounding peaks. Cross Dumurdo River before reaching Jolah. Overnight tents (3 hours)." },
      { day: "6", title: "Payu", description: "Gentle walk along the Braldu River across meadows and streams to Payo. Meals and overnight in tents (5–6 hours)." },
      { day: "7", title: "Payu (Rest Day)", description: "Traditional rest day for porter preparations (chapattis and pack lunches) before entering Baltoro Glacier. Free time to explore. Overnight camp." },
      { day: "8", title: "Khobarse", description: "Begin trekking on Baltoro Glacier with views of Great Trango Tower, Uli Biaho, and Payu Peak. Cross and walk along moraines. Overnight camp (5–6 hours)." },
      { day: "9", title: "Urdukas", description: "Walk along Baltoro moraines with stunning mountain vistas. Meals and overnight in camp (4–5 hours)." },
      { day: "10", title: "Goro-II", description: "Continue on the Baltoro with views of Masherbrum, Mustagh Tower and other peaks. Overnight camp (5–6 hours)." },
      { day: "11", title: "Concordia", description: "Easy walk on the Baltoro facing Gasherbrum IV (7925m) and Broad Peak (8048m), with countless snow-clad peaks around. Overnight camp (6–7 hours)." },
      { day: "12", title: "Concordia (Free Day)", description: "Rest and exploration at Concordia—the junction of Godwin-Austen and Vigne glaciers—with panoramic views of K2, Broad Peak, Gasherbrums, Baltoro Kangri and many more. Overnight camp." },
      { day: "13", title: "K2 Base Camp", description: "Trek on Godwin-Austen Glacier towards K2 Base Camp, passing Broad Peak Base Camp. Visit the Gilkey Memorial. Overnight camp (7–8 hours)." },
      { day: "14", title: "Concordia", description: "Return to Concordia along Godwin-Austen Glacier with views of Chogolisa and Baltoro Kangri. Overnight camp (6–7 hours)." },
      { day: "15", title: "Urdukas", description: "Trek back along the Baltoro with views of Mustagh Tower and the Cathedral group. Overnight camps (5–6 hours)." },
      { day: "16", title: "Payu", description: "Return to Payu along glacier moraines with Great Trango and Payu Peak ahead. Overnight camp (6–7 hours)." },
      { day: "17", title: "Jolah", description: "Trek back to Jolah following the Braldu River. Overnight tents." },
      { day: "18", title: "Askoli", description: "Return to Askoli, cross Dumurdo River bridge and pass Biafo Glacier. Overnight camp (3–4 hours)." },
      { day: "19", title: "Skardu", description: "Drive to Skardu via scenic mountain villages and narrow gorges along the Braldu River. Overnight hotel (7–8 hours)." },
      { day: "20", title: "Islamabad", description: "Fly to Islamabad (weather dependent). If cancelled, drive to Chilas via Indus River and the confluence of the Himalaya, Karakoram and Hindu Kush ranges. Overnight hotel." },
      { day: "21", title: "Islamabad", description: "Free day in Islamabad with debriefing at the Ministry of Tourism OR drive Chilas to Islamabad visiting ancient Buddhist rock carvings en route. Overnight hotel." },
      { day: "22", title: "Departure", description: "Transfer to airport." }
    ]
  },
  "biafo-glacier-trek": {
    id: "biafo-glacier-trek",
    title: "Rakaposhi & Diran Base Camp",
    duration: "11 DAYS / 10 NIGHTS",
    groupSize: "3-8",
    difficulty: 5,
    minAge: "18+",
    pickupLocation: "Islamabad Airport",
    tourType: "Trekking",
    description:
      "Rakaposhi peak 7788meters high above sea level located in the Karakoram range, is one of the most beautiful and easy accessible to any other mountain peaks in Karakoram this beautiful peak can be seen from all directions and surrounding valleys.\nDiran peak 7200 meters above sea level in the same Rakaposhi massive and junction of two glaciers from Rakaposhi and Diran peaks provides a magnificent view of both peaks and glaciers. The lush and green meadows and ablation valleys around this mountain range offers a thrilling adventure for the nature lovers.\n\nPlease Note:\nThe above itinerary is not a fixed programme but is intended to give an indication of the likely events during the expedition. Please note that because of the nature of mountaineering on 8,000m peaks, it will be necessary to have a flexible plan in order to take the best advantage of situations as they present themselves. Any changes to the itinerary will be made with a view to maximizing the benefit to the team members and of ensuring their eventual success on the mountain.",
    images: [rdbImg1, rdbImg2, rdbImg3, rdbImg4, rdbImg5, rdbImg6, rdbImg7],
    rating: 4.8,
    reviews: 5,
    bestTime: "June to October",
    price: "$2200",
    emails: [
      "akhtar_nangaparbat@yahoo.com",
      "akhtarnagabarbat@gmail.com"
    ],
    itinerary: [
      { day: "1", title: "Islamabad", description: "Arrival Islamabad. Transfer to hotel, afternoon sightseeing of the twin cities Islamabad and Rawalpindi. Meals and overnight at hotel." },
      { day: "2", title: "Chilas", description: "Drive to Chilas, enroute visit Taxila Museum, Julian monastery and other Archaeological sites, lunch at Besham and continues drive to Chilas. Dinner and Overnight at hotel.(12 hours)." },
      { day: "3", title: "Diran", description: "Morning visit rock carving inscriptions at thalepan on KKH, which dates back to 2nd to 6th century AD. Drive to Gilgit for lunch enroute. Short stop at Thalechi, the view point of the Nanga Parbat(8125m) after lunch. At Gilgit drive to minapin village. Meals and overnight at Diran Guest House." },
      { day: "4", title: "Hapakun", description: "Today we start our first day of trek to Hapakun, the summer pasture of the Minapin Village. Walk 3-4 hours on the permenet steep pony trail to Hapakun, meals and overnight in tents." },
      { day: "5", title: "Tagaphary", description: "Walk along the beautiful green meadows to Taghaphary, the second Summer pasture and green ablation valley provides magnificent view of Rakaposhi and Diran peaks and Minapin glacier. Meals and overnight in Tents.(3 hours)." },
      { day: "6", title: "Diran Base Camp", description: "Full day excursion to Diran peak base camp, walk through the Minapin Glacier and explore the area, after lunch at Diran base camp trek back Through the same glacier to Taghaphary. Meals and overnight in tents." },
      { day: "7", title: "Minapin", description: "Trek back to Minapin by the same route. Tranfer to same hotel for meals. And overnight.(5 hours)." },
      { day: "8", title: "Karimabad", description: "Early in the morning drive to Karimabad the capital of Hunza, after lunch visit Baltit and Altit forts, walk in village and explore the area. Evening drive to duiker view point for sunset photography. Meals and Overnight at hotel." },
      { day: "9", title: "Chilas", description: "Drive back to Chilas. Lunch en-route and proceed to Chilas, Dinner and overnight at hotel." },
      { day: "10", title: "Islamabad", description: "Drive to Islamabad, en-route visit shatial rock carving, lunch at Besham and Continues drive to Islamabad. Dinner and overnight at hotel." },
      { day: "11", title: "Departure", description: "Transfer to airport." }
    ]
  },
  
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
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="photos">Photos</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
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

                <TabsContent value="reviews" className="mt-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-secondary fill-secondary" />
                      ))}
                    </div>
                    <span className="text-2xl font-bold">{trek.rating}</span>
                    <span className="text-muted-foreground">({trek.reviews} reviews)</span>
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
                                {`"Amazing trekking experience. The ${trek.title} was challenging yet breathtaking. Highly recommend Mazano Adventures for serious trekkers."`}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
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
