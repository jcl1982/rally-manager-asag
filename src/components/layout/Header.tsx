
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import NavLinks from "./navigation/NavLinks";
import AuthButtons from "./navigation/AuthButtons";
import MobileMenu from "./navigation/MobileMenu";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          <NavLinks />
        </nav>

        <div className="hidden lg:flex">
          <AuthButtons />
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;
