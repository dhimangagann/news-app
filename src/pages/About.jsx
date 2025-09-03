const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 font-serif">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-serif">About NewsApp</h1>
        <p className="text-gray-600 text-lg font-serif">Your comprehensive news aggregation platform</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6 lg:p-8 border border-gray-200">
        <div className="space-y-6 font-serif">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">What We Offer</h2>
            <p className="text-gray-700">
              NewsApp brings you the latest updates from trusted sources across Technology, 
              Business, and General news. Stay informed with real-time coverage and 
              comprehensive news aggregation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">News Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">🏠 Home</h3>
                <p className="text-blue-800 text-sm">General news and top headlines</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2">💻 Technology</h3>
                <p className="text-green-800 text-sm">Latest tech news from TechCrunch</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <h3 className="font-semibold text-orange-900 mb-2">💼 Business</h3>
                <p className="text-orange-800 text-sm">US business and financial updates</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Built With</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-gray-900">Frontend:</strong>
                  <p className="text-gray-700">React, Tailwind CSS</p>
                </div>
                <div>
                  <strong className="text-gray-900">Build:</strong>
                  <p className="text-gray-700">Vite, ESLint</p>
                </div>
                <div>
                  <strong className="text-gray-900">API:</strong>
                  <p className="text-gray-700">NewsAPI.org</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <p className="text-gray-600">
              A modern news aggregation app built with React and powered by NewsAPI
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About