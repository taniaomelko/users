import { IUser } from "../types/IUser";

const initialState = {
  users: [],
};

type usersReducerAction = 
  | { type: 'USERS/FETCH', payload: IUser[] }
  | { type: 'USERS/ADD', payload: IUser }
  | { type: 'USERS/REMOVE', payload: number }
;

export const usersReducer = (state = initialState, action: usersReducerAction) => {
  switch (action.type) {
    case 'USERS/FETCH': 
      return {
        ...state,
        users: action.payload
      };
    case 'USERS/ADD': 
      const newUser = {
        ...action.payload,
        id: Math.max(...state.users.map((user: IUser) => user.id)) + 1,
      };
      return {
        ...state,
        users: [...state.users, newUser]
      };
    case 'USERS/REMOVE':
      const filteredUsers = state.users.filter((user: IUser) => user.id !== action.payload);
      return {
        ...state,
        users: filteredUsers
      };
    default: 
      return state;
  }
}
