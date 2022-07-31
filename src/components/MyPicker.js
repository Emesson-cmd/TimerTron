import { StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-picker/picker';

export default function MyPicker(props) {
    var numeros = [];
    for (var i = 0; i <= 59; i++) {
        numeros.push(i)
    }

    return (
        <View style={styles.pickerContainer}>
        <Text style={styles.label}>Minutos:</Text>
        <Picker
            key='min'
            style={styles.selectPicker}
            selectedValue={props.minutos}
            onValueChange={(minuto) =>
                props.setarMinutos(minuto)
            }>
            {
                numeros.map((item) => {
                    return (
                        <Picker.Item key={'min-' + item} label={item.toString()} value={item.toString()} />
                    )
                })
            }
        </Picker>

        <Text style={styles.label}>Segundos:</Text>
        <Picker
            key='seg'
            style={styles.selectPicker}
            selectedValue={props.segundos}
            onValueChange={(itemValue) =>
                props.setarSegundos(itemValue)
            }>
            {
                numeros.map((item) => {
                    return (
                        <Picker.Item key={'seg-' + item} label={item.toString()} value={item.toString()} />
                    )
                })
            }
        </Picker>
    </View>
    )
}

const styles = StyleSheet.create({
    pickerContainer: {
        borderWidth: 1,
        borderColor: 'white',
        flexDirection: 'row',
    },
    selectPicker: {
        height: 40,
        width: 100,
        color: 'white',
    },
    label: {
        color: 'white',
        textAlign: "center",
        paddingTop: 16,
        paddingLeft: 16
    },
})