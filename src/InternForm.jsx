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
      <div id="Navbar">
       <h1>INTERN ADDING INTERN</h1>
       <nav className="navbar navbar-expand-lg ">
  <div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
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
