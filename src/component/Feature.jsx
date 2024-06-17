import React from 'react'
import AcquisitionCard from './AcquisitionCard'

const Feature = () => {
  return (
    <div className='flex items-center justify-center flex-col mt-10'>
      <h2 className='text-3xl font-bold text-black'>Our AR Capabilities</h2>
      <h4 className='text -center text-md font-medium'>Transforming Vision into Reality</h4>
      <div className='flex flex-wrap gap-9 justify-center items-center mt-5'>
			<AcquisitionCard  title={'Immersive Experiences'} content={'Engage users with rich, interactive AR experiences that bring the digital and physical worlds together seamlessly.'} />
			<AcquisitionCard title={'Easy Integration'} content={'Our AR technology is easy to integrate into your existing systems, providing a hassle-free setup process.'} />
			<AcquisitionCard title={'Cross-Platform Compatibility'} content={'Enjoy AR experiences on a variety of devices, from smartphones to AR glasses, ensuring accessibility for all users.'} />
			<AcquisitionCard title={'Real-Time Interaction'} content={'Experience real-time interactions and responses, making your AR applications more dynamic and engaging.'}/>
			<AcquisitionCard title={'Advanced Analytics'} content={'Gain insights with our advanced analytics tools that track user  interaction, helping you optimize AR for better performance'}/>
	  </div>
    </div>
  )
}

export default Feature
