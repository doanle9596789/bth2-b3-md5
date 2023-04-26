import logo from './logo.svg';
import './App.css';
import Welcome from "./component/Welcome";
import {render} from "@testing-library/react";
function App() {
  return (
      <div className="App">
        <Welcome name="Admin" />
      </div>
  );
}
export default App;

