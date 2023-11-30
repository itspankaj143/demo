/** @format */

import ellipse from '../../assets/images/Ellipse 90.png'
import image from '../../assets/images/pexels-andrea-piacquadio-789822-removebg-preview 1.png'

import bounce from '../../assets/images/bounce fox.png'

const DigitalSucess = () => {
	return (
		<>
			<div
				className='mt-20 containter  
						

				mx-auto w-[919px] h-[192px] font-dm font-[700] text-[#ed1c24] text-[52px]  text-left justify-center'
			>
				<h2>
					It’s not our business, but your digital success that matters to us.
				</h2>
			</div>
			<div className='w-[919px] flex justify-center h-[374.71px] items-start  mx-auto space-x-5'>
				<div className='flex justify-between items-start space-y-10 flex-col '>
					<p className='w-[400.5px] h-[280px] text-[22px] text-[#000] font-dm font-[400]'>
						Get in touch with our customer support team to fix an appointment
						with us. Meet us to brief about your requirements, expectations,
						desired results, and development patterns to ensure that we deliver
						exactly what you’ve dreamt about.
					</p>
					<h4 className='w-[391px] h-[23px] text-[#000] font-dm text-[20px] font-[500]'>
						We Love Replying to Mails and Messages!
					</h4>
					<img src={bounce} alt='' />
					<button className='hover:bg-[#ed1c24] hover:text-[white] w-[315px] h-[52px] rounded-[22px] border-[1.5px] border-[#ed1c24] text-[#ed1c24] text-[20px] font-dm font-[400]'>
						Get in touch
					</button>
				</div>
				<div className='relative  h-[100%] w-[100%] flex justify-center items-center'>
					<img src={ellipse} className='absolute bottom-7 -z-10 ' alt='' />
					<img src={image} className='w-[283.567px] h-[276.713px]' alt='' />
				</div>
			</div>
		</>
	)
}

export default DigitalSucess
