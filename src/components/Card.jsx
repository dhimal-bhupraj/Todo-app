import React, { useState } from 'react'
function Card() {
  const [search, setSearch] = useState("")
  // since we are dealing with previous data in the note don't forget to put the [] inside useState()
  const [data, setData] = useState([])

  const changeSearch = (event) => {
    setSearch(event.target.value)
  }
  const addNote = () => {
    setData((prevData) => { return [...prevData, search] })
    setSearch('')
  }
  // when the Enter key is pressed, we can add an event listener "Keydown event to the input field"
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addNote();
    }
  };

  const removeFun = (index) => {
    // we can write any name inside the parameter and we created a new array named newData from using spread operator
    setData((prevData) => {
      const newData = [...prevData];
      // the splice method takes arguments such as (index no., how many elements, items to be added)
      // Here if we use (index,2) then two elements will be removed from that index number.
      newData.splice(index, 1);
      return newData;
    });
  };
 

  return (
    <div>
      {/* mx-auto className is used to center the card element */}
      <div className="card mx-auto" style={{ width: "20rem", height: "25rem" }} >
        <div className="card-body">
          <h1 className="card-title">Todo List</h1>
          <div>
            <input type="text" className='my-custom-inputField' value={search} onKeyDown={handleKeyDown} onChange={changeSearch} placeholder='Add an Item' />
            <div>
              <button className='my-custom-btn' onClick={addNote}>Add</button>
              <ul>
                {data.map((value, index) => (
                  <div id='val' >
                    <i className="fa-regular fa-circle-xmark" onClick={() => { removeFun(index) }}></i><span >{value}</span>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
