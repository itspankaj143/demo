/** @format */

import ellipse from '../../assets/images/Ellipse 89.png'
import image from '../../assets/images/pexels-mikhail-nilov-6592693-removebg-preview 1.png'

const About = () => {
	return (
		<>
			<div className='containter mx-auto w-[775px] font-dm font-[700] text-[#ed1c24] text-[52px]  text-left justify-center'>
				<h2>
					Count on Us for World-Class
					<br /> Mobile & Web App Development{' '}
				</h2>
			</div>
			<div className='flex justify-center h-[374.71px] items-start  mx-auto w-[775px] space-x-5'>
				<div className='flex justify-between items-start space-y-10 flex-col '>
					<p className='w-[400.5px] h-[280px] text-[22px] text-[#000] font-dm font-[400]'>
						We are a full-time mobile and web application development company
						based in Pune, and have specialist competencies in offering deeply
						personalized technology solutions to contribute towards your brand’s
						growth and digital visibility. Holding rich industrial experience in
						technology solutions.
					</p>
					<button className='hover:bg-[#ed1c24] hover:text-[white] w-[196px] h-[52px] rounded-[22px] border-[1.5px] border-[#ed1c24] text-[#ed1c24] text-[20px] font-dm font-[400]'>
						More about us
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

export default About
