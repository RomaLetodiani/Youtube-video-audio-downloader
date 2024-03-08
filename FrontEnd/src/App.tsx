import Form from './components/Form'
import youtube from './assets/images/youtube-svg-logo.svg'
import { useLocalStorage } from './hooks/useLocalStorage'
import { isValidYouTubeUrl } from './utils/validation'

const App = () => {
  const [videoId, setVideoId] = useLocalStorage('videoID', '')
  const [youtubeURL, setYoutubeURL] = useLocalStorage('youtubeURL', '')
  const handleUrlChange = (url: string) => {
    if (!url || !isValidYouTubeUrl(url) || url === youtubeURL) return
    setYoutubeURL(url)
    const videoIdMatch = url.match(/(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^\s&]+)/)
    if (videoIdMatch) {
      setVideoId(videoIdMatch[1])
    }
  }
  return (
    <div className="min-h-screen min-w-[340px] flex flex-col gap-8 justify-center items-center p-3">
      <div className="flex flex-col items-center justify-center">
        <img src={youtube} alt="youtube logo" />
        <h1 className="text-[clamp(30px,5vw,40px)] text-center font-bold">
          Youtube Video/Audio Downloader
        </h1>
      </div>
      <Form handleUrlChange={handleUrlChange} />
      <div className="max-w-[768px] w-full h-full">
        {youtubeURL && (
          <a className="block" target="__blank" href={youtubeURL}>
            <h2 className="text-[clamp(15px,2vw,20px)] text-center mb-5 py-1 px-5 shadow-md rounded-3xl overflow-ellipsis overflow-hidden whitespace-nowrap">
              Currently Previewing:
              <span className="text-warm-red ml-2">{youtubeURL}</span>
            </h2>
          </a>
        )}
        {videoId && (
          <div className="relative rounded-3xl drop-shadow-2xl overflow-hidden w-full pt-[56.25%]">
            <iframe
              className=" absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
