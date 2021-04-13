import {useState } from 'react';
import {comentAdd} from '../../redux/actionCreators/comentAdd';
import { useDispatch } from 'react-redux';

function Coment() {
  const [coment, setComent] = useState('');
  const dispatch = useDispatch();

  const comentOnhange = (event) => {
    setComent(event.target.value);
    dispatch(comentAdd(event.target.value))
  }

  return (
    
    <section className="section-divers">
      <h2 className="drivers-title">Комментарий</h2>
      <textarea onChange={comentOnhange} type="number" className="input-number"></textarea>
    </section>

  );
}

export default Coment;
