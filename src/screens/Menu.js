import {View, Text, Button, StyleSheet, Pressable} from 'react-native';

const Menu = ({ navigation }) => {
    return (
        <View style={style.container}>
            <Pressable
                style={style.menuButton}
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={style.menuButtonText}>OVERSIGT</Text>
            </Pressable>
            <Pressable
                style={style.menuButton}
                onPress={() => navigation.navigate('Setup')}
            >
                <Text style={style.menuButtonText}>OPSÆTNING</Text>
            </Pressable>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        padding: 25
    },
    menuButton: {
        backgroundColor: "white",
        color: "purple",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25,
        marginBottom: 15
    },
    menuButtonText: {
        backgroundColor: "white",
        color: "purple"
    },
});

export default Menu;