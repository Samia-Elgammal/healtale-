'use client'

import { useState } from 'react'

export default function ConfidenceJournal() {
  const [showPreview, setShowPreview] = useState(false)

  const journalContents = [
    {
      title: "Daily Mood Tracker",
      description: "Track your emotional patterns and identify triggers",
      icon: "📊"
    },
    {
      title: "Self-Talk Reframing Prompts",
      description: "Transform negative thoughts into empowering ones",
      icon: "💭"
    },
    {
      title: "Mirror Moments Reflection",
      description: "Practice self-compassion and positive self-image",
      icon: "🪞"
    },
    {
      title: "Skin + Mood Log",
      description: "Connect your skincare routine with emotional wellness",
      icon: "✨"
    },
    {
      title: "Monthly Goal Setting",
      description: "Set and track your confidence-building goals",
      icon: "🎯"
    },
    {
      title: "Daily Affirmations",
      description: "3 powerful affirmations to repeat each day",
      icon: "💖"
    }
  ]

  const handleDownload = () => {
    // Create downloadable text content since we can't generate PDF directly
    const journalText = `
HEALTALE CONFIDENCE JOURNAL
Start Your Confidence Journey
===========================

DAILY MOOD TRACKER
-----------------
Date: ___________

Morning Mood (1-10): ____
Evening Mood (1-10): ____

What made me feel good today?
_________________________________
_________________________________

What challenged me today?
_________________________________
_________________________________

SELF-TALK REFRAMING
------------------
Negative thought I had:
_________________________________

Reframed positive thought:
_________________________________

MIRROR MOMENTS REFLECTION
------------------------
One thing I appreciate about myself today:
_________________________________

One thing I'm grateful for:
_________________________________

SKIN + MOOD LOG
--------------
Skincare routine completed: Yes / No
How did my skincare routine make me feel?
_________________________________

Skin concerns today:
_________________________________

MONTHLY GOALS
------------
This month I want to work on:
1. _________________________________
2. _________________________________
3. _________________________________

DAILY AFFIRMATIONS
-----------------
Repeat these 3 times each morning:

1. "I am worthy of love and respect, starting with my own."
2. "My skin tells the story of my journey, and every part is beautiful."
3. "I choose confidence over comparison, growth over perfection."

---
Remember: Confidence isn't about being perfect. 
It's about being authentically, beautifully you.

Visit HealTale for more resources on confidence, skincare, and science.
    `

    const blob = new Blob([journalText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'HealTale-Confidence-Journal.txt'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 mb-4">
          📓 Confidence Journal
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A simple, well-designed journal for reflection and self-awareness. Start your journey to understanding yourself better.
        </p>
      </div>

      {/* Main Journal Card */}
      <div className="bg-gradient-to-br from-pink-50 to-green-50 rounded-2xl p-8 border-2 border-pink-200 shadow-lg">
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl mx-auto mb-4 shadow-md">
            📓
          </div>
          <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-2">
            Start Your Confidence Journey
          </h3>
          <p className="text-gray-700 italic">
            HealTale's Mini Journal for Reflection & Self-Awareness
          </p>
        </div>

        {/* Journal Contents Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {journalContents.map((item, index) => (
            <div key={index} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h4 className="font-semibold text-gray-900 text-sm mb-1">
                {item.title}
              </h4>
              <p className="text-xs text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Download Section */}
        <div className="text-center space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-gray-700">
              <strong>Format:</strong> Printable text file (6 pages of content)
            </p>
            <p className="text-sm text-gray-700">
              <strong>Design:</strong> Clean layout with gentle prompts for daily reflection
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleDownload}
              className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-200 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              📥 Download Journal
            </button>
            
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="px-6 py-3 bg-white text-green-600 font-semibold rounded-lg border-2 border-green-600 hover:bg-green-50 transition-colors duration-200"
            >
              {showPreview ? 'Hide Preview' : '👀 Preview Content'}
            </button>
          </div>
        </div>

        {/* Preview Section */}
        {showPreview && (
          <div className="mt-8 bg-white rounded-xl p-6 border-2 border-gray-200 animate-in slide-in-from-top-4 duration-300">
            <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              Journal Preview
            </h4>
            
            <div className="space-y-6 text-sm">
              {/* Sample Daily Tracker */}
              <div className="border-l-4 border-pink-300 pl-4">
                <h5 className="font-semibold text-gray-800 mb-2">📊 Daily Mood Tracker</h5>
                <div className="space-y-2 text-gray-600">
                  <p>Date: ___________</p>
                  <p>Morning Mood (1-10): ____</p>
                  <p>Evening Mood (1-10): ____</p>
                  <p>What made me feel good today?</p>
                  <div className="border-b border-gray-300 mb-2"></div>
                </div>
              </div>

              {/* Sample Affirmation */}
              <div className="border-l-4 border-green-300 pl-4">
                <h5 className="font-semibold text-gray-800 mb-2">💖 Daily Affirmations</h5>
                <div className="space-y-1 text-gray-600 italic">
                  <p>"I am worthy of love and respect, starting with my own."</p>
                  <p>"My skin tells the story of my journey, and every part is beautiful."</p>
                  <p>"I choose confidence over comparison, growth over perfection."</p>
                </div>
              </div>

              {/* Sample Reflection */}
              <div className="border-l-4 border-blue-300 pl-4">
                <h5 className="font-semibold text-gray-800 mb-2">🪞 Mirror Moments</h5>
                <div className="space-y-2 text-gray-600">
                  <p>One thing I appreciate about myself today:</p>
                  <div className="border-b border-gray-300 mb-2"></div>
                  <p>One thing I'm grateful for:</p>
                  <div className="border-b border-gray-300 mb-2"></div>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="text-xs text-gray-500 italic">
                This is just a preview. The full journal contains 6 pages of guided prompts and exercises.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Additional Info */}
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
        <div className="text-center">
          <h4 className="font-semibold text-gray-900 mb-2">How to Use Your Journal</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-700">
            <div>
              <div className="text-2xl mb-2">🌅</div>
              <p><strong>Morning:</strong> Set intentions and read your affirmations</p>
            </div>
            <div>
              <div className="text-2xl mb-2">🌙</div>
              <p><strong>Evening:</strong> Reflect on your day and track your mood</p>
            </div>
            <div>
              <div className="text-2xl mb-2">📅</div>
              <p><strong>Monthly:</strong> Review patterns and set new goals</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
