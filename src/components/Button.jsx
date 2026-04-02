import React from 'react'
import { Link } from 'react-router-dom'

export default function Button({
  onClick,
  style,
  className,
  type,
  to,
  name
}) {
  const baseStyle = style || `rounded-lg transition-all duration-300 ${className}`

  return to ? (
    <Link to={to} className={baseStyle}>
      {name}
    </Link>
  ) : (
    <button onClick={onClick} type={type} className={baseStyle}>
      {name}
    </button>
  )
}