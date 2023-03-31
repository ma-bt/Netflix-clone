import { Suspense, useEffect } from 'react';
import { Spinner, Switch } from '@chakra-ui/react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from 'routes';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import LoginScreen from 'pages/LoginScreen';
import { useDispatch } from 'react-redux'
import HomeScreen from 'pages/HomeScreen';
import { logout, login } from 'Feature/userSlice';
 import { auth } from 'config/firebase';

function App() {

  const dispatch = useDispatch();
  

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          uid: user.uid,
          email: user.email,
        }))
      } else {
        dispatch(logout)
      }
    })
    return unsubscribe;

  }, [auth]);

  // const user = {
  //   name: "Mandira",
  // };
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Router>
          <Routes>
            {routes.map((path) => (
              <Route path={path.path} element={path.element} />
            ))}

            {/* {!user ? (<LoginScreen />) : (<Switch><Route path='/' element={<HomeScreen />}> </Route></Switch>)} */}
          </Routes>
        </Router>
      </Suspense>
    </>
  );
}

export default App;
