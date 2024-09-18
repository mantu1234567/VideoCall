import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'


const VideoCall = ({route,navigation}) => {
    const name = route?.params?.name;
    console.log(name)
  
    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={1860588821}
                appSign={"808d39df377dcde64e1494ee92cdc8ac106d93a02bf756640fe805955a71ea05"}
                userID={name} // userID can be something like a phone number or the user id on your own user system. 
                userName={name}
                callID={'callID'} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
            
                    onCallEnd: () => {navigation.navigate('Home') },
                }}
            />
        </View>
    );
  
}

export default VideoCall

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
    },
  });