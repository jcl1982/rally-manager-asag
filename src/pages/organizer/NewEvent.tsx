
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface EventFormData {
  name: string;
  start_date: string;
  end_date: string;
  location: string;
  description: string;
}

const NewEvent = () => {
  const navigate = useNavigate();
  const form = useForm<EventFormData>({
    defaultValues: {
      end_date: "",
    }
  });

  const onSubmit = async (data: EventFormData) => {
    try {
      const { error } = await supabase.from("rallies").insert({
        name: data.name,
        start_date: data.start_date,
        end_date: data.end_date || data.start_date, // Use start_date as end_date if not provided
        location: data.location,
        description: data.description,
        registration_open: true, // Default value
        status: "upcoming", // Default value
        is_upcoming: true, // Default value
      });

      if (error) throw error;

      toast.success("Épreuve créée avec succès");
      navigate("/organizer/events");
    } catch (error) {
      toast.error("Erreur lors de la création de l'épreuve");
      console.error(error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <h1 className="text-3xl font-bold mb-8">Créer une nouvelle épreuve</h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom de l'épreuve</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="start_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date de début</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="end_date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date de fin (optionnelle)</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lieu</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Créer l'épreuve
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default NewEvent;
