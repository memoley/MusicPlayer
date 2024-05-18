import React, {useEffect, useRef, useState} from "react";
import {SafeAreaView, View, Text, StyleSheet, Dimensions, TouchableOpacity, Image, FlatList, Animated} from "react-native";
import { useTheme } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';
import Slider from "@react-native-community/slider";
import songs from "../model/data";
import BottomMenu from "./BottomMenu";

const {width, height} = Dimensions.get('window');


const MusicPlayer=({navigation})=>{
    const theme = useTheme();
    const scrollX=useRef(new Animated.Value(0)).current;
    const [songIndex, setSongIndex]=useState(0);
    const songSlider=useRef(null);
    useEffect(()=>{
        scrollX.addListener(({value})=>{
            //console.log('Scroll x:',scrollX);
            //console.log('Device width:',width);
            const index = Math.round(value/width);
            setSongIndex(index);
            //console.log('Index:',index);
        });

        return()=>{
            scrollX.removeAllListeners();
        }
    },[]);

    const skipToNext = ()=>{
        songSlider.current.scrollToOffset({
            offset: (songIndex+1)*width,
        });
    };

    const skipToPrevious = ()=>{
        songSlider.current.scrollToOffset({
            offset: (songIndex-1)*width,
        });
    };

    const renderSongs=({index, item})=>{
        return(
            <View style={{
                width: width,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={styles.artworkWrapper}>
                    <Image 
                    source={item.image} 
                    style={styles.artworkImage}
                    />
                </View>
            </View>
        )
}
    return(
        <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <View style={styles.mainContainer}>
                <View style={{width:width}}>
                    <Animated.FlatList
                        ref={songSlider}
                        data={songs}
                        renderItem={renderSongs}
                        keyExtractor={(item)=>item.id}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={16}
                        onScroll={Animated.event(
                            [{nativeEvent:{
                                contentOffset:{
                                    x:scrollX
                                }
                            }}],
                            {useNativeDriver:true}
                        )}
                    />
                </View>
                <View style={{alignItems: "center"}}>
                    <Text style={styles.title}>{songs[songIndex].title}</Text>
                    <Text style={styles.artist}>{songs[songIndex].artist}</Text>
                </View>
                <View>
                    <Slider
                        style={styles.progresContainer}
                        values={10}
                        minimumValue={0}
                        maximumValue={100}
                        minimumTrackTintColor="#d0bcff"
                        thumbTintColor="#d0bcff"
                        maximumTrackTintColor="#FFFFFF"
                        onSlidingComplete={()=>{}}
                    />
                    <View style={styles.progressLabelContainer}>
                        <Text style={styles.progressLabelText}>0:00</Text>
                        <Text style={styles.progressLabelText}>3:35</Text>
                    </View>
                </View>
                <View style={styles.musicControlls}>
                    <TouchableOpacity onPress={skipToPrevious}>
                        <Ionicons name="play-skip-back-outline" size={35} color="#d0bcff" style={{marginTop:25}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{}}>
                        <Ionicons name="play-circle" size={75} color="#d0bcff" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={skipToNext}>
                        <Ionicons name="play-skip-forward-outline" size={35} color="#d0bcff" style={{marginTop:25}}/>
                    </TouchableOpacity>
                </View>
            </View>
            <BottomMenu navigation={navigation} isSongsScreen={false}/>
            {/* <View style={styles.bottomContainer}>
                    <View style={styles.bottomControls}>
                        <TouchableOpacity>
                            <Ionicons name="heart-outline" size={30} color="#777777"/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="repeat" size={30} color="#777777"/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="share-outline" size={30} color="#777777"/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Ionicons name="ellipsis-horizontal" size={30} color="#777777"/>
                        </TouchableOpacity>
                    </View>
            </View> */}
        </SafeAreaView>
    )
};

export default MusicPlayer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222831',
    },
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    bottomContainer:{
        borderTopColor: '#393E46',
        borderTopWidth: 1,
        width: width,
        alignItems: 'center',
        paddingVertical: 15
    },
    bottomControls:{
        flexDirection:'row',
        justifyContent: 'space-between',
        width: '80%'
    },
    artworkWrapper:{
        width: 300,
        height: 300,
        marginBottom: 25,
    },
    artworkImage:{
        width: '100%',
        height: '100%',
        borderRadius: 15
    },
    title:{
        fontSize: 18,
        fontWeight: '600',
        color: '#EEEEEE'
    },
    artist:{
        fontSize: 16,
        fontWeight: '200',
        color: '#EEEEEE',
    },
    progresContainer:{
        width: 350,
        height: 40,
        flexDirection: 'row',
        marginTop: 25
    },
    progressLabelContainer:{
        width: 340,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    progressLabelText:{
        color: '#FFFFFF'
    },
    musicControlls:{
        flexDirection: 'row',
        justifyContent:'space-between',
        width: '60%',
        marginTop: 15
    },
    bottomContainer:{
        borderTopColor: '#777777',
        borderTopWidth: 1,
        width: width,
        alignItems: 'center',
        paddingVertical: 15
    },
    bottomControls:{
        flexDirection:'row',
        justifyContent: 'space-between',
        width: '80%'
    }
})