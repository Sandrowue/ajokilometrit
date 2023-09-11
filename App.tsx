import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//const Stack = createNativeStackNavigator();
import { NavigationContainer } from '@react-navigation/native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import NewTripCreator from './NewTripCreator';
import { Trip } from './Trip';
import TripList from './TripList';
import { deleteTrip, loadTrips, saveTrip } from './store';

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
    newTrip: ['ios-car', 'ios-car-outline'], 
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
    const [trips, setTrips] = React.useState<Trip[]>(loadTrips());

    function TripListScreen() {
        return (
            <TripList
                trips={trips}
                saveTrip={saveTrip}
                deleteTrip={deleteTrip}
            />
        );
    }
    function NewTripScreen({navigation}) {
        return (
            <NewTripCreator
                onStarted={() => {
                    setTrips(loadTrips());
                    navigation.navigate('home');
                }}
            />
        );
    }
    return (
        <NavigationContainer>
            <Nav.Navigator screenOptions={getScreenOptions}>
                <Nav.Screen
                    name="home"
                    component={TripListScreen}
                    options={{title: 'Aloitusruutu'}}
                />
                <Nav.Screen
                    name="newTrip"
                    component={NewTripScreen}
                    options={{title: 'Uusi matka'}}
                />
            </Nav.Navigator>
        </NavigationContainer>
    );
}



