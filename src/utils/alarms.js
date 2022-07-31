const alarms = () => {
    return (
        [
            {
                id: 1,
                selecionado: true,
                som: 'alarme 1',
                file: require('../assets/alarme1.mp3')
            },
            {
                id: 2,
                selecionado: false,
                som: 'alarme 2',
                file: require('../assets/alarme2.mp3')
            },
            {
                id: 3,
                selecionado: false,
                som: 'alarme 3',
                file: require('../assets/alarme3.mp3')
            },
        ]
    )
}

export default alarms()