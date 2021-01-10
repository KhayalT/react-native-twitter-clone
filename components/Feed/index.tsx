import React from 'react';
import { FlatList } from 'react-native'
import tweets from '../../data/tweets';
import Tweet from '../Tweet';
import styles from './styles';

const Feed = () => {
    return (
        <FlatList
            data={tweets}
            renderItem={({ item }) => <Tweet tweet={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
        />
    )
}

export default Feed;