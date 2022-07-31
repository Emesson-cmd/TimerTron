import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import MyLinearGradient from '../components/MyLinearGradient';
import MyAlarms from '../components/MyAlarms'
import MyPicker from '../components/MyPicker'
import MyButton from '../components/MyButton'

export default function SetTimer(props) {

    return (
        <View style={styles.container}>
            <StatusBar translucent style="inverted" />
            <MyLinearGradient />
            <Text style={styles.selectYourTime}>Selecione o seu Tempo:</Text>

            <MyPicker 
                minutos={props.minutos} 
                setarMinutos={props.setarMinutos}
                segundos={props.segundos}
                setarSegundos={props.setarSegundos}
            />

            <MyAlarms
                alarmeSound={props.alarmeSound}
                setarAlarmeSound={props.setarAlarmeSound}
            />

            <MyButton 
                estado={'timer'} 
                setarEstado={props.setarEstado}
                label="Iniciar"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(245, 83, 71)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectYourTime: {
        color: 'white',
        fontSize: 24,
        marginBottom: 24
    },
});