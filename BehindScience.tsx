export default function BehindScience() {
  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-4">
          🧬 Behind the Science
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Understanding the scientific foundations that connect your skin, mind, and the products you use.
        </p>
      </div>

      {/* Mini-Sections */}
      <div className="space-y-10">
        {/* The Skin-Brain Loop */}
        <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-2xl">
              🧠
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                The Skin–Brain Loop
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  How your skin talks to your brain: through nerves, hormones, and senses. 
                  Your skin is your largest organ and it's in constant communication with your nervous system.
                </p>
                <p>
                  Skin stress can raise cortisol levels, affecting your mood and confidence. 
                  Touch can lower it, which is why a good skincare routine feels so therapeutic.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Natural vs Synthetic */}
        <div className="bg-pink-50 rounded-2xl p-8 border border-pink-200">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center text-2xl">
              🌿
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                Natural vs Synthetic: What Really Matters
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  "Natural" ≠ always better. Poison ivy is natural, but you wouldn't put it on your face.
                </p>
                <p>
                  Molecules are molecules – safety comes from science, not trends. 
                  A lab-made vitamin C is identical to one from an orange, often more stable and effective.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Biotech in Cosmetics */}
        <div className="bg-purple-50 rounded-2xl p-8 border border-purple-200">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-2xl">
              🔬
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                Biotech in Cosmetics
              </h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  Fermented ingredients, lab-made actives, clean delivery systems – 
                  biotechnology is revolutionizing how we care for our skin.
                </p>
                <p>
                  How biotech makes skincare more effective & sustainable: 
                  precise formulations, reduced environmental impact, and consistent results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Charts Section */}
      <div className="space-y-8">
        <h3 className="text-2xl font-playfair font-bold text-gray-900 text-center mb-8">
          📊 Visual Science
        </h3>

        {/* Mind-Skin Loop Diagram */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm">
          <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Mind–Skin Loop Diagram
          </h4>
          
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Brain */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-3xl mb-3 mx-auto">
                🧠
              </div>
              <h5 className="font-semibold text-gray-800">Brain</h5>
              <p className="text-sm text-gray-600">Processes emotions<br/>& stress signals</p>
            </div>

            {/* Arrow */}
            <div className="text-2xl text-gray-400 rotate-90 md:rotate-0">→</div>

            {/* Hormones */}
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-3xl mb-3 mx-auto">
                ⚡
              </div>
              <h5 className="font-semibold text-gray-800">Hormones</h5>
              <p className="text-sm text-gray-600">Cortisol, endorphins<br/>affect skin health</p>
            </div>

            {/* Arrow */}
            <div className="text-2xl text-gray-400 rotate-90 md:rotate-0">→</div>

            {/* Skin */}
            <div className="text-center">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center text-3xl mb-3 mx-auto">
                ✨
              </div>
              <h5 className="font-semibold text-gray-800">Skin</h5>
              <p className="text-sm text-gray-600">Reflects internal<br/>state & health</p>
            </div>

            {/* Arrow back */}
            <div className="text-2xl text-gray-400 rotate-90 md:rotate-0">↺</div>

            {/* Touch */}
            <div className="text-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center text-3xl mb-3 mx-auto">
                👋
              </div>
              <h5 className="font-semibold text-gray-800">Touch</h5>
              <p className="text-sm text-gray-600">Skincare routine<br/>soothes & heals</p>
            </div>
          </div>
        </div>

        {/* Natural vs Synthetic Comparison Chart */}
        <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm">
          <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Natural vs Synthetic Comparison
          </h4>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-800">Aspect</th>
                  <th className="text-center py-3 px-4 font-semibold text-green-700">Natural</th>
                  <th className="text-center py-3 px-4 font-semibold text-blue-700">Synthetic</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">Consistency</td>
                  <td className="py-3 px-4 text-center">Variable</td>
                  <td className="py-3 px-4 text-center">Consistent</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">Purity</td>
                  <td className="py-3 px-4 text-center">May contain impurities</td>
                  <td className="py-3 px-4 text-center">Highly pure</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">Stability</td>
                  <td className="py-3 px-4 text-center">Less stable</td>
                  <td className="py-3 px-4 text-center">More stable</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium">Environmental Impact</td>
                  <td className="py-3 px-4 text-center">Variable</td>
                  <td className="py-3 px-4 text-center">Often lower</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Safety</td>
                  <td className="py-3 px-4 text-center">Depends on source</td>
                  <td className="py-3 px-4 text-center">Rigorously tested</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600 italic">
              The key is understanding the science behind each ingredient, regardless of its origin.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
