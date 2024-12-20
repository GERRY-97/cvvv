"use client";

import { useEffect, useState } from "react";

export default function Fees() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    
    setTimeout(() => setAnimate(true), 100);
  }, []);

  const plans = [
    {
      title: "Classe 6e",
      inscription: "30,000 FCFA",
      scolarite: [
        { tranche: "Tranche 1", montant: 100000 },
        { tranche: "Tranche 2", montant: 100000 },
        { tranche: "Tranche 3", montant: 50000 },
      ],
    },
    {
      title: "Classe 5e",
      inscription: "35,000 FCFA",
      scolarite: [
        { tranche: "Tranche 1", montant: 120000 },
        { tranche: "Tranche 2", montant: 120000 },
        { tranche: "Tranche 3", montant: 60000 },
      ],
    },
    {
      title: "Classe 4e",
      inscription: "40,000 FCFA",
      scolarite: [
        { tranche: "Tranche 1", montant: 150000 },
        { tranche: "Tranche 2", montant: 150000 },
        { tranche: "Tranche 3", montant: 70000 },
      ],
    },
  ];

  return (
    <section className="relative bg-blue-50 min-h-screen">
      
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold text-blue-900">
          Frais d'Inscription et de Scolarité
        </h1>
        <p className="text-blue-500 mt-2">
          Trouvez les informations détaillées pour chaque niveau d'étude.
        </p>
      </div>

      
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 items-center justify-center px-6">
        {plans.map((plan, idx) => {
          const total = plan.scolarite.reduce(
            (sum, tranche) => sum + tranche.montant,
            0
          );

          return (
            <div
              key={idx}
              className={`relative flex flex-col items-center bg-blue-800 text-white rounded-lg p-8 shadow-lg w-96 h-auto transition-all duration-700 ease-in-out ${
                animate ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{
                animationDelay: `${idx * 0.2}s`,
                animationFillMode: "forwards",
              }}
            >
              
              <h2 className="text-2xl font-bold mb-4">{plan.title}</h2>
              <p className="text-lg font-semibold mb-6">
                Frais d'inscription : {plan.inscription}
              </p>

             
              <div className="w-full text-blue-200 text-sm space-y-2 mb-8">
                <p className="text-center text-yellow-300 font-bold">
                  Frais de Scolarité :
                </p>
                {plan.scolarite.map((tranche, index) => (
                  <div
                    key={index}
                    className="flex justify-between border-b border-blue-700 pb-1"
                  >
                    <span>{tranche.tranche}</span>
                    <span>{tranche.montant.toLocaleString()} FCFA</span>
                  </div>
                ))}
                <div className="mt-4 text-center font-bold text-yellow-400">
                  Total : {total.toLocaleString()} FCFA
                </div>
              </div>

             
              <button className="bg-yellow-400 text-blue-900 font-bold py-2 px-6 rounded hover:bg-yellow-500 transition">
                Payer Maintenant
              </button>
            </div>
          );
        })}
      </div>

     
      <div className="relative bg-blue-900 mt-12">
        <svg
          className="absolute top-0 w-full transform -translate-y-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#BFDBFE"
            fillOpacity="1"
            d="M0,96L1440,320L1440,0L0,0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
