import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import { useTheme, List, Text, Menu, Divider, IconButton } from 'react-native-paper';
import BottomMenu from '../components/BottomMenu';
import songs from '../model/data';

const { width } = Dimensions.get('window');

const songsData = [
    { id: 1, title: 'Canción 1', artist: 'Artista 1' },
    { id: 2, title: 'Canción 2', artist: 'Artista 2' },
    { id: 3, title: 'Canción 3', artist: 'Artista 3' },
];

const SongsScreen = ({ navigation }) => {
    const theme = useTheme();
    const [visibleMenu, setVisibleMenu] = useState(false);
    const [selectedSong, setSelectedSong] = useState(null);

    const handleSongPress = (songId) => {
        navigation.navigate("MusicPlayer", { songId });
    };

    const handleMenuOpen = (song) => {
        setSelectedSong(song);
        setVisibleMenu(true);
    };

    const closeMenu = () => setVisibleMenu(false);

    const deleteSong = () => {
        // Lógica para eliminar la canción seleccionada
        // Aquí puedes utilizar el estado selectedSong para saber qué canción eliminar
        setVisibleMenu(false);
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <View style={styles.mainContainer}>
                <List.Section>
                    <List.Subheader><Text variant="titleLarge">Mis canciones</Text></List.Subheader>
                    {songs.map((song) => (
                        <TouchableOpacity key={song.id} onPress={() => handleSongPress(song.id)}>
                            <List.Item
                                title={song.title}
                                description={song.artist}
                                descriptionStyle={styles.description}
                                left={props => <List.Icon {...props} icon="music-note" />}
                                right={() => (
                                    <Menu
                                        visible={visibleMenu && selectedSong && selectedSong.id === song.id}
                                        onDismiss={closeMenu}
                                        anchor={
                                            <IconButton
                                                icon="dots-vertical"
                                                onPress={() => handleMenuOpen(song)}
                                            />
                                        }>
                                        <Menu.Item onPress={deleteSong} title="Eliminar" />
                                    </Menu>
                                )}
                            />
                            <Divider />
                        </TouchableOpacity>
                    ))}
                </List.Section>
            </View>
            <BottomMenu navigation={navigation} isSongsScreen={true}/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer: {
        flex: 1,
    },
    description: {
        color: '#777777'
    }
});

export default SongsScreen;
