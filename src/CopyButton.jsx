import { useState } from "react"

export default function CopyButton({
  link, source, medium
}) {
  const [isShowing, setShowing] = useState(false)

  const cleanedLink = link.includes('?') 
    ? link.split('?')[0].toString()
    : link

  const copyLink = () => navigator.clipboard.writeText(
    `${cleanedLink}?utm_source=${source}&utm_medium=${medium}`
  )

  const showConfirmation = () => {
    setShowing(true)
    setTimeout(() => setShowing(false), 2000)
  }

  return (
    <>
      <button
        onClick={() => {
          copyLink()
          showConfirmation()
        }}
      >
        copy link
      </button>

      { isShowing 
        ? <p className='status'>copied</p> 
        : <p>&nbsp;</p>
      }
    </>
  )
}