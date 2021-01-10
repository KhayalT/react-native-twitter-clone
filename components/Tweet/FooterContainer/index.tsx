import React from 'react'
import { View, Text, } from 'react-native'
import { TweetType } from '../../../types'
import styles from './styles'
import { AntDesign, Feather, EvilIcons } from '@expo/vector-icons'

export type FooterContainerProps = {
    tweet: TweetType
}

const FooterContainer = (props: FooterContainerProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Feather name="message-circle" size={19} color="gray" />
                <Text style={styles.numbers}>{props.tweet.numberOfComments}</Text>
            </View>
            <View style={styles.iconContainer}>
                <EvilIcons name="retweet" size={25} color="gray" />
                <Text style={styles.numbers}>{props.tweet.numberOfRetweets}</Text>
            </View>
            <View style={styles.iconContainer}>
                <AntDesign name="hearto" size={17} color="gray" />
                <Text style={styles.numbers}>{props.tweet.numberOfLikes}</Text>
            </View>
            <View style={styles.iconContainer}>
                <EvilIcons name="share-google" size={25} color="gray" />
            </View>
        </View>
    )
}

export default FooterContainer;