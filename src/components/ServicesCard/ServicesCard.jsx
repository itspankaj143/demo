/** @format */
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'

// import React from 'react'
import vector from '../.././assets/images/Vector.png'
import adobe from '../.././assets/images/adobe xd.png'
import figma from '../.././assets/images/Figma.png'
import sketch from '../.././assets/images/Sketch.png'

import webdev from '../.././assets/images/Web development.png'
import html from '../.././assets/images/Html (1).png'
import css from '../.././assets/images/css.png'
import js from '../../assets/images/javascript.png'
import angular from '../../assets/images/angular.png'
import react from '../../assets/images/react.png'
import jquery from '../../assets/images/jquery.png'
import amzon from '../../assets/images/Group 48.png'

import backend from '../../assets/images/backend.png'
import java from '../../assets/images/java.png'
import mongo from '../../assets/images/mongo.png'
import php from '../../assets/images/php.png'
import vectordom from '../../assets/images/Vector (1).png'
import python from '../../assets/images/python.png'
import node from '../../assets/images/nodejs.png'

import checkmark from '../../assets/images/Checkmark.png'
import zoho from '../../assets/images/zoho.png'
import write from '../../assets/images/wrike.png'
import group from '../../assets/images/Group.png'

import social from '../../assets/images/social.png'
import vectorsocial from '../../assets/images/Vector (2).png'
import buffer from '../../assets/images/Buffer.png'
import crown from '../../assets/images/crown.png'

const ServicesCard = () => {
	return (
		<>
			<div className='  w-[216px] text-[52px] font-dm font-[700] text-[#ed1c24] mx-auto mt-20 mb-16'>
				<h2>Services</h2>
			</div>
			<div className=''>
				<OwlCarousel
					items={2}
					className='owl-theme ml-16 w-[1350px]'
					margin={0}
					loop
				>
					{/* first card */}
					<div
						class='item'
						className='  w-[623px] h-[418px] bg-[#f0f0f0] rounded-[28px]'
					>
						<div className='flex '>
							<div className='flex flex-col items-start px-20 py-14 justify-between '>
								<h2 className='-mt-9  w-[155px] h-[45px] text-[#000] font-dm text-[42px] font-[500]'>
									Design
								</h2>
								<p className='w-[306px] mt-9 h-[174px] font-dm text-[#000] text-[18px] font-[400]'>
									We create designs to augment User Experiences.
									<br />
									We analyze human behavioral patterns and blend them with
									information architecture to design a unique experience.
								</p>
							</div>
							<img
								src={vector}
								alt=''
								className='mt-20 -mx-14 !w-[179px] h-[179px]  '
							/>
						</div>
						<div className=' ml-20 !-mt-2'>
							<h5 className=' w-[220px] -mt-6 mb-5 h-[25px] color-[#000] text-[22px] font-[500] font-dm'>
								Technologies we use
							</h5>
							<div className='flex ml-4 gap-3'>
								<img
									src={adobe}
									className='!w-[44.712px] h-[43.966px]'
									alt=''
								/>
								<img
									src={figma}
									className='!w-[44.712px] h-[43.966px]'
									alt=''
								/>
								<img
									src={sketch}
									className='!w-[44.712px] h-[43.966px]'
									alt=''
								/>
							</div>
						</div>
					</div>

					{/* second card */}
					<div
						class='item'
						className='   w-[623px] h-[418px] bg-[#f0f0f0] rounded-[28px]'
					>
						<div className='flex '>
							<div className='flex flex-col items-start px-20 py-14 justify-between '>
								<h2 className='-mt-9  w-[155px] h-[45px] text-[#000] font-dm text-[42px] font-[500]'>
									Frontend
								</h2>
								<p className='w-[306px] mt-9 h-[174px] font-dm text-[#000] text-[18px] font-[400]'>
									We create designs to augment User Experiences.
									<br />
									We analyze human behavioral patterns and blend them with
									information architecture to design a unique experience.
								</p>
							</div>
							<img
								src={webdev}
								alt=''
								className='mt-20 -mx-14 !w-[179px] h-[179px]  '
							/>
						</div>
						<div className=' ml-20 !-mt-8'>
							<h5 className=' w-[220px] -mt-6 mb-5 h-[25px] color-[#000] text-[22px] font-[500] font-dm'>
								Technologies we use
							</h5>
							<div className='flex items-center justify-start ml-4 gap-3 '>
								<img src={html} className='!w-[40.603px] h-[57.469px]' alt='' />
								<img src={css} className='!w-[39.978px] h-[57.469px]' alt='' />
								<img src={js} className='!w-[42.477px] h-[59.967px]' alt='' />
								<img
									src={angular}
									className='!w-[42.477px] h-[48.723px]'
									alt=''
								/>
								<img
									src={react}
									className='!w-[53.721px] h-[47.474px]'
									alt=''
								/>
								<img
									src={jquery}
									className='!w-[52.963px] h-[56.474px]'
									alt=''
								/>
								<img
									src={amzon}
									className='!w-[82.455px] h-[33.523px]'
									alt=''
								/>
							</div>
						</div>
					</div>

					{/* third card */}
					<div
						class='item'
						className='   w-[623px] h-[418px] bg-[#f0f0f0] rounded-[28px]'
					>
						<div className='flex '>
							<div className='flex flex-col items-start px-20 py-14 justify-between '>
								<h2 className='-mt-9  w-[155px] h-[45px] text-[#000] font-dm text-[42px] font-[500]'>
									Backend
								</h2>
								<p className='w-[306px] mt-9 h-[174px] font-dm text-[#000] text-[18px] font-[400]'>
									We create designs to augment User Experiences.
									<br />
									We analyze human behavioral patterns and blend them with
									information architecture to design a unique experience.
								</p>
							</div>
							<img
								src={backend}
								alt=''
								className='mt-20 -mx-14 !w-[179px] h-[179px]  '
							/>
						</div>
						<div className=' ml-20 '>
							<h5 className=' w-[220px] -mt-6 mb-5 h-[25px] color-[#000] text-[22px] font-[500] font-dm'>
								Technologies we use
							</h5>
							<div className='flex ml-4 gap-3'>
								<img src={java} className='!w-[44.712px] h-[43.966px]' alt='' />
								<img
									src={mongo}
									className='!w-[44.712px] h-[43.966px]'
									alt=''
								/>
								<img src={php} className='!w-[44.712px] h-[43.966px]' alt='' />
								<img
									src={vectordom}
									className='!w-[44.712px] h-[43.966px]'
									alt=''
								/>
								<img
									src={python}
									className='!w-[44.712px] h-[43.966px]'
									alt=''
								/>
								<img src={node} className='!w-[44.712px] h-[43.966px]' alt='' />
							</div>
						</div>
					</div>

					{/* four card */}
					<div
						class='item'
						className='  w-[623px] h-[418px] bg-[#f0f0f0] rounded-[28px]'
					>
						<div className='flex '>
							<div className='flex flex-col items-start px-20 py-14 justify-between space-y-[5.5rem]'>
								<h2 className='-mt-9  !w-[155px] h-[45px] text-[#000] font-dm text-[42px] font-[500]'>
									Project Management
								</h2>
								<p className='w-[306px] mt-16 h-[174px] font-dm text-[#000] text-[18px] font-[400]'>
									We analyze human behavioral patterns and blend them with
									information architecture to design a unique experience.
								</p>
							</div>
							<img
								src={checkmark}
								alt=''
								className='mt-20 -mx-14 !w-[179px] h-[179px]  '
							/>
						</div>
						<div className=' ml-20 -mt-[5rem]'>
							<h5 className=' w-[220px] -mt-6 mb-5 h-[25px] color-[#000] text-[22px] font-[500] font-dm'>
								Technologies we use
							</h5>
							<div className='flex ml-4 space-x-4'>
								<img
									src={zoho}
									className='!w-[49.712px] !h-[43.966px]'
									alt=''
								/>
								<img
									src={write}
									className='!w-[50.712px] !h-[43.966px]'
									alt=''
								/>
								<img
									src={group}
									className='!w-[44.712px] h-[43.966px]'
									alt=''
								/>
							</div>
						</div>
					</div>

					{/* five card */}
					<div
						class='item'
						className=' w-[623px] h-[418px] bg-[#f0f0f0] rounded-[28px]'
					>
						<div className='flex '>
							<div className='flex flex-col items-start px-20 py-14 justify-between space-y-[5.5rem] '>
								<h2 className='-mt-9  !w-[255px] h-[45px] text-[#000] font-dm text-[42px] font-[500] border-2'>
									Social media marketing
								</h2>
								<p className='w-[306px] mt-9 h-[174px] font-dm text-[#000] text-[18px] font-[400]'>
									Social media marketing is the use of social media platforms
									and websites to promote a product or service.
								</p>
							</div>
							<img
								src={social}
								alt=''
								className='mt-20 -mx-14 !w-[179px] h-[179px]  '
							/>
						</div>
						<div className=' ml-20 -mt-[5rem]'>
							<h5 className=' w-[220px] -mt-6 mb-5 h-[25px] color-[#000] text-[22px] font-[500] font-dm'>
								Technologies we use
							</h5>
							<div className='flex ml-4 gap-3'>
								<img
									src={vectorsocial}
									className='!w-[44.712px] h-[43.966px]'
									alt=''
								/>
								<img
									src={buffer}
									className='!w-[44.712px] h-[43.966px]'
									alt=''
								/>
								<img
									src={crown}
									className='!w-[44.712px] h-[43.966px]'
									alt=''
								/>
							</div>
						</div>
					</div>
				</OwlCarousel>
			</div>
		</>
	)
}

export default ServicesCard
