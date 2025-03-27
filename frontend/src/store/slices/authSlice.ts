import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: 'ADMIN' | 'CUSTOMER';
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: null,
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ user: User; token: string }>) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
      localStorage.setItem('token', action.payload.token);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setCredentials, logout, setError, clearError, setLoading } = authSlice.actions;

// Thunk actions
export const login = (email: string, password: string) => async (dispatch: any) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post('http://localhost:5000/api/auth/login', {
      email,
      password,
    });
    dispatch(setCredentials(response.data));
    dispatch(clearError());
  } catch (error: any) {
    dispatch(setError(error.response?.data?.message || 'Login failed'));
  } finally {
    dispatch(setLoading(false));
  }
};

export const register = (userData: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}) => async (dispatch: any) => {
  try {
    dispatch(setLoading(true));
    const response = await axios.post('http://localhost:5000/api/auth/register', userData);
    dispatch(setCredentials(response.data));
    dispatch(clearError());
  } catch (error: any) {
    dispatch(setError(error.response?.data?.message || 'Registration failed'));
  } finally {
    dispatch(setLoading(false));
  }
};

export const getCurrentUser = () => async (dispatch: any) => {
  try {
    dispatch(setLoading(true));
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
      return;
    }

    const response = await axios.get('http://localhost:5000/api/auth/me', {
      headers: { Authorization: `Bearer ${token}` },
    });

    dispatch(setCredentials({ user: response.data, token }));
    dispatch(clearError());
  } catch (error: any) {
    dispatch(logout());
    dispatch(setError(error.response?.data?.message || 'Failed to get user data'));
  } finally {
    dispatch(setLoading(false));
  }
};

export default authSlice.reducer; 