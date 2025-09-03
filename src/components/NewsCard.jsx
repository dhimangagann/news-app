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
      case 'Technology': return 'bg-blue-100 text-blue-800'
      case 'Business': return 'bg-green-100 text-green-800'
      case 'Company': return 'bg-purple-100 text-purple-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const category = getCategoryFromSource(article.source)

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-200 font-serif">
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
          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)} w-fit font-serif`}>
            {category}
          </span>
          <span className="text-xs text-gray-500 font-serif">
            {new Date(article.publishedAt).toLocaleDateString()}
          </span>
        </div>
        
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 line-clamp-2 font-serif">
          {article.title}
        </h2>
        <p className="text-gray-600 mb-4 line-clamp-3 text-sm sm:text-base font-serif">
          {article.description}
        </p>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs sm:text-sm font-medium text-gray-600 truncate font-serif">
            {article.source?.name}
          </span>
        </div>
        
        <a 
          href={article.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 text-sm sm:text-base font-medium font-serif"
        >
          Read Full Article
        </a>
      </div>
    </div>
  )
}

export default NewsCard
