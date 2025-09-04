import { useState, useEffect } from 'react'
import NewsCard from '../components/NewsCard'
import Loading from '../components/Loading'
import BottomLoader from '../components/BottomLoader'

const Home = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredArticles, setFilteredArticles] = useState([])

  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        setLoading(true)
        const API_KEY = 'bcad5369b78a47dca9798cf2d94aee16'
        
        const newsPromises = [
          fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`),
          fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`),
          fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`)
        ]
        
        const responses = await Promise.all(newsPromises)
        
        for (const response of responses) {
          if (!response.ok) {
            throw new Error(`Failed to fetch news: ${response.status} ${response.statusText}`)
          }
        }
        
        const newsData = await Promise.all(responses.map(response => response.json()))
        
        for (const data of newsData) {
          if (data.status === 'error') {
            throw new Error(data.message || 'API returned an error')
          }
        }
        
        const allArticles = []
        newsData.forEach(data => {
          if (data.articles) {
            allArticles.push(...data.articles)
          }
        })
        
        const uniqueArticles = allArticles.filter((article, index, self) =>
          index === self.findIndex(a => a.title === article.title)
        ).sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
        
        setArticles(uniqueArticles.slice(0, 30))
        setFilteredArticles(uniqueArticles.slice(0, 30))
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchAllNews()
  }, [])

  // Filter articles based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredArticles(articles)
    } else {
      const filtered = articles.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.source?.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredArticles(filtered)
    }
  }, [searchTerm, articles])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  if (loading) {
    return <Loading />
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-red-900 border border-red-600 text-red-200 px-4 py-3 rounded-lg">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 font-serif">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search news articles..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
            />
            <svg className="absolute right-3 top-3 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          {searchTerm && (
            <p className="text-sm text-gray-400 mt-2">
              Found {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} for "{searchTerm}"
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
      
      {filteredArticles.length > 0 && !searchTerm && <BottomLoader />}
      
      {filteredArticles.length === 0 && !loading && (
        <div className="text-center py-12 font-serif">
          <p className="text-gray-400 text-base sm:text-lg">
            {searchTerm ? `No news articles found for "${searchTerm}"` : 'No news articles found.'}
          </p>
        </div>
      )}
    </div>
  )
}

export default Home