import React, { useEffect, useState } from 'react'
import "./StudentDetail.css"
import api from './axios api/Api'

function StudentDetail({students , DeleteIntern ,HandleToggle}) {
   

   









   return (
      <div id="mainContainer">

         {

            students.map((student,index) => (


               <div className='DetailCard' key={student._id}>
                  <h2> NO&nbsp;:&nbsp;{index+1}</h2>
                  <center><div id='PhotoContainer'>
                     <img id='ImageContainer' alt='profile' src={student.photo} />
                  </div></center>
                  <p className='pg'>Name : {student.FullName}</p>
                  <p className='pg'>Email : {student.Email}</p>
                  <p className='pg'>Phone No : {student.phone}</p>
                  <p className='pg'>Qualification : {student.Qualification}</p>
                  <p className='pg'>Role : {student.role}</p>
                  <div className='ButtonCotainer'>
                     <button onClick={() => DeleteIntern(student._id)} className='btn'>DELETE</button>
                     <button onClick={() => HandleToggle(student._id)} style={{ background: student.status ? "green" : "yellow" }} className='btn1'>{student.status ? "ACTIVE" : "INACTIVE"}</button>
                  </div>
               </div>
            ))}
      </div>
   )
}
export default StudentDetail;