import { getCurrentPosition } from 'api/geolocation';
import useInterval from 'hooks/useInterval';
import React, { useCallback, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

interface LocationServiceProps {
    isRunning: boolean;
}

interface Position {
    lat: number;
    lng: number;
}

const LocationService = ({ isRunning }: LocationServiceProps) => {
    const [position, setPosition] = useState<Position | null>(null);

    const postCurrentPosition = useCallback(async () => {
        const newPosition = await getCurrentPosition();
        // POST는 최초 한번만, 이후에는 PUT요청
        setPosition(newPosition);
        console.log(newPosition);
    }, []);

    useInterval({
        callback: postCurrentPosition,
        delay: isRunning ? 3000 : null,
    });

    return (
        <Map
            center={{
                lat: 35.267342474237104,
                lng: 129.08901354232913,
            }}
            style={{
                width: '100%',
                height: '450px',
            }}
            level={6}
        >
            {position && (
                <MapMarker
                    position={{
                        ...position,
                    }}
                />
            )}
        </Map>
    );
};

export default LocationService;
