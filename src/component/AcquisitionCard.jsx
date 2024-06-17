import React from 'react';

const AcquisitionCard = ({title,content}) => {
  return (
    <a 
      href="#" 
      className="block max-w-sm p-6 bg-white border border-gray-200 shadow-xl rounded-lg  hover:bg-blue-100"
    >
      	<h5 className="mb-2 text-1xl font-bold tracking-tight text-black">
      		{title}
      	</h5>
      	<p className="font-normal text-gray-500">
	  		{content}  
		</p> 
		</a>
  );
}

export default AcquisitionCard;
