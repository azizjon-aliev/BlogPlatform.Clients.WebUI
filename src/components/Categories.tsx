import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Categories = () => {
    const [items] = useState([
        {title: "test", count: 12},
        {title: 'Business', count: 15},
        {title: 'Fashion', count: 5},
        {title: 'Food', count: 10},
        {title: 'Learn', count: 3},
        {title: 'Music', count: 7},
        {title: 'Nature', count: 0},
        {title: 'People', count: 13},
        {title: 'Sports', count: 7},
        {title: 'Technology', count: 17},
    ]);

    return (
        <div className="w-full bg-white shadow-sm rounded-sm p-4 ">
            {/* */}
            <h3 className="text-xl font-semibold text-gray-700 mb-3 font-roboto">Категории</h3>
            <div className="space-y-2">
                {items.map((item, index) => (
                    <a key={index}
                       href="#"
                       className="flex leading-4 items-center text-gray-700 font-semibold text-sm uppercase transition hover:text-blue-500">
                        <span className="mr-2">
                            <FontAwesomeIcon icon={["far", "folder-open"]}/>
                        </span>
                        <span>{item.title}</span>
                        <p className="ml-auto font-normal">({item.count})</p>
                    </a>
                ))}
            </div>
        </div>
    )
}