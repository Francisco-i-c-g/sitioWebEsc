export function Card(props) {
  return (
    <>
    <div className="col-md-6">
    <div className="card bg-light">
      <div className="card-body">
        <h4 className="card-title" style={{textAlign:"center"}}>{props.titulo}</h4>
        <p className="card-text" style={{fontFamily:"verdana", lineHeight:"30px", textAlign:"center"}}>
          {props.texto}
        </p>
      </div>
    </div>
    </div>
    </>
  );
}
