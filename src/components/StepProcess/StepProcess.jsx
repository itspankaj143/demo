/** @format */

import React from 'react'
import step1 from '../../assets/images/step1.png'
import num1 from '../../assets/images/num1.png'
import num2 from '../../assets/images/num2.png'
import num3 from '../../assets/images/num3.png'
import num4 from '../../assets/images/num4.png'
import num5 from '../../assets/images/num5.png'
import num6 from '../../assets/images/num6.png'
import Contactus from '../../assets/images/Contactus.png'
import fox from '../../assets/images/bounce fox.png'
import Ellipse2 from '../../assets/images/Ellipse22.png'
import Ellipse3 from '../../assets/images/Ellipse23.png'
import Ellipse4 from '../../assets/images/Ellipse24.png'
import Ellipse5 from '../../assets/images/Ellipse25.png'
import Ellipse6 from '../../assets/images/Ellipse26.png'
import img2 from '../../assets/images/leon-seibert-KgLkBRGyDLM-unsplash-removebg-preview (1) 1.png'
import img3 from '../../assets/images/pexels-fauxels-3184360-removebg-preview 1.png'
import img4 from '../../assets/images/amelie-mourichon-sv8oOQaUb-o-unsplash-removebg-preview 1.png'
import img5 from '../../assets/images/istockphoto-1028022370-2048x2048-transformed-removebg-preview 1.png'
import img6 from '../../assets/images/pexels-fauxels-3184432-removebg-preview (1) 1.png'
import Grp2 from '../../assets/images/Group22.png'
import Grp3 from '../../assets/images/Group23.png'
import Grp4 from '../../assets/images/Group24.png'
import Grp5 from '../../assets/images/Group25.png'
import Grp6 from '../../assets/images/Group26.png'
import logo from '../../assets/images/Felix Techlabs-01 14.png'

const StepProcess = () => {
	return (
		<>
			{/* <img src={logo} className='fixed top-[5rem] left-[3rem]' alt="" /> */}
			<div className='flex flex-col justify-start items-end space-y-5 my-[4rem] mx-auto w-[84%] mb-[8rem]'>
				<h2 className='!w-[939px] font-dm font-[700] text-[52px] text-[#ed1c24]'>
					We beleive in 6 step process which leads us to success in every
					project
				</h2>
				<div className='flex  !mb-[150px] '>
					<img src={step1} alt='' />
					<div>
						<div className='flex space-x-5 -ml-16'>
							<img src={num1} alt='' />
							<h4 className='max-w-[527px] font-dm text-[36px] font-[700] text-[#ed1c24]'>
								The Initial Meeting
							</h4>
						</div>
						<p className='max-w-[507px] font-dm font-[400] text-[22px] text-[#000]'>
							Raise your service query through our online chat or email section
							to meet us for detailing your project requirements and
							expectations. We love answering emails, phone calls, and assisting
							people who visit our workplace to define their customized
							requirements. Once we understand your requirements and determine
							the scope of work, we precede to the next stage to begin the
							desired app your development process.
						</p>
					</div>
				</div>
				<div className='flex space-x-8 !mb-[150px] '>
					<div>
						<div className='flex space-x-5 -ml-16'>
							<img src={num2} className='w-[57px] h-[57px]' alt='' />
							<h4 className='max-w-[527px] font-dm text-[36px] font-[700] text-[#ed1c24]'>
								Get the Proposal Approved & Contract Signed
							</h4>
						</div>
						<p className='max-w-[547px] font-dm font-[400] text-[22px] text-[#000]'>
							Once your service requirements are noted by our client service
							professionals, a detailed, formal proposal will be outlined to
							assess your expectations. The proposal will contain various
							details including app’s features, functionalities, project cost,
							expected delivery date, and other crucial factors that can help
							both the parties to keep a track on product’s quality and
							delivery. A dedicated project manager will get assigned to you
							once the contract gets signed to help your communicate effectively
							with our team of developers and marketers.
						</p>
					</div>
					<div className='relative flex items-center justify-center w-[379.837px] '>
						<img
							src={img2}
							className='z-10 w-[300.361px] h-[190.907px]'
							alt=''
						/>
						<img
							src={Ellipse2}
							className='absolute -z-20 h-[268.041px]'
							alt=''
						/>
						<img src={Grp2} className='absolute -z-10' alt='' />
					</div>
				</div>
				<div className='flex space-x-8 !mb-[150px] '>
					<div className='relative flex items-center justify-center w-[379.837px] ml-5'>
						<img
							src={img3}
							className='z-10 w-[300.361px] h-[190.907px]'
							alt=''
						/>
						<img
							src={Ellipse3}
							className='absolute -z-20 h-[268.041px]'
							alt=''
						/>
						<img src={Grp3} className='absolute -z-10' alt='' />
					</div>
					<div>
						<div className='flex space-x-5 -ml-16'>
							<img src={num3} className='w-[57px] h-[57px]' alt='' />
							<h4 className='max-w-[527px] pr-5 font-dm text-[36px] font-[700] text-[#ed1c24]'>
								Attend Discovery Workshop For Expectation Setting
							</h4>
						</div>
						<p className='max-w-[507px] font-dm font-[400] text-[22px] text-[#000]'>
							At Felix TechLabs, we give high importance to your vision and
							demands. Thus, we get a special discovery workshop session
							arranged with our experienced UX/UI designer to give a kick-ass
							start to your app development process. Let us know about your
							visual expectations, design inspirations, and other detailing that
							can help us contribute more towards the app development.
						</p>
					</div>
				</div>
				<div className='flex space-x-8 !mb-[150px] '>
					<div>
						<div className='flex space-x-5 -ml-16'>
							<img src={num4} className='w-[57px] h-[57px]' alt='' />
							<h4 className='max-w-[527px] font-dm text-[36px] font-[700] text-[#ed1c24]'>
								Get the Designing of Your App Started
							</h4>
						</div>
						<p className='max-w-[547px] font-dm font-[400] text-[22px] text-[#000]'>
							We start-off with ‘User Experience’ design to form wireframes and
							provide basic blueprints that can help us outline the core
							functionality of your app or website. Once the wireframes get
							finalized, the full visual design (UI Design) will get applied to
							it for deciding matching color schemes, font styles, imagery, and
							other components in accordance with your brand guidelines
						</p>
					</div>
					<div className='relative flex items-center justify-center w-[399.837px] ml-5'>
						<img
							src={img4}
							className='z-10 w-[300.361px] h-[190.907px]'
							alt=''
						/>
						<img
							src={Ellipse4}
							className='absolute -z-20 h-[268.041px]'
							alt=''
						/>
						<img src={Grp4} className='absolute -z-10' alt='' />
					</div>
				</div>
				<div className='flex space-x-12 !mb-[150px] '>
					<div className='relative flex items-center justify-center w-[399.837px] ml-5'>
						<img
							src={img5}
							className='z-10 w-[300.361px] h-[190.907px]'
							alt=''
						/>
						<img
							src={Ellipse5}
							className='absolute -z-20 h-[268.041px]'
							alt=''
						/>
						<img src={Grp5} className='absolute -z-10' alt='' />
					</div>
					<div>
						<div className='flex space-x-5 -ml-16'>
							<img src={num5} className='w-[57px] h-[57px]' alt='' />
							<h4 className='max-w-[527px] font-dm text-[36px] font-[700] text-[#ed1c24]'>
								Final Development & Testing
							</h4>
						</div>
						<p className='max-w-[507px] font-dm font-[400] text-[22px] text-[#000]'>
							The designed layout gets released to experienced development
							experts for completing the app's coding task at the faster pace.
							Your dedicated project manager will keep you informed about the
							development progress and stages that your app has cleared
							successfully. Once the developed product has passed the full
							assurance testing stages, the app will be shared with you.
						</p>
					</div>
				</div>
				<div className='flex space-x-10 !mb-[150px] '>
					<div>
						<div className='flex space-x-5 -ml-16'>
							<img src={num6} className='w-[57px] h-[57px]' alt='' />
							<h4 className='max-w-[527px] font-dm text-[36px] font-[700] text-[#ed1c24]'>
								Plan a Big Launch
							</h4>
						</div>
						<p className='max-w-[547px] font-dm font-[400] text-[22px] text-[#000]'>
							Based on the features, nature, and platform-support, the app will
							get released on the Apple, Google Play or Windows stores within
							the pre-defined time-frame. Felix TechLabs holds expertise in
							launching your apps with great excellence and can assist you to
							manage the entire release process with great ease and comfort.
						</p>
					</div>
					<div className='relative flex items-center justify-center w-[379.837px] ml-5'>
						<img
							src={img6}
							className='z-10 w-[300.361px] h-[190.907px]'
							alt=''
						/>
						<img
							src={Ellipse6}
							className='absolute -z-20 h-[268.041px]'
							alt=''
						/>
						<img src={Grp6} className='absolute -z-10' alt='' />
					</div>
				</div>
			</div>

			<div className='flex flex-col justify-evenly items-center space-y-8 my-[5rem]'>
				<p className='text-center w-[925px] text-[#000] font-dm text-[22px] font-[400]'>
					At Felix TechLabs, we expect to carry business relationships. Thus,
					the launch of your app is just the beginning of a never-ending
					journey. We can offer a range of marketing, support and maintenance
					services to keep your app up on leading app stores and can help it get
					ample visibility amongst the defined target group!
				</p>
				<h4 className='text-center w-[787.157px] text-[#ed1c24] font-dm text-[28px] font-[500]'>
					Connect with us once; we assure that we will be your trusted
					technology partner in your success.
				</h4>
				<div className='relative flex items-center justify-center'>
					<img src={Contactus} alt='' />
					<img src={fox} className='absolute top-16 left-[3.6rem]' alt='' />
				</div>
			</div>
		</>
	)
}

export default StepProcess
