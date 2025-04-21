
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const registerSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Les mots de passe ne correspondent pas',
  path: ['confirmPassword']
});

type RegisterFormData = z.infer<typeof registerSchema>;

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const { error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password
      });

      if (error) {
        toast.error('Erreur lors de la création du compte', {
          description: error.message
        });
        return;
      }

      toast.success('Compte créé avec succès', {
        description: 'Veuillez vérifier votre email'
      });
      navigate('/');
    } catch (error) {
      console.error('Signup error', error);
      toast.error('Une erreur est survenue');
    }
  };

  return (
    <div className="container max-w-md mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Créer un compte</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-2">Email</label>
          <Input 
            type="email" 
            {...register('email')}
            placeholder="votre@email.com" 
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        
        <div>
          <label className="block mb-2">Mot de passe</label>
          <Input 
            type="password" 
            {...register('password')}
            placeholder="Mot de passe" 
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        <div>
          <label className="block mb-2">Confirmer le mot de passe</label>
          <Input 
            type="password" 
            {...register('confirmPassword')}
            placeholder="Confirmez le mot de passe" 
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
        </div>

        <Button type="submit" className="w-full">
          Créer mon compte
        </Button>
      </form>
    </div>
  );
};

export default Register;
