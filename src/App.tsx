import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Registration from "./pages/Registration";
import Equipment from "./pages/Equipment";
import Registrations from "./pages/Registrations";
import CompetitorSpace from "./pages/CompetitorSpace";
import OrganizerSpace from "./pages/OrganizerSpace";
import OrganizerEvents from "./pages/organizer/Events";
import NewEvent from "./pages/organizer/NewEvent";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/events/:id/register" element={<Registration />} />
            <Route path="/equipment" element={<Equipment />} />
            <Route path="/registrations" element={<Registrations />} />
            <Route path="/competitor" element={<CompetitorSpace />} />
            <Route path="/organizer" element={<OrganizerSpace />} />
            <Route path="/organizer/events" element={<OrganizerEvents />} />
            <Route path="/organizer/events/new" element={<NewEvent />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
