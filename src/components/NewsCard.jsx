const NewsCard = ({ article }) => {
  const getCategoryFromSource = (source) => {
    if (!source) return 'General'
    const sourceName = source.name.toLowerCase()
    if (sourceName.includes('techcrunch') || sourceName.includes('tech')) return 'Technology'
    if (sourceName.includes('business') || sourceName.includes('financial')) return 'Business'
    if (sourceName.includes('apple') || sourceName.includes('tesla')) return 'Company'
    return 'General'
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Technology': return 'bg-red-100 text-red-800'
      case 'Business': return 'bg-orange-100 text-orange-800'
      case 'Company': return 'bg-pink-100 text-pink-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const category = getCategoryFromSource(article.source)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {article.urlToImage && (
        <img 
          src={article.urlToImage} 
          alt={article.title}
          className="w-full h-40 sm:h-48 object-cover"
          onError={(e) => {
            e.target.style.display = 'none'
          }}
        />
      )}
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 space-y-2 sm:space-y-0">
          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)} w-fit`}>
            {category}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {new Date(article.publishedAt).toLocaleDateString()}
          </span>
        </div>
        
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {article.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm sm:text-base">
          {article.description}
        </p>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
            {article.source?.name}
          </span>
        </div>
        
        <a 
          href={article.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block w-full text-center bg-red-600 hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-600 text-white px-4 py-2 rounded transition-colors text-sm sm:text-base"
        >
          Read Full Article
        </a>
      </div>
    </div>
  )
}

export default NewsCard
