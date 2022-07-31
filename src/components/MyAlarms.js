import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function MyAlarms(props) {

    function trocarAlarme(id) {
        let alarmeTemp = props.alarmeSound.map((item) => {
            if (id === item.id) {
                item.selecionado = true
            } else {
                item.selecionado = false
            }

            return item
        })
        props.setarAlarmeSound(alarmeTemp)
    }

    return (
        <View style={styles.container}>
            {
                props.alarmeSound.map((item) => {
                    return (
                        <TouchableOpacity
                            key={item.id}
                            style={[styles.btnEscolher,
                            (item.selecionado)
                                ? styles.btnSelecionado
                                : { backgroundColor: 'red' }]}
                            onPress={() => { trocarAlarme(item.id) }}
                        >
                            <Text style={styles.text}>
                                {item.som}
                            </Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flexDirection: 'row',
        margin: 30
    },
    btnEscolher: {
        padding: 8,
        margin: 10
    },
    btnSelecionado: {
        backgroundColor: 'green',
        borderColor: 'white',
        borderWidth: 1
    },
    text: {
        color: 'white'
    },
})