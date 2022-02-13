
import LoginContainer from '../components/pages/Login/LoginContainer';
import RegContainer from '../components/pages/Registration/RegContainer';
import MainContainer from '../components/pages/MainScreen/MainContainer';
import DashContainer from '../components/pages/Dashboard/DashContainer';


export const publicRoutes = [
  {path: '/', element: MainContainer},
  {path: '/login/*', element: LoginContainer},
  {path: '/register', element: RegContainer},
  {path: '/register/:status', element: RegContainer},
]

export const privateRoutes = [
  {path: '/', element: MainContainer},
  {path: 'dashboard/', element: DashContainer}
]