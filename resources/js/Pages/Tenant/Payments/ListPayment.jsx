import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Breadcrumb from '@/Components/Breadcrumb';
import { Tab } from '@headlessui/react';
import DataTable from 'react-data-table-component';
import StatusBadge from '@/Components/StatusBadge';
import { format } from 'date-fns';

const ListPayment = ({ auth }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />
            <Breadcrumb breadcrumb="home" />

            <h1>ListPayment</h1>
            
        </AuthenticatedLayout>
    )
}

export default ListPayment