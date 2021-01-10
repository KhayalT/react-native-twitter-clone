import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfilePicture from '../components/ProfilePicture';
import Colors from '../constants/Colors';


export default function TabOneScreen() {
    const [tweet, settweet] = useState()
    const [image, setimage] = useState()

    const navigation = useNavigation();

    const onPress = () => {
        console.warn(`Posting the tweet: ${tweet} and imageurl is : ${image}`)
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <AntDesign
                    name="close"
                    size={30}
                    onPress={() => navigation.navigate('Home')}
                    color={Colors.light.tint}
                />
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.button}
                    onPress={() => { onPress() }
                    }>
                    <Text style={styles.buttonText}>Tweet</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.newTweetContainer}>
                <ProfilePicture
                    image="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                />
                <View style={styles.inputContainer}>
                    <TextInput
                        value={tweet}
                        onChangeText={(value) => settweet(value)}
                        multiline
                        style={styles.tweetInput}
                        placeholder="What's happening?"
                    />
                    <TextInput
                        value={image}
                        onChangeText={(value) => setimage(value)}
                        multiline
                        style={styles.imageInput}
                        placeholder="Image url (optional)"
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
    },
    newTweetContainer: {
        flexDirection: 'row',
        padding: 15,
    },
    inputContainer: {
        marginLeft: 10,
    },
    tweetInput: {
        maxHeight: 200,
        marginBottom: 100,
        fontSize: 20,
    },
    imageInput: {
        maxHeight: 200,
        fontSize: 20,
    },
    button: {
        backgroundColor: Colors.light.tint,
        borderRadius: 30,
    },
    buttonText: {
        color: 'white',
        paddingHorizontal: 22,
        paddingVertical: 8,
        fontWeight: 'bold',
        fontSize: 18,
    },
});
