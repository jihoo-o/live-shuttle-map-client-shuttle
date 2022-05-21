import { getCurrentPosition, watchPosition } from 'api/geolocation';
import useInterval from 'hooks/useInterval';
import React, { useCallback, useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import axios from 'axios';
import { User } from 'App';

interface LocationServiceProps {
    user: User;
    gettingPosition: boolean;
    watchingPosition: boolean;
}

interface Position {
    lat: number;
    lng: number;
}

const LocationService = ({
    user,
    gettingPosition,
    watchingPosition,
}: LocationServiceProps) => {
    const [position, setPosition] = useState<Position | null>(null);

    const postCurrentPosition = useCallback(async () => {
        try {
            const newPosition = await getCurrentPosition();
            await axios.put(
                `https://2022bufscapstone.kr:8080/markers/shuttlebus/${user.id}`,
                {
                    busid: user.id,
                    lat: newPosition.lat,
                    lng: newPosition.lng,
                }
            );
            console.log(newPosition);
            setPosition(newPosition);
        } catch (e: any) {
            throw new Error(e);
        }
    }, []);

    const postWatchingPosition = useCallback(async () => {
        const { id, lat, lng } = await watchPosition();
        // PUT
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
                height: '100%',
                maxHeight: '350px',
                borderRadius: '7px',
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
