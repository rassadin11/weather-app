import React from 'react'
import RainItem from './Item'

function computePosition(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const CreateRain = () => {
  const [nbDrop, _] = React.useState(200)

  let positions = []

  for (let i = 0; i < Math.floor(nbDrop); i++) {
    let dropLeft = computePosition(0, document.body.clientWidth)
    let dropTop = computePosition(0, window.innerHeight)

    positions.push([dropLeft, dropTop - window.innerHeight - 89, i])
  }

  return (
    <>
      {positions.map(pos => (
        <RainItem dropLeft={pos[0]} dropTop={pos[1]} i={pos[2]} />
      ))}
    </>
  )
}

export default CreateRain
