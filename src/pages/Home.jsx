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
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 font-serif">
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
      
      {articles.length > 0 && <BottomLoader />}
      
      {articles.length === 0 && !loading && (
        <div className="text-center py-12 font-serif">
          <p className="text-gray-600 text-base sm:text-lg">No news articles found.</p>
        </div>
      )}
    </div>
  )
}

export default Home