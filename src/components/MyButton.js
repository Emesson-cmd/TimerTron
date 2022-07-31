import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function MyButton(props) {
    return (
        <View>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => props.setarEstado(props.estado)}
            >
                <Text style={styles.text}>{props.label}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'green',
        borderRadius: 50,
        width: 100,
        height: 100,
        borderWidth: 4,
        borderColor: 'white',
        marginTop: 24
    },
    text: {
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
        height: '100%',
        textAlignVertical: 'center'
    }
})