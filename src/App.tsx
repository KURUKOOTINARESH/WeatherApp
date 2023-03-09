import React,{useState} from 'react';
import axios from 'axios';
import InputField from "./Components/InputField";
import WeatherDisplay from "./Components/WeatherDisplay";
import { Oval } from 'react-loader-spinner'
import { Container,Title,Status } from './styles';
import { Report } from './models'; 

let cityName:string
const  App:React.FC = () =>{
  let [report,setReport] = useState<Report>()
  let [status,setStatus] = useState<string>('initial')
  
  const getWeatherReports=(city:string)=>{
    setStatus('loading')
    cityName = city
    const options = {
      method: 'GET',
      url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
      params: {city: `${city}`},
      headers: {
        'X-RapidAPI-Key': 'd3ac3f1f3dmsheb7dfd1ff90b4a9p15d9aajsna5fddc117ea0',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
      }
    };

    axios.request(options).then( (response)=> {
      setReport(response.data)
      setStatus('display')
    }).catch( (error) => {
      console.error(error);
      setStatus('error')
    });
  }

  const getComponent=(status:string)=>{
    switch(status){
      case 'initial':
        return <></>;
      case 'loading':
        return <Oval
            height={80}
            width={80}
            color="#1755a6"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor="#1755a6"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
      case 'error':
        return <Status>No Data found, Please enter valid city!</Status>
    }
  }

  return (
    <Container>
      <Title>Weather App</Title>
      <InputField getWeatherReports={getWeatherReports}/>
      {getComponent(status)}
      {report&&status==='display' && <WeatherDisplay details={report} city={cityName}/>}
      
    </Container>
  );
}

export default App;
