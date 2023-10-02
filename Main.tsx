import Ionicons from '@expo/vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//const Stack = createNativeStackNavigator();
import { NavigationContainer } from '@react-navigation/native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import NewTripCreator from './NewTripCreator';
import { Trip } from './Trip';
import OnTrip from './OnTrip';
import TripList from './TripList';
import { deleteTrip, loadTrips, saveTrip } from './store';

const Nav = createBottomTabNavigator();

const tabIcons = {
    trips: ['ios-list-circle', 'ios-list-cirle-outline'],
    newTrip: ['ios-car', 'ios-car-outline'],
    onTrip: ['ios-car', 'ios-car-outline'], 
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

export default function Main() {
    const [trips, setTrips] = React.useState<Trip[]>([]);
    async function reloadTrips() {
        const newTrips = await loadTrips();
        setTrips(newTrips);
    }
    React.useEffect(() => {
        reloadTrips();
    }, []
    );

    function TripListScreen() {
        return (
            <TripList
                trips={trips}
                saveTrip={(trip: Trip) => {
                    saveTrip(trip);
                    reloadTrips();
                }
            }
                deleteTrip={(trip: Trip) => {
                    deleteTrip(trip);
                    reloadTrips();
                }
            }
            />
        );
    }

    function NewTripScreen({navigation}) {
        return (
            <NewTripCreator
                onSubmit={async(trip: Trip) => {
                    reloadTrips();
                    navigation.navigate('onTrip', {tripId: trip.id});
                }}
            />
        );
    }

    function OnTripScreen({navigation, route}) {
        return (
            <OnTrip
                route={route}
                onSave={async (trip: Trip) => {
                    reloadTrips();
                    navigation.navigate('trips');
                }}
            />
        );
    }

    return (
        <NavigationContainer>
            <Nav.Navigator screenOptions={getScreenOptions}>
                <Nav.Screen
                    name="trips"
                    component={TripListScreen}
                    options={{title: 'Matkat'}}
                />
                <Nav.Screen
                    name="newTrip"
                    component={NewTripScreen}
                    options={{title: 'Uusi matka'}}
                />
                <Nav.Screen
                    name="onTrip"
                    component={OnTripScreen}
                    options={{title: 'Matkalla...'}}
                    />
            </Nav.Navigator>
        </NavigationContainer>
    );

}   