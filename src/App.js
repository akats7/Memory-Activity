import random from './randomize.js';
import ColorBoxes from './ColorBoxes';
import ColorForm from './ColorForm'
import './App.css';
import {Card} from '@material-ui/core'

let colors = ['red','yellow','green','pink','lightblue','purple']
colors = random([...colors,...colors] )

function App() {
  return (
    <div className="App">
      <Card>
        <ColorForm colors={[...colors]}/>
      </Card>
      <Card>
        <ColorBoxes colors={[...colors]}/>
      </Card>
      
    </div>
  );
}

export default App;
