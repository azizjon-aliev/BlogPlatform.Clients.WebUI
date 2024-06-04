import { FC } from 'react'
import { Categories } from '../components/Categories'
import { Footer } from '../components/Footer'
import Header from '../components/Header'
import { PopularPostList } from '../components/Post/Popular/PopularPostList'
import PostDetail from '../components/Post/PostDetail'
import { RandomPostList } from '../components/Post/Random/RandomPostList'
import { SocialPluginList } from '../components/SocialPlugin/SocialPluginList'
import { TagList } from '../components/Tag/TagList'

const PostDetailPage: FC = () => {
	// const { id } = useParams()

	return (
		<div>
			{/*  navbar */}
			<Header />

			{/*  main */}
			<main className='pt-12 bg-gray-100 pb-12'>
				<div className='container mx-auto px-4 flex flex-wrap lg:flex-nowrap'>
					{/*  left sidebar */}
					<div className='w-3/12 hidden xl:block'>
						{/*  categories */}
						<Categories />

						{/*  random posts */}
						<RandomPostList />
					</div>

					{/*  Main content */}
					<div className='xl:w-6/12 lg:w-9/12 w-full  xl:ml-6 lg:mr-6'>
						{/*  post view */}
						<PostDetail />

						{/*  title */}
						<div className='flex bg-white px-3 py-2 justify-between items-center rounded-sm mt-8'>
							<h5 className='text-base uppercase font-semibold font-roboto'>
								Related post
							</h5>
							<a
								href='#'
								className='text-white py-1 px-3 rounded-sm uppercase text-sm bg-blue-500 border border-blue-500 hover:text-blue-500 hover:bg-transparent transition'
							>
								see more
							</a>
						</div>

						{/*  similer post */}
						<div className='grid grid-cols-2 md:grid-cols-3 gap-2 mt-4'>
							<div className='rounded-sm bg-white p-3 pb-5 shadow-sm'>
								<a href='#' className='block rounded-md overflow-hidden'>
									<img
										src='src/images/img-7.jpg'
										className='w-full h-40 object-cover transform hover:scale-110 transition duration-500'
									/>
								</a>
								<div className='mt-3'>
									<a href='#'>
										<h2 className='block text-base font-semibold text-gray-700 hover:text-blue-500 transition font-roboto'>
											Lorem, ipsum dolor amet sit consec tetur elit.
										</h2>
									</a>
									<div className='mt-2 flex space-x-3'>
										<div className='flex text-gray-400 text-xs items-center'>
											<span className='mr-1 text-xs'>
												<i className='far fa-user'></i>
											</span>
											Blogging Tips
										</div>
										<div className='flex text-gray-400 text-xs items-center'>
											<span className='mr-1 text-xs'>
												<i className='far fa-clock'></i>
											</span>
											June 11, 2021
										</div>
									</div>
								</div>
							</div>
							<div className='rounded-sm bg-white p-3 pb-5 shadow-sm'>
								<a href='#' className='block rounded-md overflow-hidden'>
									<img
										src='src/images/img-5.jpg'
										className='w-full h-40 object-cover transform hover:scale-110 transition duration-500'
									/>
								</a>
								<div className='mt-3'>
									<a href='#'>
										<h2 className='block text-base font-semibold text-gray-700 hover:text-blue-500 transition font-roboto'>
											Lorem, ipsum dolor amet sit consec tetur elit.
										</h2>
									</a>
									<div className='mt-2 flex space-x-3'>
										<div className='flex text-gray-400 text-xs items-center'>
											<span className='mr-1 text-xs'>
												<i className='far fa-user'></i>
											</span>
											Blogging Tips
										</div>
										<div className='flex text-gray-400 text-xs items-center'>
											<span className='mr-1 text-xs'>
												<i className='far fa-clock'></i>
											</span>
											June 11, 2021
										</div>
									</div>
								</div>
							</div>
							<div className='rounded-sm bg-white p-3 pb-5 shadow-sm hidden md:block'>
								<a href='#' className='block rounded-md overflow-hidden'>
									<img
										src='src/images/img-6.jpg'
										className='w-full h-40 object-cover transform hover:scale-110 transition duration-500'
									/>
								</a>
								<div className='mt-3'>
									<a href='#'>
										<h2 className='block text-base font-semibold text-gray-700 hover:text-blue-500 transition font-roboto'>
											Lorem, ipsum dolor amet sit consec tetur elit.
										</h2>
									</a>
									<div className='mt-2 flex space-x-3'>
										<div className='flex text-gray-400 text-xs items-center'>
											<span className='mr-1 text-xs'>
												<i className='far fa-user'></i>
											</span>
											Blogging Tips
										</div>
										<div className='flex text-gray-400 text-xs items-center'>
											<span className='mr-1 text-xs'>
												<i className='far fa-clock'></i>
											</span>
											June 11, 2021
										</div>
									</div>
								</div>
							</div>
						</div>

						{/*  comment */}
						<div className='p-4 bg-white rounded-sm shadow-sm mt-8'>
							<h4 className='text-base uppercase  font-semibold mb-4 font-roboto'>
								Post a comment
							</h4>
							<p className='text-sm text-gray-500 mb-4'>12 comments</p>

							<div className='space-y-5'>
								<div className='flex items-start border-b  pb-5 border-gray-200'>
									<div className='w-12 h-12 flex-shrink-0'>
										<img src='src/images/avatar.png' className='w-full' />
									</div>
									<div className='flex-grow pl-4'>
										<h4 className='text-base  font-roboto'>Rasel Ahmed</h4>
										<p className='text-xs text-gray-400'>
											9 Aprile 2021 at 12:34 AM
										</p>
										<p className='text-sm font-600 mt-2'>
											Great article. Thanks
										</p>
										<div className='flex gap-2 mt-2'>
											<button className='text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition'>
												Reply
											</button>
											<button className='text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition'>
												Delete
											</button>
										</div>
									</div>
								</div>
								<div className='flex items-start border-b  pb-5 border-gray-200'>
									<div className='w-12 h-12 flex-shrink-0'>
										<img src='src/images/avatar-2.png' className='w-full' />
									</div>
									<div className='flex-grow pl-4'>
										<h4 className='text-base  font-roboto'>John Doe</h4>
										<p className='text-xs text-gray-400'>
											9 Aprile 2021 at 12:34 AM
										</p>
										<p className='text-sm font-600 mt-2'>
											Great article. Thanks
										</p>
										<div className='flex gap-2 mt-2'>
											<button className='text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition'>
												Reply
											</button>
											<button className='text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition'>
												Delete
											</button>
										</div>
									</div>
								</div>
								<div className='flex items-start'>
									<div className='w-12 h-12 flex-shrink-0'>
										<img src='src/images/avatar.png' className='w-full' />
									</div>
									<div className='flex-grow pl-4'>
										<h4 className='text-base  font-roboto'>Rasel Ahmed</h4>
										<p className='text-xs text-gray-400'>
											9 Aprile 2021 at 12:34 AM
										</p>
										<p className='text-sm font-600 mt-2'>
											Great article. Thanks
										</p>
										<div className='flex gap-2 mt-2'>
											<button className='text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition'>
												Reply
											</button>
											<button className='text-gray-500 px-1 text-xs border border-gray-200 rounded-sm shadow-sm hover:bg-blue-500 hover:text-white transition'>
												Delete
											</button>
										</div>
									</div>
								</div>
							</div>

							<form action='#' className='mt-8'>
								<h5 className='text-base  mb-1'>Comment:</h5>
								<textarea
									className='w-full border border-gray-200 py-3 px-5 text-sm  rounded-sm h-20 focus:outline-none focus:border-gray-400'
									placeholder='type your comment'
								></textarea>
								<div className='mt-2'>
									<button
										type='submit'
										className='text-white py-1 px-3 rounded-sm uppercase text-sm bg-blue-500 border border-blue-500 hover:text-blue-500 hover:bg-transparent transition'
									>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>

					{/*  right sidebar */}
					<div className='lg:w-3/12 w-full mt-8 lg:mt-0'>
						{/*  Social plugin */}
						<SocialPluginList />

						{/*  Popular posts */}
						<PopularPostList />

						{/*  tag */}
						{/*  categories */}
						<TagList />
					</div>
				</div>
			</main>

			{/*  mobile menu */}
			<div
				className='fixed w-full h-full bg-black bg-opacity-25 left-0 top-0 z-10 opacity-0 invisible transition-all duration-500 lg:hidden'
				id='sidebar_wrapper'
			>
				<div
					className='fixed top-0 w-72 h-full bg-white shadow-md z-10 flex flex-col transition-all duration-500 -left-80'
					id='sidebar'
				>
					{/*  searchbar */}
					<div className='relative mx-3 mt-3 shadow-sm'>
						<span className='absolute left-3 top-2 text-sm text-gray-500'>
							<i className='fas fa-search'></i>
						</span>
						<input
							type='text'
							className='block w-full shadow-sm border-none rounded-3xl  pl-11 pr-2 py-2 focus:outline-none bg-gray-50 text-sm text-gray-700 placeholder-gray-500'
							placeholder='Search'
						/>
					</div>

					{/*  navlink */}
					<h3 className='text-xl font-semibold text-gray-700 mb-1 font-roboto pl-3 pt-3'>
						Menu
					</h3>
					<div className=''>
						<a
							href='#'
							className='flex px-4 py-1 uppercase items-center font-semibold text-sm  transition hover:text-blue-500'
						>
							<span className='w-6'>
								<i className='fas fa-home'></i>
							</span>
							Home
						</a>
						<a
							href='#'
							className='flex px-4 py-1 uppercase items-center font-semibold text-sm  transition hover:text-blue-500'
						>
							<span className='w-6'>
								<i className='far fa-file-alt'></i>
							</span>
							About
						</a>
						<a
							href='#'
							className='flex px-4 py-1 uppercase items-center font-semibold text-sm  transition hover:text-blue-500'
						>
							<span className='w-6'>
								<i className='fas fa-phone'></i>
							</span>
							Contact
						</a>
					</div>
					{/*  navlinks end */}

					{/*  categories */}
					<Categories />
				</div>
			</div>

			{/*  footer */}
			<Footer />
		</div>
	)
}

export default PostDetailPage
