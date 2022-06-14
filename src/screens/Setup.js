import {View, Text, Button, StyleSheet} from 'react-native';

const Setup = ({ navigation }) => {
    return (
        <View style={style.container}>
          <Text>Setup Screen</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Setup;