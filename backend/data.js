import bcrypt from 'bcryptjs';

const data = {
    users: [{
            name = "shafaq",
            email = "admin@example.com",
            password = bcrypt.hashAsync('1234', 8),
            isAdmin: true,
        },
        {
            name = "mahnoor",
            email = "user@example.com",
            password = bcrypt.hashAsync('1234', 8),
            isAdmin: false,
        },

    ],
    products: [{
            _id: '1',
            name: 'Nike slim shirt',
            category: 'Shirts',
            image: '/images/pro1.jpg',
            price: 20,
            countInStock: 10,
            brand: 'Nike',
            rating: 4,
            numReviews: 12,
            descirption: 'Best quality product',
        },
        {
            _id: '2',
            name: 'Adidas fit shirt',
            category: 'Shirts',
            image: '/images/pro2.jpg',
            price: 22,
            countInStock: 15,
            brand: 'Adidas',
            rating: 4.5,
            numReviews: 8,
            descirption: 'Best quality product',
        },
        {
            _id: '3',
            name: 'Shafs shirt',
            category: 'Shirts',
            image: '/images/pro3.jpg',
            price: 15,
            countInStock: 20,
            brand: 'Shafs',
            rating: 3.5,
            numReviews: 5,
            descirption: 'Best quality product',
        },
        {
            _id: '4',
            name: 'Nike slim shirt',
            category: 'Shirts',
            image: '/images/pro4.jpg',
            price: 25,
            countInStock: 0,
            brand: 'Nike',
            rating: 4,
            numReviews: 10,
            descirption: 'Best quality product',
        },
        {
            _id: '5',
            name: 'Nike slim shirt',
            category: 'Shirts',
            image: '/images/pro5.jpg',
            price: 32,
            countInStock: 1,
            brand: 'Nike',
            rating: 4,
            numReviews: 10,
            descirption: 'Best quality product',
        },
        {
            _id: '6',
            name: 'Nike slim shirt',
            category: 'Shirts',
            image: '/images/pro6.jpg',
            price: 25,
            countInStock: 5,
            brand: 'Nike',
            rating: 3,
            numReviews: 10,
            descirption: 'Best quality product',
        },
        {
            _id: '6',
            name: 'Nike slim shirt',
            category: 'Shirts',
            image: '/images/pro7.jpg',
            price: 13,
            countInStock: 3,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            descirption: 'Best quality product',
        }, {
            _id: '6',
            name: 'Nike slim shirt',
            category: 'Shirts',
            image: '/images/pro8.jpg',
            price: 8,
            countInStock: 5,
            brand: 'Nike',
            rating: 4,
            numReviews: 14,
            descirption: 'Best quality product',
        }, {
            _id: '6',
            name: 'Nike slim shirt',
            category: 'Shirts',
            image: '/images/pro9.jpg',
            price: 30,
            countInStock: 5,
            brand: 'Nike',
            rating: 4,
            numReviews: 20,
            descirption: 'Best quality product',
        },

    ],
};

export default data;