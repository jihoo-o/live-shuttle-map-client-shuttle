import { getCurrentPosition, watchPosition } from 'api/geolocation';
import useInterval from 'hooks/useInterval';
import React, { useCallback, useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

interface LocationServiceProps {
    gettingPosition: boolean;
    watchingPosition: boolean;
}

interface Position {
    lat: number;
    lng: number;
}

const LocationService = ({
    gettingPosition,
    watchingPosition,
}: LocationServiceProps) => {
    const [position, setPosition] = useState<Position | null>(null);

    const postCurrentPosition = useCallback(async () => {
        const newPosition = await getCurrentPosition();
        // POST는 최초 한번만, 이후에는 PUT요청
        console.log(newPosition);
        setPosition(newPosition);
    }, []);

    const postWatchingPosition = useCallback(async () => {
        const { id, lat, lng } = await watchPosition();
        // POST는 최초 한번만, 이후에는 PUT요청
        console.log({ lat, lng });
        setPosition({ lat, lng });
        return id;
    }, []);

    useInterval({
        callback: postCurrentPosition,
        delay: gettingPosition ? 3000 : null,
    });

    useEffect(() => {
        if (watchingPosition) {
            const id = postWatchingPosition();
            return () => {
                id.then((id) => {
                    navigator.geolocation.clearWatch(id);
                });
            };
        }
    }, [watchingPosition]);

    useEffect(() => {
        if (!gettingPosition && !watchingPosition) {
            setPosition(null);
        }
    }, [gettingPosition, watchingPosition]);

    return (
        <Map
            draggable={false}
            zoomable={false}
            scrollwheel={false}
            disableDoubleClick={true}
            disableDoubleClickZoom={true}
            center={{
                lat: 35.267342474237104,
                lng: 129.08901354232913,
            }}
            style={{
                width: '100%',
                height: '70%',
                maxHeight: '350px',
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
