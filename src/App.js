import logo from './logo.svg';
import './App.css';
import UserTable from './userTable';
import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserFetch } from './actions';


function App() {
  const dispatch = useDispatch();
  const users = useSelector(state=> state.userReducer.users)
  useEffect(()=>{
    dispatch(getUserFetch())
  },[])
  const [userlist, setUserList] = useState({
    query: '',
    list: []
  })
  const findUser = (e)=>{
     let value = e.target.value
     const results = users.filter(user => {
      if (value === "") return users
      return user.name.toLowerCase().includes(e.target.value.toLowerCase())
  })
  setUserList({
      query: e.target.value,
      list: results
  })
  console.log("Data received",userlist.list)
  }
  return (
    <div className="App container-fluid">
      <input type='text' onChange={findUser} placeholder='Search user' className='form-control search--input'/>
      <UserTable users={userlist.list.length > 0? userlist.list : users }/>
    </div>
  );
}

export default App;
