import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Category} from "../models/Category.ts";
import {getCategories} from "../services/CategoryService.ts";

export const Categories = () => {
    const [items, setItems] = useState<Category[]>([]);

    useEffect(() => {
        getCategories().then(data => setItems(data));
    }, []);

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
                        <span>{item.name}</span>
                        <p className="ml-auto font-normal">({item.postsCount})</p>
                    </a>
                ))}
            </div>
        </div>
    )
}