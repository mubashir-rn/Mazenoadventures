import { Button } from "@/components/ui/button";
import { Mail, MessageCircle } from "lucide-react";

export interface ShareBookingProps {
  title: string;
  kind: "Trek" | "Expedition" | "Tour";
  duration?: string;
  groupSize?: string;
  pickupLocation?: string;
  bestTime?: string;
  price?: string;
  emails?: string[]; // used for displaying next to email
}

function buildMessage(props: ShareBookingProps) {
  const { title, kind, duration, groupSize, pickupLocation, bestTime, price } = props;
  const url = typeof window !== "undefined" ? window.location.href : "";
  const lines = [
    `Booking enquiry for ${kind}: ${title}`,
    duration ? `Length: ${duration}` : undefined,
    groupSize ? `Group: ${groupSize} people` : undefined,
    pickupLocation ? `Pickup: ${pickupLocation}` : undefined,
    bestTime ? `Best time: ${bestTime}` : undefined,
    price ? `Price: ${price}` : undefined,
    url ? `Link: ${url}` : undefined,
    "\nPlease share availability and next steps."
  ].filter(Boolean);
  return lines.join("\n");
}

export const ShareBookingButtons = (props: ShareBookingProps) => {
  const message = encodeURIComponent(buildMessage(props));

  // Direct to business WhatsApp number with prefilled message
  const whatsappHref = `https://wa.me/923459160113?text=${message}`;
  const mailtoHref = `mailto:${(props.emails || []).join(',')}` +
    `?subject=${encodeURIComponent(`Booking enquiry: ${props.title}`)}` +
    `&body=${message}`;

  return (
    <div className="space-y-2">
      <Button variant="mountain" size="lg" className="w-full" asChild>
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="h-5 w-5 mr-2" />
          Book via WhatsApp
        </a>
      </Button>
      <Button variant="outline" size="lg" className="w-full" asChild>
        <a href={mailtoHref}>
          <Mail className="h-5 w-5 mr-2" />
          Book via Email
        </a>
      </Button>
    </div>
  );
};

export default ShareBookingButtons;
