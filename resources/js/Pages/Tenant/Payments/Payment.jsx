import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Breadcrumb from '@/Components/Breadcrumb';
import { Tab } from '@headlessui/react';
import DataTable from 'react-data-table-component';
import StatusBadge from '@/Components/StatusBadge';
import { format } from 'date-fns';

const columns = [
    {
      name: 'Tenant',
      selector: row => row.tenant_name,
      sortable: true,
    },
    {
      name: 'Status',
      selector: row => <StatusBadge status={row.receipt_status} />,
      sortable: true,
    },
    {
      name: 'Total Amount',
      selector: row => row.total_amount,
      sortable: true,
    },
    {
      name: 'Amount Paid',
      selector: row => row.amount_paid,
      sortable: true,
    },
    {
      name: 'Balance',
      selector: row => row.balance,
      sortable: true,
    },
    {
      name: 'Date',
      selector: row => format(new Date(row.created_at), 'MMMM dd, yyyy'),
      sortable: true,
    },
];

const Payment = ({ auth, receipts, paidReceipts, unpaidReceipts }) => {

    const data = receipts.data;
    const paidReceiptData = paidReceipts.data;
    const unpaidReceiptData = unpaidReceipts.data;

    console.log("paidReceiptData", paidReceiptData);
    console.log("unpaidReceiptData", unpaidReceiptData);

    const [filterText, setFilterText] = useState('');

    const filteredItems = data.filter(
        item =>
          item.tenant_name.toLowerCase().includes(filterText.toLowerCase()) ||
          item.receipt_status.toLowerCase().includes(filterText.toLowerCase()) ||
          item.total_amount.toString().includes(filterText) ||
          item.amount_paid.toString().includes(filterText) ||
          item.balance.toString().includes(filterText) ||
          item.created_at.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />
            <Breadcrumb breadcrumb="home" />

            <div className='grid gap-4 xl:grid-cols-2 2xl:grid-cols-3 mt-5'>
                <div className='p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800'>
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-[300px] p-2 border border-gray-300 rounded"
                            value={filterText}
                            onChange={e => setFilterText(e.target.value)}
                        />
                    </div>
                    <div className="overflow-x-auto">
                        <DataTable
                            columns={columns}
                            data={filteredItems}
                            pagination
                            paginationComponentOptions={{
                                rowsPerPageText: 'Rows per page:',
                                rangeSeparatorText: 'of',
                            }}
                            noDataComponent="No records available."
                        />
                    </div>
                </div>
                <div className='p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800'>
                    <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">Monthly Tenant Payments</h3>
                    
                    <Tab.Group>
                        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
                            <Tab
                                className={({ selected }) =>
                                    selected ? 'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 bg-white shadow rounded-lg' : 'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 bg-white rounded-lg'
                                }
                            >
                                Paid Payment
                            </Tab>
                            <Tab
                                className={({ selected }) =>
                                    selected ? 'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 bg-white shadow rounded-lg' : 'w-full py-2.5 text-sm leading-5 font-medium text-blue-700 bg-white rounded-lg'
                                }
                            >
                                Unpaid Payment
                            </Tab>
                        </Tab.List>
                        <Tab.Panels className="mt-2">
                            <Tab.Panel className="p-3 bg-white rounded-xl shadow">
                                {paidReceiptData.length > 0 ? (
                                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                        {paidReceiptData.map(receipt => (
                                            <li key={receipt.id} className="py-3 sm:py-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center min-w-0">
                                                        <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/iphone.png" alt="imac image" />
                                                        <div className="ml-3">
                                                            <p className="font-medium text-gray-900 truncate dark:text-white">
                                                                {receipt.tenant_name}
                                                            </p>
                                                            <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                                                                </svg>
                                                                {receipt.receipt_status}
                                                                <span className="ml-2 text-gray-500">{format(new Date(receipt.created_at), 'MMMM dd, yyyy')}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                        PHP {receipt.total_amount}
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-500">No paid payments found.</p>
                                )}
                            </Tab.Panel>
                            <Tab.Panel className="p-3 bg-white rounded-xl shadow">
                                {unpaidReceiptData.length > 0 ? (
                                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                        {unpaidReceiptData.map(receipt => (
                                            <li key={receipt.id} className="py-3 sm:py-4">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center min-w-0">
                                                        <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/iphone.png" alt="imac image" />
                                                        <div className="ml-3">
                                                            <p className="font-medium text-gray-900 truncate dark:text-white">
                                                                {receipt.tenant_name}
                                                            </p>
                                                            <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                                                                </svg>
                                                                {receipt.amount_paid}
                                                                <span className="ml-2 text-gray-500">{format(new Date(receipt.created_at), 'MMMM dd, yyyy')}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                                        {receipt.total_amount}
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-500">No unpaid payments found.</p>
                                )}
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>
            
        </AuthenticatedLayout>
    );
}

export default Payment;
