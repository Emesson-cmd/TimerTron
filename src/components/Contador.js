import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Audio } from 'expo-av';

import MyLinearGradient from "./MyLinearGradient";
import MyButton from './MyButton'

export default function Contador(props) {
    var done = false

    useEffect(()=>{
        const timer = setInterval(()=>{
            props.setarSegundos(props.segundos-1)
            if (props.segundos == 0){
                if (props.minutos > 0){
                    props.setarMinutos(props.minutos - 1)
                    props.setarSegundos(59)
                } else {
                    if (!done){
                        done = true
                        playSound()
                        resetar()
                    }
                }
            }

        }, 1000)
        return () => clearInterval(timer);
    })

    function resetar() {
        props.setarMinutos('0')
        props.setarSegundos('1')
        props.setarEstado('settimer')
    }

    function formatarNumeros(number) {
        var finalNumber = "";
        if (number >= 0 && number <= 9 ){
            finalNumber = '0'+number
        } else {
            finalNumber = number
        }
        return finalNumber
    }

    var segundos = formatarNumeros(props.segundos)
    var minutos = formatarNumeros(props.minutos)

    async function playSound(){
        const soundObject = new Audio.Sound();
          try {
            var alarme;
            props.alarmes.map(function(val){
                if(val.selecionado){
                  alarme = val.file;
                }
            })
            
            await soundObject.loadAsync(alarme);
            await soundObject.playAsync();
            // Your sound is playing!
    
            // Don't forget to unload the sound from memory
            // when you are done using the Sound object
            // await soundObject.unloadAsync();
          } catch (error) {
            console.log(error)
          }
      }

    return (
        <View style={styles.container}>
            <MyLinearGradient />
            <StatusBar translucent style="inverted" />

            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.textContador}>{minutos}</Text>
                <Text style={styles.textContador}>:</Text>
                <Text style={styles.textContador}>{segundos}</Text>
            </View>

            <MyButton 
                estado={'settimer'} 
                setarEstado={props.setarEstado}
                label="Resetar"
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
    textContador: {
        color: 'white',
        fontSize: 30
    },
})