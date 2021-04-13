import closed from './closed.svg';

function Heard() {
  return (
  <>
    <img className="closed" src={closed} alt="closed"/>
    <div className="wrapper-title">
      <h2 className="div-trap-title">Ловушка №23</h2>
      <div className="title-signature">От грызунов</div>
    </div> 

    </>
  );
}

export default Heard;
