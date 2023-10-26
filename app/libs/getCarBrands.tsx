import React from 'react'

const getCarBrands = async () => {
    const response = await fetch('https://api.staging.myautochek.com/v1/inventory/make?popular=true');

    if(!response.ok) {
        throw new Error('Getting car brands failed');
    }
    return await response.json();
}

export default getCarBrands