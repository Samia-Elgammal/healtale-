'use client'

import { useState } from 'react'

export default function IngredientImpact() {
  const [selectedIngredient, setSelectedIngredient] = useState<string | null>(null)

  const ingredients = [
    {
      name: "Niacinamide",
      tagline: "Bright skin, bright mind",
      mythVsFact: "Doesn't bleach skin – it evens tone",
      moodEffect: "☀️ Confidence boost",
      biotechOrigin: "Vitamin B3 derivative",
      color: "bg-yellow-50 border-yellow-200 hover:bg-yellow-100"
    },
    {
      name: "Salicylic Acid",
      tagline: "Clear pores, clear thoughts",
      mythVsFact: "Not harmful – it's from willow bark",
      moodEffect: "💧 Relief",
      biotechOrigin: "Beta hydroxy acid",
      color: "bg-blue-50 border-blue-200 hover:bg-blue-100"
    },
    {
      name: "Hyaluronic Acid",
      tagline: "Science of softness",
      mythVsFact: "Doesn't cause acne – it hydrates",
      moodEffect: "🌊 Calm",
      biotechOrigin: "Naturally occurring molecule",
      color: "bg-cyan-50 border-cyan-200 hover:bg-cyan-100"
    },
    {
      name: "Retinol",
      tagline: "Confidence overnight",
      mythVsFact: "Doesn't thin skin – it rebuilds it",
      moodEffect: "🔁 Empowerment",
      biotechOrigin: "Vitamin A derivative",
      color: "bg-purple-50 border-purple-200 hover:bg-purple-100"
    },
    {
      name: "Centella Asiatica",
      tagline: "Calm in a cream",
      mythVsFact: "Not just trendy – proven to reduce stress",
      moodEffect: "🍃 Peace",
      biotechOrigin: "Plant extract",
      color: "bg-green-50 border-green-200 hover:bg-green-100"
    },
    {
      name: "Vitamin C",
      tagline: "Glow = growth",
      mythVsFact: "Oxidizes fast – needs dark storage",
      moodEffect: "☀️ Brightness",
      biotechOrigin: "L-Ascorbic acid",
      color: "bg-orange-50 border-orange-200 hover:bg-orange-100"
    },
    {
      name: "Ceramides",
      tagline: "Barrier = Boundaries",
      mythVsFact: "Not synthetic – your skin makes them",
      moodEffect: "🧱 Protection",
      biotechOrigin: "Lipid molecules",
      color: "bg-pink-50 border-pink-200 hover:bg-pink-100"
    },
    {
      name: "Glycerin",
      tagline: "Hydration = Healing",
      mythVsFact: "Not 'greasy' – pulls in water",
      moodEffect: "💧 Restoration",
      biotechOrigin: "Humectant compound",
      color: "bg-teal-50 border-teal-200 hover:bg-teal-100"
    }
  ]

  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-4">
          🧪 Ingredient Impact Visualizer
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover the science behind your skincare ingredients and how they impact both your skin and mood. Click on any ingredient to learn more.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {ingredients.map((ingredient) => (
          <div
            key={ingredient.name}
            className={`${ingredient.color} rounded-xl border-2 p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
            onClick={() => setSelectedIngredient(selectedIngredient === ingredient.name ? null : ingredient.name)}
          >
            {/* Molecule Art Placeholder */}
            <div className="mb-4 h-16 bg-white/50 rounded-lg flex items-center justify-center border border-gray-200">
              <div className="text-2xl">⚛️</div>
            </div>

            {/* Ingredient Name */}
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              {ingredient.name}
            </h3>

            {/* Tagline */}
            <p className="text-sm font-medium text-gray-700 mb-3 italic">
              "{ingredient.tagline}"
            </p>

            {/* Biotech Origin */}
            <p className="text-xs text-gray-600 mb-2">
              <span className="font-semibold">Origin:</span> {ingredient.biotechOrigin}
            </p>

            {/* Mood Impact */}
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-700">Mood Impact:</span>
              <span className="text-sm">{ingredient.moodEffect}</span>
            </div>

            {/* Expandable Myth vs Fact */}
            {selectedIngredient === ingredient.name && (
              <div className="mt-4 pt-4 border-t border-gray-200 animate-in slide-in-from-top-2 duration-200">
                <div className="bg-white/70 rounded-lg p-3">
                  <h4 className="text-sm font-bold text-gray-800 mb-2">Myth vs. Fact:</h4>
                  <p className="text-sm text-gray-700">
                    {ingredient.mythVsFact}
                  </p>
                </div>
              </div>
            )}

            {/* Click indicator */}
            <div className="mt-3 text-center">
              <span className="text-xs text-gray-500">
                {selectedIngredient === ingredient.name ? 'Click to close' : 'Click to learn more'}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
          Understanding Your Ingredients
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="text-center">
            <div className="text-2xl mb-2">🧬</div>
            <h4 className="font-semibold text-gray-800">Biotech Origin</h4>
            <p className="text-gray-600">How the ingredient is sourced or created</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">💭</div>
            <h4 className="font-semibold text-gray-800">Mood Impact</h4>
            <p className="text-gray-600">How it makes you feel emotionally</p>
          </div>
          <div className="text-center">
            <div className="text-2xl mb-2">🔍</div>
            <h4 className="font-semibold text-gray-800">Myth vs. Fact</h4>
            <p className="text-gray-600">Separating science from misconceptions</p>
          </div>
        </div>
      </div>
    </div>
  )
}
