export default function PostDetail() {
	return (
		<div className='rounded-sm overflow-hidden bg-white shadow-sm'>
			<div className=''>
				<img src='src/images/img-12.jpg' className='w-full h-96 object-cover' />
			</div>
			<div className='p-4 pb-5'>
				<h2 className='block text-2xl font-semibold text-gray-700 font-roboto'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iddo
					loremque, totam architecto odit pariatur Lorem ips dolor.
				</h2>
				<div className='mt-2 flex space-x-4'>
					<div className='flex text-gray-400 text-sm items-center'>
						<span className='mr-2 text-xs'>
							<i className='far fa-user'></i>
						</span>
						Blogging Tips
					</div>
					<div className='flex text-gray-400 text-sm items-center'>
						<span className='mr-2 text-xs'>
							<i className='far fa-clock'></i>
						</span>
						June 11, 2021
					</div>
				</div>

				<p className='text-gray-500 text-sm mt-5'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et
					sunt saepe accusamus eum ex sint est neque provident tempore, minus
					laborum repudiandae vitae temporibus nesciunt, sed enim quo harum a
					id, alias maiores! Incidunt iusto minus explicabo itaque iure
					recusandae
				</p>

				<p className='bg-green-50 border border-green-500 p-3 text-sm  mt-5'>
					<span className='text-xl mr-1 text-gray-400'>
						<i className='fas fa-quote-left'></i>
					</span>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
					blanditiis earum nam, quisquam magnam aut odio aliquam inventore
					quibusdam mollitia! Alias, mollitia eveniet iure quidem natus quis
					assumenda consectetur beatae. Lorem, ipsum dolor quibusdam.
					<span className='text-xl ml-1 text-gray-400'>
						<i className='fas fa-quote-right'></i>
					</span>
				</p>

				<p className='text-gray-500 text-sm mt-5'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et
					sunt saepe accusamus eum ex sint est neque provident tempore, minus
					laborum repudiandae vitae temporibus nesciunt, sed enim quo harum a
					id, alias maiores! Incidunt iusto minus explicabo itaque iure
					recusandae
				</p>

				<ul className='mt-6 pl-5  space-y-2'>
					<li className='text-sm'>
						<span className='mr-1'>
							<i className='fas fa-angle-right'></i>
						</span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Perspiciatis.
					</li>
					<li className='text-sm'>
						<span className='mr-1'>
							<i className='fas fa-angle-right'></i>
						</span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Perspiciatis.
					</li>
					<li className='text-sm'>
						<span className='mr-1'>
							<i className='fas fa-angle-right'></i>
						</span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Perspiciatis.
					</li>
					<li className='text-sm'>
						<span className='mr-1'>
							<i className='fas fa-angle-right'></i>
						</span>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Perspiciatis.
					</li>
				</ul>

				<p className='text-gray-500 text-sm mt-5'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et
					sunt saepe accusamus eum ex sint est neque provident tempore, minus
					laborum repudiandae vitae temporibus nesciunt, sed enim quo harum a
					id, alias maiores! Incidunt iusto minus explicabo itaque iure
					recusandae
				</p>

				<p className='text-gray-500 text-sm mt-5'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis et
					sunt saepe accusamus eum ex sint est neque provident tempore, minus
					laborum repudiandae vitae temporibus nesciunt, sed enim quo harum a
					id, alias maiores! Incidunt iusto minus explicabo itaque iure
					recusandae
				</p>

				<div className='flex items-center flex-wrap gap-2 mt-5'>
					<a
						href='#'
						className='px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white'
					>
						Beauti
					</a>
					<a
						href='#'
						className='px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white'
					>
						Sports
					</a>
					<a
						href='#'
						className='px-3 py-1  text-sm border border-gray-200 rounded-sm transition hover:bg-blue-500 hover:text-white'
					>
						Business
					</a>
				</div>

				<div className='mt-5 pt-5 border-t border-gray-200 flex gap-2'>
					<a
						href='#'
						className='w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800'
					>
						<i className='fab fa-facebook-f'></i>
					</a>
					<a
						href='#'
						className='w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800'
					>
						<i className='fab fa-twitter'></i>
					</a>
					<a
						href='#'
						className='w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800'
					>
						<i className='fab fa-instagram'></i>
					</a>
					<a
						href='#'
						className='w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800'
					>
						<i className='fab fa-pinterest-p'></i>
					</a>
					<a
						href='#'
						className='w-8 h-8 rounded-sm flex items-center justify-center border border-gray-400 text-base text-gray-800'
					>
						<i className='fab fa-linkedin-in'></i>
					</a>
				</div>
			</div>
		</div>
	)
}
