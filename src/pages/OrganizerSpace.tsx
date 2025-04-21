
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

const OrganizerSpace = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Espace Organisateur</h1>
        <p className="text-muted-foreground">
          Gérez vos épreuves et les engagements depuis votre espace organisateur.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Mes épreuves */}
        <Card className="p-6">
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <UserCheck className="h-8 w-8 text-ffsa-blue mb-2" />
              <h2 className="text-xl font-semibold mb-2">Mes épreuves</h2>
              <p className="text-muted-foreground mb-4">
                Consultez et gérez les épreuves que vous organisez.
              </p>
            </div>
            <div className="mt-auto">
              <Link to="/organizer/events">
                <Button className="w-full">Voir mes épreuves</Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Créer une épreuve */}
        <Card className="p-6">
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <UserCheck className="h-8 w-8 text-ffsa-blue mb-2" />
              <h2 className="text-xl font-semibold mb-2">Créer une épreuve</h2>
              <p className="text-muted-foreground mb-4">
                Créez une nouvelle épreuve et configurez les engagements.
              </p>
            </div>
            <div className="mt-auto">
              <Link to="/organizer/events/new">
                <Button className="w-full">Nouvelle épreuve</Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Engagements */}
        <Card className="p-6">
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <UserCheck className="h-8 w-8 text-ffsa-blue mb-2" />
              <h2 className="text-xl font-semibold mb-2">Engagements</h2>
              <p className="text-muted-foreground mb-4">
                Gérez les engagements pour vos épreuves.
              </p>
            </div>
            <div className="mt-auto">
              <Link to="/organizer/registrations">
                <Button className="w-full">Voir les engagements</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default OrganizerSpace;
