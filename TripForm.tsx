import * as React from 'react';
import {View} from 'react-native';
import {Button, SegmentedButtons, Text, TextInput} from 'react-native-paper';

import { DateTimeField } from './DateTimeField';

export default function TripForm () {
    const[vehicle, setVehicle] = React.useState('car1');
       
    return (
        <View>
            <SegmentedButtons
                value={vehicle}
                onValueChange={setVehicle}
                buttons={[
                    {value: 'car1', label: 'Auto 1'},
                    {value: 'car2', label: 'Auto 2'},
                ]}
            />
            <TextInput label="Ajon kuvaus" />
            <Text>Alku</Text>
            <DateTimeField />
            <Button mode="contained">Tallenna</Button>
        </View>
    );
    }