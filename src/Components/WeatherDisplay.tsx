import React from "react";
import {TiWeatherPartlySunny} from "react-icons/ti"
import {
     WeatherDisplayContainer,
     Text,SpanEl,TempContainer,
     TempWrapper,ForecastContainer,
     FeatureContainer,
     FeatureWrapper,
     HrLine 
    } from "../styles";
import { Report } from "../models";

interface props{
    details:Report;
    city:string;
}

const WeatherDisplay:React.FC<props> = ({details,city})=>{
    let time:Date = new Date()
    return(
        <WeatherDisplayContainer>
            <TempContainer>
                <Text className="city">{city.toUpperCase()}, IN. Weather</Text>
                <SpanEl >As of {time.toString()}</SpanEl>
                <TempWrapper>
                    <SpanEl className="temperature">{details.temp}<sup>o</sup></SpanEl>
                    <TiWeatherPartlySunny fontSize={'32px'}/>
                </TempWrapper>
            </TempContainer>
            <ForecastContainer>
                {
                    Object.entries(details).map(([key,value]) => {
                        let feature : string = ''
                        let featureValue : string = ''
                        switch(key){
                            case 'cloud_pct':
                                feature = 'Cloud PCT';
                                featureValue = value+' mm';
                                break;
                            case 'temp':
                                feature = 'Temperature';
                                featureValue = value+' C';
                                break;
                            case 'feels_like':
                                feature = 'Feels Like';
                                featureValue = value+' C';
                                break;
                            case 'humidity':
                                feature = 'Humidity';
                                featureValue = value+' %';
                                break;
                            case 'min_temp':
                                feature = 'Min Temperature';
                                featureValue = value+' C';
                                break;
                            case 'max_temp':
                                feature = 'Max Temperature';
                                featureValue = value+' C';
                                break;
                            case 'wind_speed':
                                feature = 'Wind';
                                featureValue = value+' km/hr';
                                break;
                            case 'wind_degrees':
                                feature = 'Wind Direction';
                                featureValue = value+' deg';
                                break;
                            case 'sunrise':
                                feature = 'Sunrise';
                                featureValue = new Date(value).getHours().toString()+':'+new Date(value).getMinutes().toString()+":"+new Date(value).getSeconds().toString();
                                break;
                            case 'sunset':
                                feature = 'Sunset';
                                featureValue = new Date(value).getHours().toString()+':'+new Date(value).getMinutes().toString()+":"+new Date(value).getSeconds().toString();
                                break;
                            default:
                                break;
                        }
                        return <>
                            <FeatureContainer>
                                <FeatureWrapper>
                                    <Text className="feature">{feature}</Text>
                                    <Text className="value">{featureValue}</Text>
                                </FeatureWrapper>
                                <HrLine/>
                            </FeatureContainer>
                        </>
                    })
                }
            </ForecastContainer>
        </WeatherDisplayContainer>
    )
}

export default WeatherDisplay