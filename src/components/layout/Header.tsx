
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Car,
  FileText,
  ClipboardList,
  Calendar,
  Menu,
  X,
  UserCheck,
} from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: "Accueil", path: "/", icon: <Calendar className="mr-2 h-4 w-4" /> },
    { name: "Épreuves", path: "/events", icon: <FileText className="mr-2 h-4 w-4" /> },
    { name: "Espace concurrent", path: "/competitor", icon: <UserCheck className="mr-2 h-4 w-4" /> },
    { name: "Espace organisateur", path: "/organizer", icon: <UserCheck className="mr-2 h-4 w-4" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-ffsa-red">Chrono</span>
              <span className="text-xs text-ffsa-blue -mt-1">Rally Manager</span>
            </div>
          </Link>
        </div>

        {/* Menu mobile */}
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Menu desktop */}
        <nav className="hidden lg:flex items-center space-x-4">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              <Button variant="ghost" className="flex items-center">
                {link.icon}
                {link.name}
              </Button>
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex space-x-2">
          <Link to="/login">
            <Button variant="outline">Connexion</Button>
          </Link>
          <Link to="/register">
            <Button>Créer un compte</Button>
          </Link>
        </div>
      </div>

      {/* Menu mobile déployé */}
      {isMenuOpen && (
        <div className="lg:hidden border-t p-4 bg-background">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center px-2 py-2 hover:bg-muted rounded-md"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col space-y-2 pt-4 border-t mt-2">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" className="w-full">Connexion</Button>
              </Link>
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full">Créer un compte</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
