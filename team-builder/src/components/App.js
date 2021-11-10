import React, { useState, useEffect } from 'react';
import logo from '../logo.svg';
import team from './Team';
import teams from './Teams';
import './App.css';


const formInputValues = {
  name: '',
  email: '',
  role: ''
}


function App() {
  const [member, teamMember] = useState([]);
  
  const [inputValues, setInputValues] = useState(formInputValues);
  const [errorValues, setErrorValues] = useState('');
  
  const updateForm = (inputName, inputValue) => {
    // 🔥 STEP 8 - IMPLEMENT a "form state updater" which will be used inside the inputs' `onChange` handler
    //  It takes in the name of an input and its value, and updates `formValues`
    setInputValues({ ...inputValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    // 🔥 STEP 9 - IMPLEMENT a submit function which will be used inside the form's own `onSubmit`
    //  a) make a new friend object, trimming whitespace from username and email
    const newMember = {
      username: inputValues.username.trim(),
      email: inputValues.email.trim(),
      role: inputValues.role
    }
    //  b) prevent further action if either username or email or role is empty string after trimming
    if(newMember.username.length <= 3) {
      setErrorValues("Username has to be longer than 3 characters ya chump!");
      return;
    }

    //  c) POST new friend to backend, and on success update the list of friends in state with the new friend from API


  }
  return (
    <div className='container'>
    <h1>Form App</h1>
    <h3 className="error-text">{errorValues}</h3>
    <team
      // 🔥 STEP 2 - The form component needs its props.
      //  Check implementation of FriendForm
      //  to see what props it expects.
      values={inputValues}
      update={updateForm}
      submit={submitForm}
    />

    {
      member.map(friend => {
        return (
          <teams key={friend.id} details={friend} />
        )
      })
    }
  </div>
  )
}

export default App;
