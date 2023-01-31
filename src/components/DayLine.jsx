import WeatherGeneralDetail from "./WeatherGeneralDetail";

const DayLine = () => {

    return (
        <div style={{
            width: "100%",
            height: "40%",
            backgroundColor: "#9ccae7",
            display: "flex",
            alignItems: "flex-start",
            borderRadius: 14,
            marginTop: 10,
            flexDirection:'column'
        }}>
            <svg viewBox="0 0 120 40" style={{ marginTop: -40,marginLeft:60 }}>
                <path d="M 50,50 m -52,0 a 52,42 0 0 1 100,0" stroke="white" strokeWidth="1" fill="none" />
            </svg>
            <div style={{justifyContent:'space-between', display:'flex'}}>
            <div style={{ display: 'flex', flexDirection: 'column',paddingLeft:70 }}>
                <span className="sunrisesunset">Gündoğumu</span>
                <span className="sunrisesunset">05:40</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column',paddingLeft:60 }}>
                <span className="sunrisesunset">Günbatımı</span>
                <span className="sunrisesunset">17:45</span>
            </div>
            </div>
            <WeatherGeneralDetail/>
        </div>

    )


};

export default DayLine;