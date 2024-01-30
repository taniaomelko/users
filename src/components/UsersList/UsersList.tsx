import React, { useEffect } from "react";
import './UsersList.scss';
import { getData } from "../../data/api";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersAction, removeUserAction } from "../../redux/actions";
import { RootState } from "../../redux/store";

export const UsersList: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);

  useEffect(() => {
    getData().then((data) => {
      dispatch(fetchUsersAction(data));
    });
  }, [dispatch]);

  const handleRemoveUser = (id: number) => {
    dispatch(removeUserAction(id));
  }

  return (
    <div className="users">
      <div className="users__list">
        {users.map(user => (
          <div key={user.id} className="user">
            <h3 className="user-title">
              {user.first_name}
              {' '}
              {user.last_name}
            </h3>
            <a href={`mailto:${user.email}`}>
              {user.email}
            </a>

            <div className="user__remove" onClick={() => handleRemoveUser(user.id)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M3.70696 3.70708C4.09748 3.31655 4.73049 3.31655 5.12103 3.70708L11.9999 10.5859L18.8786 3.70708C19.2692 3.31655 19.9022 3.31655 20.2927 3.70708C20.6832 4.0976 20.6832 4.73061 20.2927 5.12115L13.4139 12L20.2927 18.8788C20.6832 19.2694 20.6832 19.9024 20.2927 20.2929C19.9022 20.6834 19.2692 20.6834 18.8786 20.2929L11.9999 13.4141L5.12103 20.2929C4.73049 20.6834 4.09748 20.6834 3.70696 20.2929C3.31643 19.9024 3.31643 19.2694 3.70696 18.8788L10.5858 12L3.70696 5.12115C3.31643 4.73061 3.31643 4.0976 3.70696 3.70708Z" fill="black"/>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
