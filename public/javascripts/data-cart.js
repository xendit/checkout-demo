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
                    name: 'HoneyBadger Plushie',
                    quantity: 1,
                    price: 400000,
                    formatted_price: '400.000',
                    total_amount: 400000,
                    formatted_total_amount: '400.000',
                    currency: 'IDR',
                    image: '/images/products/plushie.jpg'
                },
                {
                    name: 'Xendit Mug',
                    quantity: 1,
                    price: 500000,
                    formatted_price: '500.000',
                    total_amount: 500000,
                    formatted_total_amount: '500.000',
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
                amount: 900000,
                formatted_amount: '900.000',
                currency: 'IDR'
            },
            total: {
                amount: 905000,
                formatted_amount: '905.000',
                currency: 'IDR'
            }
        }
    },
    {
        country: 'Philippines',
        cart: {
            order_items: [
                {
                    name: 'HoneyBadger Plushie',
                    quantity: 1,
                    price: 200,
                    formatted_price: '200',
                    total_amount: 200,
                    formatted_total_amount: '200',
                    currency: 'PHP',
                    image: '/images/products/plushie.jpg'
                },
                {
                    name: 'Xendit Mug',
                    quantity: 1,
                    price: 300,
                    formatted_price: '300',
                    total_amount: 300,
                    formatted_total_amount: '300',
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
                amount: 500,
                formatted_amount: '500',
                currency: 'PHP'
            },
            total: {
                amount: 510,
                formatted_amount: '510',
                currency: 'PHP'
            }
        }
    }
];
