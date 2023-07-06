import React from 'react'//imp react
const Filter = ({l,search}) => {
  return (
    <div id='jj'> 
    {/* input of filter*/} 
    <input
     ref={l} 
    className="inputs"
      type="text"
     id='pp'
    placeholder='Write true or false'
       minlength="4" maxlength="5" size="5"
       required
    />{/* btn Recherche to open filter*/}
        <button className='button5' onClick={()=>search()}>Recherche</button>
  

</div>
  )
}

export default Filter;