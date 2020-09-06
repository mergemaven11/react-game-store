import React from 'react';

import BaseLayout from '../../components/base'
import Store from '../../components/store'

export default function StoreProductsPage() {
    return (
        <BaseLayout title="Browse our inventory">
            <Store />
        </BaseLayout>
    );
}