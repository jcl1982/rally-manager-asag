
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserRoundPlus, LogIn } from "lucide-react";

const AuthButtons = () => {
  return (
    <div className="space-x-2">
      <Link to="/login">
        <Button variant="outline" className="gap-2">
          <LogIn className="h-4 w-4" />
          Connexion
        </Button>
      </Link>
      <Link to="/register">
        <Button className="gap-2">
          <UserRoundPlus className="h-4 w-4" />
          Créer un compte
        </Button>
      </Link>
    </div>
  );
};

export default AuthButtons;
