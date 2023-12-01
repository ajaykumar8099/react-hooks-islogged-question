import {useState} from 'react'

import {HomeContainer, Heading, Button, LockImage} from './styledComponents'

const Unlock = () => {
  const [isLocked, toggleLocked] = useState(true)

  const onToggleButton = () => {
    toggleLocked(prev => !prev)
  }

  const heading = isLocked
    ? 'Your Device is Locked '
    : 'Your Device is Unlocked'
  const imageUrl = isLocked
    ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
    : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
  const altText = isLocked ? 'lock' : 'unlock'
  const btnText = isLocked ? 'Unlock' : 'Lock'
  return (
    <HomeContainer>
      <LockImage src={imageUrl} alt={altText} />
      <Heading>{heading}</Heading>
      <Button type="button" onClick={onToggleButton}>
        {btnText}
      </Button>
    </HomeContainer>
  )
}
export default Unlock
