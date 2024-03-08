const Downloading = () => {
  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center z-[999]">
      <div className="absolute inset-0 w-full h-full bg-[#00000080] backdrop-blur-[8px]"></div>
      {/* Blurred background */}
      <div className="relative flex flex-col items-center text-white">
        <div className="animate-spin w-24 h-24 border-8 border-gray-500 rounded-full border-t-white"></div>
        {/* Loader circles */}
        <p className="mt-8 font-bold text-2xl">Downloading...</p> {/* Text */}
      </div>
    </div>
  )
}

export default Downloading
