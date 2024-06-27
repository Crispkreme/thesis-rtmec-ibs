import Authenticated from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Head } from '@inertiajs/react';
import { Link } from 'react-router-dom';

const Tenant = ({ auth, tenants }) => {
    // Parse the JSON string to get the data array
    const parsedTenants = JSON.parse(tenants);
    const { data } = parsedTenants;

    const capitalizeWords = (string) => {
        return string
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className='font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight'>
                    Tenants
                </h2>
            }
        >
            <Head title="Rooms Details" />

            <div className="py-2">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className='p-6 text-gray-900 dark:text-gray-100'>
                            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                                <thead className='text-xs text-gray-700 dark:text-gray-400 border-b-2 border-gray-500'>
                                    <tr className='text-nowrap'>
                                        <th className='px-3 py-2'>ID</th>
                                        <th className='px-3 py-2'>Tenant</th>
                                        <th className='px-3 py-2'>Room Number</th>
                                        <th className='px-3 py-2'>Room Status</th>
                                        <th className='px-3 py-2'>TVC</th>
                                        <th className='px-3 py-2'>TCC</th>
                                        <th className='px-3 py-2 text-center'>Previous Balance</th>
                                        <th className='px-3 py-2 text-center'>Current Balance</th>
                                        <th className='px-3 py-2 text-right'>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((tenant, index) => (
                                        <tr key={tenant.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                            <td className='px-3 py-2'>{index + 1}</td>
                                            <td className='px-3 py-2'>{capitalizeWords(tenant.tenant_name)}</td>
                                            <td className='px-3 py-2'>{capitalizeWords(tenant.tenant_room_number)}</td>
                                            <td className='px-3 py-2'>{capitalizeWords(tenant.tenant_room_status)}</td>
                                            <td className='px-3 py-2'>{tenant.total_voltage}</td>
                                            <td className='px-3 py-2'>{tenant.total_current}</td>
                                            <td className='px-3 py-2 text-center'>{tenant.previous_balance}</td>
                                            <td className='px-3 py-2 text-center'>{tenant.current_balance}</td>
                                            <td className='px-3 py-2'>
                                                <Link href={route('admin.tenant.edit', tenant.id)} className='text-blue-600 hover:text-blue-900'>
                                                    Edit
                                                </Link>
                                                <Link href={route('admin.tenant.destroy', tenant.id)} className='text-red-600 hover:text-red-900 ml-2'>
                                                    Delete
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

export default Tenant;
