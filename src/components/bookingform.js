import {useState} from "react";


function Bookingform() {
 const [firstName, setFirstName] = useState("");
 const [lastName, setLastName] = useState("");
 const [email, setEmail] = useState("");
 const [phone,setPhone]=useState("");
 const [ocassion,setOcassion]=useState("");
 const [diners,setDiners]=useState("");
 const[date,setDate]=useState("");
 const[time,setTime]=useState("");
 const clearForm = () => {
   setFirstName("");
   setLastName("");
   setEmail("");
   setPhone("");
   setOcassion("");
   setDiners("");
   setDate("");
   setTime("");
}
 const handleSubmit = (e) => {
   e.preventDefault();
   alert("Reservation Confirmed");
   clearForm();
 };
 return (
   <div>
     <form onSubmit={handleSubmit}>
       <fieldset>
         <h2>Sign Up</h2>
         <div className="Field">
           <label>
             First name <sup>*</sup>
           </label>
           <input
             value={firstName} 
             onChange={(e) => { 
               setFirstName(e.target.value); 
             }} 
             placeholder="First name" 
           /> 
         </div> 
         <div className="Field"> 
           <label>Last name</label> 
           <input 
             value={lastName} 
             onChange={(e) => { 
               setLastName(e.target.value); 
             }} 
             placeholder="Last name" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Email address <sup>*</sup> 
           </label> 
           <input 
             value={email} 
             onChange={(e) => { 
               setEmail(e.target.value); 
             }} 
             placeholder="Email address" 
           /> 
         </div>
         <div className="Field"> 
           <label> 
             Phone number <sup>*</sup> 
           </label> 
           <input 
             value={phone} 
             onChange={(e) => { 
               setPhone(e.target.value); 
             }} 
             placeholder="Phone number" 
           /> 
         </div>
         <div>
        <label htmlFor="ocasion">Ocassion</label>
        <select
        id="ocasion" value={ocassion} onChange={e=>{
            <p>Opción seleccionada: {setOcassion(e.target.value)}</p>
        }}>
        <option value="Birthday">Birthday</option>
        <option value="Aniversary">Aniversary</option>
        <option value="Engagement">Engagement</option>
        </select>
        <label htmlFor="diners">Nr of Diners</label>
        <select
        id="diners" value={diners} onChange={e=>{
            <p>Opción seleccionada: {setDiners(e.target.value)}</p>
        }}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        </select>
        <label htmlFor="date">Date</label>
        <select
        id="date" value={date} onChange={e=>{
            <p>Opción seleccionada: {setDate(e.target.value)}</p>
        }}>
        {/*Aca va la opcion del calendario que aun falta hacer*/}
        </select>
        <label htmlFor="time">Time</label>
        <select
        id="time" value={time} onChange={e=>{
            <p>Opción seleccionada: {setTime(e.target.value)}</p>
        }}>
        {/* Aca va la opcion del tiempo que aun falta hacer*/}
        </select>
    </div>


         <button type="submit"> 
           Confirm Reservation
         </button> 
       </fieldset> 
     </form> 
   </div> 
 ); 
} 
export default Bookingform;