import { useState } from 'react';

import alarms from './src/utils/alarms'

import SetTimer from './src/screens/SetTimer';
import Timer from './src/screens/Timer'

export default function App() {
  const [minutos, setarMinutos] = useState('0')
  const [segundos, setarSegundos] = useState('1')
  const [estado, setarEstado] = useState('settimer')
  const [alarmeSound, setarAlarmeSound] = useState(alarms)

  if (estado === 'settimer') {
    return (
        <SetTimer
          minutos={minutos}
          setarMinutos={setarMinutos}
          segundos={segundos}
          setarSegundos={setarSegundos}
          estado={estado}
          setarEstado={setarEstado}
          alarmeSound={alarmeSound}
          setarAlarmeSound={setarAlarmeSound}
        />
    );
  } else if (estado === 'timer'){
    return (
      <Timer 
        minutos={minutos} 
        setarMinutos={setarMinutos}
        segundos={segundos}
        setarSegundos={setarSegundos}
        estado={estado}
        setarEstado={setarEstado}
        alarmeSound={alarmeSound}
        setarAlarmeSound={setarAlarmeSound}
      />
    )
  }
}