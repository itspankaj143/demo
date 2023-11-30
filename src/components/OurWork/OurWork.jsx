/** @format */

// import React from 'react'
import image14 from '../../assets/images/image 14.png'
import animationui from '../../assets/images/75800-ios-ui-animation 1.png'
import group81 from '../../assets/images/Group 81.png'
// import ellipse129 from '../../assets/images/Ellipse 129.svg'

const OurWork = () => {
	return (
		<>
			<div className='mt-[1.5rem] h-[55px] flex justify-center items-center'>
				<h2 className='text-[#ED1C24] font-dm text-[52px] font-[700]'>
					Our work
				</h2>
			</div>

			<div className='flex flex-col justify-center items-center space-y-10 '>
				<p className='w-[636px] mt-8 h-[88px] text-[#000] text-[22px] font-dm font-[400]'>
					We work alongside leading corporates to develop mobile apps that
					transform their business. See some highlights from our portfolio
					below.
				</p>
				<ul className='flex space-x-32  mt-[1.5rem] '>
					<li>
						<a
							href='#ourwork'
							className='text-[14px] font-dm font-[400] text-[#000] w-[16px] h-[15px] underline decoration-4  decoration-red-500'
						>
							All
						</a>
					</li>
					<li>
						<a
							href='#'
							className='text-[14px] font-dm font-[400] text-[#000] w-[16px] h-[15px]'
						>
							Android
						</a>
					</li>
					<li>
						<a
							href='#'
							className='text-[14px] font-dm font-[400] text-[#000] w-[16px] h-[15px]'
						>
							IOS
						</a>
					</li>
					<li>
						<a
							href='#'
							className='text-[14px] font-dm font-[400] text-[#000] w-[16px] h-[15px]'
						>
							Web
						</a>
					</li>
				</ul>

				<div id='ourwork' className='space-y-9'>
					{/*first card */}
					<div
						class='item'
						className='!bg-[#ed1c24]  w-[932px] h-[373px] bg-[#f0f0f0] rounded-[28px]'
					>
						<div className='flex '>
							<div className='flex flex-col items-start px-[3rem] py-14 justify-between '>
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
									goals. You can choose from a variety of exercise plans
									targeted at specific muscle groups, such as chest workout or
									arm workout, or tailored for a certain goal, such as fat
									burning workout.
								</p>
								<button className='mt-[1.2rem] w-[170px] h-[32px] rounded-[10.419px] text-[#fff] border-[0.695px] border-[#fff]'>
									Read more
								</button>
							</div>
							<div className='relative !w-[398px] flex items-center justify-center p-[10px]'>
								<img
									className='absolute z-10  -left-[1rem] top-[7rem] !w-[93px] !h-[194px]'
									src={animationui}
									alt=''
								/>
								<img
									src={image14}
									alt=''
									className='border-3 mb-[4rem] border-green-700 !h-[251px] !w-[257px]  '
								/>
							</div>
						</div>
					</div>

					{/* second card */}
					<div
						class='item'
						className=' !bg-[#101942]  w-[932px] !h-[390px] rounded-[28px]'
					>
						<div className='flex '>
							<div className='flex space-y-1 flex-col items-start px-20 py-14 justify-between '>
								<h2 className='-mt-9  !w-[120px] !h-[37px] text-[#fff] font-dm text-[32px] font-[500]'>
									V-Sales
								</h2>
								<p className=' text-[#fff] font-dm text-[18px]  font-[400]'>
									UI/UX development
									<span className='text-[3rem] p-0 m-0 '> . </span>
									<span className='list-disc text-[#fff] font-dm text-[1.125rem] font-[400]'>
										{' '}
										Web development
									</span>
								</p>

								{/* <ul  className='list-disc w-[9.6875rem] h-[1.1875rem] text-[#fff] font-dm text-[1.125rem] font-[400]'>
                    <li>Web development</li>
                  </ul> */}

								<p className='w-[449px] h-[190px]   text-[#fff] font-dm text-[18px] font-[400]'>
									V-sales is the best for your business it saves your time &
									money without any technical knowledge. Simple way to Track
									Unlimited Sales, Profit, Stock, Generate Invoice, CRM, POS &
									much more.Smartly designed for small-business owners and
									entrepreneurs. This is the most effective way to track all of
									your daily sales information.
								</p>

								<button className='!mt-[1rem] !w-[170px] !h-[32px] rounded-[10.419px] text-[#fff] border-[0.695px] border-[#fff]'>
									Read more
								</button>
							</div>
							<div
								className='!w-[459px] !h-[249.696px] border-2 flex justify-center
							items-center mt-20 mr-5 '
							>
								<img src={group81} alt='' />
							</div>
						</div>
					</div>

					{/* third card */}
					<div
						class='item'
						className='!bg-[#ed1c24]  w-[932px] h-[373px] bg-[#f0f0f0] rounded-[28px]'
					>
						<div className='flex '>
							<div className='flex flex-col items-start px-[3rem] py-14 justify-between '>
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
									goals. You can choose from a variety of exercise plans
									targeted at specific muscle groups, such as chest workout or
									arm workout, or tailored for a certain goal, such as fat
									burning workout.
								</p>
								<button className='mt-[1.2rem] w-[170px] h-[32px] rounded-[10.419px] text-[#fff] border-[0.695px] border-[#fff]'>
									Read more
								</button>
							</div>
							<div className='relative !w-[398px] flex items-center justify-center p-[10px]'>
								<img
									className='absolute z-10  -left-[1rem] top-[7rem] !w-[93px] !h-[194px]'
									src={animationui}
									alt=''
								/>
								<img
									src={image14}
									alt=''
									className='border-3 mb-[4rem] border-green-700 !h-[251px] !w-[257px]  '
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default OurWork
