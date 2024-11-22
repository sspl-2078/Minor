import React from 'react'
import './style3.css'
const Report = () => {
  return (
    <div className='Report'>
    <div className='Found'>
      <h1>Report Found</h1>
      <h3>Upload photo</h3>
      <div className="photo"></div>
      <div className="forms">
        <form>
         <div>
          <input type="text" id='name' required placeholder='Name'/>
          </div>
          <div className="ticket">
          <input type="text" id='number' name='number' placeholder='Ticket number' required />
          </div>
          <div className="security">

          <input type="phone" id='phone' name='phone' placeholder='Phone Number' required />
          </div>
        
          <button>Report</button>
        </form>
      
      </div>
    </div>
   <div className="Lost">
          <h1>Report Lost</h1>
          <div className="form">
            <form>
              <div>
                <input type="text" id='name_lost' required placeholder='Name' />
              </div>
              <div>
              <div className="ticket">
          <input type="text" id='number_lost' name='number' placeholder='Ticket number' required />
          </div>
              </div>
              <div><input type="password" id='security' name='security' placeholder='Security patch' required /></div>
              <div className="lost">  
                 <select
            id="fruit"
            name="fruit"
         
            required
          >
            <option value="" disabled>Airport</option>  
            <option value="apple">Tribhuwan International Airport</option>
            <option value="banana">Pokhara Airport</option>
            <option value="cherry">Biratnagar Airport</option>
            <option value="orange">Bhairahawa Airport</option>
            <option value="mango">Lukla Airport</option>
          </select></div>
              <button>Report</button>
            </form>
          </div>
   </div>
    </div>
  )

}

export default Report;