import React, { useState } from 'react'
import "./InternForm.css"
import StudentDetail from './StudentDetail';

function InternFrom() {
  const [Id, setId] = useState(0);
  const [SendData, setSendData] = useState([])
 const[BUttonDisable,setButtonDisable]=useState(false)
  const HandleLogin = (e) => {
    const alreadyExists = SendData.some(
    (student) => student.Email === FormData.Email
  );

  if (alreadyExists) {

    setButtonDisable(true);

    alert("Student already exists!");
 
  }
    const NewData = ({ ...FormData, id: Id + 1 ,status:false});

    e.preventDefault();
    setSendData([...SendData, NewData]);
    setId(Id + 1);
  }
  
  
  const DeleteIntern = (id) => {
    const UpdatedData = SendData.filter((student) => student.id !== id);
    setSendData(UpdatedData);
  }

    const HandleToggle =(id)=>{
      const NewData= SendData.map((student)=>student.id ===id ? {...student, status: !student.status}:student);
    
    setSendData(NewData);
    }

  const [FormData, setFormData] = useState({
    id: "",
    FullName: "",
    Email: "",
    phone: "",
    Qualification: "",
    role:"",
  })


  return (
    <div id='TopContainer'>
      <div id='Navbar'>
        <h1>INTERN ADDING FORM</h1>
      </div>
      <div className='FromContainer'>
        <form action="" onSubmit={HandleLogin}>

          <label >FullName:&nbsp;</label>
          <input type='text' placeholder='enter the name' className='InputConatiner' name='FullName' onChange={(text) => { setFormData({ ...FormData, [text.target.name]: text.target.value }) }} />
          <label>Email:&nbsp;</label>
          <input name='Email' type='email' placeholder='enter email id' className='InputConatiner' onChange={(text) => { setFormData({ ...FormData, [text.target.name]: text.target.value }) }} />
          <label >phone:&nbsp;</label>
          <input name="phone" type='text' placeholder='enter phone no' className='InputConatiner' onChange={(text) => { setFormData({ ...FormData, [text.target.name]: text.target.value }) }} />
          <label >Qualification:&nbsp;</label>
          <input name="Qualification" type="text" placeholder='enter your qualification' className='InputConatiner' onChange={(text) => { setFormData({ ...FormData, [text.target.name]: text.target.value }) }} />
          <label>Role:</label>
<input name="role" type="text" placeholder='Enter role' className='InputConatiner' onChange={(text) => { setFormData({ ...FormData, [text.target.name]: text.target.value }) }} />
          <button type='submit' id='Btn1' onClick={HandleLogin} disabled={BUttonDisable}>Add Member</button>
        </form>

      </div>
      <center><h1>INTERN DETAILS</h1></center>
      <div>
        {SendData.length > 0 && (

          <StudentDetail SendData={SendData} DeleteIntern={DeleteIntern} HandleToggle={HandleToggle} />
        )}
      </div>
    </div>
  )
}
export default InternFrom;
