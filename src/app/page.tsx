export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-climbing-blue">
          台灣攀岩館 Beta 影片搜尋
        </h2>
        <p className="text-lg mb-8 text-gray-600">
          快速找到你需要的攀岩路線 Beta 影片
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">依岩館搜尋</h3>
            <p className="text-gray-600">選擇你想要的攀岩館</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">依區域篩選</h3>
            <p className="text-gray-600">A區、B區、C區等分區</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">依難度級數</h3>
            <p className="text-gray-600">V0-V16 或 5.6-5.15</p>
          </div>
        </div>
      </div>
    </div>
  )
}