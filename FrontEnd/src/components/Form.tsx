import { useRef, useState } from 'react'
import { useInput } from '../hooks/useInput'
import { download } from '../utils/helpers'
import Button from './UI/Button'
import Input from './UI/Input'
import useTimeout from '../hooks/useTimeout'
import Downloading from './Downloading'
import useClickOutside from '../hooks/useClickOutside'
import MessageModal from './MessageModal'

const Form = ({ handleUrlChange }: { handleUrlChange: (url: string) => void }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [success, setSuccess] = useState<boolean>(false)
  const linkUrl = useInput((link: string) => link.trim() !== '')

  const [clearError] = useTimeout(() => {
    setError(null)
  }, 3000)
  const [clearSuccess] = useTimeout(() => {
    setSuccess(false)
  }, 3000)
  const modalRef = useRef<HTMLDivElement>(null)

  const handleClickOutside = () => {
    setError(null)
    setSuccess(false)
  }

  useClickOutside(modalRef, handleClickOutside)

  const handleSubmit = async (url: string, format: string) => {
    if (loading || linkUrl.hasError || linkUrl.value.trim() === '') {
      return
    }

    try {
      setLoading(true)
      await download(url, format, setLoading, setError, setSuccess, clearError, clearSuccess)
    } catch (error) {
      console.error('Error downloading:', error)
      setError(error as Error)
      clearError()
    } finally {
      setLoading(false)
    }
  }
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="max-w-3xl w-full flex flex-col md:flex-row gap-5"
    >
      <Input {...linkUrl} errorMessage="Enter Valid URL" label="Enter Youtube Video URL" />
      <div className="flex gap-5 flex-wrap md:flex-nowrap">
        <Button onClick={() => handleSubmit(linkUrl.value, 'mp4')} className="w-full">
          DownLoad MP4
        </Button>
        <Button onClick={() => handleSubmit(linkUrl.value, 'mp3')} className="w-full">
          DownLoad MP3
        </Button>
        <Button
          onClick={() => handleUrlChange(linkUrl.value)}
          className="w-full"
          variant="secondary"
        >
          Preview
        </Button>
      </div>
      {loading && <Downloading />}
      {error && <MessageModal forwardRef={modalRef} errorMessage={error.message} />}
      {success && <MessageModal forwardRef={modalRef} successMessage={'Downloaded Successfully'} />}
    </form>
  )
}

export default Form
