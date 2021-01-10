import React from 'react'
import { View, Text, Image } from 'react-native'
import { TweetType } from '../../../types'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons'
import FooterContainer from '../FooterContainer'

export type MainContainerProps = {
    tweet: TweetType
}

const MainContainer = (props: MainContainerProps) => {
    return (
        <View style={styles.container}>
            <View style={styles.tweetHeaderContainer}>
                <View style={styles.tweetHeaderNames}>
                    <Text
                        numberOfLines={1}
                        style={styles.name}>{props.tweet.user.name}
                    </Text>
                    <Text
                        numberOfLines={1}
                        style={styles.username}>@{props.tweet.user.username}
                    </Text>
                    <Text
                        numberOfLines={1}
                        style={styles.createdAt}>15s
                  </Text>
                </View>
                <View>
                    <Ionicons
                        name="chevron-down"
                        size={20}
                        color="gray"
                    />
                </View>
            </View>
            <View>
                <Text style={styles.content}>{props.tweet.content}</Text>
                {!!props.tweet.image && <Image
                    source={{ uri: props.tweet.image }}
                    style={styles.image}
                />}
            </View>
            <FooterContainer tweet={props.tweet} />
        </View>
    )
}

export default MainContainer;