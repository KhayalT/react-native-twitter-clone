import React from 'react'
import { View, Text } from 'react-native'
import LeftContainer from './LeftContainer'
import MainContainer from './MainContainer'
import { TweetType } from '../../types'
import styles from './styles'

export type TweetProps = {
    tweet: TweetType
}

const Tweet = (props: TweetProps) => {
    return (
        <View style={styles.container}>
            <LeftContainer user={props.tweet.user} />
            <MainContainer tweet={props.tweet} />
        </View>
    )
}

export default Tweet;