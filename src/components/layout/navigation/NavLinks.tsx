
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, UserCheck } from "lucide-react";

const NavLinks = () => {
  const navLinks = [
    { name: "Accueil", path: "/", icon: <Calendar className="mr-2 h-4 w-4" /> },
    { name: "Épreuves", path: "/events", icon: <FileText className="mr-2 h-4 w-4" /> },
    { name: "Espace concurrent", path: "/competitor", icon: <UserCheck className="mr-2 h-4 w-4" /> },
    { name: "Espace organisateur", path: "/organizer", icon: <UserCheck className="mr-2 h-4 w-4" /> },
  ];

  return (
    <>
      {navLinks.map((link) => (
        <Link key={link.path} to={link.path}>
          <Button variant="ghost" className="flex items-center">
            {link.icon}
            {link.name}
          </Button>
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
