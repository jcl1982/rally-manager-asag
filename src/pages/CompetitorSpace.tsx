
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { UserCheck } from "lucide-react";
import { Link } from "react-router-dom";

const CompetitorSpace = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Espace Concurrent</h1>
        <p className="text-muted-foreground">
          Gérez vos engagements et votre équipement depuis votre espace personnel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Mes engagements */}
        <Card className="p-6">
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <UserCheck className="h-8 w-8 text-ffsa-blue mb-2" />
              <h2 className="text-xl font-semibold mb-2">Mes engagements</h2>
              <p className="text-muted-foreground mb-4">
                Consultez et gérez vos engagements aux épreuves.
              </p>
            </div>
            <div className="mt-auto">
              <Link to="/registrations">
                <Button className="w-full">Voir mes engagements</Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* Mon équipement */}
        <Card className="p-6">
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <UserCheck className="h-8 w-8 text-ffsa-blue mb-2" />
              <h2 className="text-xl font-semibold mb-2">Mon équipement</h2>
              <p className="text-muted-foreground mb-4">
                Gérez vos équipements homologués FFSA.
              </p>
            </div>
            <div className="mt-auto">
              <Link to="/equipment">
                <Button className="w-full">Gérer mon équipement</Button>
              </Link>
            </div>
          </div>
        </Card>

        {/* S'engager */}
        <Card className="p-6">
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <UserCheck className="h-8 w-8 text-ffsa-blue mb-2" />
              <h2 className="text-xl font-semibold mb-2">S'engager</h2>
              <p className="text-muted-foreground mb-4">
                Inscrivez-vous à une nouvelle épreuve.
              </p>
            </div>
            <div className="mt-auto">
              <Link to="/events">
                <Button className="w-full">Voir les épreuves</Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CompetitorSpace;
