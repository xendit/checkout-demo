/**
 * checkout.js
 * Xendit Checkout Demo
 * This file contains the logic behind demo store page
 */

(async () => {
    'use strict';

    let integration;
    let invoiceUrl;
    let displayedCartDetails;

    // configuration form elements
    const selectIntegration = document.getElementById('select-integration');
    const selectCountry = document.getElementById('select-country');
    const buttonStartDemo = document.getElementById('button-start-demo');
    const formConfigure = document.getElementById('form-configure');

    // modal elements
    const modal = document.querySelector('.modal-popup');
    const modalCloseTrigger = document.querySelector(
        '.modal-popup__icon-close'
    );
    const bodyBlackout = document.querySelector('.modal-background');
    const iframe = document.getElementById('iframe-invoice');

    // event listeners
    selectIntegration.addEventListener('change', () => {
        setupIntegration();
    });

    selectCountry.addEventListener('change', () => {
        setupCart();
    });

    formConfigure.addEventListener('submit', (event) => {
        event.preventDefault();
        startDemo();
    });

    modalCloseTrigger.addEventListener('click', () => {
        modal.classList.remove('modal-popup--visible');
        bodyBlackout.classList.remove('modal-background--blackout');
    });

    // handles integration mode selection
    const setupIntegration = () => {
        integration =
            selectIntegration.options[selectIntegration.selectedIndex].value;
        invoiceUrl = null;
    };

    // handles cart details changes based on country selection
    const setupCart = () => {
        const country =
            selectCountry.options[selectCountry.selectedIndex].value;

        // remove any created invoice url if there is a change in selection
        if (displayedCartDetails && displayedCartDetails.country !== country)
            invoiceUrl = null;

        // get cart data based on country selection
        displayedCartDetails = cartData.find(
            (item) => item.country === country
        );

        // cart content
        const cartContent = displayedCartDetails.cart.order_items.map(
            (orderItem) => {
                const {
                    image,
                    name,
                    quantity,
                    currency,
                    formatted_price: formattedPrice,
                    formatted_total_amount: formattedTotalAmount
                } = orderItem;
                return (
                    '<div class="cart-summary__order-item">' +
                    `<img class="order-item__image" src="${image}" />` +
                    '<div class="order-item__description">' +
                    `<div class="order-item__description-name">${name}</div>` +
                    `<div class="order-item__description-count">${quantity} x ${currency} ${formattedPrice}</div>` +
                    '</div>' +
                    `<div class="order-item__price">${currency} ${formattedTotalAmount}</div>` +
                    '</div>'
                );
            }
        );

        // subtotal content
        const {
            currency: subtotalCurrency,
            formatted_amount: subtotalAmount
        } = displayedCartDetails.cart.subtotal;

        const {
            currency: shippingCurrency,
            formatted_price: shippingPrice
        } = displayedCartDetails.cart.shipping;

        const subtotalContent =
            '<div class="cart-subtotal__order-item">' +
            '<div class="order-item__label">Subtotal</div>' +
            `<div class="order-item__price">${subtotalCurrency} ${subtotalAmount}</div>` +
            '</div>' +
            '<div class="cart-subtotal__order-item">' +
            '<div class="order-item__label">Shipping</div>' +
            `<div class="order-item__price">${shippingCurrency} ${shippingPrice}</div>` +
            '</div>';

        // total content
        const {
            currency: totalCurrency,
            formatted_amount: totalAmount
        } = displayedCartDetails.cart.total;

        const totalContent =
            '<div class="cart-total__order-item">' +
            '<div class="order-item__label">Total</div>' +
            `<div class="order-item__price">${totalCurrency} ${totalAmount}</div>` +
            '</div>';

        // render content
        document.getElementById('order-items').innerHTML = cartContent.join('');
        document.getElementById('subtotal').innerHTML = subtotalContent;
        document.getElementById('total').innerHTML = totalContent;

        // handle mobile content
        document.querySelector(
            '.cart-summary__total'
        ).innerText = `${totalCurrency} ${totalAmount}`;
    };

    // handles invoice creation upon checkout demo launch
    const startDemo = async () => {
        loadingDemoLaunch();

        if (!invoiceUrl) {
            // setup invoice data
            const { currency, amount } = displayedCartDetails.cart.total;
            const invoiceData = {
                currency,
                amount,
                redirect_url: `${window.location.origin}/try-checkout`
            };

            // create an invoice for store checkout
            try {
                const response = await fetch('/api/invoice', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify(invoiceData)
                });

                const data = await response.json();
                if (response.status >= 200 && response.status <= 299)
                    invoiceUrl = data.invoice_url;
                else alert(data.message);
            } catch (error) {
                alert(error);
            }
        }

        if (invoiceUrl)
            switch (integration) {
                case 'Dialog Pop-up':
                    launchModal();
                    break;
                default:
                    redirectToInvoice();
                    break;
            }

        loadingDemoLaunch();
    };

    // handles pop-up dialog option
    const launchModal = () => {
        iframe.src = invoiceUrl;
        modal.classList.add('modal-popup--visible');
        bodyBlackout.classList.add('modal-background--blackout');
    };

    // handles redirection option
    const redirectToInvoice = () => {
        window.location.href = invoiceUrl;
    };

    // handles button behaviour upon demo launch
    const loadingDemoLaunch = () => {
        buttonStartDemo.disabled = !buttonStartDemo.disabled;
    };

    // initial setup
    setupIntegration();
    setupCart();

    // avoid animation during page load
    document.body.classList.remove('preload');
})();
