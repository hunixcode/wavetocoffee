import { View, Text, StyleSheet } from "react-native";

export default function Header(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Wave To Coffee</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 30,
        backgroundColor: 'black',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600'
    }
})