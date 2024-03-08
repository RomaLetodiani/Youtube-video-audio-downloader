const MessageModal = ({
  errorMessage,
  successMessage,
  forwardRef,
}: {
  errorMessage?: string
  successMessage?: string
  forwardRef: any
}) => {
  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center z-[999]">
      <div className="absolute inset-0 w-full h-full bg-[#00000080] backdrop-blur-[8px]"></div>
      {/* Blurred background */}
      <div className="relative bg-white p-5 rounded-xl shadow-md" ref={forwardRef}>
        <p
          className={` ${
            errorMessage ? 'text-warm-red' : 'text-warm-green'
          } text-xl font-bold m-0 text-center`}
        >
          {errorMessage || successMessage}
        </p>
        {/* Error message */}
      </div>
    </div>
  )
}

export default MessageModal
