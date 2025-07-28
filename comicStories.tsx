export default function ComicStories() {
  const comics = [
    {
      title: "She Looks Like Confidence",
      theme: "Self-worth after a breakup",
      panels: [
        "Girl in front of mirror, wiping off tear-stained makeup",
        "Friend gives her a bold lipstick",
        "She puts it on before school",
        "Confidence changes how she walks, talks, feels",
        "Ends with her smiling alone in the mirror"
      ],
      message: "Confidence isn't worn, it's felt — but sometimes lipstick helps.",
      color: "bg-pink-50 border-pink-200"
    },
    {
      title: "The Voice Inside Me",
      theme: "Inner critic, self-doubt",
      panels: [
        "Girl looking in mirror: \"You're not pretty enough.\"",
        "Goes to school: afraid to speak",
        "At night, applies skincare and reads about skin health",
        "Learns her skin isn't \"bad\" — just misunderstood",
        "Gains confidence to mute that voice"
      ],
      message: "Silence the inner critic. Your skin isn't the problem.",
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Mirror, Mirror, Science",
      theme: "Beauty + biotechnology",
      panels: [
        "Girl in lab coat explaining ingredients to her reflection",
        "Shows molecules turning into creams",
        "Mirror reflection turns confident, clear-skinned",
        "Ends with her presenting a science fair project on cosmetic science"
      ],
      message: "Beauty is science. Understanding it is power.",
      color: "bg-purple-50 border-purple-200"
    }
  ]

  return (
    <div className="space-y-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-4">
          📖 Comic Stories
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Short story arcs that emphasize emotion, relatability, and transformation through the lens of confidence and self-discovery.
        </p>
      </div>

      <div className="grid gap-8 md:gap-12">
        {comics.map((comic, index) => (
          <article key={comic.title} className={`rounded-2xl border-2 ${comic.color} p-6 sm:p-8 transition-all duration-300 hover:shadow-lg`}>
            {/* Banner Area - Placeholder for comic illustration */}
            <div className="mb-6">
              <div className="h-48 sm:h-64 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-300">
                <div className="text-center text-gray-500">
                  <div className="text-4xl mb-2">🎨</div>
                  <p className="text-sm font-medium">Comic Banner Illustration</p>
                  <p className="text-xs">"{comic.title}"</p>
                </div>
              </div>
            </div>

            {/* Comic Details */}
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-2">
                  {comic.title}
                </h3>
                <p className="text-sm font-medium text-gray-600 italic">
                  Theme: {comic.theme}
                </p>
              </div>

              {/* Panels */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-800">Story Panels:</h4>
                <div className="grid gap-3">
                  {comic.panels.map((panel, panelIndex) => (
                    <div key={panelIndex} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-gray-600 border">
                        {panelIndex + 1}
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {panel}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="pt-4 border-t border-gray-200">
                <p className="text-base font-medium text-gray-800 italic text-center">
                  "{comic.message}"
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Note about images */}
      <div className="text-center py-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> Comic banner illustrations and detailed panel artwork will be added here. Each story will have 4-6 visual panels with emphasis on emotion and transformation.
          </p>
        </div>
      </div>
    </div>
  )
}
