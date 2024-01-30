import React, { useState, ChangeEvent, FormEvent } from "react";
import { IUser } from "../../types/IUser";
import './UserForm.scss';
import { useDispatch } from 'react-redux';
import { addUserAction } from "../../redux/actions";
// import { URL } from '../../data/api';

export const UserForm: React.FC = () => {
  const dispatch = useDispatch();

  const initialUser = {
    id: 1,
    first_name: '',
    last_name: '',
    email: ''
  };

  const [formData, setFormData] = useState<IUser>(initialUser);
  const { first_name, last_name, email } = formData;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData({
      ...formData,
      [name]: value 
    });
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(addUserAction(formData));
    setFormData(initialUser);
  
    // fetch(URL)
    //   .then(response => response.json())
    //   .then(existingData => {
    //     fetch(URL, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify([...existingData, formData]),
    //     })
    //     .then(response => {
    //       if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //       }
    //       return response.json();
    //     }); 
    //   })
    //   .then(() => {
    //     console.log('User added successfully:', formData);
    //   })
    //   .catch(error => {
    //     console.error('Error adding user:', error);
    //   });
  };
  
  return (
    <div className="add-user-form-wrapper">
      <h2 className="add-user-title">Add user</h2>

      <form onSubmit={handleSubmit} className="add-user-form">
        <label htmlFor="form-first_name">
          <div className="label-text">
            First name:
          </div>
          <input type="text" id="form-first-name" name="first_name" value={first_name} onChange={handleChange} required />
        </label>

        <label htmlFor="form-last_name">
          <div className="label-text">
            Last name:
          </div>
          <input type="text" id="form-last-name" name="last_name" value={last_name} onChange={handleChange} required={false} />
        </label>

        <label htmlFor="form-email">
          <div className="label-text">
            Email:
          </div>
          <input type="email" id="form-email" name="email" value={email} onChange={handleChange} />
        </label>

        <button className="button button--primary" type="submit">Add user</button>
      </form>
    </div>
  );
};

export default UserForm;
