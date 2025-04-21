
import React from "react";
import { useParams, Link } from "react-router-dom";
import { mockEvents } from "@/data/mock";
import { 
  Calendar, MapPin, Phone, Mail, Clock, FileText, AlertCircle, Car, Users
} from "lucide-react";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const EventDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = mockEvents.find((event) => event.id === id);

  if (!event) {
    return (
      <div className="container mx-auto py-20 text-center">
        <AlertCircle className="mx-auto h-16 w-16 text-ffsa-red mb-4" />
        <h1 className="text-3xl font-bold mb-4">Épreuve non trouvée</h1>
        <p className="text-muted-foreground mb-6">L'épreuve que vous recherchez n'existe pas.</p>
        <Link to="/events">
          <Button>Retour aux épreuves</Button>
        </Link>
      </div>
    );
  }

  const eventDate = parseISO(event.date);
  const deadlineDate = parseISO(event.registrationDeadline);
  const isDeadlinePassed = new Date() > deadlineDate;

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Header */}
      <div 
        className="h-64 md:h-80 rounded-lg overflow-hidden relative mb-8"
        style={{ 
          backgroundImage: `url(${event.imageUrl || "https://picsum.photos/1200/600?random=" + event.id})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <Badge 
            className={`mb-4 ${
              event.type === "Rallye" ? "bg-ffsa-red" : 
              event.type === "Course de côte" ? "bg-ffsa-blue" : 
              "bg-emerald-600"
            } hover:bg-opacity-80`}
          >
            {event.type}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold">{event.name}</h1>
          <div className="flex flex-wrap items-center text-sm text-white/80 gap-4 mt-2">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              {format(eventDate, "dd MMMM yyyy", { locale: fr })}
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2" />
              {event.location}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="about">
            <TabsList>
              <TabsTrigger value="about">À propos</TabsTrigger>
              <TabsTrigger value="regulation">Règlement</TabsTrigger>
              <TabsTrigger value="schedule">Programme</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="pt-4">
              <h2 className="text-2xl font-bold mb-4">À propos de l'épreuve</h2>
              <p className="text-muted-foreground mb-6">
                {event.description}
              </p>
              <p className="text-muted-foreground mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisi eget ultricies lacinia, 
                nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Nullam auctor, nisi eget ultricies lacinia, 
                nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
              </p>
              
              <h3 className="text-xl font-semibold mb-3">Informations importantes</h3>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-6">
                <li>Vérifications administratives et techniques le {format(eventDate, "dd/MM", { locale: fr })}</li>
                <li>Reconnaissances autorisées le {format(new Date(eventDate.getTime() - 86400000), "dd/MM", { locale: fr })}</li>
                <li>Briefing des pilotes à 8h00</li>
                <li>Remise des prix à 18h00</li>
              </ul>
            </TabsContent>
            
            <TabsContent value="regulation" className="pt-4">
              <h2 className="text-2xl font-bold mb-4">Règlement particulier</h2>
              <p className="text-muted-foreground mb-4">
                Le règlement particulier de l'épreuve est disponible ci-dessous:
              </p>
              <div className="flex items-center p-4 bg-ffsa-light rounded-lg mb-6">
                <FileText className="h-8 w-8 text-ffsa-blue mr-4" />
                <div>
                  <h3 className="font-semibold">Règlement particulier</h3>
                  <p className="text-sm text-muted-foreground">PDF, 2.3 MB</p>
                </div>
                <Button variant="outline" className="ml-auto">
                  Télécharger
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="schedule" className="pt-4">
              <h2 className="text-2xl font-bold mb-4">Programme</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Vendredi {format(new Date(eventDate.getTime() - 86400000), "d MMMM", { locale: fr })}</h3>
                  <ul className="border-l-2 border-ffsa-blue pl-4 space-y-3">
                    <li>
                      <span className="text-sm font-semibold">14h00 - 19h00</span>
                      <p>Vérifications administratives et techniques</p>
                    </li>
                    <li>
                      <span className="text-sm font-semibold">08h00 - 18h00</span>
                      <p>Reconnaissances autorisées</p>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">Samedi {format(eventDate, "d MMMM", { locale: fr })}</h3>
                  <ul className="border-l-2 border-ffsa-red pl-4 space-y-3">
                    <li>
                      <span className="text-sm font-semibold">07h00 - 08h00</span>
                      <p>Vérifications administratives et techniques complémentaires</p>
                    </li>
                    <li>
                      <span className="text-sm font-semibold">08h30</span>
                      <p>Briefing des pilotes</p>
                    </li>
                    <li>
                      <span className="text-sm font-semibold">09h00</span>
                      <p>Départ de la première voiture</p>
                    </li>
                    <li>
                      <span className="text-sm font-semibold">18h00</span>
                      <p>Remise des prix</p>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div>
          <div className="bg-ffsa-light rounded-lg p-6 mb-6">
            <h2 className="text-xl font-bold mb-4">Informations pratiques</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-1">Organisateur</h3>
                <p className="text-muted-foreground">{event.organizerName}</p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-1">Contact</h3>
                <div className="flex items-center text-muted-foreground">
                  <Phone size={16} className="mr-2" />
                  {event.organizerPhone}
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Mail size={16} className="mr-2" />
                  {event.organizerEmail}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold mb-1">Date limite d'inscription</h3>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" />
                  <span className={`${isDeadlinePassed ? "text-red-500" : "text-muted-foreground"}`}>
                    {format(deadlineDate, "dd MMMM yyyy", { locale: fr })}
                    {isDeadlinePassed && " (Clôturée)"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-ffsa-blue text-white rounded-lg p-6">
            <div className="flex items-start mb-4">
              <div>
                <Car className="h-8 w-8 mr-4" />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-1">S'inscrire à cette épreuve</h2>
                <p className="text-sm opacity-80 mb-4">
                  Complétez le formulaire d'engagement et envoyez vos documents en ligne.
                </p>
                <Link to={`/events/${event.id}/register`}>
                  <Button 
                    className="w-full bg-ffsa-red hover:bg-ffsa-red/90" 
                    disabled={isDeadlinePassed}
                  >
                    {isDeadlinePassed ? "Inscription clôturée" : "S'inscrire maintenant"}
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="pt-4 border-t border-white/20">
              <div className="flex items-start">
                <div>
                  <Users className="h-5 w-5 mr-3" />
                </div>
                <div className="text-sm opacity-80">
                  <p>Besoin d'aide pour votre inscription?</p>
                  <p>Contactez l'organisateur au {event.organizerPhone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
