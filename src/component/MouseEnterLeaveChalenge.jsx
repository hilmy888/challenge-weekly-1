import React, {useState} from 'react'

/*
  ubah component dibawah sesuai spesifikasi berikut:
  1.  saat mouse ada di atasnya
      background berwarna kuning
  2.  saat tidak ada mouse di atasnya
      background berwarna hijau

  jadikan file ComponentBackgroundColor.jsx
  sebagai contoh
*/

function MouseEventDemo() {
  const [color, setColor] = useState('green')
  const styling = {
    backgroundColor: color,
    width: 100,
    height: 100,
  }
  function handleOnMouseEnter() {
    const newColor = color === 'green' ? 'yellow' : 'green'
    setColor(newColor)
  }

  function handleOnMouseLeave() {
    const newColor = color === 'yellow' ? 'green' : 'yellow'
    setColor(newColor)
  }

  
  
  return (
    <div
      style={styling}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      [Enter Leave]
    </div>
  )
}

export default MouseEventDemo
