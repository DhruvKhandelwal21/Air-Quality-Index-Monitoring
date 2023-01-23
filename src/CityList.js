import React from 'react';
import ShowCity from './ShowCity';
import styled from 'styled-components';
const ListContainer = styled.div`
display:flex;
align-items: center;
flex-direction: column;
justify-content: center;
width:100%;
padding-top: 1rem;
margin:auto;
`
const List = styled.li`
display:flex;

align-items: center;
justify-content: center;
margin: 1rem 0;

`;
// import './CityStyles.css';
// import CityStyles from './Citystyles.css';


const CityList = (props) =>{
  let cityData = [];
  if(props.cinfo){
    cityData = props.cinfo;
  }

  
    // if(props.cinfo.length===0){
    //     return <h2>Found no data!!</h2>
    // }
   
    
    return (
      <ListContainer>
          
          {
          cityData.map((data) => (
          <List>
            <ShowCity 
            aqi = {data.aqi}
            placeName = {data.station.name}
            atTime = {data.time.stime}
            uid = {data.uid}
           
           />
          </List>
            
        
        ))
        }
       
      </ListContainer>
     
      );
    };



export default CityList;