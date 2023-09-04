import React, {useState} from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';
import {Button, Modal, Portal} from 'react-native-paper';

import {Trip} from './Trip';
import TripForm from './TripForm';

export default function TripList () {
    const [shownIndex, setShownIndex] = useState<number | null>(null);

    function ListRow({item: trip, index}: {item: Trip; index: number}) {
        return (
            <Button onPress={() => setShownIndex(index)}>
                <Text style={styles.item}>{trip.description}</Text>                
            </Button>
        );
    }

    function TripFormModal() {
        const shownTrip = shownIndex !== null ? trips[shownIndex] : null;
        return (
            <Modal
                visible={shownIndex !== null ? true : false}
                onDismiss={() => setShownIndex(null)}
                contentContainerStyle={styles.container}
                >
                    <TripForm initialValue={shownTrip} 
                    onSubmit={(trip: Trip) => {
                        console.log('Tallennettu matka', shownIndex, trip);
                        trips[shownIndex] = trip;
                        setShownIndex(null);
                    }}
                    onDelete={() => {
                        console.log('Poistetaan', shownIndex);
                        trips.splice(shownIndex, 1); // Remove item at shownIndex
                        setShownIndex(null);
                    }}
                    />
                </Modal>
        );
    }

    return (
        <>
            <FlatList data={trips} renderItem={ListRow} style={styles.list} />
            <Portal>
                <TripFormModal />
            </Portal>
        </>
    )

}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'white',
    },
    list: {},
    item: {
        padding: 2,
        fontSize: 20,
        height: 40,
    },
});

const trips: Trip[] = [
    {vehicleId: 'car1', description: 'Raahe'},
    {vehicleId: 'car2', description: 'Huvimatka'},
    {vehicleId: 'car3', description: 'Kokous'},
    {vehicleId: 'car4', description: 'Helsinki'},
    {vehicleId: 'car5', description: 'Kauppareissu'},
    {vehicleId: 'car6', description: 'Heinola'},
    {vehicleId: 'car7', description: 'Turku'},
    {vehicleId: 'car8', description: 'Saaristokierros'},
    {vehicleId: 'car9', description: 'Karjaa'},
    {vehicleId: 'car10', description: 'Pori'},
    {vehicleId: 'car11', description: 'Salo'},
    {vehicleId: 'car12', description: 'Inari'},
    {vehicleId: 'car13', description: 'Yöelämä kuski'},
    {vehicleId: 'car14', description: 'Kotka'},
    {vehicleId: 'car15', description: 'Opintoreissu'},
    {vehicleId: 'car16', description: 'Kasvitieteellinen Puutarha'},
    {vehicleId: 'car17', description: 'Kouvola'},
    {vehicleId: 'car18', description: 'Imatra'},
    {vehicleId: 'car19', description: 'Risteilymatka'},
    {vehicleId: 'car20', description: 'Hammaslääkäri'},
    {vehicleId: 'car21', description: 'Ostosreissu'},
    {vehicleId: 'car22', description: 'Tampere'},
    {vehicleId: 'car23', description: 'Oulu'},
    {vehicleId: 'car24', description: 'Mustion Arboreetti'},
    {vehicleId: 'car25', description: 'Taidenäyttely'},
    {vehicleId: 'car26', description: 'Mylly'},
    {vehicleId: 'car27', description: 'Hinausajo'},
    {vehicleId: 'car28', description: 'Hautajaiset'},
    {vehicleId: 'car29', description: 'Korso'},
    {vehicleId: 'car30', description: 'Syntymäpäiväjuhlat'},

];