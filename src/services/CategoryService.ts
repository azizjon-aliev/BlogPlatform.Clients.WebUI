import {Category} from "../models/Category.ts";

export const getCategories = async (): Promise<Category[]> => {
    return [
        {
            id: 1,
            name: 'Технологии',
            postsCount: 5
        },
        {
            id: 2,
            name: 'Наука',
            postsCount: 3
        },
        {
            id: 3,
            name: 'Политика',
            postsCount: 7
        },
        {
            id: 4,
            name: 'Спорт',
            postsCount: 2
        },
        {
            id: 5,
            name: 'Искусство',
            postsCount: 4
        },
        {
            id: 6,
            name: 'Музыка',
            postsCount: 3
        },
        {
            id: 7,
            name: 'Кино',
            postsCount: 6
        },
        {
            id: 8,
            name: 'Литература',
            postsCount: 4
        },
        {
            id: 9,
            name: 'История',
            postsCount: 7
        },
        {
            id: 10,
            name: 'Путешествия',
            postsCount: 5
        },
        {
            id: 11,
            name: 'Природа',
            postsCount: 3
        },
        {
            id: 12,
            name: 'Культура',
            postsCount: 6
        },
        {
            id: 13,
            name: 'Образование',
            postsCount: 4
        },
        {
            id: 14,
            name: 'Здоровье',
            postsCount: 7
        },
        {
            id: 15,
            name: 'Красота',
            postsCount: 5
        },
        {
            id: 16,
            name: 'Мода',
            postsCount: 3
        },
        {
            id: 17,
            name: 'Еда',
            postsCount: 6
        },
        {
            id: 18,
            name: 'Психология',
            postsCount: 4
        },
        {
            id: 19,
            name: 'Семья',
            postsCount: 7
        },
        {
            id: 20,
            name: 'Дети',
            postsCount: 5
        },
        {
            id: 21,
            name: 'Животные',
            postsCount: 3
        },
        {
            id: 22,
            name: 'Приколы',
            postsCount: 6
        },
        {
            id: 23,
            name: 'Дизайн',
            postsCount: 4
        },
        {
            id: 24,
            name: 'Авто',
            postsCount: 7
        },
    ]
}