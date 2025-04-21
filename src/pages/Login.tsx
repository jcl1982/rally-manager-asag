
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useNavigate, Link } from 'react-router-dom';

const loginSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(1, 'Le mot de passe est requis')
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password
      });

      if (error) {
        toast.error('Erreur de connexion', {
          description: error.message
        });
        return;
      }

      toast.success('Connexion réussie');
      navigate('/');
    } catch (error) {
      console.error('Login error', error);
      toast.error('Une erreur est survenue');
    }
  };

  return (
    <div className="container max-w-md mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Connexion</h1>
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

        <Button type="submit" className="w-full">
          Se connecter
        </Button>
        
        <div className="text-center mt-4">
          <p>Vous n'avez pas de compte ? <Link to="/register" className="text-ffsa-blue hover:underline">Créer un compte</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
