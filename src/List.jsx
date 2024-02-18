export default function List({
  array, value, setValue
}) {
  
  return (
    <ul className='list'>
      {array.map(element => (
        <li
          key={element}
          onClick={() => setValue(element)}
        >
          <input 
            type='radio'
            readOnly
            id={element}
            checked={element === value}
          />
          <label htmlFor={element}>{element}</label>
        </li>
      ))}
    </ul>
  )
}