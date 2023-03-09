import React,{useState} from "react"
import { FormContainer,InputEl,Button } from "../styles";

interface props {
    getWeatherReports:(city:string)=>void;
}

const InputField:React.FC<props> = ({getWeatherReports})=>{

    const [city,setCity] = useState<string>('')
    const [country,setCountry] = useState<string>('')

    
    const onFormSubmit = (e:React.FormEvent)=>{
        e.preventDefault()
        getWeatherReports(city)
    }

    return(
        <FormContainer onSubmit={onFormSubmit}>
            <InputEl placeholder="CITY" value={city} onChange={(e)=>{setCity(e.target.value)}}/>
            <InputEl placeholder="COUNTRY" value={country} onChange={(e)=>setCountry(e.target.value)}/>
            <Button>Submit</Button>
        </FormContainer>
    )
}

export default InputField