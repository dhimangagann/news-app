const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="text-center mb-6 sm:mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">About NewsApp</h1>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/20 p-4 sm:p-6 lg:p-8 border border-gray-100 dark:border-gray-700">
        
        <div className="prose prose-sm sm:prose prose-lg max-w-none">
          <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
            Welcome to NewsApp, your comprehensive news aggregation platform that brings you 
            the latest updates from multiple categories and trusted sources. Stay informed 
            with real-time news coverage across Technology, Business, and General news.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            <div className="bg-red-50 p-3 sm:p-4 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-2 text-sm sm:text-base">🏠 Home</h3>
              <p className="text-red-800 text-xs sm:text-sm">
                Aggregated news from all categories including general US news, 
                tech updates, business news, and company-specific updates for Apple and Tesla.
              </p>
            </div>
            <div className="bg-red-50 p-3 sm:p-4 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-2 text-sm sm:text-base">💻 Technology</h3>
              <p className="text-red-800 text-xs sm:text-sm">
                Latest tech news from TechCrunch covering innovations, startups, 
                and technology trends.
              </p>
            </div>
            <div className="bg-orange-50 p-3 sm:p-4 rounded-lg">
              <h3 className="font-semibold text-orange-900 mb-2 text-sm sm:text-base">💼 Business</h3>
              <p className="text-orange-800 text-xs sm:text-sm">
                US business news covering markets, economy, companies, 
                and financial updates.
              </p>
            </div>
            <div className="bg-pink-50 p-3 sm:p-4 rounded-lg">
              <h3 className="font-semibold text-pink-900 mb-2 text-sm sm:text-base">🏢 Company Focus</h3>
              <p className="text-pink-800 text-xs sm:text-sm">
                Dedicated coverage of major companies like Apple and Tesla 
                with latest developments and announcements.
              </p>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">News Sources</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 sm:mb-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li><strong>General US Headlines:</strong> Top news from across the United States</li>
            <li><strong>TechCrunch:</strong> Leading technology news and startup coverage</li>
            <li><strong>Business Category:</strong> US business and financial news</li>
            <li><strong>Apple News:</strong> Latest updates and announcements from Apple Inc.</li>
            <li><strong>Tesla News:</strong> Current developments and news about Tesla</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Technology Stack</h2>
          <div className="bg-gray-50 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
              <div>
                <strong className="text-gray-900">Frontend:</strong>
                <ul className="text-gray-700 mt-1">
                  <li>• React 19.1.1</li>
                  <li>• React Router DOM</li>
                  <li>• Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-900">Build Tool:</strong>
                <ul className="text-gray-700 mt-1">
                  <li>• Vite</li>
                  <li>• ESLint</li>
                  <li>• PostCSS</li>
                </ul>
              </div>
              <div>
                <strong className="text-gray-900">API:</strong>
                <ul className="text-gray-700 mt-1">
                  <li>• NewsAPI.org</li>
                  <li>• Fetch API</li>
                  <li>• Real-time updates</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">App Features</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4 sm:mb-6 space-y-1 sm:space-y-2 text-sm sm:text-base">
            <li>Real-time news aggregation from multiple sources</li>
            <li>Category-based news filtering and organization</li>
            <li>Responsive design optimized for all devices</li>
            <li>Fast loading with optimized performance</li>
            <li>Direct links to original articles</li>
            <li>Clean and intuitive user interface</li>
            <li>Active navigation with current page highlighting</li>
            <li>Error handling and loading states</li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-400 p-3 sm:p-4 mb-4 sm:mb-6">
            <div className="flex">
              <div className="ml-3">
                <p className="text-xs sm:text-sm text-red-700">
                  <strong>API Information:</strong> This app uses NewsAPI.org for fetching 
                  real-time news data. The app fetches news from multiple endpoints to 
                  provide comprehensive coverage across different categories and sources.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Navigation</h2>
          <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
            Use the navigation bar to explore different news categories:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-4 sm:mb-6 space-y-1 text-sm sm:text-base">
            <li><strong>Home:</strong> Combined feed from all sources</li>
            <li><strong>Technology:</strong> Tech-focused news from TechCrunch</li>
            <li><strong>Business:</strong> US business and financial news</li>
            <li><strong>About:</strong> Information about this application</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">Contact & Feedback</h2>
          <p className="text-gray-700 text-sm sm:text-base">
            This is a demo news aggregation application built with modern web technologies. 
            The app demonstrates real-time data fetching, responsive design, and 
            single-page application architecture using React and React Router.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About