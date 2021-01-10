import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const NewTweetButton = () => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={styles.button}
            onPress={() => navigation.navigate('NewTweet')}
        >
            <MaterialCommunityIcons name="feather" size={30} color="white" />
        </TouchableOpacity>
    )
}

export default NewTweetButton