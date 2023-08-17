import Ball from './component/Ball'
import {Provider} from "react-redux";
import  store from './store2'
import Bat from './component/Bat';
import User from './component/User';

function App() {
  return (
    <>
      <Provider store={store}>
        <Ball> </Ball>
        <Bat></Bat>
        <User></User>
      </Provider>
    </>
  );
}

export default App;
