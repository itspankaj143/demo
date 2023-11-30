/** @format */

import rectangle from '../../assets/images/Rectangle 156 (1).png'
import twitter from '../../assets/images/🦆 icon _twitter fill_.png'
import linkedin from '../../assets/images/🦆 icon _linkedin_.png'

import call from '../../assets/images/🦆 icon _call_.png'
import mail from '../../assets/images/🦆 icon _mail_.png'
import vectorlocation from '../../assets/images/location.png'

const Footer = () => {
	return (
		<>
			<div className='relative mt-[38rem] max-w-[1550px]  '>
				<img
					src={rectangle}
					className=' h-[506.239px] absolute bottom-7 left-0 -z-10 truncate'
					alt=''
				/>
				<div className='relative'>
					<img
						src={twitter}
						className='absolute  bottom-[15rem] left-[12rem] -z-10'
						alt=''
					/>
					<img
						src={linkedin}
						className='absolute bottom-[15rem] left-[18rem] -z-10'
						alt=''
					/>
					<p className='absolute bottom-[9rem] left-[9rem] text-white w-[478px] h-[25px] font-dm text-[20px] font-[500] '>
						© 2022 Felix TechLabs LLP. All Rights Reserved
					</p>
					<div className='relative'>
						<img
							className='absolute bottom-[20rem] left-[46rem]'
							src={call}
							alt=''
						/>
						<p className='absolute bottom-[20rem] left-[50rem] text-[#fff]'>
							+91 20 652 66070{' '}
						</p>
						<img
							className='absolute bottom-[15rem] left-[46rem]'
							src={mail}
							alt=''
						/>
						<p className='absolute bottom-[15rem] left-[50rem] text-white'>
							info@felixtechlabs.com
						</p>
						<img
							className='absolute bottom-[10rem] left-[46rem]'
							src={vectorlocation}
							alt=''
						/>
						<p className='absolute bottom-[8.75rem] left-[50rem] text-white'>
							3 Ideal Chambers, 2nd floor,Ideal Colony, <br /> Paud Road
							Kothrud, Pune
						</p>
					</div>
					<div className='relative'>
						<p className='absolute bottom-[22rem] text-white right-[10rem] '>
							<a
								href=''
								className='footerLink absolute w-[140px] hover:text-[23px] h-[33px] text-[#fff] font-dm text-[20px] font-[700]'
							>
								SERVICES
							</a>
						</p>
						<p className='absolute bottom-[22rem] text-white right-[10rem] '>
							<a
								href=''
								className='footerLink absolute top-14 hover:text-[23px] w-[140px] h-[33px] text-[#fff] font-dm text-[20px] font-[700]'
							>
								APPROACH
							</a>
						</p>
						<p className='absolute bottom-[22rem] text-white right-[10rem] '>
							<a
								href=''
								className='footerLink absolute top-[7rem] hover:text-[23px] w-[140px] h-[33px] text-[#fff] font-dm text-[20px] font-[700]'
							>
								WORK
							</a>
						</p>
						<p className='absolute bottom-[22rem] text-white right-[10rem] '>
							<a
								href=''
								className='footerLink absolute top-[10rem] hover:text-[23px] w-[140px] h-[33px] text-[#fff] font-dm text-[20px] font-[700]'
							>
								CONTACT
							</a>
						</p>
					</div>
				</div>
			</div>
			<div className='relative mt-[2rem]   max-w-[50%] mx-auto text-center font-[700] text-[22px]'>
				<p className='absolute bottom-12 text-[#fff]'>
					© Made by Tejas Kalbe and Pankaj Kumar. All rights reserved.
				</p>
			</div>
		</>
	)
}

export default Footer
