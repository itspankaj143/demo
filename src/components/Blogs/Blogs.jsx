/** @format */

import money from '../../assets/images/money-gb5d6e0116_1920 2.png'
import robot from '../../assets/images/robot-g9c2dcd4a9_1920 1 (1).png'

const Blogs = () => {
	return (
		<>
			<div className='flex justify-center items-center h-[56px]  mx-auto mt-44'>
				<h2 className='text-[#ed1c24] font-dm text-[52px] font-[700]'>Blogs</h2>
			</div>

			<div className='flex justify-center items-center space-x-24 mt-10 '>
				<select
					name=''
					id=''
					className='border border-black px-44 rounded-lg -ml-[21rem]'
				>
					<option value=''>Choose category</option>
				</select>
				<select name='' id='' className='border border-black px-16  rounded-lg'>
					<option value=''>Sort</option>
				</select>
			</div>

			{/* first */}

			<div className='flex  justify-center items-center space-y-16 space-x-40'>
				<div className='space-y-5'>
					<h2 className='w-[596px] h-[66px] text-[#ED1C24] font-dm text-[28px] font-[500]'>
						Importance Of Enterprise App For Proficient Growth Of Your Business
					</h2>
					<p className='w-[179px] h-[22px] text-[18px] font-dm font-[400] text-[#959595]'>
						June 15, 8 min read
					</p>
					<p className='w-[593px] h-[79px] text-[#000] text-[18px] font-dm font-[400]'>
						As the world is rapidly adopting digital, there is a marked hike in
						the number of enterprise apps catering to multiple business use
						cases aimed at one or more ...{' '}
					</p>
				</div>
				<img className='w-[341px] h-[227px]' src={money} alt='' />
			</div>

			{/* second */}

			<div className='flex  justify-center items-center space-y-16 space-x-40'>
				<div className='space-y-5'>
					<h2 className='w-[596px] h-[66px] text-[#ED1C24] font-dm text-[28px] font-[500]'>
						Importance Of Enterprise App For Proficient Growth Of Your Business
					</h2>
					<p className='w-[179px] h-[22px] text-[18px] font-dm font-[400] text-[#959595]'>
						June 15, 8 min read
					</p>
					<p className='w-[593px] h-[79px] text-[#000] text-[18px] font-dm font-[400]'>
						As the world is rapidly adopting digital, there is a marked hike in
						the number of enterprise apps catering to multiple business use
						cases aimed at one or more ...{' '}
					</p>
				</div>
				<img className='w-[341px] h-[227px]  ' src={robot} alt='' />
			</div>

			{/* third */}

			<div className='flex  justify-center items-center space-y-16 space-x-40'>
				<div className='space-y-5'>
					<h2 className='w-[596px] h-[66px] text-[#ED1C24] font-dm text-[28px] font-[500]'>
						Importance Of Enterprise App For Proficient Growth Of Your Business
					</h2>
					<p className='w-[179px] h-[22px] text-[18px] font-dm font-[400] text-[#959595]'>
						June 15, 8 min read
					</p>
					<p className='w-[593px] h-[79px] text-[#000] text-[18px] font-dm font-[400]'>
						As the world is rapidly adopting digital, there is a marked hike in
						the number of enterprise apps catering to multiple business use
						cases aimed at one or more ...{' '}
					</p>
				</div>
				<img className='w-[341px] h-[227px]' src={money} alt='' />
			</div>
		</>
	)
}

export default Blogs
