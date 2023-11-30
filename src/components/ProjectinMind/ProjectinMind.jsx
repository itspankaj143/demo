/** @format */

// import React from 'react'
import ecllipse from '../../assets/images/Ellipse 133.png'
import istochphot from '../../assets/images/istockphoto-1336011452-1024x1024-transformed-removebg-preview 1.png'
import calender from '../../assets/images/Component 46.png'

const ProjectinMind = () => {
	return (
		<>
			<div className='container max-w-[500px] mx-auto mt-[15rem]'>
				<h2 className='w-[613px] text-[#ed1c24] text-[52px] font-[700]'>
					Have a project in mind?
				</h2>
				<p className='text-center w=[390px] mt-4 h-[35px] text-[#000] font-dm text-[32px] font-[500]'>
					Book a call with our team{' '}
				</p>
				<p className='w-[442px] h-[57px] text-[#000] font-dm text-[22px] font-[400] mx-11 mt-8'>
					Schedule a 30 min consultation to discuss how we can help you grow
					your business .
				</p>
			</div>
			<div className='container flex mt-[5rem] justify-start items-center max-w-[90%] mx-auto '>
				<div className='relative  h-[50%] w-[40%] mx-auto flex justify-center items-center'>
					<img
						src={ecllipse}
						className='ml-[7rem] absolute bottom-7 -z-10 '
						alt=''
					/>
					<img
						src={istochphot}
						className='mb-20 ml-24  w-[326px] h-[273px]'
						alt=''
					/>
				</div>
				<div className='mr-20 '>
					<img
						src={calender}
						className='-mt-[19px] mr-[8rem] w-[512px] h-[355.556px]'
						alt=''
					/>
				</div>
			</div>
		</>
	)
}

export default ProjectinMind
