
import LoginContainer from '../components/pages/Login/LoginContainer';
import RegContainer from '../components/pages/Registration/RegContainer';
import MainContainer from '../components/pages/MainScreen/MainContainer';
import DashContainer from '../components/pages/Dashboard/DashContainer';
import { Navigate } from 'react-router-dom';


export const publicRoutes = [
  {path: '/login', element: LoginContainer},
  {path: '/register', element: RegContainer},
  {path: '/register/:status', element: RegContainer},
  {path: '/dashboard/*', element: Navigate, toPath: '/login'}
]

export const privateRoutes = [
  {path: 'dashboard/*', element: DashContainer},
  {path: '/login', element: Navigate, toPath: '/dashboard'},
  {path: '/register', element: Navigate, toPath: '/dashboard'},
]

export const globalRoutes = [
  {path: '/', element: MainContainer},
]