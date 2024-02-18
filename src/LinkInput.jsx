export default function LinkInput({ link, setLink }) {
  return (
    <input
      className='input'
      onChange={(e) => setLink(e.target.value)}
      value={link}
    />
  )
}