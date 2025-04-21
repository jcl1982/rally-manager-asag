
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ListPlus, CalendarDays, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface RallyEvent {
  id: string;
  name: string;
  date: string;
  location: string;
  status: string;
}

const Events = () => {
  const { data: events, isLoading } = useQuery({
    queryKey: ["organizer-events"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("rallies")
        .select("*")
        .order("date", { ascending: true });

      if (error) throw error;
      return data as RallyEvent[];
    },
  });

  if (isLoading) {
    return <div>Chargement des épreuves...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Mes épreuves</h1>
        <Link to="/organizer/events/new">
          <Button>
            <ListPlus className="w-4 h-4 mr-2" />
            Nouvelle épreuve
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events?.map((event) => (
          <Card key={event.id} className="p-6">
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <Trophy className="h-8 w-8 text-ffsa-blue mb-2" />
                <h2 className="text-xl font-semibold mb-2">{event.name}</h2>
                <div className="flex items-center text-muted-foreground mb-2">
                  <CalendarDays className="w-4 h-4 mr-2" />
                  {new Date(event.date).toLocaleDateString()}
                </div>
                <p className="text-muted-foreground">{event.location}</p>
              </div>
              <div className="mt-auto space-y-2">
                <Link to={`/organizer/events/${event.id}`}>
                  <Button variant="outline" className="w-full">
                    Gérer l'épreuve
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Events;
