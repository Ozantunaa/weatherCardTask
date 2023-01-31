import { weatherdata } from '../data/weatherdata';
import weatherimage from '../assest/partly_cloudy.png'

const WeatherCard = () => {
    return (
        <div className='card'>
            <span className='date'>{weatherdata.date}</span>
            <div className='degree'>
                <span className='weathernum'>{weatherdata.degree}</span>
                <span style={{ fontSize: '20px', paddingBottom: '50px', }}>°C</span>
                <div style={{ flexDirection: 'column', display: 'flex', alignItems: 'center' }}>
                    <img className='weatherimage' src={weatherimage} />
                    <span>{weatherdata.weatherstatus}</span>
                </div>
            </div>
        </div>

    )
}

export default WeatherCard
