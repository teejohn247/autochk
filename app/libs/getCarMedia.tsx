import React from 'react'

const getCarMedia = async (carId: string) => {
    const response = await fetch(`https://api.staging.myautochek.com/v1/inventory/car_media?carId=${carId}`);

    if(!response.ok) {
        throw new Error('Getting car media failed');
    }
    return await response.json();
}

export default getCarMedia