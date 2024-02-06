import React from 'react'

const RainItem = ({dropLeft, dropTop, i}) => {
  // в style добавить animation: fall change_seconds infinite
  // внизу высчитывать время которое понадобится каждой капле чтобы достичь низа экрана

  const computeTimeOfAnimation = () => {
    return
  }

  return (
    <div
      className="drop"
      id={`drop${i}`}
      style={{
        left: dropLeft + 'px',
        top: dropTop + 'px',
      }}
    ></div>
  )
}

export default RainItem
