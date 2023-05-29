import React, {useState} from 'react';
import {
    Button,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="home"
                    component={ButtonOnlyView}
                    options={{title: 'Aloitusruutu'}}
                />
                <Stack.Screen
                    name="other"
                    component={StatusBarTogglerView}
                    options={{title: 'Toinen juttu'}}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

function ButtonOnlyView({navigation}) {
    return (
        <View>
            <Button
                title="Avaa juttu"
                onPress={() => navigation.navigate('other')}
            />
        </View>
    );
}

function StatusBarTogglerView() {
    const [hidden, setHidden] = useState(false);
    const changeStatusBarVisibility = () => setHidden(!hidden);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="#61dafb"
                barStyle={'default'}
                hidden={hidden}
            />
            <Text style={styles.textStyle}>
                StatusBar Visibility:{'\n'}
                {hidden ? 'Hidden' : 'Visible'}
            </Text>
            <View style={styles.buttonsContainer}>
                <Button
                    title="Toggle StatusBar"
                    onPress={changeStatusBarVisibility}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ECF0F1',
    },
    buttonsContainer: {
        padding: 10,
    },
    textStyle: {
        textAlign: 'center',
        marginBottom: 8,
    },
});