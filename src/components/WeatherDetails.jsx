import leaf from '../assest/leaf.png'
import nem from '../assest/nem.png'
import wind from '../assest/wind.png'


const WeatherDetails = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={nem} alt='nem' style={{ width: 20 }} />
                <span>80%</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: 30, marginLeft: 30 }}>
                <img src={leaf} alt='leaf' style={{ width: 20 }} />
                <span>AQI 20</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={wind} alt='wind' style={{ width: 20 }} />
                <span>10km/s</span>
            </div>
        </div>
    )
}

export default WeatherDetails
