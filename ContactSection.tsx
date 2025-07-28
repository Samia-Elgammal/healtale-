export default function ContactSection() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-4">
          ✉️ Contact
        </h2>
      </div>

      {/* Main Contact Card */}
      <div className="bg-gradient-to-br from-green-50 to-pink-50 rounded-2xl p-8 border-2 border-green-200 shadow-lg">
        <div className="text-center space-y-6">
          {/* Icon */}
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl mx-auto shadow-md">
            💌
          </div>

          {/* Heading */}
          <h3 className="text-2xl font-playfair font-bold text-gray-900">
            Want to connect or share a story?
          </h3>

          {/* Description */}
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            HealTale is open to collabs, anonymous feedback, and community ideas. 
            Whether you have a story to share, a question about skincare science, 
            or want to collaborate on mental wellness content, I'd love to hear from you.
          </p>

          {/* Email */}
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <p className="text-sm text-gray-600 mb-2">Get in touch:</p>
            <a 
              href="mailto:taleheal@gmail.com"
              className="text-xl font-semibold text-green-600 hover:text-green-700 transition-colors duration-200 underline decoration-2 underline-offset-4"
            >
              taleheal@gmail.com
            </a>
          </div>

          {/* Contact Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
              <div className="text-2xl mb-2">🤝</div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">
                Collaborations
              </h4>
              <p className="text-xs text-gray-600">
                Content partnerships, guest stories, joint projects
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
              <div className="text-2xl mb-2">💭</div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">
                Anonymous Feedback
              </h4>
              <p className="text-xs text-gray-600">
                Share your thoughts, suggestions, or experiences
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
              <div className="text-2xl mb-2">💡</div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">
                Community Ideas
              </h4>
              <p className="text-xs text-gray-600">
                Suggest topics, ingredients, or story themes
              </p>
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <p className="text-sm text-blue-800">
              <strong>Response Time:</strong> I typically respond within 2-3 business days. 
              All messages are read personally and treated with care.
            </p>
          </div>
        </div>
      </div>

      {/* Future Social Links Placeholder */}
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
        <div className="text-center">
          <h4 className="font-semibold text-gray-900 mb-4">Connect with HealTale</h4>
          <p className="text-sm text-gray-600 mb-4">
            Social media coming soon! For now, email is the best way to reach me.
          </p>
          
          {/* Placeholder for future social links */}
          <div className="flex justify-center space-x-4 opacity-50">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              📱
            </div>
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              📸
            </div>
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              🐦
            </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-2">
            Instagram • TikTok • Twitter (Coming Soon)
          </p>
        </div>
      </div>

      {/* Community Guidelines */}
      <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
        <h4 className="font-semibold text-gray-900 mb-3 text-center">Community Values</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          <div className="flex items-start space-x-2">
            <span className="text-pink-500">💖</span>
            <p><strong>Kindness:</strong> We communicate with empathy and respect</p>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-green-500">🌱</span>
            <p><strong>Growth:</strong> We embrace learning and positive change</p>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-blue-500">🔬</span>
            <p><strong>Science:</strong> We value evidence-based information</p>
          </div>
          <div className="flex items-start space-x-2">
            <span className="text-purple-500">✨</span>
            <p><strong>Authenticity:</strong> We celebrate real stories and experiences</p>
          </div>
        </div>
      </div>
    </div>
  )
}
