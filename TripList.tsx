import React from 'react';
import {FlatList, StyleSheet, Text} from 'react-native';

export default function TripList () {
    return (
        <FlatList
            data={nimet}
            renderItem={ListRow}/>
    );
}

type ItemType = {
    key: string;
};

function ListRow({item}: {item: ItemType}) {
    return <Text style={styles.item}>{item.key}</Text>;
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

const nimet: ItemType[] = [
    {key: 'Raahe'},
    {key: 'Huvimatka'},
    {key: 'Kokous'},
    {key: 'Helsinki'},
    {key: 'Kauppareissu'},
    {key: 'Heinola'},
    {key: 'Turku'},
    {key: 'Saaristokierros'},
    {key: 'Karjaa'},
    {key: 'Pori'},
    {key: 'Salo'},
    {key: 'Inari'},
    {key: 'Yöelämä kuski'},
    {key: 'Kotka'},
    {key: 'Opintoreissu'},
    {key: 'Kasvitieteellinen Puutarha'},
    {key: 'Kouvola'},
    {key: 'Imatra'},
    {key: 'Risteilymatka'},
    {key: 'Hammaslääkäri'},
    {key: 'Ostosreissu'},
    {key: 'Tampere'},
    {key: 'Oulu'},
    {key: 'Mustion Arboreetti'},
    {key: 'Taidenäyttely'},
    {key: 'Mylly'},
    {key: 'Hinausajo'},
    {key: 'Hautajaiset'},
    {key: 'Korso'},
    {key: 'Syntymäpäiväjuhlat'},

]