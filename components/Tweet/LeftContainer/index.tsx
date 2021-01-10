import React from 'react'
import { View, Text } from 'react-native'
import { UserType } from '../../../types'
import ProfilePicture from '../../ProfilePicture'

export type LeftContainerProps = {
    user: UserType
}

const LeftContainer = (props: LeftContainerProps) => {
    return (
        <View>
            <ProfilePicture image={props.user.image} size={75} />
        </View>
    )
}

export default LeftContainer;