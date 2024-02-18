import { useState } from 'react'
import { mediums, sources } from './data'
import List from './List'
import CopyButton from './CopyButton'
import LinkInput from './LinkInput'
import './styles.css'

export default function App() {
  const [link, setLink] = useState('')
  const [source, setSource] = useState(sources[0])
  const [medium, setMedium] = useState(mediums[0])

  return (
    <>
      <LinkInput 
        link={link}
        setLink={setLink}
      />

      <div className='two-columns'>
        <List 
          array={sources}
          value={source}
          setValue={setSource}
        />

        <List 
          array={mediums}
          value={medium}
          setValue={setMedium}
        />
      </div>

      <CopyButton
        link={link}
        source={source}
        medium={medium}
      />
    </>
  )
}