import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const BottomMenu = ({ navigation, isSongsScreen }) => {
  const handleHeartPress = () => {
    navigation.navigate('SongsScreen');
  };

  return (
    <View style={styles.bottomContainer}>
      <View style={styles.bottomControls}>
        <TouchableOpacity onPress={handleHeartPress}>
          <Ionicons
            name={isSongsScreen ? 'heart' : 'heart-outline'}
            size={30}
            color={isSongsScreen ? '#d0bcff': '#777777'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <Ionicons name="repeat" size={30} color="#777777" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <Ionicons name="share-outline" size={30} color="#777777" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <Ionicons name="ellipsis-horizontal" size={30} color="#777777" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    borderTopColor: '#393E46',
    borderTopWidth: 1,
    width: '100%',
    alignItems: 'center',
    paddingVertical: 15,
  },
  bottomControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default BottomMenu;
