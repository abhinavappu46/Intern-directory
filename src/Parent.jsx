import React from 'react'
import InternFrom from './InternForm';
import StudentDetail from './StudentDetail';

 function Parent() {
  return (
    <div className='ParentContainer'>
      <InternFrom/>
      <StudentDetail/>
    </div>
  )
}
export default Parent;
