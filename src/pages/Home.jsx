import { useState, useEffect } from 'react'
import NewsCard from '../components/NewsCard'
import Loading from '../components/Loading'
import BottomLoader from '../components/BottomLoader'

const Home = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        setLoading(true)
        const API_KEY = 'bcad5369b78a47dca9798cf2d94aee16'
        
        const newsPromises = [
          fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`),
          fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`),
          fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`),
          fetch(`https://newsapi.org/v2/everything?q=apple&from=2025-08-30&to=2025-08-31&sortBy=popularity&apiKey=${API_KEY}`),
          fetch(`https://newsapi.org/v2/everything?q=tesla&from=2025-07-31&sortBy=publishedAt&apiKey=${API_KEY}`)
        ]
        
        const responses = await Promise.all(newsPromises)
        
        for (const response of responses) {
          if (!response.ok) {
            throw new Error('Failed to fetch news from one or more sources')
          }
        }
        
        const newsData = await Promise.all(responses.map(response => response.json()))
        
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
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchAllNews()
  }, [])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="flex flex-col items-center text-center mb-6 sm:mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Home</h1>
          <p className="text-gray-600 mt-1 text-sm sm:text-base">Latest updates from all categories</p>
        </div>
      </div>
      
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
      
      {articles.length > 0 && <BottomLoader />}
      
      {articles.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-base sm:text-lg">No news articles found.</p>
        </div>
      )}
    </div>
  )
}

export default Home