import React from 'react'

function dogimage(src) {
  return (
    <div>
    <img className='dog' src={src} alt="" />
    </div>
  )
}

dogimage.defaultProps = {
    src: "https://www.computerhope.com/jargon/q/question-mark.png"
}

export default dogimage