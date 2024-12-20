"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function About() {
  return (
    <section className="relative bg-blue-50 min-h-screen">
      
      <div className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl font-bold">À propos de Nous</h1>
        <p className="mt-4 text-blue-200">
          Découvrez comment nous simplifions le processus d'inscription et de
          paiement pour vous.
        </p>
      </div>

      
      <div className="max-w-5xl mx-auto px-6 py-12">
        
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Notre Mission</h2>
          <p className="text-blue-700 leading-7">
            Nous croyons que l'éducation est un droit fondamental, et notre
            plateforme est conçue pour rendre les processus d'inscription et de
            paiement aussi simples, rapides et accessibles que possible. Nous
            collaborons avec plusieurs institutions pour offrir une expérience
            utilisateur intuitive et sécurisée.
          </p>
        </div>

        
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Comment ça marche ?
          </h2>
          <ul className="list-disc pl-6 text-blue-700 leading-7">
            <li>
              Créez un compte sur notre plateforme en quelques clics pour accéder
              à toutes vos options d'inscription.
            </li>
            <li>
              Explorez les frais d'inscription et de scolarité par niveau
              (Licence, Master, Doctorat) et choisissez l'option qui vous
              correspond.
            </li>
            <li>
              Effectuez vos paiements en ligne de manière sécurisée grâce à nos
              solutions de paiement modernes.
            </li>
          </ul>
        </div>

        
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">Pourquoi Nous ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center bg-white shadow-lg p-6 rounded-lg">
              <div className="bg-blue-100 p-4 rounded-full">
                <svg
                  className="w-10 h-10 text-blue-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg mt-4">Simplicité</h3>
              <p className="mt-2 text-blue-600">
                Une interface intuitive qui vous guide à chaque étape.
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white shadow-lg p-6 rounded-lg">
              <div className="bg-blue-100 p-4 rounded-full">
                <svg
                  className="w-10 h-10 text-blue-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h11M9 21V3m0 0L21 10m-12 0v8"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg mt-4">Sécurité</h3>
              <p className="mt-2 text-blue-600">
                Des paiements en ligne protégés par des protocoles avancés.
              </p>
            </div>
            <div className="flex flex-col items-center text-center bg-white shadow-lg p-6 rounded-lg">
              <div className="bg-blue-100 p-4 rounded-full">
                <svg
                  className="w-10 h-10 text-blue-900"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7m2 3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-bold text-lg mt-4">Fiabilité</h3>
              <p className="mt-2 text-blue-600">
                Une plateforme utilisée et approuvée par des milliers d'étudiants.
              </p>
            </div>
          </div>
        </div>

        
        <div className="text-center mt-8">
          <p className="text-blue-700">
            Prêt à commencer ? Explorez nos options d'inscription et effectuez
            vos paiements dès aujourd'hui !
          </p>
          <Link href="/about">
          <button className="bg-blue-900 text-white font-bold py-2 px-6 rounded mt-4 hover:bg-blue-800 transition">
            En savoir plus
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
