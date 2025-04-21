
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, LogIn } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(1, 'Le mot de passe est requis')
});

type LoginFormData = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    try {
      console.log('Tentative de connexion avec:', { email: data.email });
      
      const { data: authData, error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password
      });

      if (error) {
        console.error('Erreur Supabase:', error);
        
        if (error.message.includes('network')) {
          toast.error('Erreur de connexion', {
            description: 'Veuillez vérifier votre connexion internet'
          });
        } else if (error.message.includes('Invalid login')) {
          toast.error('Erreur de connexion', {
            description: 'Email ou mot de passe incorrect'
          });
        } else {
          toast.error('Erreur de connexion', {
            description: error.message
          });
        }
        return;
      }

      console.log('Connexion réussie:', authData);
      
      toast.success('Connexion réussie');
      navigate('/');
    } catch (error) {
      console.error('Erreur inattendue:', error);
      toast.error('Une erreur inattendue est survenue');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container max-w-md mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6 text-center">Connexion</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-2 flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Email
          </label>
          <Input 
            type="email" 
            {...register('email')}
            placeholder="votre@email.com" 
            disabled={isLoading}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        
        <div>
          <label className="block mb-2 flex items-center gap-2">
            <Lock className="h-4 w-4" />
            Mot de passe
          </label>
          <Input 
            type="password" 
            {...register('password')}
            placeholder="Mot de passe" 
            disabled={isLoading}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        <Button 
          type="submit" 
          className="w-full flex items-center gap-2 justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <>Connexion en cours...</>
          ) : (
            <>
              <LogIn className="h-4 w-4" />
              Se connecter
            </>
          )}
        </Button>
        
        <div className="text-center mt-4">
          <p>Vous n'avez pas de compte ? <Link to="/register" className="text-blue-500 hover:underline">Créer un compte</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
