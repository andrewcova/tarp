import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {selectTarp} from '../../redux/actionCreators/selectTarp';

function SelectStatus() {

    const [selectValue, setSelectValue] = useState('Пойман водитель1');
    const dispatch = useDispatch();

const selectOnchange = (event) => {
    dispatch(selectTarp(event.target.value));
    setSelectValue(event.target.value);
}



  return (
    <div className="section-divers">
      <h2 className="drivers-title">Статус</h2>
      <select onChange={selectOnchange} value={selectValue} name="trap" id="">
        <option>
           Пойман водитель1
        </option>
        <option>
          Пойман водитель2
        </option>
        <option>
          Пойман водитель3
        </option>
      </select>
    </div> 
  );
}

export default SelectStatus;
