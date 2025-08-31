const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600 mb-4"></div>
        <p className="text-gray-600 text-lg">Loading latest news...</p>
      </div>
    </div>
  )
}

export default Loading
