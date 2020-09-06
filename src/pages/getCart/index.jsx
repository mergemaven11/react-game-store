import React from 'react';

import BaseLayout from '../../components/base'
import Cart from '../../components/cart'

const StripeAPI = `${process.env.REACT_APP_STRIPE_API_TOKEN}`


export default function ConfirmCartPage() {
    return (
        <BaseLayout title="Review Cart">
            <Cart stripeToken={StripeAPI}/>
        </BaseLayout>
    );
}