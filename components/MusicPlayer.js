import React from "react";
import {SafeAreaView, View, Text, StyleSheet, Dimensions, TouchableOpacity, Image} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from "react-native-paper";
import Slider from "@react-native-community/slider";
import BottomMenu from "./BottomMenu";

const {width, height} = Dimensions.get('window').width;

const MusicPlayer = ({navigation}) => {
    const theme = useTheme();

    return(
        <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <View style={styles.mainContainer}>
                <View style={styles.artworkWrapper}>
                    <Image source={require('../assets/images/She Don`t Give A FO.jpg')} style={styles.artworkImage}/>
                </View>
                <View>
                    <Text style={styles.title}>She Don't Give a FO</Text>
                    <Text style={styles.artist}>Duki, Khea</Text>
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
                        <TouchableOpacity onPress={()=>{}}>
                            <Ionicons name="play-skip-back-outline" size={35} color="#d0bcff" style={{marginTop:25}}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{}}>
                            <Ionicons name="pause-circle" size={75} color="#d0bcff" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{}}>
                            <Ionicons name="play-skip-forward-outline" size={35} color="#d0bcff" style={{marginTop:25}}/>
                        </TouchableOpacity>
                    </View>
            </View>
            <BottomMenu navigation={navigation}/>
        </SafeAreaView>
    )
};

export default MusicPlayer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: "#222831",
    },
    mainContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    // bottomContainer:{
    //     borderTopColor: '#393E46',
    //     borderTopWidth: 1,
    //     width: width,
    //     alignItems: 'center',
    //     paddingVertical: 15
    // },
    // bottomControls:{
    //     flexDirection:'row',
    //     justifyContent: 'space-between',
    //     width: '80%'
    // },
    artworkWrapper:{
        width: 300,
        height: 340,
        marginBottom: 25,
        // shadowColor: '#FFFFFF',
        // shadowOffset:{
        //     width: 5,
        //     height: 5,
        // },
        // shadowOpacity: 0.5,
        // shadowRadius: 3.84,
        elevation: 5,
    },
    artworkImage:{
        width: '100%',
        height: '100%',
        borderRadius: 15
    },
    title:{
        fontSize: 18,
        fontWeight: '600',
        verticalAlign: 'center',
        color: '#EEEEEE',
    },
    artist:{
        fontSize: 16,
        fontWeight: '200',
        verticalAlign: 'center',
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
    }
})