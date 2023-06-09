import Ionicons from '@expo/vector-icons/Ionicons';
import * as React from 'react';
import {StatusBar, StatusBarStyle, StyleSheet, View} from 'react-native';
import {
    Button, MD3LightTheme as DefaultTheme, PaperProvider, TextInput,} from 'react-native-paper';
  
import {NavigationContainer} from '@react-navigation/native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//const Stack = createNativeStackNavigator();
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#e09812',
        secondary: '#1f5ad5',
    },
};

const Nav = createBottomTabNavigator();

const tabIcons = {
    home: ['ios-home', 'ios-home-outline'],
    other: ['ios-car', 'ios-car-outline'], 
};

const getScreenOptions = ({route}) => ({
    tabBarIcon: ({focused, color, size}) => (
        <Ionicons
            name={tabIcons[route.name][focused ? 0 : 1]}
            size={size}
            color={color}
            />
    ),
    tabBarActiveTintColor: '#d5661f',
    tavBarInactiveTintColor: '#7f7974',
    headerShown: true,
});

export default function App() {
    return (
        <PaperProvider theme={theme}>
            <InnerApp />
        </PaperProvider>
    )
}

function InnerApp() {
    return (
        <NavigationContainer>
            <Nav.Navigator screenOptions={getScreenOptions}>
                <Nav.Screen
                    name="other"
                    component={StatusBarTogglerView}
                    options={{title: 'Toinen juttu'}}
                />
                <Nav.Screen
                    name="home"
                    component={ButtonOnlyView}
                    options={{title: 'Aloitusruutu'}}
                />
            </Nav.Navigator>
        </NavigationContainer>
    );
}

function ButtonOnlyView({navigation}) {
    return (
        <View>
            <Button onPress={() => navigation.navigate('other')}>
                Avaa juttu
            </Button>
        </View>
    );
}

function StatusBarTogglerView() {
  
    return (
        <View style={styles.container}>
            <StatusBar {...styles.statusBar} />
            <View style={styles.buttonsContainer}>
                <TextInput label='Ajon kuvaus' />
                <Button mode='contained'>Aloita ajo</Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#09d182',
    },
    statusBar: {
        animated: true,
        backgroundColor: '#d5661f',
        barStyle: 'default' as StatusBarStyle,
    },
    textInput: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonsContainer: {
        padding: 10,
    },
    textStyle: {
        textAlign: 'center',
        marginBottom: 8,
    },
});