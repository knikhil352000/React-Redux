
import CakeContainer from './components/CakeContainer';
import {Provider} from 'react-redux'
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import ChocolateContainer from './components/ChocolateContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ItemContainer cake='cake'/>
        <ItemContainer />
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <ChocolateContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
} 

export default App;
