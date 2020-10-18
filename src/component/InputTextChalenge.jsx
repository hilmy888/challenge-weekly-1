import React, {useState} from 'react'

/*
  ubah component dibawah sesuai spesifikasi berikut:
  1.  ubah text dengan tulisan berikut
      [GANTI SAYA]
*/

function InputText() {
  const [inputValue, setInputValue] = useState("")
    
  /*
    callback dari onChange
    bisa menerima argument event
    argument event adalah sebuah object
    perhatikan bahwa tidak semua event memiliki
    target.value
  */
  function handleInputTextChange(e) {
      setInputValue(e.target.value)
  }

  /*
    attribut onChange menerima callback
    handleInputTextChange
  */
  return (
    <div>
      {inputValue}
      <br />
      <input
        type="text"
        onChange={handleInputTextChange}
      />
    </div>
  )
}

export default InputText
