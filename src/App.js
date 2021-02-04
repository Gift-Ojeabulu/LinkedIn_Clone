import React from 'react';
import './App.css';
import { login, selectUser } from './features/userSlice';
import Feed from './Feed';
import Header from './Header';
import Login from './Login';

import Sidebar from './Sidebar';

 
function App() {
  const user = useSelector(selectUser);
  const dispatch  = useDispatch(function)

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth) {
        //user is logged in
        dispatch(
          login({
          email: userAuth.user.email,
                            uid: userAuth.user.uid,
                            displayName: userAuth.displayName,
                            photoUrl:userAuth.profilePic
        }))
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, []);


  const user = useSelector(selectUser)
  return (
    <div className="app">
      <Header />

      {!user ? <Login/> :(

          <div className="app_body">
          <Sidebar/>
          <Feed/>
          </div>

      )}
      
    </div>
  );
}

export default App;
