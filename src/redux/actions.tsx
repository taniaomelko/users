import { IUser } from "../types/IUser"

export const fetchUsersAction = (users: IUser[]) => {
  return {
    type: 'USERS/FETCH',
    payload: users,
  }
}

export const addUserAction = (user: IUser) => {
  return {
    type: 'USERS/ADD',
    payload: user,
  }
}

export const removeUserAction = (id: number) => {
  return {
    type: 'USERS/REMOVE',
    payload: id
  }
}
