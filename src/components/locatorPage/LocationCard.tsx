import * as React from "react";
import { useEffect, useRef, useState } from 'react';
import { CardComponent } from "@yext/search-ui-react";
import { Location } from "..//../types/search/locations";
import Hours from '..//../components/commons/hours';
import Address from "..//../components/commons/Address";
import phonePin from "..//../images/phone.svg";
import index from "..//../images/store_pin.webp";
import { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input';
import OpenCloseStatus from "..//../components/commons/OpenCloseStatus";

const metersToMiles = (meters: number) => {
  const miles = meters * 0.000621371;
  return miles.toFixed(2);
}



const LocationCard: CardComponent<Location> = ({ result }) => {
  const { address, hours, mainPhone, timezone} = result.rawData;
  const formattedPhone = formatPhoneNumber(mainPhone);

  const [timeStatus, setTimeStatus] = useState("");
  const onOpenHide  = () => { 
    if(timeStatus == ""){
      setTimeStatus("active"); 
    }else{
      setTimeStatus("");
    }
  }

  return (
    <div className="p-4 bg-white"> 
     
     <div className="flex flex-wrap mr-4"><span><img src={index}/> </span> <h1 className="text-black ml-4">{result.rawData.name}</h1></div>
      {/* <p className="text-sm text-slate-700">{address.line1}</p>
      <p className="text-sm text-slate-700">{address.city}, {address.region}, {address.postalCode} </p> */}
      <Address address={address} />
      <p className="flex flex-wrap"><span className="phone-pin mr-2"><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23.987"
                      height="23.987"
                      viewBox="0 0 23.987 23.987"
                    >
                      <path
                        d="M19.64,17.328c-.617,1.876-3.036,2.812-4.764,2.656A15.194,15.194,0,0,1,8,17.14,22.652,22.652,0,0,1,.885,8.652C-.22,6.3-.468,3.411,1.176,1.268A2.827,2.827,0,0,1,3.429,0C4.8-.063,4.992.721,5.463,1.943c.351.913.819,1.845,1.08,2.792C7.032,6.5,5.321,6.575,5.105,8.019c-.133.911.969,2.132,1.468,2.781A13.473,13.473,0,0,0,10.051,14c.76.479,1.984,1.341,2.853.865,1.339-.733,1.213-2.991,3.084-2.227a30.12,30.12,0,0,1,2.833,1.463c1.431.769,1.364,1.567.819,3.223h0"
                        transform="translate(4.5) rotate(13)"
                        fill="#001022"
                        // fill-rule="evenodd"
                      />
                    </svg></span>{formattedPhone}</p>

      <div className="OpenCloseStatus" >
        <a  className={timeStatus} href="javascript:void(0);" onClick={onOpenHide}  ><OpenCloseStatus timezone={timezone} hours={hours}></OpenCloseStatus></a>
        <div className={timeStatus+" daylist"} ><Hours key={result.rawData.id} hours={hours} /></div>
      </div>      
      <p className="mt-2 text-sm italic text-slate-500">{metersToMiles(result.distance ?? 0)} mi</p>      
      <div className="grids is-2-col-minmax grid-pad-4">
        <div className="grid has-text-lefti ie-col-start-1">
          <a className="button primary-button w-100 px-i" data-type="get-direction" data-restaurantid="">Get Direction </a>
        </div>
        <div className="grid has-text-righti ie-col-start-2">
          <a className="button secondary-button w-100 px-i" href={`${result.rawData.slug}`}>View Details</a>
        </div>
      </div>
    </div >
  );
}

export default LocationCard;