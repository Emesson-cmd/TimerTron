import Contador from '../components/Contador'

export default function Timer(props) {
    return (
      <Contador
        setarMinutos={props.setarMinutos}
        minutos={props.minutos}
        setarSegundos={props.setarSegundos}
        segundos={props.segundos}
        setarEstado={props.setarEstado}
        alarmes={props.alarmeSound}
      />
    )
}
