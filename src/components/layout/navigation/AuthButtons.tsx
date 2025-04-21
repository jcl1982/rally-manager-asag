
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AuthButtons = () => {
  return (
    <div className="space-x-2">
      <Link to="/login">
        <Button variant="outline">Connexion</Button>
      </Link>
      <Link to="/register">
        <Button>Créer un compte</Button>
      </Link>
    </div>
  );
};

export default AuthButtons;
