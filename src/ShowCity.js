import React from 'react';
import {useState,useEffect} from 'react';
import moment from 'moment';
// import  './Citystyles.css';
import CityDetails from './CityDetails';
import styled from 'styled-components';

const Outcontainer = styled.div`
  display:flex;
  flex-direction: column;
`
const Mcontainer = styled.div`
  display:flex;
  text-align: center;
  justify-content: center;
  margin: 0 auto;
  width:70vw;
  border-radius: 10px;
  cursor: pointer;
  background-color:  ${props => props.setColor.bcg ? props.setColor.bcg : "white"};
   color: ${props => props.setColor.cg ? props.setColor.cg : "white"};
   border-color: ${props => props.setColor.bc ? props.setColor.bc : "white"};
   border: 1px solid;
`;

const Details = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;

  font-family: Montserrat;
  font-size:1rem;
  font-weight: bold;
`;



const ShowCity = (props) => {  
    
    const [showDetails, setShowDetails] = useState(false);
  
    
    const getCategorizedAQI = (aqi) => {
    
      let className = 'unknown';
      let impact = 'Unknown';
      let bcg = 'white';
      let cg = 'black';
      let bc = 'white';

      if (aqi >= 0 && aqi <= 50) {
        impact = 'Good';
        className = 'good';
        bcg = 'green';
        cg = 'black';
        bc = 'green';
    } else if (aqi >= 51 && aqi <= 100) {
        impact = 'Moderate';
        className = 'moderate';
        bcg = 'yellow';
        cg = 'black';
        bc = 'yellow';
    } else if (aqi >= 101 && aqi <= 150) {
        impact = 'Unhealthy for Sensitive Groups';
        className = 'unhealthy-sensitive';
        bcg = 'orange';
        cg = 'white';
        bc = 'orange';
    } else if (aqi >= 151 && aqi <= 200) {
        impact = 'Unhealthy';
        className = 'unhealthy';
        bcg = 'red';
        cg = 'white';
        bc = 'red';
    } else if (aqi >= 201 && aqi <= 300) {
        impact = 'Very Unhealthy';
        className = 'very-unhealthy';
        bcg = 'purple';
        cg = 'white';
        bc = 'purple';
    } else if (aqi >= 301) {
        impact = 'Hazardous';
        className = 'hazardous';
        bcg = 'maroon';
        cg = 'white';
        bc = 'maroon';
    }
      
      let catagorized = {};
      catagorized['impact'] = impact;
      catagorized['className'] = className;
      catagorized['bcg'] = bcg;
      catagorized['cg'] = cg;
      catagorized['bc'] = bc;
      

      return catagorized;
  };

    const getAtTimeFormatted = time => {
        return moment(time).format('h:mm:ss a');
    }
    
    
    useEffect(() => {
      setShowDetails(false);
   }, [props])
   

    return(
      
      <Outcontainer>
       <Mcontainer
    onClick = {()=>{setShowDetails(!showDetails)}}
    setColor = {getCategorizedAQI(props.aqi)}
    >
      
        <Details>
        <p>At { getAtTimeFormatted(props.atTime) }: { props.placeName } - { props.aqi }</p>
        <p>{ getCategorizedAQI(props.aqi).impact }</p>
        
        
        </Details>
      
</Mcontainer>
{showDetails && <CityDetails id={ props.uid } /> }
    
      </Outcontainer>
    );
}
export default ShowCity;
