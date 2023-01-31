import { weatherdata } from "../data/weatherdata"
import sun from '../assest/sun.png'

const BottomDetails = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between",marginLeft:-40 }}>
    {["CTS", "PZR", "PZT", "SALI", "ÇRŞ"].map((day) => (
      <div key={day} style={{ textAlign: "center", margin: 4, paddingLeft: 40, }}>
        <p className="daystyle">{day}</p>
        <p className="textstyle">{weatherdata.degree}°</p>
        <img className="sunimage" alt="sun" src={sun}/>
      </div>
    ))}
  </div>
    )
}

export default BottomDetails

