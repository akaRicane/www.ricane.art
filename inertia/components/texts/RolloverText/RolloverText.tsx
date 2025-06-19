import { useEffect, useState } from 'react'
import { randomInt } from '~/utils/maths'
import './RolloverText.css'

type RolloverWordsProps = {
  text: string[]
  endWith: string
  timing: number
}

type RolloverTextProps = {
  chunks: RolloverWordsProps[]
}

const RolloverWords: React.FC<RolloverWordsProps> = (props) => {
  const [words, setWords] = useState<string>(props.text[0])
  const [styling, setStyling] = useState<string>('rollover-words')

  const fonts: string[] = ['fredericka-the-great-regular']
  let index: number = 0
  let timeout: NodeJS.Timeout

  useEffect(() => {
    timeout = setInterval(() => {
      index += 1
      if (index >= props.text.length) {
        index = 0
      }
      setWords(props.text.at(index) || 'not found')

      const newStyle: string = 'rollover-words ' + fonts.at(randomInt(0, fonts.length - 1))
      setStyling(newStyle)
    }, props.timing * 1000)

    return () => {
      clearInterval(timeout)
    }
  }, [])

  return (
    <p className={styling}>
      {words}
      {props.endWith}
    </p>
  )
}

const RolloverText: React.FC<RolloverTextProps> = ({ chunks }) => {
  useEffect(() => {}, [])

  return (
    <div className="rollover-title fredericka-the-great-regular">
      {chunks.map((chunk, index) => (
        <RolloverWords
          key={index}
          text={chunk.text}
          endWith={chunk.endWith}
          timing={chunk.timing}
        />
      ))}
    </div>
  )
}

export default RolloverText
