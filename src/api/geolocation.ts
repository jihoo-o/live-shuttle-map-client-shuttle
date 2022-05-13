export const getCurrentPosition = (onUpdate?: any) => {
    return new Promise((resolve, reject) => {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(resolve, reject, {
                timeout: 5000,
                maximumAge: 0,
                enableHighAccuracy: true,
            });
        } else {
            reject();
        }
    })
        .then((position: any) => {
            onUpdate && onUpdate();
            return {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            };
        })
        .catch((error) => {
            throw new Error(error);
        });
};

export const watchPosition = () => {};
