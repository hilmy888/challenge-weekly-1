import React, { Fragment, useState } from 'react'

/*
  ubah component dibawah sesuai spesifikasi berikut:
  1.  ubah value attribute type tag input dari
      "password" (baris 35) menjadi "text"
      jika button di tekan
  2.  value tersebut berubah kembali menjadi "password"
      jika button di tekan untuk ke dua kalinya
  3.  ubah string "Show Password" (baris 39)
      menjadi "Hide Password"
      jika attribute type (baris ke 35) nilainya "text"
  4.  string tersebut akan kembali menjadi
      "Show Password" jika attribute type
      nilainya "password"
*/

function InputText() {
 
 const [inputValaue, setInputValue] = useState ("")
 const [showPassword, setShowPassword] = useState(false)
  
 function handleClick (){

  setShowPassword (!showPassword)

 }
 /*
    callback dari onChange
    bisa menerima argument event
    semua argument event sebuah object
    tapi tidak semua event memiliki
    target.value
  */
  function handleInputTextChange(e) {
    setInputValue (e.target.value)
  }

  /*
    attribut onChange menerima callback
    handleInputTextChange
  */
  return (
    <Fragment>
      <input
        type={showPassword ? "text" : "password"} // ini adalah attribute type ganti dengan variable state dari useState
        onChange={handleInputTextChange}
      />
      <button type="button" onClick={handleClick}>
        Show Password
      </button>
    </Fragment>
  )
}

export default InputText
