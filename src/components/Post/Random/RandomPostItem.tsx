export const RandomPostItem = () => {
    return (
        <a href="#" className="flex group">
            <div className="flex-shrink-0">
                <img src="src/images/img-1.jpg" className="h-14 w-20 rounded object-cover"/>
            </div>
            <div className="flex-grow pl-3">
                <h5
                    className="text-md leading-5 block font-roboto font-semibold  transition group-hover:text-blue-500">
                    Team Bitbose geared up to attend Blockchain
                </h5>
                <div className="flex text-gray-400 text-sm items-center">
                    <span className="mr-1 text-xs"><i className="far fa-clock"></i></span>
                    June 11, 2021
                </div>
            </div>
        </a>
    )
}