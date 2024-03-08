export const download = async (
  url: string,
  format: string,
  setLoading: (loading: boolean) => void,
  setError: (error: Error | null) => void,
  setSuccess: (success: boolean) => void,
  clearError: () => void,
  clearSuccess: () => void,
) => {
  if (!url) {
    setError(new Error('URL is required'))
    return
  }

  try {
    // Set loading state
    setLoading(true)

    const response = await fetch('http://localhost:5000/download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url, format }),
    })

    if (!response.ok) {
      throw new Error(`Failed to download ${format === 'mp3' ? 'Audio' : 'Video'}`)
    }

    // Reset loading state
    setLoading(false)
    setSuccess(true)
    clearSuccess()

    // The video should be downloaded automatically by the browser
  } catch (error) {
    // Reset loading state and set error state
    setLoading(false)
    setError(error as Error)
    clearError()

    console.error('Error downloading video:', error)
  }
}
