import './App.css';
import {useSelector} from 'react-redux';
import {useState, useEffect } from 'react';
import Heard from './head';
import SelectStatus from './selectStatus';
import CountRarp from './countTarp';
import Coment from './coment';
import Photos from './photos';

function App() {
   const [goFetch, setgoFetch] = useState(false);
   const dataToFetch = useSelector(state => state);
   useEffect(() => {
    if (goFetch) {
      fetch(`http://localhost:3001/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToFetch),
      })
        .then(res => res.json())
        .then((response) => {
          console.log(response);
        });
        
    }
    console.log(dataToFetch);
    setgoFetch(false);
  }, [goFetch]);
  return (
  <>
   <section className="section-trap">
    <Heard/>
    <SelectStatus/>
    <CountRarp/>
    <Coment/>
    <Photos/>
    
    <button onClick={() => setgoFetch(true)} className="button-save-trap">Сохранить</button>
  </section>
  </>
  );
}

export default App;
