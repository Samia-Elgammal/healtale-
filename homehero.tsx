export default function HomeHero() {
  return (
    <section className="text-center py-12 sm:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <p className="text-sm text-green-600 font-medium mb-4">
            Where confidence, cosmetics, and science connect.
          </p>
        </div>
        
        <div className="prose prose-lg mx-auto">
          <p className="text-lg sm:text-xl leading-relaxed text-gray-700 font-light">
            HealTale is a creative mental wellness platform made for every girl who wants to understand herself more — through stories, science, and skincare. Whether you're struggling with confidence, curiosity, or just want to learn what's in your moisturizer, you're in the right place.
          </p>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center space-x-8 text-2xl">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            📖
          </div>
          <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
            🧪
          </div>
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            🧬
          </div>
          <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
            📓
          </div>
        </div>
      </div>
    </section>
  )
}
