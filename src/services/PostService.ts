import {Post} from "../models/Post.ts";

export const getRandomPosts = async (count: number): Promise<Post[]> => {
    const posts = [
        {
            id: 1,
            image: 'https://via.placeholder.com/150',
            title: 'Post 1',
            createdAt: '2021-07-01'
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/150',
            title: 'Post 2',
            createdAt: '2021-07-02'
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/150',
            title: 'Post 3',
            createdAt: '2021-07-03'
        },
        {
            id: 4,
            image: 'https://via.placeholder.com/150',
            title: 'Post 4',
            createdAt: '2021-07-04'
        },
        {
            id: 5,
            image: 'https://via.placeholder.com/150',
            title: 'Post 5',
            createdAt: '2021-07-05'
        },
        {
            id: 6,
            image: 'https://via.placeholder.com/150',
            title: 'Post 6',
            createdAt: '2021-07-06'
        },
        {
            id: 7,
            image: 'https://via.placeholder.com/150',
            title: 'Post 7',
            createdAt: '2021-07-07'
        },
        {
            id: 8,
            image: 'https://via.placeholder.com/150',
            title: 'Post 8',
            createdAt: '2021-07-08'
        },
        {
            id: 9,
            image: 'https://via.placeholder.com/150',
            title: 'Post 9',
            createdAt: '2021-07-09'
        },
        {
            id: 10,
            image: 'https://via.placeholder.com/150',
            title: 'Post 10',
            createdAt: '2021-07-10'
        },
        {
            id: 11,
            image: 'https://via.placeholder.com/150',
            title: 'Post 11',
            createdAt: '2021-07-11'
        },
        {
            id: 12,
            image: 'https://via.placeholder.com/150',
            title: 'Post 12',
            createdAt: '2021-07-12'
        },
        {
            id: 13,
            image: 'https://via.placeholder.com/150',
            title: 'Post 13',
            createdAt: '2021-07-13'
        },
        {
            id: 14,
            image: 'https://via.placeholder.com/150',
            title: 'Post 14',
            createdAt: '2021-07-14'
        },
        {
            id: 15,
            image: 'https://via.placeholder.com/150',
            title: 'Post 15',
            createdAt: '2021-07-15'
        },
        {
            id: 16,
            image: 'https://via.placeholder.com/150',
            title: 'Post 16',
            createdAt: '2021-07-16'
        },
    ]

    for (let i = posts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [posts[i], posts[j]] = [posts[j], posts[i]];
    }


    return posts.slice(0, count);
}

export const getPopularPosts = async (count: number): Promise<Post[]> => {
    const posts = [
        {
            id: 1,
            image: 'https://via.placeholder.com/150',
            title: 'Post 1',
            createdAt: '2021-07-01'
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/150',
            title: 'Post 2',
            createdAt: '2021-07-02'
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/150',
            title: 'Post 3',
            createdAt: '2021-07-03'
        },
        {
            id: 4,
            image: 'https://via.placeholder.com/150',
            title: 'Post 4',
            createdAt: '2021-07-04'
        },
        {
            id: 5,
            image: 'https://via.placeholder.com/150',
            title: 'Post 5',
            createdAt: '2021-07-05'
        },
        {
            id: 6,
            image: 'https://via.placeholder.com/150',
            title: 'Post 6',
            createdAt: '2021-07-06'
        },
        {
            id: 7,
            image: 'https://via.placeholder.com/150',
            title: 'Post 7',
            createdAt: '2021-07-07'
        },
        {
            id: 8,
            image: 'https://via.placeholder.com/150',
            title: 'Post 8',
            createdAt: '2021-07-08'
        },
        {
            id: 9,
            image: 'https://via.placeholder.com/150',
            title: 'Post 9',
            createdAt: '2021-07-09'
        },
        {
            id: 10,
            image: 'https://via.placeholder.com/150',
            title: 'Post 10',
            createdAt: '2021-07-10'
        },
        {
            id: 11,
            image: 'https://via.placeholder.com/150',
            title: 'Post 11',
            createdAt: '2021-07-11'
        },
        {
            id: 12,
            image: 'https://via.placeholder.com/150',
            title: 'Post 12',
            createdAt: '2021-07-12'
        },
        {
            id: 13,
            image: 'https://via.placeholder.com/150',
            title: 'Post 13',
            createdAt: '2021-07-13'
        },
        {
            id: 14,
            image: 'https://via.placeholder.com/150',
            title: 'Post 14',
            createdAt: '2021-07-14'
        },
        {
            id: 15,
            image: 'https://via.placeholder.com/150',
            title: 'Post 15',
            createdAt: '2021-07-15'
        },
        {
            id: 16,
            image: 'https://via.placeholder.com/150',
            title: 'Post 16',
            createdAt: '2021-07-16'
        },
    ]
    return posts.slice(0, count);
}

