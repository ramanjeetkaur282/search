import './App.css';
import Dropdown from './components/Dropdown';
import { items } from './constants/data';

function App() {
  return (
    <>
      <Dropdown data={items} />
    </>
  );
}

export default App;
