import logo from './logo.svg';
import './App.css';
import Main from "./Main"

function App() {
  let nombres = ["Lucía","Marina","Olivia"];
  return (
    <Main nombres={nombres}/>
  );
}

export default App;
