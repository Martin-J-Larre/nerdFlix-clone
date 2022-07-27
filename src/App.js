import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Home } from './pages/Home/Home';
import { Profile } from './pages/Profile/Profile';
import { Login } from './pages/Login/Login';
import { Paypal } from './pages/Paypal/Paypal';

import { Counter } from './features/counter/Counter';


const styles = makeStyles({
  app: {
    // backgroundColor: "#111",
    minHeight: "100vh",
  },
  color: {
    color: "#fff"
  }
});


function App() {
  let user = "pepe";
  const classes = styles();

  return (
      <div className={classes.app}>
        <BrowserRouter>
          {
            !user ? (<Login />) : (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/checkout" element={<Paypal />} />
              </Routes>
            )
          }
        </BrowserRouter>
      </div>

  );
}

export default App;
