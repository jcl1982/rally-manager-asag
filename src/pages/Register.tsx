
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { supabase } from '@/integrations/supabase/client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, UserRoundPlus } from 'lucide-react';

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
  const [isLoading, setIsLoading] = React.useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema)
  });

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    try {
      console.log('Tentative de création de compte avec:', { email: data.email });
      
      const { data: authData, error } = await supabase.auth.signUp({
        email: data.email,
        password: data.password
      });

      if (error) {
        console.error('Erreur Supabase:', error);
        
        if (error.message.includes('network')) {
          toast.error('Erreur de connexion', {
            description: 'Veuillez vérifier votre connexion internet'
          });
        } else if (error.message.includes('already')) {
          toast.error('Erreur lors de la création du compte', {
            description: 'Cette adresse email est déjà utilisée'
          });
        } else {
          toast.error('Erreur lors de la création du compte', {
            description: error.message
          });
        }
        return;
      }

      console.log('Réponse Supabase:', authData);
      
      toast.success('Compte créé avec succès', {
        description: 'Veuillez vérifier votre email'
      });
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
      <h1 className="text-3xl font-bold mb-6 text-center">Créer un compte</h1>
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

        <div>
          <label className="block mb-2 flex items-center gap-2">
            <Lock className="h-4 w-4" />
            Confirmer le mot de passe
          </label>
          <Input 
            type="password" 
            {...register('confirmPassword')}
            placeholder="Confirmez le mot de passe" 
            disabled={isLoading}
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
        </div>

        <Button 
          type="submit" 
          className="w-full flex items-center gap-2 justify-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <>Création en cours...</>
          ) : (
            <>
              <UserRoundPlus className="h-4 w-4" />
              Créer mon compte
            </>
          )}
        </Button>
        
        <div className="text-center mt-4">
          <p>Vous avez déjà un compte ? <Link to="/login" className="text-blue-500 hover:underline">Se connecter</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Register;
