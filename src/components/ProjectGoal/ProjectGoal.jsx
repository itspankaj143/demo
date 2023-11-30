/** @format */
// import React from 'react'
import healthyme from '../../assets/images/image_18-removebg-preview 1.png'
import problem from '../../assets/images/6fa270627d02be4fbfcfb3549f0a84dc.gif'
import solutions from '../../assets/images/770c350885bd110ac8f82d0d68640049.gif'

import image1 from '../../assets/images/image 19.png'
import image2 from '../../assets/images/image 20.png'
import image3 from '../../assets/images/image_22-removebg-preview 1.png'

import group81 from '../../assets/images/Group 81.png'

const ProjectGoal = () => {
	return (
		<>
			<div className='flex justify-center items-center mt-10'>
				<div
					class='item'
					className='!bg-[#ed1c24]  w-[932px] h-[383px] bg-[#f0f0f0] rounded-[28px]'
				>
					<div className='flex '>
						<div className='flex flex-col items-start px-[2rem] py-14 justify-between '>
							<h2 className='-mt-9  w-[182px] h-[33px] text-[#fff] font-dm text-[32px] font-[500]'>
								Healthyme
							</h2>
							<p className='mt-[16px] w-[170px] h-[20px] text-[#fff] text-[18px] font-[400]'>
								UI/UX development
							</p>
							{/* <p className='mt-[16px] w-[49px] h-[20px] text-[#fff] text-[18px] font-[400]'>
								UI/UX
							</p> */}
							<p className='w-[454px] mt-4 mr-12 h-[171px] font-dm text-[#fff] text-[18px] font-[400]'>
								Healthyme is a fitness app that offers full body workout plans
								with many 3D exercises for free to help you achieve your body
								goals. You can choose from a variety of exercise plans targeted
								at specific muscle groups, such as chest workout or arm workout,
								or tailored for a certain goal, such as fat burning workout.
							</p>
							<button className='mt-[1.2rem] w-[170px] h-[32px] rounded-[10.419px] text-[#fff] border-[0.695px] border-[#fff]'>
								Read more
							</button>
						</div>
						<div className='relative !w-[398px] flex items-center justify-center p-[10px]'>
							{/* <img src={healthyme} alt='' /> */}
							<img
								className='absolute z-10   -top-[0.2rem]  w-[452px]  !h-[353px]'
								src={healthyme}
								alt=''
							/>
							{/* <img
							src={image14}
							alt=''
							className='border-3 mb-[4rem] border-green-700 !h-[251px] !w-[257px]  '
						/> */}
						</div>
					</div>
				</div>
			</div>
			{/* Project goal */}
			<div className='flex justify-evenly items-center mt-10'>
				<div className='-ml-[1rem] space-y-8'>
					<h2 className='w-[272px] h-[48px] text-[#ED1C24] font-dm text-[48px] font-[500]'>
						Project goal
					</h2>
					<p className='w-[443px] h-[161px] text-[#000] text-[22px] font-dm font-[400]'>
						Lorem ipsum dolor sit amet. Rem provident enim sed assumenda
						eligendi non galisum cupiditate. Non earum et repudiandae mollitia
						eos dolorem perferendis et velit galisum et deserunt.
					</p>
				</div>
				<div className='space-y-5'>
					<h2 className='w-[106px] h-[32px] text-[#ED1C24] font-dm text-[22px] font-[500]'>
						Industry
					</h2>
					<h3 className='w-[126px] h-[29px] text-[#000] text-[22px] font-[400] font-dm'>
						Health care
					</h3>
					<h3 className='w-[106px] h-[32px] text-[#ED1C24] font-dm text-[22px] font-[500]'>
						Location
					</h3>
					<h3 className='w-[147px] h-[22px] text-[#000] text-[22px] font-[400] font-dm'>
						Mumbai,India
					</h3>
				</div>
			</div>
			{/* Problems */}
			<div className=' flex justify-center items-center ml-[10rem]'>
				<div className='flex flex-col'>
					<h2 className='w-[149px] h-[37px] text-[#ed1c24] text-[32px] font-dm font-[500]'>
						Problems
					</h2>
					-
					<ul className='  w-[774px]  h-[190px] list-disc text-[#000] text-[22px] font-dm font-[400] '>
						<li>
							Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque
							quibusdam est
						</li>
						<li>
							Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque
							quibusdam est
						</li>
						<li>
							Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque
							quibusdam est
						</li>
					</ul>
				</div>
				<img className='!w-[303px] !h-[303px]' src={problem} alt='' />
			</div>
			{/* Problems */}
			<div className=' flex justify-center items-center ml-[10rem]'>
				<img className='!w-[303px] !h-[303px]' src={solutions} alt='' />
				<div className='flex flex-col'>
					<h2 className='w-[149px] h-[37px] text-[#ed1c24] text-[32px] font-dm font-[500]'>
						Solution
					</h2>
					-
					<ul className='  w-[774px]  h-[190px] list-disc text-[#000] text-[22px] font-dm font-[400] '>
						<li>
							Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque
							quibusdam est
						</li>
						<li>
							Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque
							quibusdam est
						</li>
						<li>
							Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque
							quibusdam est
						</li>
					</ul>
				</div>
			</div>
			{/* Benefits */}
			<div className='flex flex-col justify-center items-center space-y-10'>
				<h2 className='w-[188px] h-[48px] text-[#ed1c24] text-[48px] font-dm font-[500]'>
					Benefits
				</h2>
				<ul className='  w-[774px]  h-[190px] list-disc text-[#000] text-[22px] font-dm font-[400] '>
					<li>
						Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque
						quibusdam est
					</li>
					<li>
						Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque
						quibusdam est
					</li>
					<li>
						Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque
						quibusdam est
					</li>
					<li>
						Lorem ipsum dolor sit amet. Ut molestiae laudantium et eaque
						quibusdam est
					</li>
				</ul>
			</div>
			{/* Screens */}
			<div className='flex flex-col justify-center items-center space-y-20 mt-32'>
				<h2 className='W-[188px] h-[48px] text-[#ed1c24] text-[48px] font-dm font-[500]'>
					Screens
				</h2>
				<img className='w-[956px] h-[593px]' src={image1} alt='' />
				<img className='w-[956px] h-[552.165px]' src={image2} alt='' />
				<img className='w-[956px] h-[583.474px]' src={image3} alt='' />
			</div>

			{/* Other works */}

			<div className='flex flex-col justify-center items-center -ml-[25rem] space-y-10 mt-16'>
				<h2 className='w-[193px] -ml-[20rem] h-[37px] text-[#ed1c24] text-[32px] font-dm font-[500]'>
					Other works
				</h2>

				<div className='flex ml-[20rem] space-x-6 '>
					{/* first card */}
					<div
						class='item'
						className=' !bg-[#101942]  w-[551px] h-[373px] rounded-[28px]'
					>
						<div className='flex '>
							<div className='flex space-y-4 flex-col items-start px-8 py-14 justify-between '>
								<h2 className='-mt-9  w-[120px] h-[37px] text-[#fff] font-dm text-[32px] font-[500]'>
									V-Sales
								</h2>
								<p className='w-[170px] h-[20px] text-[#fff] font-dm text-[18px] font-[400]'>
									UI/UX development
								</p>
								<p className='w-[155px] h-[19px] text-[#fff] font-dm text-[18px] font-[400]'>
									Web development
								</p>
								<p className='w-[259px] h-[165px] text-[#fff] font-dm text-[18px] font-[400]'>
									V-sales is the best for your business it saves your time &
									money without any technical knowledge. Simple way to Track
									Unlimited Sales, Profit, Stock, POS & much more.
								</p>
							</div>
							<div
								className='w-[280px] h-[152.32px] flex justify-center
							items-center mt-20 mr-5 '
							>
								<img src={group81} alt='' />
							</div>
						</div>
					</div>
					{/* first card */}
					<div
						class='item'
						className=' !bg-[#101942]  w-[551px] h-[373px] rounded-[28px]'
					>
						<div className='flex '>
							<div className='flex space-y-4 flex-col items-start px-8 py-14 justify-between '>
								<h2 className='-mt-9  w-[120px] h-[37px] text-[#fff] font-dm text-[32px] font-[500]'>
									V-Sales
								</h2>
								<p className='w-[170px] h-[20px] text-[#fff] font-dm text-[18px] font-[400]'>
									UI/UX development
								</p>
								<p className='w-[155px] h-[19px] text-[#fff] font-dm text-[18px] font-[400]'>
									Web development
								</p>
								<p className='w-[259px] h-[165px] text-[#fff] font-dm text-[18px] font-[400]'>
									V-sales is the best for your business it saves your time &
									money without any technical knowledge. Simple way to Track
									Unlimited Sales, Profit, Stock, POS & much more.
								</p>
							</div>
							<div
								className='w-[280px] h-[152.32px] flex justify-center
							items-center mt-20 mr-5 '
							>
								<img src={group81} alt='' />
							</div>
						</div>
					</div>
				</div>

				<button className='w-[342px]  h-[48px] mt-[20rem] border-2  text-center rounded-[15px] text-[22px] text-[#ed1c24] border-[#ed1c24]'>
					View more
				</button>
			</div>
		</>
	)
}

export default ProjectGoal
