
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden border-t p-4 bg-background">
      <nav className="flex flex-col space-y-2">
        <NavLinks />
        <div className="flex flex-col space-y-2 pt-4 border-t mt-2">
          <Link to="/login" onClick={onClose}>
            <Button variant="outline" className="w-full">Connexion</Button>
          </Link>
          <Link to="/register" onClick={onClose}>
            <Button className="w-full">Créer un compte</Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
