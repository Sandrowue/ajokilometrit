import {ScrollView} from 'react-native';
import {getTrip, saveTrip} from './store';
import {useEffect, useState} from 'react';
import {Trip} from './Trip';
import TripForm from './TripForm';

type Props = {
    route?: {params?: {tripId?: string}};
    onSave?: (trip: Trip) => void;
};

export default function OnTrip({route, onSave}: Props) {
    const [trip, setTrip] = useState<Trip | null>(null);
    const tripId = route?.params?.tripId;

    useEffect(() => {
        if (tripId) {
            getTrip(tripId).then(setTrip);
        } else {
            setTrip(null);
        } 
    }, [tripId]);

    return (
        <ScrollView>
            {trip ? (
                <TripForm
                    key={tripId}
                    initialValue={trip}
                    onSubmit={async (trip) => {
                        await saveTrip(trip);
                        onSave?.(trip);
                    }}
                />
            ) :null}
        </ScrollView>
    );

}