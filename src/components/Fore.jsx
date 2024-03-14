import React, { useRef, useState } from 'react';
import Card from "./Card";
import { MdCancel } from "react-icons/md";


function Foreground() {


  const [data, setData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [note, setNote] = useState('');
  const [selectedColor, setSelectedColor] = useState('#ffffff'); // Default color
  const [error, setError] = useState('');

  const ref = useRef(null);

  const createform = () => {
    setShowForm(true);
  };

  const hideForm = () => {
    setShowForm(false);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const cut = ()=>{
    setNote('');
    setSelectedColor('#ffffff');
    setError('');

    // Hide the form
    hideForm();
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    if (!note.trim() || selectedColor == '#ffffff') {
        setError('Note and Color are required');
        return;
      }
    setError('');
    const newItem = {

        desc: note,
        colour: selectedColor,

      };
  
      // Update the state with the new data
      setData((prevData) => [...prevData, newItem]);
     
  
    // Clear form fields
    setNote('');
    setSelectedColor('#ffffff');

    // Hide the form
    hideForm();
  };

  const handledelete = (id) => {
    
    setData((oldData) =>{
        return oldData.filter((obj,index) =>{
            return index !== id;
        })
    })
    alert('deleted');
  }



  const handlecopy = (id) =>{

    let ctext = data[id];
    navigator.clipboard.writeText(ctext.desc);
    alert('Copied to clipboard');
    
  }

  return (
    <>
      <div className=''>
        <div ref={ref} className='body h-screen w-full m-0 left-0 p-4 flex gap-10 d-flex flex-wrap'>
          
          {data.map((item, index) => (
            <Card key = {index} id={index} data={item} handleselect = {handledelete} referance={ref} handlecopy = {handlecopy} />
          ))}

          <div>
            <div className='absolute inline left-1/2 top-1/2 -translate-x-[50%] -transform-y[50%] text-orange-400 text-[100px]'>
              My Notes
            </div>
            <div className='text-[50px] left-1/2 text-red-500 absolute bottom-4 h-16 w-16  rounded-[100%] bg-cyan-500 text-center justify-center '>

            <button className='-translate-y-2' onClick={createform}>+</button>
            </div>
            {showForm && (

              <div className='absolute h-56 w-25 left-1/2 bottom-1/2 -translate-x-[50%] -translate-y-[0%] bg-zinc-400 p-4 rounded-3xl shadow-md flex flex-col justify-center'>
                <button className='top-0 right-0 absolute p-3' onClick={cut}><MdCancel size ='25px' /></button>
                <label htmlFor="note">Task:</label>
                <input
                  type="text"
                  id="note"
                  value={note}
                  onChange={handleNoteChange}
                  className='form-input h-8'
                />

                <label htmlFor="color">Choose Color:</label>
                <input
                  type="color"
                  id="color"
                  value={selectedColor}
                  onChange={handleColorChange}
                  className='form-input'
                />
                {error && <div style={{ color: 'red' }}>{error}</div>}

                <button onClick={handleSubmit} className='bg-blue-500 text-white p-2 rounded-md mt-2'>Submit</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Foreground;
