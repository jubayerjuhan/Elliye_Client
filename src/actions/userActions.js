import { authaxios, instance } from '../utils/axios.js';


// create user after signup info provided

export const registerUser = (registerinfo) => async (dispatch) => {
  console.log('registerinfo', registerinfo);
  try {
    dispatch({ type: 'REGISTER_USER_PENDING' });
    const { data } = await instance.post('/register', registerinfo);

    dispatch({ type: 'REGISTER_USER_FULFILLED', payload: data.success });
    localStorage.setItem('token', data.token);

  }
  catch (err) {
    console.log(err)
    dispatch({
      type: 'REGISTER_USER_REJECTED', payload: err.response.data.message || err.message
    })
  }
}

// load user after successful login and register

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: 'LOAD_USER_PENDING' });
    const { data } = await authaxios.get('/me');
    dispatch({ type: 'LOAD_USER_FULFILLED', payload: data.user });
    dispatch({ type: "RESET_SUCCESS" });

  }
  catch (err) {
    console.log(err)
    dispatch({ type: 'LOAD_USER_REJECTED', payload: err?.response?.data?.message || err.message });
  }
}


export const loginUser = (logindata) => async (dispatch) => {
  try {
    dispatch({ type: 'LOGIN_USER_PENDING' })
    const { data } = await instance.post('/login', logindata);
    dispatch({ type: 'LOGIN_USER_FULFILLED', payload: data.success });
    localStorage.setItem('token', data.token);
  } catch (err) {
    dispatch({ type: 'LOGIN_USER_REJECTED', payload: err?.response?.data?.message || err.message })
  }
}



