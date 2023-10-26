import React from 'react'

const getAllCarListings = async () => {
    const response = await fetch(`https://api.staging.myautochek.com/v1/inventory/car/search?pageSize=1500`);

    if(!response.ok) {
        throw new Error('Getting car details failed');
    }
    return await response.json();
}

export default getAllCarListings;

