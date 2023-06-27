import React from 'react'

const Filter = ({l,search}) => {
  return (
    <div>  
    <input ref={l} className="inputs"
      type="text"
     id='aa'
     required
     placeholder='Write true or false'
       minlength="4" maxlength="5" size="6"
    />
        <button className='button5' onClick={(search)}>recherche</button>
  

</div>
  )
}

export default Filter;