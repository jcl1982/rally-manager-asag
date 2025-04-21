
import React from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
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
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { mockEquipments } from "@/data/mock";

const equipmentSchema = z.object({
  helmetBrand: z.string().min(1, { message: "La marque du casque est requise" }),
  helmetModel: z.string().min(1, { message: "Le modèle du casque est requis" }),
  helmetHomologationNumber: z.string().min(1, { message: "Le numéro d'homologation est requis" }),
  helmetExpiryDate: z.string().min(1, { message: "La date d'expiration est requise" }),
  suitBrand: z.string().min(1, { message: "La marque de la combinaison est requise" }),
  suitModel: z.string().min(1, { message: "Le modèle de la combinaison est requis" }),
  suitHomologationNumber: z.string().min(1, { message: "Le numéro d'homologation est requis" }),
  suitExpiryDate: z.string().min(1, { message: "La date d'expiration est requise" }),
  underwearBrand: z.string().optional(),
  underwearModel: z.string().optional(),
  underwearHomologationNumber: z.string().optional(),
  underwearExpiryDate: z.string().optional(),
  glovesBrand: z.string().optional(),
  glovesModel: z.string().optional(),
  glovesHomologationNumber: z.string().optional(),
  glovesExpiryDate: z.string().optional(),
  shoesBrand: z.string().optional(),
  shoesModel: z.string().optional(),
  shoesHomologationNumber: z.string().optional(),
  shoesExpiryDate: z.string().optional(),
  hasBalaclava: z.boolean().default(false),
  hasHANS: z.boolean().default(false),
  participantType: z.enum(["pilot", "copilot"]).default("pilot"),
});

const Equipment: React.FC = () => {
  const [activeParticipant, setActiveParticipant] = React.useState<"pilot" | "copilot">("pilot");
  
  const form = useForm<z.infer<typeof equipmentSchema>>({
    resolver: zodResolver(equipmentSchema),
    defaultValues: {
      helmetBrand: "",
      helmetModel: "",
      helmetHomologationNumber: "",
      helmetExpiryDate: "",
      suitBrand: "",
      suitModel: "",
      suitHomologationNumber: "",
      suitExpiryDate: "",
      underwearBrand: "",
      underwearModel: "",
      underwearHomologationNumber: "",
      underwearExpiryDate: "",
      glovesBrand: "",
      glovesModel: "",
      glovesHomologationNumber: "",
      glovesExpiryDate: "",
      shoesBrand: "",
      shoesModel: "",
      shoesHomologationNumber: "",
      shoesExpiryDate: "",
      hasBalaclava: false,
      hasHANS: false,
      participantType: "pilot",
    },
  });

  const onSubmit = (data: z.infer<typeof equipmentSchema>) => {
    console.log("Equipment data:", data);
    // Save equipment data
    alert("Équipement enregistré avec succès!");
    form.reset();
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Gestion des équipements</h1>
        <p className="text-muted-foreground">
          Déclarez et gérez vos équipements de sécurité pour participer aux épreuves.
        </p>
      </div>

      <Tabs value={activeParticipant} onValueChange={(v: "pilot" | "copilot") => setActiveParticipant(v)}>
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="pilot">Pilote</TabsTrigger>
          <TabsTrigger value="copilot">Copilote</TabsTrigger>
        </TabsList>

        <TabsContent value="pilot">
          <Card>
            <CardHeader>
              <CardTitle>Équipements du pilote</CardTitle>
              <CardDescription>
                Renseignez les informations concernant vos équipements homologués.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Casque</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="helmetBrand"
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
                        control={form.control}
                        name="helmetModel"
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
                        control={form.control}
                        name="helmetHomologationNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Numéro d'homologation</FormLabel>
                            <FormControl>
                              <Input placeholder="Ex: SNELL SA2020-12345" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="helmetExpiryDate"
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
                  </div>

                  <div className="pt-2 border-t">
                    <h3 className="text-lg font-semibold mb-4">Combinaison</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="suitBrand"
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
                        control={form.control}
                        name="suitModel"
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
                        control={form.control}
                        name="suitHomologationNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Numéro d'homologation</FormLabel>
                            <FormControl>
                              <Input placeholder="Ex: FIA 8856-2018" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="suitExpiryDate"
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
                  </div>

                  <div className="pt-2 border-t">
                    <h3 className="text-lg font-semibold mb-4">Sous-vêtements (optionnel)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="underwearBrand"
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
                        control={form.control}
                        name="underwearModel"
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
                        control={form.control}
                        name="underwearHomologationNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Numéro d'homologation</FormLabel>
                            <FormControl>
                              <Input placeholder="Ex: FIA 8856-2018" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="underwearExpiryDate"
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
                  </div>

                  <div className="pt-2 border-t">
                    <h3 className="text-lg font-semibold mb-4">Gants (optionnel)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="glovesBrand"
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
                        control={form.control}
                        name="glovesModel"
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
                        control={form.control}
                        name="glovesHomologationNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Numéro d'homologation</FormLabel>
                            <FormControl>
                              <Input placeholder="Ex: FIA 8856-2018" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="glovesExpiryDate"
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
                  </div>

                  <div className="pt-2 border-t">
                    <h3 className="text-lg font-semibold mb-4">Chaussures (optionnel)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="shoesBrand"
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
                        control={form.control}
                        name="shoesModel"
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
                        control={form.control}
                        name="shoesHomologationNumber"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Numéro d'homologation</FormLabel>
                            <FormControl>
                              <Input placeholder="Ex: FIA 8856-2018" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="shoesExpiryDate"
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
                  </div>

                  <div className="pt-2 border-t">
                    <h3 className="text-lg font-semibold mb-4">Équipements supplémentaires</h3>
                    <div className="flex flex-col space-y-4">
                      <FormField
                        control={form.control}
                        name="hasBalaclava"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox 
                                checked={field.value} 
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1">
                              <FormLabel>Cagoule ignifugée</FormLabel>
                              <FormDescription>
                                J'ai une cagoule ignifugée homologuée FIA.
                              </FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="hasHANS"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox 
                                checked={field.value} 
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1">
                              <FormLabel>Système HANS</FormLabel>
                              <FormDescription>
                                J'ai un système de retenue frontale de la tête (HANS) homologué FIA.
                              </FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="participantType"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Input type="hidden" value="pilot" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button type="submit">Enregistrer l'équipement</Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="copilot">
          <Card>
            <CardHeader>
              <CardTitle>Équipements du copilote</CardTitle>
              <CardDescription>
                Renseignez les informations concernant les équipements homologués du copilote.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Form content similar to pilot but with participantType="copilot" */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Casque</h3>
                    {/* Form fields for helmet */}
                  </div>

                  <div className="flex justify-end">
                    <Button type="submit">Enregistrer l'équipement</Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Equipment;
