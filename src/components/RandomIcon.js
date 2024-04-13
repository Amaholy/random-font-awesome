import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './RandomIcon.css'
import * as icons from '@fortawesome/free-solid-svg-icons'

const RandomIcon = () => {
  const [allIcons, setAllIcons] = useState([])
  const [showIcon, setShowIcon] = useState(false)
  const [randomIcon, setRandomIcon] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const iconList = Object.keys(icons).map((iconName) => icons[iconName])
    setAllIcons(iconList)
  }, [])

  const handleClick = () => {
    setShowIcon(false)
    setIsLoading(true)
    setTimeout(() => {
      const randomIcon = allIcons[Math.floor(Math.random() * allIcons.length)]
      setRandomIcon(randomIcon)
      setShowIcon(true)
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50vh',
        transform: 'translateY(-50%)',
      }}
    >
      <button
        className={`button ${isLoading ? 'loading' : ''}`}
        onClick={handleClick}
      >
        {isLoading ? 'Loading' : 'Show Random Icon'}
      </button>
      {showIcon && randomIcon && (
        <FontAwesomeIcon
          icon={randomIcon}
          size="3x"
          style={{ marginLeft: '10px' }}
        />
      )}
    </div>
  )
}

export default RandomIcon
