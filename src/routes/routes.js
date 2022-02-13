
import LoginContainer from '../components/pages/Login/LoginContainer';
import RegContainer from '../components/pages/Login/Registration/RegContainer';
import MainContainer from '../components/pages/MainScreen/MainContainer';


export const publicRoutes = [
  {path: '/', element: MainContainer},
  {path: '/login/*', element: LoginContainer},
  {path: '/register', element: RegContainer},
  {path: '/register/:status', element: RegContainer},
]

export const privateRoutes = [
  {path: '/', element: MainContainer}
]

/* <Route path="/" element={<MainContainer />} />
<Route path="dashboard/*" element={<DashContainer />} />
<Route path="login/*" element={<LoginContainer />} />
<Route path="register/:status" element={<RegContainer />} />
<Route path="register" element={<RegContainer />} /> */