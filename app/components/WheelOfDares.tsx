"use client";

import { useState, useRef } from 'react';

// Liste des gages
const dares = [
  {icon: "💋", text: "Baiser interdit"},
  {icon: "🎭", text: "Démasquer la beauté"},
  {icon: "🤵", text: "Malchanceux envoûté"},
  {icon: "🍷", text: "Nectar empoisonné"},
  {icon: "🎶", text: "Sérénade dévêtue"},
  {icon: "🍒", text: "Fruit défendu"},
  {icon: "🔥", text: "Sexy dance"},
  {icon: "🕯️", text: "Noces nocturnes"},
  {icon: "🔮", text: "Oracle des sens"},
  {icon: "🪞", text: "Miroir des désirs"}
];

export default function WheelOfDares() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedDare, setSelectedDare] = useState<string | null>(null);
  const [rotation, setRotation] = useState(0);
  const wheelRef = useRef<HTMLDivElement>(null);

  // Fonction pour lancer la roue
  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedDare(null);

    // Calcul de la rotation aléatoire (5-8 tours + angle aléatoire)
    const spins = 9 + Math.random() * 3;
    const extraDegrees = Math.random() * 360;
    const totalRotation = rotation + spins * 360 + extraDegrees;

    setRotation(totalRotation);

    // Calculer le gage sélectionné après l'animation
    setTimeout(() => {
      const normalizedRotation = totalRotation % 360;
      const segmentAngle = 360 / dares.length;
      const selectedIndex = Math.floor((360 - normalizedRotation) / segmentAngle) % dares.length;
      
      setSelectedDare(dares[selectedIndex].text);
      setIsSpinning(false);
    }, 10000); // Durée de l'animation
  };

  return (
    <div className="flex flex-row justify-center gap-10">
      {/* Conteneur de la roue */}
      <div className="relative w-96 h-96">
        {/* Indicateur (flèche) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-10">
          <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[40px] border-t-amber-200 drop-shadow-lg" />
        </div>

        {/* La roue */}
        <div
          ref={wheelRef}
          className="w-full h-full rounded-full shadow-2xl relative overflow-hidden border-8 border-amber-200"
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning ? 'transform 10s cubic-bezier(0.17, 0.67, 0.42, 0.99)' : 'none'
          }}
        >
          {dares.map((dare, index) => {
            const angle = (360 / dares.length) * index;
            const colors = [
              'bg-orange-400', 'bg-red-500', 'bg-pink-400', 'bg-pink-600', 'bg-purple-700',
              'bg-violet-500','bg-blue-400', 'bg-cyan-400', 'bg-green-400', 'bg-yellow-300'
            ];

            return (
				<div key={index}>
				  {/* Triangle de couleur */}
				  <div
					className={`absolute w-full h-full ${colors[index % colors.length]}`}
					style={{
					  transform: `rotate(${angle}deg)`,
					  clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.sin((360 / dares.length) * Math.PI / 180)}% ${50 - 50 * Math.cos((360 / dares.length) * Math.PI / 180)}%)`
					}}
				  />
				  
				  {/* Conteneur qui tourne autour du centre */}
				  <div
					className="absolute w-full h-full"
					style={{
					  transform: `rotate(${angle + 180 / dares.length}deg)`
					}}
				  >
					{/* Contenu qui reste droit */}
					<div
					  className="absolute left-1/2 top-[12%] -translate-x-1/2 text-center"
					>
					  <div 
						className="text-3xl mb-2"
						style={{ 
						  filter: 'drop-shadow(3px 3px 6px rgba(0,0,0,0.8))'
						}}
					  >
						{dare.icon}
					  </div>
					</div>
				  </div>
				</div>
			  );
          })}

          {/* Centre de la roue */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full shadow-lg border-4 border-amber-200 flex items-center justify-center">
            <div className="w-4 h-4 bg-amber-200 rounded-full" />
          </div>
        </div>
      </div>

	 <div className="flex flex-col items-center gap-10">
		  {/* Bouton de lancement */}
		  <button
			onClick={spinWheel}
			disabled={isSpinning}
			className="px-8 py-4 bg-amber-300 hover:bg-amber-500 disabled:bg-gray-400 text-gray-900 font-bold text-xl rounded-full shadow-lg transform transition hover:scale-105 disabled:cursor-not-allowed disabled:scale-100"
		  >
			{isSpinning ? ' En cours...' : ' Lancer la roue !'}
		  </button>

		  {/* Résultat */}
		  {selectedDare && (
			<div className="bg-white rounded-lg p-6 shadow-2xl max-w-md animate-bounce">
			  <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
				Ton gage :
			  </h2>
			  <p className="text-3xl font-bold text-purple-600 text-center">
				{selectedDare}
			  </p>
			</div>
		  )}
	</div>
    </div>
  );
}
