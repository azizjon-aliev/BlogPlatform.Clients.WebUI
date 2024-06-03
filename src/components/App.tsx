import Header from "./Header.tsx";
import {Categories} from "./Categories.tsx";
import {RandomPostList} from "./Post/Random/RandomPostList.tsx";
import {TagList} from "./Tag/TagList.tsx";
import {SocialPluginList} from "./SocialPlugin/SocialPluginList.tsx";
import {PopularPostList} from "./Post/Popular/PopularPostList.tsx";
import {Footer} from "./Footer.tsx";
import {BigPost} from "./Post/BigPost.tsx";
import {useEffect, useState} from "react";
import {Post} from "../models/Post.ts";
import {getPosts} from "../services/PostService.ts";
import {PostList} from "./Post/PostList.tsx";

export default function App() {
    const [posts, setPosts] = useState<Post[]>([])
    const [bigPost, setBigPost] = useState<Post>()
    const [isOpenSidebar] = useState(true)

    useEffect(() => {
        getPosts().then((data) => {
            setPosts(data)
            setBigPost(data[0])
        })
    }, []);

    return (
        <div className='font-poppins text-gray-600'>
            {/* navbar */}
            <Header/>

            {/* main */}
            <main className="pt-12 bg-gray-100 pb-12">
                <div className="container mx-auto px-4 flex flex-wrap lg:flex-nowrap">
                    {/* left sidebar */}
                    <div className="w-3/12 hidden xl:block">
                        {/* categories */}
                        <Categories/>

                        {/* random posts */}
                        <RandomPostList/>
                    </div>

                    {/* Main content */}
                    <div className="xl:w-6/12 lg:w-9/12 w-full  xl:ml-6 lg:mr-6">

                        {/* title */}
                        <div className="flex bg-white px-3 py-2 justify-between items-center rounded-sm mb-5">
                            <h5 className="text-base uppercase font-semibold font-roboto">Технологии</h5>
                            <a href="#"
                               className="text-white py-1 px-3 rounded-sm uppercase text-sm bg-blue-500 border border-blue-500 hover:text-blue-500 hover:bg-transparent transition">
                                Все
                            </a>
                        </div>

                        {/* big post */}
                        {bigPost && <BigPost post={bigPost}/>}

                        {/* regular post */}
                        <PostList posts={posts}/>
                    </div>

                    {/* right sidebar */}
                    <div className="lg:w-3/12 w-full mt-8 lg:mt-0">
                        {/* Social plugin */}
                        <SocialPluginList/>

                        {/* Popular posts */}
                        <PopularPostList/>

                        {/* tag */}
                        <TagList/>
                    </div>

                </div>
            </main>

            {/* mobile menu */}
            <div
                className={`fixed w-full h-full bg-black bg-opacity-25 left-0 top-0 z-10 ${!isOpenSidebar ? 'opacity-0 invisible' : ''} transition-all duration-500 xl:hidden`}
                id="sidebar_wrapper">
                <div
                    className={`fixed top-0 w-72 h-full bg-white shadow-md z-10 flex flex-col transition-all duration-500 ${isOpenSidebar ? 'left-0' : '-left-80'}`}
                    id="sidebar">

                    {/* search and menu */}
                    <div className="lg:hidden">
                        {/* searchbar */}
                        <div className="relative mx-3 mt-3 shadow-sm">
                    <span className="absolute left-3 top-2 text-sm text-gray-500">
                        <i className="fas fa-search"></i>
                    </span>
                            <input type="text"
                                   className="block w-full shadow-sm border-none rounded-3xl  pl-11 pr-2 py-2 focus:outline-none bg-gray-50 text-sm text-gray-700 placeholder-gray-500"
                                   placeholder="Search"/>
                        </div>

                        {/* navlink */}
                        <h3 className="text-xl font-semibold text-gray-700 mb-1 font-roboto pl-3 pt-3">Menu</h3>
                        <div className="">
                            <a href="index.html"
                               className="flex px-4 py-1 uppercase items-center font-semibold text-sm  transition hover:text-blue-500">
                        <span className="w-6">
                            <i className="fas fa-home"></i>
                        </span>
                                Home
                            </a>
                            <a href="#"
                               className="flex px-4 py-1 uppercase items-center font-semibold text-sm  transition hover:text-blue-500">
                        <span className="w-6">
                            <i className="far fa-file-alt"></i>
                        </span>
                                About
                            </a>
                            <a href="#"
                               className="flex px-4 py-1 uppercase items-center font-semibold text-sm  transition hover:text-blue-500">
                        <span className="w-6">
                            <i className="fas fa-phone"></i>
                        </span>
                                Contact
                            </a>
                        </div>
                        {/* navlinks end */}
                    </div>

                    {/* categories */}
                    <Categories/>
                </div>
            </div>

            {/* footer */}
            <Footer/>
        </div>
    )
}
