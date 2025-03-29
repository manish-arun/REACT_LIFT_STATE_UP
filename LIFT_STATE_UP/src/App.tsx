import './App.css'
import { ParentComponent as ParentComponent1 } from './LiftStateUp/LiftStateUp1/Components/ParentComponent';
import { ParentComponent as ParentComponent2 } from './LiftStateUp/LiftStateUp2/Components/ParentComponent';

const App = () => {

  return (
    <>
      <ParentComponent1 />
      <p>--------------------------------------------</p>
      <ParentComponent2 />
    </>
  )
}

export default App;
