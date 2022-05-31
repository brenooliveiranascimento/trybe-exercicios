import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div className='container'>
        <Header/>

      <main className='conteudoArea'>
        <Content/>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
