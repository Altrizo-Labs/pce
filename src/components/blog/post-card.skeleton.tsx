export default function PostCardSkeleton() {
  return (
    <div className="bg-white rounded-[20px] overflow-hidden shadow-lg animate-pulse">
      <div className="aspect-[16/10] bg-gray-200"></div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-8 h-8 rounded-full bg-gray-200 mr-2"></div>
          <div className="h-4 bg-gray-200 rounded w-24"></div>
        </div>
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
        <div className="flex justify-between items-center">
          <div className="h-4 bg-gray-200 rounded w-20"></div>
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}
