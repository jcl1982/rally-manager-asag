
import React from "react";
import { mockEvents } from "@/data/mock";
import EventCard from "@/components/events/EventCard";
import { EventType } from "@/types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [activeTab, setActiveTab] = React.useState<"all" | EventType>("all");

  const filteredEvents = mockEvents.filter((event) => {
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        event.location.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTab = activeTab === "all" || event.type === activeTab;
    
    return matchesSearch && matchesTab;
  });

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Calendrier des épreuves</h1>
      
      <div className="flex flex-col md:flex-row gap-4 justify-between mb-8">
        <div className="w-full md:w-1/3 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            placeholder="Rechercher une épreuve..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <Tabs 
          defaultValue="all" 
          className="w-full md:w-auto"
          value={activeTab}
          onValueChange={(value) => setActiveTab(value as "all" | EventType)}
        >
          <TabsList className="grid grid-cols-4 w-full md:w-[500px]">
            <TabsTrigger value="all">Toutes</TabsTrigger>
            <TabsTrigger value={EventType.RALLY}>Rallye</TabsTrigger>
            <TabsTrigger value={EventType.HILL_CLIMB}>Course de côte</TabsTrigger>
            <TabsTrigger value={EventType.SLALOM}>Slalom</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl text-muted-foreground">
            Aucune épreuve trouvée.
          </p>
        </div>
      )}
    </div>
  );
};

export default Events;
