import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import Practices from './Component/Practices/Practices';
import Blog from './Component/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Practices></Practices>
      <Blog></Blog>
    </div>
  );
}

export default App;
