import React from 'react'

const getCarDetails = async (carId: string) => {
    const response = await fetch(`https://api.staging.myautochek.com/v1/inventory/car/${carId}`);

    if(!response.ok) {
        throw new Error('Getting car details failed');
    }
    return await response.json();
}

export default getCarDetails