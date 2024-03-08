export const isValidYouTubeUrl = (url: string) => {
  const pattern = /^(https?:\/\/)?(www\.)?youtube\.com\/watch\?v=.*$/
  return pattern.test(url)
}
