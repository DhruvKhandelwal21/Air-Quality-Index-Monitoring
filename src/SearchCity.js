import React from 'react';
// import Axios from 'axios';
import styled from 'styled-components';
import {useState} from 'react';
 import { TOKEN, SEARCH_CITIES_BASE_URL } from './AqiConst';
 import {AQIAPI} from './AQIAPI';
 
 const Container = styled.div`
 display:flex;
 flex-direction: column;
 width:100%;
 align-items: center;
 justify-content: center;
 
 `;
 const Span = styled.p`
 text-align: center;
 font-family: Montserrat;
 font-size:1.5rem;
 font-weight: bold;
 margin-top:1rem;
  `;
  const Fcontainer= styled.div`
  width:100%;
  display: flex;
  justify-content: center;
  `;
  const Input = styled.input`
    border-radius: 4px;
    width:18%;
  `;
  const Button = styled.button`
    padding: 0.5rem;
    border-radius: 4px;
    margin-left:10px;
    cursor:pointer;
  `;

const SearchCity = () =>{
 
  const [url,seturl] = useState('');
  const [city,setcity] = useState('');
  const [cityIsValid,setcityIsValid] = useState(false);
  const [cityIsTouched,setCityIsTouched] = useState(false);
  const [bclicked,setBclicked] = useState(false);
  const searchTextHandler = (event) =>{
       setcity(event.target.value);
 }
  const searchCityHandler = (event) =>{
    setCityIsTouched(true);
    if(city.trim().length===0){
      return;
    }
    setcityIsValid(true);
    setBclicked(true);
    event.preventDefault();
    seturl(`${SEARCH_CITIES_BASE_URL}?token=${TOKEN}&keyword=${city}`);
    setcity('');
    
  }
  console.log(cityIsValid)
  const cityInputIsInvalid = !cityIsValid&&cityIsTouched;
  // const cityInputClasses = cityInputIsInvalid
  //   ? 'form-control invalid'
  //   : 'form-control';

    return(
    <Container>
      <Span>Know Air Quality Index(AQI)</Span>
       
         <Fcontainer>
          
            <Input
            type="text"
            autoComplete='off'
            value={city}
             placeholder = "enter city name"
             onChange={searchTextHandler}
            
             />
         
      
        <Button type="submit" onClick={searchCityHandler}>
           GO
        </Button>
      
       </Fcontainer>
       {/* {cityInputIsInvalid && (
           
           <p>Name must not be empty.</p>
         )} */}
       <AQIAPI clicked = {bclicked} udl = {url} />
        
           
       
    </Container>
  );
}
export default SearchCity;
















// import React from 'react';
// import {useState} from 'react';
// import { TOKEN, SEARCH_CITIES_BASE_URL } from './AqiConst';
// import {AQIAPI} from './AQIAPI';
// import Axios from'axios';

// const SearchCity = () => {
//   const [url,setUrl] = useState('');
//   const [searchCity,setSearchCity] = useState('');
//   const[] = AQIAPI(url);

//   const searchHandleText = (event) => {
//   //  event.preventDefault();
//    setSearchCity(event.target.value);
//    console.log(searchCity);
//   }
//   const searchCityName = (event) => {
//     event.preventDefault();
//     setUrl(`${SEARCH_CITIES_BASE_URL}?token=${TOKEN}&keyword=${searchCity}`);
//   }
//   //  const AirQuality = () => {
//   //   Axios.get(url).then((response) =>{
//   //     console.log(response);
//   //   }
//   //   );
//   //  }
//   return(
//     <div>
//        <form onSubmit={searchCityName}>
//          <div>
//          <label>
//           <input>
//             type="text"
//              value={searchCity}
//              placeholder = "enter city name"
//              onChange={searchHandleText}
//           </input>
//           </label>
//           </div>
//           <div>
//           {/* <button onClick={AirQuality}>go</button> */}
//           </div>
//        </form>

//        <AQIAPI  
//           url = {url}
       
//        />

     
//     </div>
//   );
// }
// export default SearchCity;