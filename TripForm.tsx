import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import * as React from 'react';
import {View} from 'react-native';
import {Button, SegmentedButtons, Text, TextInput} from 'react-native-paper';

export default function TripForm () {
    const[vehicle, setVehicle] = React.useState('car1');
    const[startDate, setStartDate] = React.useState(new Date());
    
    const setStartDateMode = (mode: 'date' | 'time') => {
        DateTimePickerAndroid.open({
            value: startDate,
            onChange: (event: any, x: Date) => {
                setStartDate(x);
                if (mode == 'date') setStartDateMode('time');
            },
            mode,
            is24Hour: true,
        });
    };
    const showStartDatePicker = () => setStartDateMode('date');
    
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
            <Text>Alku: {startDate.toLocaleString()}</Text>
            <Button onPress={showStartDatePicker}>Valitse alkuaika</Button>
            <Button mode="contained">Tallenna</Button>
        </View>
    );
            }