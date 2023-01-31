import React from 'react'
import { weatherdata } from '../data/weatherdata'

const WeatherGeneralDetail = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', }}>
    <div style={{ textAlign: 'center', margin: 4, }}>
        <p>Hissedilen Sıcaklık</p>
        <p className="textstyle">{weatherdata.temperature}</p>
    </div>
    <div style={{ textAlign: 'center', margin: 4,paddingLeft:10 }}>
        <p>Nem Drumu</p>
        <p className="textstyle">{weatherdata.moisture}</p>
    </div>
    <div style={{ textAlign: 'center', margin: 4,paddingLeft:10 }}>
        <p>Yağmur Durumu</p>
        <p className="textstyle">{weatherdata.rain}</p>
    </div>
    <div style={{ textAlign: 'center', margin: 4,paddingLeft:10 }}>
        <p>Rüzgar Hızı</p>
        <p className="textstyle">{weatherdata.wind}</p>
    </div>
</div>
  )
}

export default WeatherGeneralDetail
