import React from 'react'
const Filter = ({l,search}) => {
  return (
    <div id='jj'>  
    <input ref={l} className="inputs"
      type="text"
     id='pp'
    placeholder='Write true or false'
       minlength="4" maxlength="5" size="5"
       required
    />
        <button className='button5' onClick={()=>search()}>Recherche</button>
  

</div>
  )
}

export default Filter;