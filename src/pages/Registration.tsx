import React from "react";
import { useParams, Link } from "react-router-dom";
import { mockEvents } from "@/data/mock";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

const pilotSchema = z.object({
  firstname: z.string().min(2, { message: "Le prénom doit contenir au moins 2 caractères" }),
  lastname: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  birthDate: z.string().min(1, { message: "La date de naissance est requise" }),
  address: z.string().min(5, { message: "L'adresse est requise" }),
  postalCode: z.string().min(1, { message: "Le code postal est requis" }),
  city: z.string().min(1, { message: "La ville est requise" }),
  country: z.string().min(1, { message: "Le pays est requis" }),
  phone: z.string().min(10, { message: "Le numéro de téléphone est requis" }),
  email: z.string().email({ message: "Email invalide" }),
  licenseNumber: z.string().min(1, { message: "Le numéro de licence est requis" }),
  licenseType: z.string().min(1, { message: "Le type de licence est requis" }),
  licenseExpiryDate: z.string().min(1, { message: "La date d'expiration est requise" }),
  asmName: z.string().min(1, { message: "L'ASA est requise" }),
  asmCode: z.string().min(1, { message: "Le code ASA est requis" }),
  bloodGroup: z.string().optional(),
});

const carSchema = z.object({
  brand: z.string().min(1, { message: "La marque est requise" }),
  model: z.string().min(1, { message: "Le modèle est requis" }),
  year: z.string()
    .refine(val => !isNaN(parseInt(val)), { message: "L'année doit être un nombre valide" })
    .refine(val => parseInt(val) >= 1950 && parseInt(val) <= new Date().getFullYear(), { 
      message: `L'année doit être comprise entre 1950 et ${new Date().getFullYear()}` 
    }),
  homologationNumber: z.string().min(1, { message: "Le numéro d'homologation est requis" }),
  engineCapacity: z.string()
    .refine(val => !isNaN(parseInt(val)), { message: "La cylindrée doit être un nombre valide" }),
  registrationNumber: z.string().min(1, { message: "L'immatriculation est requise" }),
  chassisNumber: z.string().min(1, { message: "Le numéro de châssis est requis" }),
  group: z.string().min(1, { message: "Le groupe est requis" }),
  class: z.string().min(1, { message: "La classe est requise" }),
  passportNumber: z.string().optional(),
  technicalPassportNumber: z.string().optional(),
});

const Registration: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = mockEvents.find((event) => event.id === id);
  const [activeTab, setActiveTab] = React.useState("pilot");
  
  const pilotForm = useForm<z.infer<typeof pilotSchema>>({
    resolver: zodResolver(pilotSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      birthDate: "",
      address: "",
      postalCode: "",
      city: "",
      country: "France",
      phone: "",
      email: "",
      licenseNumber: "",
      licenseType: "",
      licenseExpiryDate: "",
      asmName: "",
      asmCode: "",
      bloodGroup: "",
    },
  });

  const copilotForm = useForm<z.infer<typeof pilotSchema>>({
    resolver: zodResolver(pilotSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      birthDate: "",
      address: "",
      postalCode: "",
      city: "",
      country: "France",
      phone: "",
      email: "",
      licenseNumber: "",
      licenseType: "",
      licenseExpiryDate: "",
      asmName: "",
      asmCode: "",
      bloodGroup: "",
    },
  });

  const carForm = useForm<z.infer<typeof carSchema>>({
    resolver: zodResolver(carSchema),
    defaultValues: {
      brand: "",
      model: "",
      year: "",
      homologationNumber: "",
      engineCapacity: "",
      registrationNumber: "",
      chassisNumber: "",
      group: "",
      class: "",
      passportNumber: "",
      technicalPassportNumber: "",
    },
  });

  const onPilotSubmit = (data: z.infer<typeof pilotSchema>) => {
    console.log("Pilot data:", data);
    setActiveTab(event?.type === "Rallye" ? "copilot" : "car");
  };

  const onCopilotSubmit = (data: z.infer<typeof pilotSchema>) => {
    console.log("Copilot data:", data);
    setActiveTab("car");
  };
  
  const onCarSubmit = (data: z.infer<typeof carSchema>) => {
    console.log("Car data:", data);
    setActiveTab("review");
  };
  
  const onSubmit = () => {
    console.log("Form submitted");
    // Here we would submit all the data to the backend
  };

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

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Inscription à {event.name}</h1>
        <p className="text-muted-foreground">
          Complétez le formulaire d'engagement et enregistrez vos équipements pour participer à l'épreuve.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="pilot">Pilote</TabsTrigger>
          {event.type === "Rallye" && <TabsTrigger value="copilot">Copilote</TabsTrigger>}
          <TabsTrigger value="car">Voiture</TabsTrigger>
          <TabsTrigger value="review">Validation</TabsTrigger>
        </TabsList>

        <TabsContent value="pilot">
          <Card>
            <CardHeader>
              <CardTitle>Informations du pilote</CardTitle>
              <CardDescription>
                Renseignez les informations concernant le pilote.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...pilotForm}>
                <form onSubmit={pilotForm.handleSubmit(onPilotSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={pilotForm.control}
                      name="lastname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom</FormLabel>
                          <FormControl>
                            <Input placeholder="NOM" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={pilotForm.control}
                      name="firstname"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Prénom</FormLabel>
                          <FormControl>
                            <Input placeholder="Prénom" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={pilotForm.control}
                      name="birthDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Date de naissance</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={pilotForm.control}
                      name="bloodGroup"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Groupe sanguin (optionnel)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Sélectionnez" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="A+">A+</SelectItem>
                              <SelectItem value="A-">A-</SelectItem>
                              <SelectItem value="B+">B+</SelectItem>
                              <SelectItem value="B-">B-</SelectItem>
                              <SelectItem value="AB+">AB+</SelectItem>
                              <SelectItem value="AB-">AB-</SelectItem>
                              <SelectItem value="O+">O+</SelectItem>
                              <SelectItem value="O-">O-</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Coordonnées</h3>
                    <div className="grid grid-cols-1 gap-6">
                      <FormField
                        control={pilotForm.control}
                        name="address"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Adresse</FormLabel>
                            <FormControl>
                              <Input placeholder="Adresse" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <FormField
                          control={pilotForm.control}
                          name="postalCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Code postal</FormLabel>
                              <FormControl>
                                <Input placeholder="Code postal" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="md:col-span-2">
                          <FormField
                            control={pilotForm.control}
                            name="city"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Ville</FormLabel>
                                <FormControl>
                                  <Input placeholder="Ville" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      <FormField
                        control={pilotForm.control}
                        name="country"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Pays</FormLabel>
                            <FormControl>
                              <Input placeholder="Pays" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={pilotForm.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Téléphone</FormLabel>
                          <FormControl>
                            <Input placeholder="Téléphone" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={pilotForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Email" type="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Informations de licence</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={pilotForm.control}
                        name="licenseNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Numéro de licence</FormLabel>
                            <FormControl>
                              <Input placeholder="Numéro de licence" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={pilotForm.control}
                        name="licenseType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Type de licence</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Sélectionnez" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Internationale Concurrent Conducteur">Internationale Concurrent Conducteur</SelectItem>
                                <SelectItem value="Nationale Concurrent Conducteur">Nationale Concurrent Conducteur</SelectItem>
                                <SelectItem value="Régionale Concurrent Conducteur">Régionale Concurrent Conducteur</SelectItem>
                                <SelectItem value="Régionale Concurrent Conducteur Terre">Régionale Concurrent Conducteur Terre</SelectItem>
                                <SelectItem value="Titre de Participation">Titre de Participation</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={pilotForm.control}
                        name="licenseExpiryDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date d'expiration</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <FormField
                        control={pilotForm.control}
                        name="asmName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>ASA</FormLabel>
                            <FormControl>
                              <Input placeholder="Nom de l'ASA" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={pilotForm.control}
                        name="asmCode"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Code ASA</FormLabel>
                            <FormControl>
                              <Input placeholder="Code ASA" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit">
                      {event.type === "Rallye" ? "Continuer vers copilote" : "Continuer vers voiture"}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        {event.type === "Rallye" && (
          <TabsContent value="copilot">
            <Card>
              <CardHeader>
                <CardTitle>Informations du copilote</CardTitle>
                <CardDescription>
                  Renseignez les informations concernant le copilote.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...copilotForm}>
                  <form onSubmit={copilotForm.handleSubmit(onCopilotSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={copilotForm.control}
                        name="lastname"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nom</FormLabel>
                            <FormControl>
                              <Input placeholder="NOM" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={copilotForm.control}
                        name="firstname"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Prénom</FormLabel>
                            <FormControl>
                              <Input placeholder="Prénom" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={copilotForm.control}
                        name="birthDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date de naissance</FormLabel>
                            <FormControl>
                              <Input type="date" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={copilotForm.control}
                        name="bloodGroup"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Groupe sanguin (optionnel)</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Sélectionnez" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="A+">A+</SelectItem>
                                <SelectItem value="A-">A-</SelectItem>
                                <SelectItem value="B+">B+</SelectItem>
                                <SelectItem value="B-">B-</SelectItem>
                                <SelectItem value="AB+">AB+</SelectItem>
                                <SelectItem value="AB-">AB-</SelectItem>
                                <SelectItem value="O+">O+</SelectItem>
                                <SelectItem value="O-">O-</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3">Coordonnées</h3>
                      <div className="grid grid-cols-1 gap-6">
                        <FormField
                          control={copilotForm.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Adresse</FormLabel>
                              <FormControl>
                                <Input placeholder="Adresse" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          <FormField
                            control={copilotForm.control}
                            name="postalCode"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Code postal</FormLabel>
                                <FormControl>
                                  <Input placeholder="Code postal" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <div className="md:col-span-2">
                            <FormField
                              control={copilotForm.control}
                              name="city"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Ville</FormLabel>
                                  <FormControl>
                                    <Input placeholder="Ville" {...field} />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                          </div>
                        </div>
                        <FormField
                          control={copilotForm.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Pays</FormLabel>
                              <FormControl>
                                <Input placeholder="Pays" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={copilotForm.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Téléphone</FormLabel>
                            <FormControl>
                              <Input placeholder="Téléphone" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={copilotForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Email" type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Informations de licence</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={copilotForm.control}
                          name="licenseNumber"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Numéro de licence</FormLabel>
                              <FormControl>
                                <Input placeholder="Numéro de licence" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={copilotForm.control}
                          name="licenseType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Type de licence</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Sélectionnez" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Internationale Concurrent Conducteur">Internationale Concurrent Conducteur</SelectItem>
                                  <SelectItem value="Nationale Concurrent Conducteur">Nationale Concurrent Conducteur</SelectItem>
                                  <SelectItem value="Régionale Concurrent Conducteur">Régionale Concurrent Conducteur</SelectItem>
                                  <SelectItem value="Régionale Concurrent Conducteur Terre">Régionale Concurrent Conducteur Terre</SelectItem>
                                  <SelectItem value="Titre de Participation">Titre de Participation</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={copilotForm.control}
                          name="licenseExpiryDate"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Date d'expiration</FormLabel>
                              <FormControl>
                                <Input type="date" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <FormField
                          control={copilotForm.control}
                          name="asmName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>ASA</FormLabel>
                              <FormControl>
                                <Input placeholder="Nom de l'ASA" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={copilotForm.control}
                          name="asmCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Code ASA</FormLabel>
                              <FormControl>
                                <Input placeholder="Code ASA" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <Button type="button" variant="outline" onClick={() => setActiveTab("pilot")}>
                        Retour
                      </Button>
                      <Button type="submit">
                        Continuer vers voiture
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </TabsContent>
        )}

        <TabsContent value="car">
          <Card>
            <CardHeader>
              <CardTitle>Informations du véhicule</CardTitle>
              <CardDescription>
                Renseignez les informations concernant le véhicule que vous utiliserez pour cette épreuve.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...carForm}>
                <form onSubmit={carForm.handleSubmit(onCarSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={carForm.control}
                      name="brand"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Marque</FormLabel>
                          <FormControl>
                            <Input placeholder="Marque" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={carForm.control}
                      name="model"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Modèle</FormLabel>
                          <FormControl>
                            <Input placeholder="Modèle" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={carForm.control}
                      name="year"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Année</FormLabel>
                          <FormControl>
                            <Input placeholder="Année" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={carForm.control}
                      name="engineCapacity"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cylindrée (cm³)</FormLabel>
                          <FormControl>
                            <Input placeholder="Cylindrée" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={carForm.control}
                      name="registrationNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Immatriculation</FormLabel>
                          <FormControl>
                            <Input placeholder="Immatriculation" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={carForm.control}
                      name="chassisNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Numéro de châssis</FormLabel>
                          <FormControl>
                            <Input placeholder="N° de châssis" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={carForm.control}
                      name="homologationNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>N° de fiche d'homologation</FormLabel>
                          <FormControl>
                            <Input placeholder="N° d'homologation" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <div></div>
                    <FormField
                      control={carForm.control}
                      name="group"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Groupe</FormLabel>
                          <FormControl>
                            <Input placeholder="Groupe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={carForm.control}
                      name="class"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Classe</FormLabel>
                          <FormControl>
                            <Input placeholder="Classe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={carForm.control}
                      name="passportNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>N° passeport technique (optionnel)</FormLabel>
                          <FormControl>
                            <Input placeholder="N° passeport technique" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={carForm.control}
                      name="technicalPassportNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>N° passeport FFSA (optionnel)</FormLabel>
                          <FormControl>
                            <Input placeholder="N° passeport FFSA" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="flex justify-between">
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => setActiveTab(event.type === "Rallye" ? "copilot" : "pilot")}
                    >
                      Retour
                    </Button>
                    <Button type="submit">
                      Continuer
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="review">
          <Card>
            <CardHeader>
              <CardTitle>Validation de l'inscription</CardTitle>
              <CardDescription>
                Vérifiez les informations saisies avant de soumettre votre inscription.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Vérification des équipements</h3>
                  
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                    <p className="text-amber-800 flex items-center">
                      <AlertCircle className="h-5 w-5 mr-2" />
                      Vous devez enregistrer vos équipements avant de pouvoir finaliser votre inscription.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label>Équipement du pilote</Label>
                      <Link to="/equipment">
                        <Button variant="outline" className="w-full mt-2">
                          Déclarer mon équipement
                        </Button>
                      </Link>
                    </div>
                    
                    {event.type === "Rallye" && (
                      <div>
                        <Label>Équipement du copilote</Label>
                        <Link to="/equipment">
                          <Button variant="outline" className="w-full mt-2">
                            Déclarer l'équipement du copilote
                          </Button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Documents à joindre</h3>
                  <p className="text-muted-foreground mb-3">
                    Les documents suivants sont nécessaires pour valider votre inscription:
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <Label>Permis de conduire</Label>
                      <Input type="file" className="mt-1" />
                    </div>
                    <div>
                      <Label>Licence</Label>
                      <Input type="file" className="mt-1" />
                    </div>
                    <div>
                      <Label>Carte grise du véhicule</Label>
                      <Input type="file" className="mt-1" />
                    </div>
                    <div>
                      <Label>Photo du véhicule</Label>
                      <Input type="file" className="mt-1" />
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Montant de l'inscription</h3>
                  <div className="bg-ffsa-light p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span>Engagement {event.name}</span>
                      <span className="font-semibold">550,00 €</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Signature</h3>
                  <p className="text-muted-foreground mb-3">
                    En soumettant ce formulaire, je certifie l'exactitude des informations fournies et m'engage à respecter les règlements sportifs.
                  </p>
                  
                  <RadioGroup defaultValue="agree">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="agree" id="agree" />
                      <Label htmlFor="agree">J'accepte les conditions générales et le règlement particulier de l'épreuve</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="flex justify-between">
                  <Button type="button" variant="outline" onClick={() => setActiveTab("car")}>
                    Retour
                  </Button>
                  <Button onClick={onSubmit}>
                    Soumettre mon inscription
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Registration;
