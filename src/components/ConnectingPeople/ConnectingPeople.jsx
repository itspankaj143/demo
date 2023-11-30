/** @format */

// import React from 'react'
import maillogo from '../../assets/images/Group 165.png'
import calllogo from '../../assets/images/Group 166.png'
import img1 from '../../assets/images/sebastian-herrmann-NbtIDoFKGO8-unsplash-removebg-preview 1.png'
import ellipse from '../../assets/images/Ellipse 89.png'
import grp from '../../assets/images/Group 56.png'
import India from '../../assets/images/India.png'
import Usa from '../../assets/images/United Kingdom.png'
import arrow from '../../assets/images/Arrow (1).png'
import fox from '../../assets/images/bounce fox.png'
import locationmaps from '../../assets/images/loctionsmap.svg'
import calllogo123 from '../../assets/images/calllogo123.svg'

const ConnectingPeople = () => {
	return (
		<>
			{/* connecting people */}

			<div className='w-[838px]  mx-auto'>
				<div className='flex flex-col justify-start items-start space-y-5 my-[4rem]'>
					<h2 className='!max-w-[826px]  h-[47px] font-dm font-[700] text-[52px] text-[#ed1c24]'>
						We like connecting with people{' '}
					</h2>
					<p className='text-[#000] font-[400] text-[22px] font-dm !max-w-[838px] '>
						Meet us to brief about your requirements, expectations, desired
						results, and development patterns to ensure that we deliver exactly
						what you’ve dreamt about.
					</p>
					<div className='flex items-center  space-x-[17rem]'>
						<div className='flex flex-col space-y-12'>
							<div className='flex '>
								<img src={maillogo} alt='' />
								<div>
									<h4 className=' text-[#ed1c24] font-dm text-[18px] font-[500]'>
										Email Us
									</h4>
									<p className='text-[#000] font-dm text-[18px] font-[400]'>
										info@felixtechlabs.com
									</p>
									<p className='text-[#000] font-dm text-[18px] font-[400]'>
										careers@felixtechlabs.com
									</p>
								</div>
							</div>
							<div className='flex'>
								<img src={calllogo} alt='' />
								<div>
									<h4 className=' text-[#ed1c24] font-dm text-[18px] font-[500]'>
										Call Us
									</h4>
									<p className='text-[#000] font-dm text-[18px] font-[400] flex'>
										<img className='h-[20px] mr-2' src={India} alt='' /> +91 20
										652 66070
									</p>
									<p className='text-[#000] font-dm text-[18px] font-[400] flex'>
										<img className='h-[25px] mr-2' src={Usa} alt='' /> +44 7700
										900549
									</p>
								</div>
							</div>
						</div>
						<div className='relative w-[386.151px] flex justify-center items-center'>
							<img src={img1} className='z-10' alt='' />
							<img src={ellipse} className='absolute top-10 -z-20' alt='' />
							<img src={grp} className='absolute top-10 -z-10' alt='' />
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-col justify-center space-y-14 items-center h-[400px] mt-[5rem]'>
				<h2 className='w-[499px] text-[#101942] text-center  font-dm text-[36px] font-500 uppercase'>
					WANT TO JOIN OR TEAM ?
				</h2>
				<p className='flex w-[339px] justify-evenly text-[#000] font-dm text-[32px] font-[400]'>
					Send us your CV! <img src={arrow} className='h-[50px]' alt='' />
				</p>
			</div>

			{/* form */}

			<form className='mx-auto rounded-[25px] border-[#fafafa] bg-[#fafafa] shadow-[0px_8px_8px_0px_rgba(237,28,36,0.10)] max-w-[1103px] h-[556px] flex flex-col space-y-14 justify-center px-16 mb-[5rem]'>
				<h2 className='w-[606px] text-[#ed1c24] font-dm text-[32px] font-[400]'>
					We'd love to hear from you!
				</h2>
				<div className='flex justify-evenly space-x-8'>
					<div className='flex flex-col justify-center items-start space-y-10'>
						<input
							type='text'
							className='border-[1px] border-[#5f5f5f] text-[#b0b0b0] font-dm text-[20px] font-[400] rounded-[8px] w-[472px] h-[45px] placeholder:pl-[16px]'
							placeholder='Name'
						/>
						<input
							type='text'
							className='border-[1px] border-[#5f5f5f] text-[#b0b0b0] font-dm text-[20px] font-[400] rounded-[8px] w-[472px] h-[45px] placeholder:pl-[16px]'
							placeholder='Email'
						/>
						<input
							type='text'
							className='border-[1px] border-[#5f5f5f] text-[#b0b0b0] font-dm text-[20px] font-[400] rounded-[8px] w-[472px] h-[45px] placeholder:pl-[16px]'
							placeholder='Contact NUmber'
						/>
						<div>
							<img src={fox} alt='' />
							<button className='mt-3 w-[204px] h-[44.571px] text-[#ed1c24] rounded-[17.143px] border-[0.875px] border-[#ed1c24] hover:text-[#fafafa] hover:bg-[#ed1c24]'>
								Send
							</button>
						</div>
					</div>
					<div className='flex flex-col'>
						<textarea
							name='message'
							id=''
							cols='45'
							rows='7'
							placeholder='Message'
							className='border-[1px] border-[#5f5f5f] text-[#b0b0b0] font-dm text-[20px] font-[400] rounded-[8px] placeholder:p-[16px]'
						></textarea>
						<h4 className='w-[467px] mt-[3rem] text-[#ed1c24] font-dm text-[22px] font-400'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
							unde ducimus hic praesentium quo!
						</h4>
					</div>
				</div>
			</form>

			{/* locations */}

			<div className='flex justify-start ml-[8rem] items-center text-center '>
				<h2 className='w-[201px] h-[38px] text-[#ed1c24] text-[32px] font-dm font-[400]'>
					Locations
				</h2>
			</div>

			{/* Pune Office */}

			<div className='flex  justify-around my-10 items-center  w-[1085px] mx-auto h-[482px] rounded-[20px] border-[1px] border-[#5F5F5F] '>
				<div className='space-y-12 flex flex-col justify-center items-center '>
					<div className='flex justify-center items-center space-x-4'>
						<img className='' src={locationmaps} alt='' />
						<h3 className='w-[211px] h-[32px] text-[#ed1c24] font-dm text-[32px] font-[500]'>
							Pune Office
						</h3>
					</div>
					<p>
						New Airport Road, Mhada <br /> Colony, Viman Nagar, Pune
					</p>
					<div className='flex justify-center items-center space-x-4 mr-20'>
						<img className='border-none' src={calllogo123} alt='' />
						<p>+91 20 652 66070</p>
					</div>
				</div>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.288668801003!2d73.90960317409686!3d18.561020082540374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c139e3055555%3A0xd5c2716ff5580211!2sFelix%20IT%20Systems!5e0!3m2!1sen!2sin!4v1701082690603!5m2!1sen!2sin'
					width='566px'
					height='404px'
					style={{ border: 0 }}
					className='rounded-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.15)]'
					allowfullscreen=''
					loading='lazy'
					referrerpolicy='no-referrer-when-downgrade'
				></iframe>
			</div>

			{/* // london office */}

			<div className='flex  justify-around my-10 items-center  w-[1085px] mx-auto h-[482px] rounded-[20px] border-[1px] border-[#5F5F5F] '>
				<div className='space-y-12 flex flex-col justify-center items-center '>
					<div className='flex justify-center items-center space-x-4'>
						<img className='' src={locationmaps} alt='' />
						<h3 className='w-[211px] h-[32px] text-[#ed1c24] font-dm text-[32px] font-[500]'>
							London Office
						</h3>
					</div>
					<p>
						571 Queens Road <br /> London
					</p>
					<div className='flex justify-center items-center space-x-4 mr-20'>
						<img className='border-none' src={calllogo123} alt='' />
						<p>020 3551 8456</p>
					</div>
				</div>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2918.4695721379594!2d-81.23607862470357!3d42.98944597114136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef20b91047f73%3A0xe5c13388c438faf1!2s571%20Queens%20Ave%2C%20London%2C%20ON%20N6B%201Y9%2C%20Canada!5e0!3m2!1sen!2sin!4v1701083807610!5m2!1sen!2sin'
					width='566px'
					height='404px'
					style={{ border: 0 }}
					className='rounded-[15px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.15)]'
					allowfullscreen=''
					loading='lazy'
					referrerpolicy='no-referrer-when-downgrade'
				></iframe>
			</div>
		</>
	)
}

export default ConnectingPeople
