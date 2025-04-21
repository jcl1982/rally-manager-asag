
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Clock } from "lucide-react";
import { formatDistanceToNow, format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";
import { Event } from "@/types";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const eventDate = parseISO(event.date);
  const deadlineDate = parseISO(event.registrationDeadline);
  const isDeadlineSoon = 
    new Date() < deadlineDate && 
    new Date() > new Date(deadlineDate.getTime() - 7 * 24 * 60 * 60 * 1000);
  const isDeadlinePassed = new Date() > deadlineDate;

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div 
        className="h-48 overflow-hidden relative" 
        style={{ 
          backgroundImage: `url(${event.imageUrl || "https://picsum.photos/800/400?random=" + event.id})`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <Badge 
            className={`
              ${event.type === "Rallye" ? "bg-ffsa-red" : 
                event.type === "Course de côte" ? "bg-ffsa-blue" : 
                "bg-emerald-600"} 
              hover:bg-opacity-80
            `}
          >
            {event.type}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-2">
        <h3 className="text-xl font-bold truncate">{event.name}</h3>
        <div className="flex items-center text-sm text-muted-foreground gap-1">
          <Calendar size={14} className="mr-1" />
          {format(eventDate, "dd MMMM yyyy", { locale: fr })}
          <span className="mx-1">•</span>
          <MapPin size={14} className="mr-1" />
          {event.location}
        </div>
      </CardHeader>
      
      <CardContent className="pb-3">
        <p className="text-muted-foreground text-sm line-clamp-3">
          {event.description}
        </p>
        
        <div className="mt-4 flex items-center">
          <Clock size={16} className="mr-2 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">
              Date limite d'inscription:
            </p>
            <p className={`text-sm ${isDeadlinePassed ? "text-red-500" : isDeadlineSoon ? "text-amber-500" : "text-muted-foreground"}`}>
              {format(deadlineDate, "dd/MM/yyyy", { locale: fr })}
              {isDeadlinePassed ? " (Clôturée)" : 
                isDeadlineSoon ? ` (Dans ${formatDistanceToNow(deadlineDate, { locale: fr })})` : 
                ` (Dans ${formatDistanceToNow(deadlineDate, { locale: fr })})`}
            </p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0">
        <div className="flex justify-between items-center w-full">
          <span className="text-sm text-muted-foreground">
            Organisé par {event.organizerName}
          </span>
          <Link to={`/events/${event.id}`}>
            <Button>Voir détails</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
