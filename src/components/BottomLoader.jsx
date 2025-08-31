const BottomLoader = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="flex items-center space-x-2 text-gray-500">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-red-500"></div>
        <span className="text-sm">Loading more news...</span>
      </div>
    </div>
  )
}

export default BottomLoader
