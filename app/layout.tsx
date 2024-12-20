import "./globals.css";
import NavBar from "@/components/NavBar"; // Assure-toi du bon chemin d'importation

export const metadata = {
  title: "Learning Platform",
  description: "The #1 Courses Learning Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* NavBar comme composant client */}
        <NavBar />
        <main className="container mx-auto mt-8">{children}</main>
      </body>
    </html>
  );
}