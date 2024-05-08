import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import './userTable.css';
function userTable({users}) {
    console.log("data is passed", users)
    const DeleteRow = (index,e) => {
        debugger;
        users.splice(users.findIndex(({ id }) => id === index), 1);
    }
  return (
    
    <div className='user-container'>
   
    <table className="table table-bordered table-responsive">
        <tr>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Actions</th>
            
        </tr>
        <tbody>
        {users.map((userinfo, index)=>{
            return (
            <tr key={userinfo.id}> 
            <td>{userinfo.name}</td>
            <td>{userinfo.username}</td>
            <td>{userinfo.email}</td>
            <td>{userinfo.address.city}</td>
            <td>{userinfo.phone}</td>
            <td>{userinfo.website}</td>
            <td>{userinfo.company.name}</td>
            <td>
                <button  className="btn btn-warning btn-sm mr-2"><i className="fa fa-pencil-square-o"></i></button>
                <button onClick={e => DeleteRow(index, e)} className="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
            </td>
            </tr>)
        })}
        </tbody>
</table>
</div>
  )
}

export default userTable