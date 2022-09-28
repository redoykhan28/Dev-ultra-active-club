import './App.css';
import Header from './Component/Header/Header';
import Practices from './Component/Practices/Practices';
import Blog from './Component/Blog/Blog';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Practices></Practices>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;
