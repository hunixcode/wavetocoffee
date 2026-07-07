import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import SongCard from '../../components/SongCard'
import Header from '../../components/Header'
import { searchSongs } from '../../services/api'


export default function Home(){
    const [songs, setSongs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        searchSongs('jazz')
            .then(setSongs)
            .finally(() => setLoading(false))
    }, [])

    return (
        <View style={styles.screen}>
            <Header/>
            <ScrollView style={styles.page}>
                {loading ? (
                    <Text style={styles.loading}>Chargement...</Text>
                ) : (
                    songs.map((song) => (
                        <SongCard
                            key={song.id}
                            title={song.title}
                            artist={song.artist}
                            album={song.album}
                            imageUrl={song.imageUrl}
                        />
                    ))
                )}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    page: {
        flex: 1,
        padding: 15,
    },
    loading: {
        color: 'white',
        textAlign: 'center',
        marginTop: 50,
        fontSize: 16,
    },
})