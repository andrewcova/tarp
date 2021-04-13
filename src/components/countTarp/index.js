import {useState } from 'react';
import { useDispatch } from 'react-redux';
import {countTarp} from '../../redux/actionCreators/countTarp'

function CountRarp() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();


  const countOnhange = (event) => {
      setCount(event.target.value);
      dispatch(countTarp(event.target.value));

    }


  return (

    <section className="section-divers">
      <h2 className="drivers-title">Количество пойманных вредителей{count}</h2>
      <div className="wrapper-input-placeholder">
        <span className="placeholder">грызунов</span>
        <input type="number" onChange={countOnhange} className="input-number" />
      </div>
    </section>

  );
}

export default CountRarp;
