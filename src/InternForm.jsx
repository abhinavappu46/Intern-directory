import React, { useState , useEffect} from 'react'
import "./InternForm.css"
import StudentDetail from './StudentDetail';
import api from './axios api/Api';

function InternFrom() {
  const [Id, setId] = useState(0);
  const [SendData, setSendData] = useState([])
  const [BUttonDisable, setButtonDisable] = useState(false)
  const [Photo, setPhoto] = useState(null);
  const [students, setStudents] = useState([])
  const HandleLogin = async (e) => {

 e.preventDefault();


    const DataFull = new FormData();

  DataFull.append("FullName", formData.FullName);
  DataFull.append("Email",formData.Email);
  DataFull.append("phone",formData.phone);
  DataFull.append("Qualification",formData.Qualification);
  DataFull.append("role",formData.role);
  DataFull.append("photo",Photo);
    
    try {
      const res= await api.post("/api/register",DataFull);
      alert(res.data.message);
      console.log(res.data.Data);
      FetchStudents();
    } catch (error) {
      
alert(error.response?.data?.message || error.message ||
        "Something went wrong");
        console.log(error);
      
    }


  }
  const FetchStudents = async () => {
  
        try {
  
           const res = await api.get("/api/Details");
           console.log(res.data);
           setStudents(res.data.data);
           
  
  
        } catch (error) {
           console.log(error);
        }
     }
     useEffect(() => {
        FetchStudents();
     }, [])
  

     const DeleteIntern = async(id)=>{

try {
  const res=await api.delete(`/api/DeleteUser/${id}`)
  alert(res.data.message);
  console.log(res.data.Data);
FetchStudents();

} catch (error) {
  console.log(error);
}





}
  

  const HandleToggle = async (id) => {
   
    try {
      const res=await api.patch(`/api/UpdateUser/${id}`)
      console.log(res.data.message);
      console.log(res.data.data);
      FetchStudents();
    } catch (error) {
      console.log(error);
    }
  
    
  }

  const [formData, setFormData] = useState({
    id: "",
    FullName: "",
    Email: "",
    phone: "",
    Qualification: "",
    role: "",
  })


  return (
    <div id='TopContainer'>
      <div id="Navbar">
        <h1>Add New Intern</h1>
        <nav className="navbar navbar-expand-lg ">
          <div class="container-fluid">

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
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
        <form action="" onSubmit={HandleLogin} >
          <div id='PhotoContainer'>
            <img id="ImageContainer" alt='profile' src={Photo? URL.createObjectURL(Photo):null} />
          </div>
          <input type='file' className='ImageConatiner' accept='image/*' onChange={(e)=>setPhoto(e.target.files[0])}/>
          <label >FullName:&nbsp;</label>
          <input type='text' placeholder='enter the name' className='InputConatiner' name='FullName' onChange={(text) => { setFormData({ ...formData, [text.target.name]: text.target.value }) }} />
          <label>Email:&nbsp;</label>
          <input name='Email' type='email' placeholder='enter email id' className='InputConatiner' onChange={(text) => { setFormData({ ...formData, [text.target.name]: text.target.value }) }} />
          <label >phone:&nbsp;</label>
          <input name="phone" type='text' placeholder='enter phone no' className='InputConatiner' onChange={(text) => { setFormData({ ...formData, [text.target.name]: text.target.value }) }} />
          <label >Qualification:&nbsp;</label>
          <input name="Qualification" type="text" placeholder='enter your qualification' className='InputConatiner' onChange={(text) => { setFormData({ ...formData, [text.target.name]: text.target.value }) }} />
          <label>Role:</label>
          <input name="role" type="text" placeholder='Enter role' className='InputConatiner' onChange={(text) => { setFormData({ ...formData, [text.target.name]: text.target.value }) }} />
          <button type='submit' id='Btn1'  >Add Member</button>

        </form>

      </div>
      <center><h1>INTERN DETAILS</h1></center>
      <div>
          <StudentDetail students={students} DeleteIntern={DeleteIntern} HandleToggle={HandleToggle} />
      </div>
    </div>
  )
}
export default InternFrom;