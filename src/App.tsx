import { Suspense } from 'react';
import { Spinner, Switch } from '@chakra-ui/react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from 'routes';
import LoginScreen from 'pages/LoginScreen';
import HomeScreen from 'pages/HomeScreen';

function App() {
  const user = {
    name: "Mandira",
  };
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
