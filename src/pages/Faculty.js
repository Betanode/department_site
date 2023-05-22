import React from 'react'
import Facultycard from '../components/facultycard'

const Faculty = () => {
  const user = {
    pic: 'https://iitj.ac.in/dept_faculty_pic/ranju.jpg',
    name: "Ranju Mogan",
    desig: 'Assistant Prof',
    email :'gg',
    field:'raffic flow theory; Macroscopic and Microscopic modelling of traffic flow; Connected and autonomous vehicles; Dynamic Traffic Assignment',
  };
  return (
    <div>
      < Facultycard pic = {user.pic} name={user.name} desig = {user.desig}  email={user.email} field={user.field}  />
    </div>
  )
}

export default Faculty