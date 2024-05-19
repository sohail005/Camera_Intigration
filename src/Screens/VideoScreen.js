import { Button, Dimensions, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Video from 'react-native-video';

const h = Dimensions.get('screen').height;
const w = Dimensions.get('screen').width;
const VideoScreen = ({ route }) => {
    const [videoUrl, setVideoUrl] = useState("")
    useEffect(() => {
        setVideoUrl(route.params.videoUri)
    }, [])
   
    return (
        <View style={{ height: h, width: w }}>
            {videoUrl && (
                <View style={{ width: w, height: h }}>
                    <Video

                        fullscreen={true}
                        controls={true}
                        filterEnabled={true}
                        resizeMode={'contain'}
                        source={{ uri: videoUrl }}
                        style={{ flex: 1, backgroundColor: '#000' }} repeat={false} />
                   
                </View>
            )}
        </View>
    )
}

export default VideoScreen

const styles = StyleSheet.create({})