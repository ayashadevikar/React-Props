import Card from './Card';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
      let list = ["alex", "john", "daniel"]
  return (
       <>
         <h1>Hello</h1>
         <Card myname="alex" list={list}/>
         <Navbar name='John' />
         <Navbar name='Harry' />
         <Navbar name='Jackop' />
       </>
  );
}

export default App;
