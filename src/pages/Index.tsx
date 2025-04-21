
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, CheckSquare, Car, ClipboardList } from "lucide-react";
import { Button } from "@/components/ui/button";
import EventCard from "@/components/events/EventCard";
import { mockEvents } from "@/data/mock";

const Index: React.FC = () => {
  const featuredEvents = mockEvents.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-ffsa-blue to-ffsa-blue/90 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Gestion simplifiée des <span className="text-ffsa-red">engagements</span> aux épreuves FFSA
              </h1>
              <p className="text-lg mb-8 max-w-md text-white/90">
                Inscrivez-vous facilement aux rallyes, courses de côte et slaloms. 
                Déclarez vos équipements et gérez vos participations en quelques clics.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/events">
                  <Button size="lg" variant="default" className="bg-ffsa-red hover:bg-ffsa-red/90">
                    Voir les épreuves <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/equipment">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-ffsa-blue">
                    Déclarer mon équipement
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <img 
                src="https://picsum.photos/800/600?random=10" 
                alt="Rallye automobile" 
                className="rounded-lg shadow-xl w-full h-auto max-h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Comment ça fonctionne?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-ffsa-light p-4 rounded-full mb-4">
                <Calendar className="h-8 w-8 text-ffsa-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Choisissez une épreuve</h3>
              <p className="text-muted-foreground">
                Consultez les épreuves disponibles et trouvez celle qui vous intéresse.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-ffsa-light p-4 rounded-full mb-4">
                <ClipboardList className="h-8 w-8 text-ffsa-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Enregistrez votre équipement</h3>
              <p className="text-muted-foreground">
                Déclarez vos casques, combinaisons et autres équipements de sécurité.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-ffsa-light p-4 rounded-full mb-4">
                <Car className="h-8 w-8 text-ffsa-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Remplissez votre engagement</h3>
              <p className="text-muted-foreground">
                Complétez le formulaire d'engagement et joignez les documents nécessaires.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center">
              <div className="bg-ffsa-light p-4 rounded-full mb-4">
                <CheckSquare className="h-8 w-8 text-ffsa-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Suivez votre participation</h3>
              <p className="text-muted-foreground">
                Validez votre inscription et recevez les confirmations directement dans l'application.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 bg-ffsa-light">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Prochaines épreuves</h2>
            <Link to="/events">
              <Button variant="ghost">
                Toutes les épreuves <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ffsa-blue text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Prêt à vous engager?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Inscrivez-vous dès maintenant et simplifiez votre participation aux épreuves de sport automobile.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/events">
              <Button size="lg" variant="default" className="bg-ffsa-red hover:bg-ffsa-red/90">
                Voir les épreuves <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-ffsa-blue">
                Créer un compte
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
