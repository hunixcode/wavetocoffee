import { View, Text, Image, StyleSheet } from 'react-native'


export default function SongCard({ title, artist, album, imageUrl }){
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: imageUrl }}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
                <Text style={styles.artist} numberOfLines={1}>{artist}</Text>
                <Text style={styles.album} numberOfLines={1}>{album}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        gap: 15,
        margin: 7.5,
        borderColor: '#5e5e5e',
        borderWidth: 2,
        borderRadius: 15,
        backgroundColor: 'black',
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 10,
    },
    info: {
        flex: 1,
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 2,
    },
    artist: {
        color: '#aaaaaa',
        fontSize: 13,
    },
    album: {
        color: '#777777',
        fontSize: 12,
    },
})