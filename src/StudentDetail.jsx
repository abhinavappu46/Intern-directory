import React, { useState } from 'react'
import "./StudentDetail.css"

function StudentDetail({ SendData, DeleteIntern, HandleToggle }) {
   console.log(SendData);


   return (
      <div id="mainContainer">

         {

            SendData.map((student) => (


               <div className='DetailCard' key={student.id}>
                  <h2> NO&nbsp;:&nbsp;{student.id}</h2>
                  <center><div id='PhotoContainer'>
                     <img id='ImageContainer' alt='profile' src={student.userphoto ? URL.createObjectURL(student.userphoto):""} />
                  </div></center>
                  <p className='pg'>Name : {student.FullName}</p>
                  <p className='pg'>Email : {student.Email}</p>
                  <p className='pg'>Phone No : {student.phone}</p>
                  <p className='pg'>Qualification : {student.Qualification}</p>
                  <p className='pg'>Role : {student.role}</p>
                  <div className='ButtonCotainer'>
                     <button onClick={() => DeleteIntern(student.id)} className='btn'>DELETE</button>
                     <button onClick={() => HandleToggle(student.id)} style={{ background: student.status ? "green" : "yellow" }} className='btn1'>{student.status ? "ACTIVE" : "INACTIVE"}</button>
                  </div>
               </div>
            ))}
      </div>
   )
}
export default StudentDetail;
