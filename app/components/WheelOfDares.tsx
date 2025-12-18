"use client";

import { useState } from 'react';

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

// Fonction pour créer un arc de cercle SVG
function describeArc(x: number, y: number, radius: number, startAngle: number, endAngle: number) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  
  return [
    "M", start.x, start.y,
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
    "L", x, y,
    "Z"
  ].join(" ");
}

function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}

export default function WheelOfDares() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedDare, setSelectedDare] = useState<{icon: string, text: string} | null>(null);
  const [rotation, setRotation] = useState(0);

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedDare(null);

    const spins = 9 + Math.random() * 3;
    const extraDegrees = Math.random() * 360;
    const totalRotation = rotation + spins * 360 + extraDegrees;

    setRotation(totalRotation);

    setTimeout(() => {
      const normalizedRotation = totalRotation % 360;
      const segmentAngle = 360 / dares.length;
      const selectedIndex = Math.floor((360 - normalizedRotation) / segmentAngle) % dares.length;
      
      setSelectedDare(dares[selectedIndex]);
      setIsSpinning(false);
    }, 10000);
  };

  // Couleurs mystère & séduction
  const colors = [
    "#8B0000", // Rouge sombre
    "#4B0082", // Indigo profond
    "#8B008B", // Magenta foncé
    "#DC143C", // Cramoisi
    "#800080", // Violet
    "#C71585", // Rose profond
    "#9400D3", // Violet foncé
    "#FF1493", // Rose vif
    "#8B4513", // Brun séduction
    "#B8860B", // Or sombre
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">
      {/* Texte de fond "Mystère et Séduction" - en haut à gauche */}
      <div className="absolute top-8 left-8 z-0 opacity-30 hover:opacity-50 transition-opacity duration-500 blur-[1.5px]">
        <div className="flex items-center gap-6">
          <div className="text-[80px] font-bold">
            <div className="bg-gradient-to-br from-red-700/70 via-amber-500/60 to-red-800/70 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              <div className="font-serif italic">Mystère</div>
            </div>
          </div>
          <div className="text-[50px] font-bold">
            <div className="bg-gradient-to-br from-amber-500/70 via-amber-400/60 to-amber-500/70 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              <div className="font-serif italic">&</div>
            </div>
          </div>
          <div className="text-[80px] font-bold">
            <div className="bg-gradient-to-br from-red-700/70 via-amber-500/60 to-red-800/70 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              <div className="font-serif italic">Séduction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Texte de fond "COPA GI 2028" - en bas à droite */}
      <div className="absolute bottom-8 right-8 z-0 opacity-30 hover:opacity-50 transition-opacity duration-500 blur-[1.5px]">
        <div className="flex items-center gap-6">
          <div className="text-[70px] font-bold">
            <div className="bg-gradient-to-tl from-red-700/70 via-amber-500/60 to-red-800/70 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              <div className="font-mono">COPA</div>
            </div>
          </div>
          <div className="text-[70px] font-bold">
            <div className="bg-gradient-to-tl from-amber-500/70 via-amber-400/60 to-amber-500/70 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              <div className="font-mono">GI</div>
            </div>
          </div>
          <div className="text-[70px] font-bold">
            <div className="bg-gradient-to-tl from-red-700/70 via-amber-500/60 to-red-800/70 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              <div className="font-mono">2028</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10 relative z-10">
        {/* Conteneur de la roue */}
        <div className="relative">
          {/* Halo lumineux derrière la roue - ROUGE/OR */}
          <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-red-600 via-amber-500 to-red-600 opacity-30 rounded-full scale-110" />
          
          <div className="relative w-96 h-96">
            {/* Indicateur (flèche dorée) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 z-20">
              <div className="w-0 h-0 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-t-[48px] border-t-amber-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.8)]" />
            </div>

            {/* La roue SVG */}
            <div
              className="w-full h-full rounded-full shadow-[0_0_60px_rgba(220,38,38,0.6)] relative border-8 border-amber-400"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: isSpinning ? 'transform 10s cubic-bezier(0.1, 0.5, 0.6, 0.99)' : 'none'
              }}
            >
              <svg viewBox="0 0 400 400" className="w-full h-full rounded-full">
                {/* Dégradé pour effet brillant */}
                <defs>
                  <radialGradient id="shine">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                  </radialGradient>
                </defs>

                {dares.map((dare, index) => {
                  const startAngle = (360 / dares.length) * index;
                  const endAngle = (360 / dares.length) * (index + 1);
                  const middleAngle = (startAngle + endAngle) / 2;

                  // Position de l'emoji (70% du rayon)
                  const emojiX = 200 + 140 * Math.cos((middleAngle - 90) * Math.PI / 180);
                  const emojiY = 200 + 140 * Math.sin((middleAngle - 90) * Math.PI / 180);

                  return (
                    <g key={index}>
                      {/* Segment de cercle parfait */}
                      <path
                        d={describeArc(200, 200, 200, startAngle, endAngle)}
                        fill={colors[index]}
                        stroke="rgba(0,0,0,0.3)"
                        strokeWidth="2"
                      />
                      
                      {/* Emoji avec rotation pour rester droit */}
                      <text
                        x={emojiX}
                        y={emojiY}
                        fontSize="52"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        transform={`rotate(${middleAngle}, ${emojiX}, ${emojiY})`}
                        style={{
                          filter: 'drop-shadow(3px 3px 8px rgba(0,0,0,0.9))'
                        }}
                      >
                        {dare.icon}
                      </text>
                    </g>
                  );
                })}

                {/* Effet de brillance sur toute la roue */}
                <circle cx="200" cy="200" r="200" fill="url(#shine)" />
              </svg>

              {/* Centre de la roue doré */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-amber-300 via-amber-400 to-amber-600 rounded-full shadow-[0_0_30px_rgba(251,191,36,0.8)] border-4 border-amber-200 flex items-center justify-center">
                <div className="w-6 h-6 bg-amber-900 rounded-full shadow-inner" />
              </div>
            </div>
          </div>
        </div>

        {/* Panneau de contrôle */}
        <div className="flex flex-col items-center gap-8">
          {/* Titre mystérieux */}
          <div className="text-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-300 via-red-400 to-amber-300 bg-clip-text text-transparent mb-2 drop-shadow-lg">
              La Roue du Destin
            </h1>
            <p className="text-amber-200 text-sm italic">Oseras-tu tourner la roue ?</p>
          </div>

          {/* Bouton de lancement */}
          <button
            onClick={spinWheel}
            disabled={isSpinning}
            className="group relative px-10 py-5 bg-gradient-to-r from-red-700 via-red-600 to-red-700 hover:from-red-600 hover:via-red-500 hover:to-red-600 disabled:from-gray-600 disabled:via-gray-700 disabled:to-gray-600 text-amber-100 font-bold text-xl rounded-full shadow-[0_0_30px_rgba(220,38,38,0.5)] transform transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_rgba(220,38,38,0.8)] disabled:cursor-not-allowed disabled:scale-100 disabled:shadow-none"
          >
            <span className="relative z-10 flex items-center gap-3">
              {isSpinning ? (
                <>
                  <span className="animate-spin">🔮</span>
                  En cours...
                </>
              ) : (
                <>
                  ✨ Lancer la roue
                </>
              )}
            </span>
            {/* Effet de lueur animé */}
            {!isSpinning && (
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 via-red-400 to-amber-400 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300" />
            )}
          </button>

          {/* Résultat */}
          {selectedDare && (
            <div className="relative">
              {/* Halo derrière la carte - ROUGE/OR */}
              <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-red-600 via-amber-500 to-red-600 opacity-50 rounded-xl scale-105" />
              
              <div className="relative bg-gradient-to-br from-black via-red-950 to-black border-2 border-amber-400 rounded-xl p-8 shadow-[0_0_40px_rgba(251,191,36,0.4)] max-w-md animate-pulse">
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-amber-400 rounded-full animate-ping" />
                </div>
                
                <h2 className="text-2xl font-bold text-amber-300 text-center mb-4 tracking-wide">
                  🎯 Ton Destin
                </h2>
                
                <div className="bg-black/40 rounded-lg p-6 backdrop-blur-sm border border-red-900/30">
                  <div className="text-6xl text-center mb-4">{selectedDare.icon}</div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-amber-200 via-red-300 to-amber-200 bg-clip-text text-transparent text-center leading-tight">
                    {selectedDare.text}
                  </p>
                </div>

                {/* Étoiles décoratives - OR/ROUGE */}
                <div className="flex justify-center gap-2 mt-4">
                  <span className="text-amber-400 text-xl">✧</span>
                  <span className="text-red-400 text-xl">✦</span>
                  <span className="text-amber-400 text-xl">✧</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
