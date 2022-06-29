
import './App.css';
import Hook from './hook';
import TodoApp from './hook2';
import Login from './login';

function App() {
  return (
    <div className="App">
    <Hook/>
    <hr></hr>
    <br></br>
    <TodoApp/>
    <hr></hr>
    <br></br>
    <Login/>
    <br></br>
    </div>
  );
}

export default App;
