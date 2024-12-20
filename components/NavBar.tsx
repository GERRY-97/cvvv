"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Composant NavLink avec gestion de l'état actif
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-4 py-2 rounded-md ${
        isActive
          ? "text-blue-600 font-semibold" // Couleur active
          : "text-gray-700 hover:text-blue-500 transition-colors" // Couleur normale avec hover
      }`}
    >
      {children}
    </Link>
  );
}

export default function NavBar() {
  return (
    <header className="p-4 shadow-md bg-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-primary">SchoolFeels</h1>

        {/* Navigation */}
        <nav className="flex gap-4">
          <NavLink href="/">Accueil</NavLink> {/* Page d'accueil */}
          <NavLink href="/about">About</NavLink>
          <NavLink href="/apropos">A propos</NavLink>
          <NavLink href="/dashboard">Dashboard</NavLink>
        </nav>

        {/* Boutons d'authentification */}
        <div className="flex gap-2">
          <Link href="http://127.0.0.1:8000/">
            <button className="border px-4 py-2 rounded-md hover:bg-gray-100 transition duration-300">
              Se Connecter
            </button>
          </Link>
          <Link href="/signup">
            <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-purple-500 transition duration-300">
              S'inscrire
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
