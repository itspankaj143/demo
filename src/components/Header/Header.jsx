/** @format */

import logo from '../../assets/images/Felix Techlabs-01 14.png'
import icon1 from '../../assets/images/icon1.png'
import icon2 from '../../assets/images/icon2.png'
import icon3 from '../../assets/images/icon3.png'
import icon4 from '../../assets/images/icon4.png'
import icon5 from '../../assets/images/icon5.png'
import icon6 from '../../assets/images/icon6.png'
import rect1 from '../../assets/images/rectangle 217.png'
import curve1 from '../../assets/images/curve1.png'
import curve4 from '../../assets/images/curve4.png'
import curve2 from '../../assets/images/curve2.png'
import curve5 from '../../assets/images/curve5.png'
import curve3 from '../../assets/images/curve3.png'
import curve6 from '../../assets/images/curve6.png'
import fox from '../../assets/images/centerFox.png'
import ellipse from '../../assets/images/ellipse.png'

const Header = () => {
	return (
		<>
			<div className='container  mx-auto max-w-[1250px] ml-20 my-[3rem]'>
				<img className=' top-9 left-8 fixed' src={logo} alt='' />

				<h2 className='w-[692px] font-dm text-[52px] font-[700] text-[#ed1c24] mx-auto'>
					An Array of Development Services Available With Us{' '}
				</h2>
				<div className='flex justify-evenly items-start -space-x-36 mx-auto max-w-[100%] mt-[65px]'>
					<div className='left flex flex-col items-start justify-evenly space-y-4 -mr-10'>
						<div>
							<h3 className='w-[262px] h-[25] font-[500] text-[22px] leading-[28.62px] text-[#ed1c24] '>
								Web app Development
							</h3>
							<p className='h-[67px] w-[265px] font-400 text-[18px] leading-[23.4px] text-[#000000]'>
								Quality web applications developed to promote your business.
							</p>
						</div>
						<div>
							<h3 className='w-[262px] h-[25] font-[500] text-[22px] leading-[28.62px] text-[#ed1c24] '>
								Mobile app Development
							</h3>
							<p className='h-[44px] w-[249px] font-400 text-[18px] leading-[23.4px] text-[#000000]'>
								Reach out to massive targets with our interactive apps
							</p>
						</div>
						<div>
							<h3 className='w-[262px] h-[25] font-[500] text-[22px] leading-[28.62px] text-[#ed1c24] '>
								Backend Development
							</h3>
							<p className='h-[67px] w-[265px] font-400 text-[18px] leading-[23.4px] text-[#000000]'>
								Kick-start with our seamless backend solutions for your
								enterprises
							</p>
						</div>
					</div>
					<div className='center flex flex-col justify-between'>
						<div className='flex '>
							<div className='relative flex justify-center w-[100px]'>
								<img src={icon1} className='absolute top-10 z-10' alt='' />
								<img className='absolute top-3' src={rect1} alt='' />
							</div>
							<div className='flex relative w-[200px]'>
								<img src={curve1} className='absolute top-16 -left-4' alt='' />
								<img src={curve4} className='absolute top-16 -right-4' alt='' />
							</div>
							<div className='relative flex justify-center w-[100px]'>
								<img src={icon4} className='absolute top-10 z-10' alt='' />
								<img src={rect1} className='absolute top-3' alt='' />
							</div>
						</div>
						<div className='flex '>
							<div className='relative flex justify-center w-[100px]'>
								<img src={icon2} className='absolute top-36 z-10' alt='' />
								<img className='absolute top-[7.2rem]' src={rect1} alt='' />
							</div>
							<div className='relative w-[200px]'>
								<img
									src={curve2}
									className='absolute top-[8.7rem] -left-4'
									alt=''
								/>
								<img
									src={fox}
									className='w-[58px] h-[45.5px] absolute top-[8.9rem] left-[4.5rem] z-30'
									alt=''
								/>
								<img
									src={ellipse}
									className='absolute top-[7.3rem] left-[3.2rem] z-20 w=[98.72px] h-[98.72px]'
								/>
								<img
									src={curve5}
									className='absolute top-[8.7rem] -right-3'
									alt=''
								/>
							</div>
							<div className='relative flex justify-center w-[100px]'>
								<img
									src={icon5}
									className='absolute top-[9.2rem] z-10'
									alt=''
								/>
								<img src={rect1} className='absolute top-[7.2rem]' alt='' />
							</div>
						</div>
						<div className='flex '>
							<div className='relative flex justify-center w-[100px]'>
								<img
									src={icon3}
									className='absolute top-[15.5rem] z-10'
									alt=''
								/>
								<img className='absolute top-[13.5rem]' src={rect1} alt='' />
							</div>
							<div className='relative w-[200px]'>
								<img
									src={curve3}
									className='absolute top-[11.7rem] -left-4'
									alt=''
								/>
								<img
									src={curve6}
									className='absolute top-[11.7rem] -right-4'
									alt=''
								/>
							</div>
							<div className='relative flex justify-center w-[100px]'>
								<img
									src={icon6}
									className='absolute top-[15.5rem] z-10'
									alt=''
								/>
								<img src={rect1} className='absolute top-[13.5rem]' alt='' />
							</div>
						</div>
						<div></div>
						<div></div>
					</div>
					<div className='rightleft flex flex-col items-start justify-evenly space-y-4'>
						<div>
							<h3 className='w-[262px] h-[25] font-[500] text-[22px] leading-[28.62px] text-[#ed1c24] '>
								UI/UX design
							</h3>
							<p className='h-[61px] w-[270px] font-400 text-[18px] leading-[23.4px] text-[#000000]'>
								Patterns of web and mobile user experience to deliver exactly
								what they desire.
							</p>
						</div>
						<div>
							<h3 className='w-[262px] h-[25] font-[500] text-[22px] leading-[28.62px] text-[#ed1c24] '>
								Project management
							</h3>
							<p className='h-[75px] w-[322px] font-400 text-[18px] leading-[23.4px] text-[#000000]'>
								Seamless integration to your software processes with special
								Quality Check experts available at Felix Tech Labs.
							</p>
						</div>
						<div>
							<h3 className='w-[262px] h-[25] font-[500] text-[22px] leading-[28.62px] text-[#ed1c24] '>
								Social media marketing
							</h3>
							<p className='h-[94px] w-[289px] font-400 text-[18px] leading-[23.4px] text-[#000000]'>
								Spread a word for your business by taking advantage of our
								global presence .
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
