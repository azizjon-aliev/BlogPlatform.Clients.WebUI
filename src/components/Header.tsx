import Logo from '../assets/images/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {useState} from "react";

export default function Header() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const handleSidebarClick = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <nav className='shadow-sm'>
            <div className='container px-4 mx-auto flex items-center py-3'>
                <div className='lg:w-44 w-40'>
                    <a href='/'>
                        <img src={Logo} alt='logo' className='w-full'/>
                    </a>
                </div>

                <div className='ml-12 lg:flex space-x-5  hidden'>
                    <a
                        href='#'
                        className='flex items-center font-semibold text-sm  transition hover:text-blue-500'
                    >
						<span className='mr-2'>
							<FontAwesomeIcon icon={['fas', 'home']}/>
						</span>
                        Главная
                    </a>
                    <a
                        href='#'
                        className='flex items-center font-semibold text-sm  transition hover:text-blue-500'
                    >
						<span className='mr-2'>
							<FontAwesomeIcon icon={['fas', 'file-alt']}/>
						</span>
                        О нас
                    </a>
                    <a
                        href='#'
                        className='flex items-center font-semibold text-sm  transition hover:text-blue-500'
                    >
						<span className='mr-2'>
							<FontAwesomeIcon icon={['fas', 'phone']}/>
						</span>
                        Контакты
                    </a>
                </div>

                <div className='relative lg:ml-auto hidden lg:block'>
					<span className='absolute left-3 top-2 text-sm text-gray-500'>
						<FontAwesomeIcon icon={['fas', 'search']}/>
					</span>
                    <input
                        type='text'
                        className='block w-full shadow-sm border-none rounded-3xl  pl-11 pr-2 py-2 focus:outline-none bg-gray-50 text-sm text-gray-700 placeholder-gray-500'
                        placeholder='Поиск'
                    />
                </div>
                <div className='lg:ml-5 ml-auto'>
                    <a
                        href='#'
                        className=' text-sm  font-semibold hover:text-blue-500 transition flex items-center'
                    >
						<span className='mr-2'>
							<FontAwesomeIcon icon={['fas', 'user']}/>
						</span>
                        Вход/Регистрация
                    </a>
                </div>
                <div
                    className={`text-xl text-gray-700 cursor-pointer ml-4 xl:hidden block hover:text-blue-500 transition ${isSidebarOpen ? 'left-0' : '-left-80'}`}
                    id='open_sidebar'
                    onClick={handleSidebarClick}
                >
                    <FontAwesomeIcon icon={['fas', 'bars']}/>
                </div>
            </div>
        </nav>
    )
}
