/**
 * data-cart.js
 * Xendit Checkout Demo
 * This file contains the dummy demo store cart data
 */

const cartData = [
    {
        country: 'Indonesia',
        cart: {
            order_items: [
                {
                    name: 'Honey Badger Plushie',
                    quantity: 1,
                    price: 200000,
                    formatted_price: '200.000',
                    total_amount: 200000,
                    formatted_total_amount: '200.000',
                    currency: 'IDR',
                    image: '/images/products/plushie.jpg'
                },
                {
                    name: 'Xendit Mug',
                    quantity: 1,
                    price: 100000,
                    formatted_price: '100.000',
                    total_amount: 100000,
                    formatted_total_amount: '100.000',
                    currency: 'IDR',
                    image: '/images/products/mug.jpg'
                }
            ],
            shipping: {
                price: 5000,
                formatted_price: '5.000',
                currency: 'IDR'
            },
            subtotal: {
                amount: 300000,
                formatted_amount: '300.000',
                currency: 'IDR'
            },
            total: {
                amount: 305000,
                formatted_amount: '305.000',
                currency: 'IDR'
            }
        }
    },
    {
        country: 'Philippines',
        cart: {
            order_items: [
                {
                    name: 'Honey Badger Plushie',
                    quantity: 1,
                    price: 700,
                    formatted_price: '700',
                    total_amount: 700,
                    formatted_total_amount: '700',
                    currency: 'PHP',
                    image: '/images/products/plushie.jpg'
                },
                {
                    name: 'Xendit Mug',
                    quantity: 1,
                    price: 350,
                    formatted_price: '350',
                    total_amount: 350,
                    formatted_total_amount: '350',
                    currency: 'PHP',
                    image: '/images/products/mug.jpg'
                }
            ],
            shipping: {
                price: 10,
                formatted_price: '10',
                currency: 'PHP'
            },
            subtotal: {
                amount: 1050,
                formatted_amount: '1.050',
                currency: 'PHP'
            },
            total: {
                amount: 1060,
                formatted_amount: '1.060',
                currency: 'PHP'
            }
        }
    }
];
