import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CountryDetails = () => {
    const data = useLoaderData()
    const country = data[0];
    console.log(country);
    return (
        <section className='py-12'>
            <div className='border py-12 mx-1 md:mx-12'>
                <div className='grid grid-cols-1 gap-3 py-6'>
                    <div className='mx-auto my-3 md:my-0'>
                        <img src={country?.flags?.png} alt={country?.flags?.alt} className="h-44 w-64 md:h-72 md:w-96" />
                        <p className='mt-2 text-xl text-center'>Flag</p>
                    </div>
                </div>
                <div className='text-center my-4 text-xl border'>
                    <p>{country?.flags?.alt}</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                    <div className='mx-4 md:mx-auto'>
                        <p className='text-xl font-medium'>Official Name: <span className='text-md font-normal'>{country?.name?.official}</span></p>
                        <p className='text-xl font-medium'>Common Name: <span className='text-md font-normal'>{country?.name?.common}</span></p>
                        <p className='text-xl font-medium'>Capital: <span className='text-md font-normal'>{country?.capital[0]}</span></p>
                        <p className='text-xl font-medium'>Population: <span className='text-md font-normal'>{country?.population}</span></p>
                    </div>
                    <div className='mx-4 md:mx-auto'>
                        <p className='text-xl font-medium'>Country Area: <span className='text-md font-normal'>{country?.area}</span></p>
                        <p className='text-xl font-medium'>Region: <span className='text-md font-normal'>{country?.region}</span></p>
                        <p className='text-xl font-medium'>Start of week: <span className='text-md font-normal'>{country?.startOfWeek}</span></p>
                        <p className='text-xl font-medium'>Time Zone: <span className='text-md font-normal'>{country?.timezones[0]}</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CountryDetails;