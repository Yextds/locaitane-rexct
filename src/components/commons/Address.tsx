import * as React from "react";
import Mapicon from "../../images/pin.svg";

const Address = (props: any) => {
  const { address } = props;
  return (
    <>
      <div className="flex flex-wrap"><span className="address-pin mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21.23"
          height="30"
          viewBox="0 0 21.23 30"
        >
          <g transform="translate(0 0)">
            <path
              d="M6.789,23.576c1.079,1.719,2.246,3.8,3.4,5.825.427.747.813.859,1.326-.027,1.113-1.931,2.207-3.931,3.359-5.8,3.5-5.661,9.223-11.181,4.67-18.8C15.5-1.987,4.5-1.265,1.216,5.034c-3.769,7.219,2.117,13.039,5.574,18.542Z"
              fill="#001022"
            // fill-rule="evenodd"
            />
            <path
              d="M10.61,6.247a4.116,4.116,0,1,1-4.116,4.116A4.117,4.117,0,0,1,10.61,6.247Z"
              fill="#fff"
            // fill-rule="evenodd"
            />
          </g>
        </svg>
        </span><div><div>{address.line1}</div>
        {address.line2 && (<div>{address.line2}</div>)}
        <div>{address.city}, {address.region} {address.postalCode}</div>
        <div>{address.countryCode}</div></div>
      </div>
    </>
  );
};

export default Address;
