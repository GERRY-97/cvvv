"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import HeroImage from "@/public/images/hero-image.svg";

export default function Home() {
  return (
    <section className="p-10 mt-[9%] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

      <div className="animate-slide-in-left">
        <p className="text-primary font-semibold mb-8">
          🚀 Accédez à votre espace et gérez vos transactions.
        </p>
        <h1 className="text-6xl font-bold mb-10 leading-tight">
          Faites vos transactions en un clic !
        </h1>
        <p className="text-gray-600 mb-12">
          Dites adieu aux longues files d'attente et aux démarches compliquées, et profitez d'une solution rapide, simple et sécurisée pour payer los frais d'inscription de vos enfants en ligne.
        </p>
        <div className="flex gap-4">
        <Link href="/about">
          <button className="bg-primary text-white px-6 py-2 rounded-md hover:bg-purple-500 transition duration-300">
            Démarer votre plan
          </button>
        </Link>
        <Link href="/apropos">
          <button className="border border-gray-300 px-6 py-2 rounded-md hover:bg-gray-200 hover:text-black transition duration-100">
            En savoir plus
          </button>
        </Link>
        </div>
      </div>


      <div className="flex justify-center animate-slide-in-right">
        <HeroImage className="scale-100" />
      </div>
    </section>
  );
}
