const Mensaje = (props) => {
    return (
      <div>
        <h1 style={{color: [props.color]}}>Hello: {props.nombre}</h1>
      </div>
    )
  }

export default Mensaje;