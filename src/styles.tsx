import styled from "styled-components"

//App
export const Container = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
  `
export const Title = styled.h1`
`
export const Status = styled.h2`
`

//InputField
export const FormContainer = styled.form`
    width:80%;
    display:flex;
    justify-content:center;
`
export const InputEl = styled.input`
    width:250px;
    height:30px;
    margin:24px;
    border:none;
    border-bottom:2px solid #808080;
`
export const Button = styled.button`
    width:150px;
    height:50px;
    background:#1755a6;
    border:none;
    border-radius:8px;
    color:white;
    font-size:16px;
    margin:8px 24px;
    transition:0.8s;
    &:hover{
        cursor:pointer;
        transform:scale(1.1);
        transition:0.8s;
    }
`

//WeatherField
export const WeatherDisplayContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
export const Text = styled.p`
    line-height:0;
    &.city{
        font-size:24px;
        font-weight:bold;
    }
    &.feature{
        font-size:16px;
        font-weight:bold;
    }
    &.value{
        font-size:16px;
    }
`
export const SpanEl = styled.span`
    font-size : 12px;
    &.temperature{
        font-size:52px;
        margin-left:50%;
        font-weight:bold;
        margin-right:12px;
        morgin-bottom:24px;
    }
`
export const TempContainer = styled.div`
    width:40%;
    height: 30%;
    margin-top:24px;
    padding:16px;
    display:flex;
    flex-direction:column;
    box-shadow:0px 0px 8px 0px #808080;
    border-radius:8px
`
export const TempWrapper = styled.div`
    display : flex;
    justify-content:center;
    align-items:center;
`
export const ForecastContainer = styled.ul`
    width:60%;
    list-style-type:none;
    display:flex;
    flex-wrap:wrap;
`
export const FeatureContainer = styled.li`
    display:flex;
    flex-direction:column;
    width:250px;
    margin:24px;
`
export const FeatureWrapper = styled.div`
    display:flex;
    justify-content : space-between;
    width:90%;
    margin-left:5%;
`
export const HrLine = styled.hr`
    width:100%;
`