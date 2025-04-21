
import React, { useState } from "react";
import { 
  Calendar, FileText, AlertCircle, Check, X, ArrowUpDown, MoreHorizontal 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent,
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { mockRegistrations, mockEvents } from "@/data/mock";
import { format, parseISO } from "date-fns";
import { fr } from "date-fns/locale";

const Registrations: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredRegistrations = mockRegistrations.filter((registration) => {
    const fullName = `${registration.pilot.firstname} ${registration.pilot.lastname}`.toLowerCase();
    const searchLower = searchTerm.toLowerCase();
    return fullName.includes(searchLower) || 
           (registration.copilot && `${registration.copilot.firstname} ${registration.copilot.lastname}`.toLowerCase().includes(searchLower)) ||
           registration.car.brand.toLowerCase().includes(searchLower) ||
           registration.car.model.toLowerCase().includes(searchLower);
  });

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Gestion des engagements</h1>
        <p className="text-muted-foreground">
          Consultez et gérez vos inscriptions aux différentes épreuves.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Engagements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{mockRegistrations.length}</div>
            <p className="text-muted-foreground text-sm">Total des inscriptions</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Validés</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {mockRegistrations.filter(reg => reg.validated).length}
            </div>
            <p className="text-muted-foreground text-sm">Inscriptions confirmées</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">En attente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">
              {mockRegistrations.filter(reg => !reg.validated).length}
            </div>
            <p className="text-muted-foreground text-sm">Inscriptions à traiter</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Liste des engagements</CardTitle>
          <CardDescription>
            Consultez et gérez l'ensemble des inscriptions aux épreuves.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Input
              placeholder="Rechercher par pilote, copilote ou voiture..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">
                    <div className="flex items-center">
                      Épreuve
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center">
                      Pilote / Copilote
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>Voiture</TableHead>
                  <TableHead>Inscription</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredRegistrations.length > 0 ? (
                  filteredRegistrations.map((registration) => {
                    const event = mockEvents.find(e => e.id === registration.eventId)!;
                    return (
                      <TableRow key={registration.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-start">
                            <Badge 
                              className={`mr-2 ${
                                event.type === "Rallye" ? "bg-ffsa-red" : 
                                event.type === "Course de côte" ? "bg-ffsa-blue" : 
                                "bg-emerald-600"
                              }`}
                            >
                              {event.type}
                            </Badge>
                            <div>
                              <div className="font-medium">{event.name}</div>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Calendar className="mr-1 h-3 w-3" />
                                {format(parseISO(event.date), "dd/MM/yyyy", { locale: fr })}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-medium">
                            {registration.pilot.firstname} {registration.pilot.lastname}
                          </div>
                          {registration.copilot && (
                            <div className="text-sm text-muted-foreground">
                              {registration.copilot.firstname} {registration.copilot.lastname}
                            </div>
                          )}
                        </TableCell>
                        <TableCell>
                          <div>
                            {registration.car.brand} {registration.car.model}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {registration.car.group} / {registration.car.class}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {format(parseISO(registration.registrationDate), "dd/MM/yyyy", { locale: fr })}
                          </div>
                          <div>
                            <Badge variant={registration.paymentStatus === "PAID" ? "outline" : "secondary"}>
                              {registration.paymentStatus === "PAID" ? "Payé" : 
                               registration.paymentStatus === "PENDING" ? "En attente" : "Annulé"}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {registration.validated ? (
                              <Badge className="bg-green-600">
                                <Check className="mr-1 h-3 w-3" />
                                Validé
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="text-amber-600 border-amber-600">
                                <AlertCircle className="mr-1 h-3 w-3" />
                                En attente
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon">
                                      <MoreHorizontal className="h-4 w-4" />
                                      <span className="sr-only">Actions</span>
                                    </Button>
                                  </DropdownMenuTrigger>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Actions</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                            <DropdownMenuContent align="end">
                              <DropdownMenuLabel>Actions</DropdownMenuLabel>
                              <DropdownMenuItem>
                                <FileText className="mr-2 h-4 w-4" />
                                Voir détails
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              {!registration.validated ? (
                                <DropdownMenuItem className="text-green-600">
                                  <Check className="mr-2 h-4 w-4" />
                                  Valider l'engagement
                                </DropdownMenuItem>
                              ) : (
                                <DropdownMenuItem className="text-amber-600">
                                  <X className="mr-2 h-4 w-4" />
                                  Annuler la validation
                                </DropdownMenuItem>
                              )}
                              <DropdownMenuItem className="text-red-600">
                                <X className="mr-2 h-4 w-4" />
                                Supprimer
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center">
                      Aucun engagement trouvé.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Registrations;
