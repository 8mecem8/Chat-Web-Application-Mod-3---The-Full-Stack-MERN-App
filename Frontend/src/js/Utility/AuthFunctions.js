

export const createNewUser = async(user)=>
{
  return await fetch(`${process.env.SERVER}/api/auth/create-user`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
    })
}

export const loginOUser = async(user)=>
{
  return await fetch(`${process.env.SERVER}/api/auth/login-user`, {
    method: 'POST',
    body: JSON.stringify(user),
    //credentials: 'include',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
    })
}