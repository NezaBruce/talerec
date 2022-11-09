import './App.scss';
import Cards from './components/cards';

function App() {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center text-ellipsis text-teal-700'>
        Hello there!
      </h1>
      <Cards/>
      
    </div>
  );
}

export default App;
