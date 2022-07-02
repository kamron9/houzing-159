import Home from "../pages/Home"
import Generic from "../pages/Generic"
import Properties from '../pages/Properties'
import SignIn from "../pages/SignIn"
import SignUp from "../pages/Signup"

export const navbar = [
  {
    id: 1,
    title: 'Home',
    path: '/home',
    element: <Home />,
    search: '?',
    hidden: false,
    private: true,
  },
  {
    id: 2,
    title: 'Properties',
    path: '/properties',
    element: <Properties />,
    search: '?',
    hidden: false,
    private: true,
  },
  {
    id: 3,
    title: 'Contacts',
    path: '/contacts',
    element: <Generic />,
    search: '?',
    hidden: false,
    private: true,
  },
  {
    id: 4,
    title: 'Sign in',
    path: '/signin',
    element: <SignIn />,
    search: '?',
    hidden: true,
    private: true,
  },
  {
    id: 5,
    title: 'Sign up',
    path: '/signup',
    element: <SignUp />,
    search: '?',
    hidden: true,
    private: true,
  }
]