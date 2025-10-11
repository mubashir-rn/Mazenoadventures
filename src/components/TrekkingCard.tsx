import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog";
import { Clock, Users, MapPin, Calendar, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

interface TrekkingCardProps {
  id: string;
  title: string;
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
  elevation?: string;
  category: string;
}

const TrekkingCard = ({ 
  id, 
  title, 
  duration, 
  groupSize, 
  difficulty, 
  minAge, 
  pickupLocation, 
  tourType, 
  description, 
  image,
  rating = 4.7,
  reviews = 89,
  elevation,
  category
}: TrekkingCardProps) => {
  return (
    <Card className="overflow-hidden shadow-[0_10px_35px_rgb(0,0,0,0.15)] hover:shadow-[0_15px_45px_rgb(0,0,0,0.22)] transition-all duration-300 transform hover:-translate-y-3 bg-white/95 dark:bg-card backdrop-blur-sm border-0">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-secondary/90 text-secondary-foreground shadow-[0_4px_12px_rgb(0,0,0,0.15)] backdrop-blur-sm">
            {category}
          </Badge>
        </div>
        {elevation && (
          <div className="absolute top-4 right-4">
            <Badge variant="outline" className="bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white border-white/50 dark:border-gray-700/50 backdrop-blur-md shadow-[0_4px_12px_rgb(0,0,0,0.15)]">
              <TrendingUp className="h-3 w-3 mr-1" />
              {elevation}
            </Badge>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-primary" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users className="h-4 w-4 text-primary" />
            <span>{groupSize} People</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-primary" />
            <span>{pickupLocation}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-primary" />
            <span>Min Age: {minAge}</span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-secondary fill-secondary' : 'text-gray-300'}`} 
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({reviews})</span>
          </div>
          <div className="flex">
            {[...Array(difficulty)].map((_, i) => (
              <div key={i} className="w-2 h-6 bg-primary mr-1 rounded-sm"></div>
            ))}
            {[...Array(5 - difficulty)].map((_, i) => (
              <div key={i} className="w-2 h-6 bg-gray-300 mr-1 rounded-sm"></div>
            ))}
          </div>
        </div>

        <div className="flex space-x-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="flex-1">
                Quick View
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>
                  {category} • {tourType}
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-md overflow-hidden">
                  <img src={image} alt={title} className="w-full h-56 object-cover" />
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2"><Clock className="h-4 w-4 text-primary" /><span>{duration}</span></div>
                  <div className="flex items-center space-x-2"><Users className="h-4 w-4 text-primary" /><span>{groupSize} People</span></div>
                  <div className="flex items-center space-x-2"><MapPin className="h-4 w-4 text-primary" /><span>{pickupLocation}</span></div>
                  <div className="flex items-center space-x-2"><Calendar className="h-4 w-4 text-primary" /><span>Min Age: {minAge}</span></div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Difficulty:</span>
                    <div className="flex">
                      {[...Array(difficulty)].map((_, i) => (
                        <div key={i} className="w-2 h-4 bg-primary mr-1 rounded-sm"></div>
                      ))}
                      {[...Array(5 - difficulty)].map((_, i) => (
                        <div key={i} className="w-2 h-4 bg-gray-300 mr-1 rounded-sm"></div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium">Rating:</span>
                    <div className="flex items-center space-x-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-secondary fill-secondary' : 'text-gray-300'}`} />
                        ))}
                      </div>
                      <span className="text-muted-foreground">({reviews})</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 text-sm text-muted-foreground line-clamp-5">
                {description}
              </div>
              <DialogFooter>
                <Button variant="outline" asChild>
                  <Link to={`/trek/${id}`}>View Details</Link>
                </Button>
                <Button variant="mountain" asChild>
                  <Link to={`/trek/${id}`}>Book Now</Link>
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Button variant="mountain" size="sm" className="flex-1" asChild>
            <Link to={`/trek/${id}`}>
              Book Now
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TrekkingCard;