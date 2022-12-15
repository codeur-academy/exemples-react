import logo from './logo.svg';
import './Styles.css';
function App() {
  var x = 3;
  var y = 4;
  var z = x + y;
  return (
    <div className="App">
         <h1> La somme</h1>
          <p>
          La somme de x + y =  {z}
          </p>
    </div>
  );
}

export default App;
