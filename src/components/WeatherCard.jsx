import { weatherdata } from '../data/weatherdata';
import weatherimage from '../assest/partly_cloudy.png'
import WeatherDetails from './WeatherDetails';
import DayLine from './DayLine';
import BottomDetails from './BottomDetails';

const WeatherCard = () => {
    return (
        <div className='card'>
            <span className='date'>{weatherdata.date}</span>
            <div className='degree'>
                <span className='weathernum'>{weatherdata.degree}</span>
                <span style={{ fontSize: '20px', paddingBottom: '50px', }}>°C</span>
                <div style={{ flexDirection: 'column', display: 'flex', alignItems: 'center' }}>
                    <img alt='weatherimage' className='weatherimage' src={weatherimage} />
                    <span className='statustyle'>{weatherdata.weatherstatus}</span>
                </div>
            </div>
                <WeatherDetails/>
                <DayLine/>
                <BottomDetails/>
        </div>

    )
}

export default WeatherCard
