import React from 'react';
import styled from 'styled-components';

const Detailcontainer = styled.div`
display:flex;
align-content:center;
flex-direction: column;
flex-wrap: wrap;
margin-top: 1rem;
`;
const Li = styled.li`
display:flex;
align-content:center;
align-items: center;
flex-wrap: wrap;
justify-content: center;
margin: 1rem 0;
border-radius: 10px;
width:80%;
height: 10vh;
background-color:  ${props => props.setColor ? props.setColor : "white"};
color: ${props => props.setColor!=="white" ? "white" : "black"};
border-color: ${props => props.setColor!=="white" ? props.setColor : "black"};
border: 1px solid;

font-family: Montserrat;
  font-size:1rem;
  font-weight: bold;
`;
const AiqiDetails = (props) => {
    let cityDetails= {};
  if(props.dinfo.iaqi){
    cityDetails = props.dinfo.iaqi;
  }
    const names = {
        'pm25': "particulate matter 2.5(pm 2.5)",
        'pm10': "particulate matter 10(pm 10)",
        'o3': "Ozone",
        'no2': "Nitrogen Dioxide",
        'so2': "Sulphur Dioxide",
        'co': "Carbon Monoxyde",
        't': "Temperature",
        'w': "Wind",
        'r': "Rain (precipitation)",
        'h': "Relative Humidity",
        'd': "Dew",
        'p': "Atmostpheric Pressure"
    }
    const getSpectrum = (iaqi) => {
        
        let ret = [];
        Object.entries(iaqi).map(function(item) {
            let obj = {};
            let key = names[item[0]] ? names[item[0]] : item[0];
            obj['key'] = key;
            obj['value'] = item[1].v;
            ret.push(obj);
        });
        return ret;
    }

    const colorize = (name, value) => {
        if ([
            'particulate matter 2.5(pm 2.5)', 
            'particulate matter 10(pm 10)',
            'Ozone',
            'Nitrogen Dioxide',
            'Sulphur Dioxide',
            'Carbon Monoxide'].indexOf(name) < 0) {
                return 'white';
            }
        if (value >= 0 && value <= 50) {
            return 'green';
        } else if (value >= 51 && value <= 100) {
            return 'yellow';
        } else if (value >= 101 && value <= 150) {
            return 'orange';
        } else if (value >= 151 && value <= 200) {
            return 'red';
        } else if (value >= 201 && value <= 300) {
            return 'purple';
        } else if (value >= 301) {
            return 'maroon';
        }
    }

    

    return(
        <Detailcontainer>
        
        {
                            getSpectrum(cityDetails).map((spectrum, i) => (
                                <Li key={i} setColor =  {colorize(spectrum.key, spectrum.value)}>
                                    
                                    <span>{spectrum.key}</span>: <span>{spectrum.value}</span>
                                   
                                    
                                </Li>
                            ))
                        }
                        {/* {
                            getSpectrum(cityDetails).map((spectrum, i) => (
                                <Li key={i}>
                                    <div setColor =  className={`dot ${colorize(spectrum.key, spectrum.value)}`}></div>
                                    <span>{spectrum.key}</span>: <span>{spectrum.value}</span>
                                </Li>
                            ))
                        } */}
                    
           

        </Detailcontainer>
    );
}
export default AiqiDetails;