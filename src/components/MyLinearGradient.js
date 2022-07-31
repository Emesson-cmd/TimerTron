import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function MyLinearGradient() {
    return (
        <LinearGradient
            // Background Linear Gradient
            colors={['rgba(0,0,0,0.7)', 'transparent']}
            style={styles.background}
        />
    )
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    }
});