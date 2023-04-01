import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ country }) => {
    const alt = country?.flags?.alt;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-4">
            <figure><img src={country?.flags?.png} alt="Shoes" className='h-44 w-64' /></figure>
            <div className="card-body">
                <h2 className="card-title">{country?.name?.common}</h2>
                <p>{alt?.length > 100 ? alt.slice(0, 100) : alt}</p>
                <div className="card-actions justify-end">

                    <Link to={`/countryDetails/${country?.name?.common}`}>
                        <button className="btn btn-sm btn-primary">Details</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Card;