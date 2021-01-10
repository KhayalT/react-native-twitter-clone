import { StyleSheet } from 'react-native'
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.light.tint,
        position: 'absolute',
        width: 55,
        height: 55,
        bottom: 20,
        right: 20,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;