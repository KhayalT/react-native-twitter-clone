import { StyleSheet } from 'react-native'



const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
    },
    tweetHeaderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    tweetHeaderNames: {
        flexDirection: 'row'
    },
    name: {
        marginRight: 5,
        fontWeight: 'bold',
        maxWidth: 110,
    },
    username: {
        marginRight: 5,
        color: 'gray',
        width: 80,
    },
    createdAt: {
        marginRight: 5,
        color: 'gray'
    },
    content: {
        lineHeight: 19,
        marginTop: 3,
        marginBottom: 7
    },
    image: {
        marginVertical: 10,
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 15,
        overflow: 'hidden',
    }
})

export default styles;