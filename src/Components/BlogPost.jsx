import React, { useState } from 'react';


function Weathers() {
    const [city, setCity] = useState('');
    const [wdetails, setWdetails] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const getdata = async (event) => {
        event.preventDefault();
        
        if (!city) {
            setError('Please enter a city name.');
            return;
        }

        setIsLoading(true);
        setError(''); // Reset any previous error message

        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`
            );
            const finalres = await response.json();
            console.log(finalres)

            if (finalres.cod === '404') {
                setWdetails(undefined);
                setError('City not found. Please check the name and try again.');
            } else {
                setWdetails(finalres);
                setError('');
            }
        } catch (error) {
            setError('Failed to fetch weather data. Please try again later.');
        } finally {
            setIsLoading(false);
        }

        setCity('');
    };

    return (
        <div className='Apps9'>
            <div className='Apps10'>
             
                <h1>Simple Weather App</h1>

                <form onSubmit={getdata}>
                    <br />
                    <input
                        type='text'
                        className='inputs'
                        placeholder='City Name'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button className='btns7' disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Submit'}
                    </button>

                    <div className='div1'>
                        {error && <p style={{ color: 'red' }}>{error}</p>}

                        {wdetails !== undefined ? (
                            <>
                                <h3>
                                    {wdetails.name} <span>{wdetails.sys.country}</span>
                                </h3>
                                <h2>{wdetails.main.temp}°C</h2>
                                <img
                                    src={`http://openweathermap.org/img/w/${wdetails.weather[0].icon}.png`}
                                    alt='weather icon'
                                />
                                <p>{wdetails.weather[0].description}</p>
                            </>
                        ) : (
                            !isLoading && "No Data"
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Weathers;
