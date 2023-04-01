import React, { useContext, useState } from 'react';
import { DataContext } from '../../App';
import Card from '../../components/card/Card';

const Home = () => {
    const { countries } = useContext(DataContext)
    const [pageNumber, setPageNumber] = useState(1)
    const dataShow = 12;
    const initData = countries.slice(0, dataShow)
    const length = countries?.length;
    const pages = Math.ceil(length / dataShow);
    const [limitCountries, setLimitCountries] = useState([])
    // console.log(countries);

    // console.log(pages);

    const previousHandle = () => {
        const currentPage = pageNumber - 1;


        if (currentPage > 0) {
            setPageNumber(currentPage)
            const endIndex = currentPage * dataShow;
            const startIndex = endIndex - dataShow;
            const data = countries.slice(startIndex, endIndex)
            setLimitCountries(data)
            // console.log(startIndex, " - ", endIndex);
        } else {
            return
        }
    }

    const nextHandle = () => {
        const currentPage = pageNumber + 1;
        if (currentPage <= pages) {
            setPageNumber(currentPage)
            const endIndex = currentPage * dataShow;
            if (endIndex > length) {
                const startIndex = endIndex - dataShow;
                const data = countries.slice(startIndex, length)
                setLimitCountries(data)
                // console.log(startIndex, " - ", length);
            } else {
                const startIndex = endIndex - dataShow;
                const data = countries.slice(startIndex, endIndex)
                setLimitCountries(data)
                // console.log(startIndex, " - ", endIndex);
            }
        } else {
            return
        }
    }

    return (
        <section>
            <h1 className='text-center text-2xl'>This is Home page in Post Shop project</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-3 mx-2 md:mx-4 py-8 md:py-12'>
                {
                    !limitCountries.length ?
                        countries.slice(0, 12).map(country => {
                            return <Card
                                key={country?.name?.common}
                                country={country}
                            >
                            </Card>
                        })
                        :
                        limitCountries.map(country => {
                            return <Card
                                key={country?.name?.common}
                                country={country}
                            >
                            </Card>
                        })

                }
            </div>
            <div className='flex justify-center items-center my-8'>
                <div className="btn-group">
                    <button onClick={previousHandle} className="btn">«</button>
                    <button className="btn">Page <span className='mx-2'>{pageNumber}</span>/<span className='mx-2'>{pages}</span></button>
                    <button onClick={nextHandle} className="btn">»</button>
                </div>
            </div>
        </section>
    );
};

export default Home;