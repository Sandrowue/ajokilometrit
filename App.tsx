import Ionicons from '@expo/vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//const Stack = createNativeStackNavigator();
import {NavigationContainer} from '@react-navigation/native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {View} from 'react-native';
import {Button, MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import TripForm from './TripForm';
import TripList from './TripList'

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
    );
}

function InnerApp() {
    return (
        <NavigationContainer>
            <Nav.Navigator screenOptions={getScreenOptions}>
                <Nav.Screen
                    name="home"
                    component={TripList}
                    options={{title: 'Aloitusruutu'}}
                />
                <Nav.Screen
                    name="other"
                    component={TripForm}
                    options={{title: 'Uusi matka'}}
                />
            </Nav.Navigator>
        </NavigationContainer>
    );
}

function ButtonOnlyView({navigation}) {
    return (
        <View>
            <Button onPress={() => navigation.navigate('other')}>
                Syötä matka
            </Button>
        </View>
    );
}

