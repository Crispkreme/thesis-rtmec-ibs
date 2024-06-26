import Authenticated from '@/Layouts/AuthenticatedLayout';
import Pagination from '@/Components/Pagination';
import React from 'react';
import { Head, Link, router } from '@inertiajs/react';
import { BiEdit, BiTrash } from 'react-icons/bi';
import SelectInput from '@/Components/SelectInput';
import SearchInput from '@/Components/TextInput';

const Tenant = ({ auth, tenants, queryParams = null }) => {
    
    const parsedTenants = JSON.parse(tenants);
    const { data } = parsedTenants;

    const tenantsObj = JSON.parse(tenants);
    const meta = tenantsObj.meta;

    const capitalizeWords = (string) => {
        return string
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    };

    queryParams = queryParams || {};
    const searchFieldChanged = (inputData, value) => {
        if(value) {
            queryParams[inputData] = value
        } else {
            delete queryParams[inputData]
        }

        router.get(route('admin.tenant'), queryParams);
    }
    const onKeyPress = (inputData, e) => {
        if(e.key !== 'Enter') return;
        searchFieldChanged(inputData, e.target.value);
    }
    const sortChanged = (name) => {
        if(name === queryParams.sort_field) {
            if(queryParams.sort_direction === 'asc') {
                queryParams.sort_direction = 'desc';
            } else {
                queryParams.sort_direction = 'asc';
            }
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = 'asc';
        }
        router.get(route('admin.tenant'), queryParams);
    }

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
                        <div className='p-6 text-gray-900 dark:text-gray-100 overflow-x-auto'>
                            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                                <thead className='text-xs text-gray-700 dark:text-gray-400 border-b-2 border-gray-500'>
                                    <tr className='text-nowrap'>
                                        <th className='px-3 py-3'>ID</th>
                                        <th onClick={(e) => sortChanged('name')} className='px-3 py-3'>Tenant</th>
                                        <th onClick={(e) => sortChanged('room_number')} className='px-3 py-3'>Room Number</th>
                                        <th onClick={(e) => sortChanged('room_status')} className='px-3 py-3'>Room Status</th>
                                        <th className='px-3 py-3'>TVC</th>
                                        <th className='px-3 py-3'>TCC</th>
                                        <th className='px-3 py-3 text-center'>Previous Balance</th>
                                        <th className='px-3 py-3 text-center'>Current Balance</th>
                                        <th className='px-3 py-3 text-right'>Action</th>
                                    </tr>
                                </thead>
                                <thead className='text-xs text-gray-700 dark:text-gray-400 border-b-2 border-gray-500'>
                                    <tr className='text-nowrap'>
                                        <th className='px-3 py-3'></th>
                                        <th className='px-3 py-3'></th>
                                        <th className='px-3 py-3'></th>
                                        <th className='px-3 py-3'></th>
                                        <th className='px-3 py-3'></th>
                                        <th className='px-3 py-3'>
                                            <SearchInput 
                                                className="w-full"
                                                defaultValue={queryParams.searchData}
                                                placeholder="Type to Search"
                                                onBlur={(e) => searchFieldChanged('searchData', e.target.value)}
                                                onKeyPress={(e) => onKeyPress('searchData', e)}
                                            />
                                        </th>
                                        <th className='px-3 py-3'>Tenant</th>
                                        <th className='px-3 py-3'>
                                            <SelectInput 
                                                className="w-full"
                                                defaultValue={queryParams.searchStatus}
                                                onChange={(e) => searchFieldChanged('searchStatus', e.target.value)}
                                            >
                                                <option value="">Select Status</option>
                                                <option value="available">Available</option>
                                                <option value="occupied">Occupied</option>
                                            </SelectInput>
                                        </th>
                                        <th className='px-3 py-3'>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((tenant, index) => (
                                        <tr key={tenant.id} className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                                            <td className='px-3 py-3'>{index + 1}</td>
                                            <td className='px-3 py-3'>{capitalizeWords(tenant.tenant_name)}</td>
                                            <td className='px-3 py-3'>{capitalizeWords(tenant.tenant_room_number)}</td>
                                            <td className='px-3 py-3'>
                                                {tenant.tenant_room_status === "available" && (
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                        <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                                                            <circle cx="4" cy="4" r="3"></circle>
                                                        </svg>
                                                        Available
                                                    </span>
                                                )}
                                                {tenant.tenant_room_status === "occupied" && (
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                        <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-red-400" fill="currentColor" viewBox="0 0 8 8">
                                                            <circle cx="4" cy="4" r="3"></circle>
                                                        </svg>
                                                        Occupied
                                                    </span>
                                                )}
                                            </td>
                                            <td className='px-3 py-3'>{tenant.total_voltage}</td>
                                            <td className='px-3 py-3'>{tenant.total_current}</td>
                                            <td className='px-3 py-3 text-center'>{tenant.previous_balance}</td>
                                            <td className='px-3 py-3 text-center'>{tenant.current_balance}</td>
                                            <td className='px-3 py-3 flex items-center justify-evenly'>
                                                <Link href={route('admin.tenant.edit', tenant.id)} className='border border-blue-600 rounded-md px-2 py-1 text-center text-blue-600 hover:text-blue-900 hover:border-blue-900 focus:outline-none'>
                                                    <BiEdit />
                                                </Link>
                                                <Link href={route('admin.tenant.destroy', tenant.id)} className='border border-red-600 rounded-md px-2 py-1 text-center text-red-600 hover:text-red-900 hover:border-red-900 focus:outline-none'>
                                                    <BiTrash />
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Pagination meta={meta} />
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
}

export default Tenant;
