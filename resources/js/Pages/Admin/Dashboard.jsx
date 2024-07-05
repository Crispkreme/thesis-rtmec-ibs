import React, { useState } from 'react';
import { Tab } from '@headlessui/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { HiArrowNarrowUp } from 'react-icons/hi';
import Breadcrumb from '@/Components/Breadcrumb';
import AreaChartComponent from '@/Components/Charts/AreaChartComponent';
import BarChartComponent from '@/Components/Charts/BarChartComponent';
import LineChartComponent from '@/Components/Charts/LineChartComponent';

export default function Dashboard({ auth }) {
    const data1 = [3, 1, 5, 8, 20, 10, 15, 30];
    const data2 = [2, 3, 10, 5, 5, 9, 10, 10];
    const total = data1.map((num, idx) => num + data2[idx]);

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
        datasets: [
            {
                label: "Data1",
                data: data1,
                backgroundColor: "rgba(87, 121, 234, 0.6)",
                borderColor: "rgba(87, 121, 234, 0.6)",
                order: 1,
            },
            {
                label: "Data2",
                data: data2,
                backgroundColor: "rgba(18, 200, 150, 0.6)",
                borderColor: "rgba(18, 200, 150, 0.6)",
                order: 1,
            },
            {
                label: "Total",
                data: total,
                backgroundColor: "rgba(234, 87, 102, 0.6)",
                borderColor: "rgba(234, 87, 102, 0.6)",
                fill: false,
                pointHoverRadius: 20,
                pointHoverBorderWidth: 5,
                type: "line",
                order: 0,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 3000,
            easing: "easeInBounce",
        },
        title: {
            display: true,
            text: "Bar + Line Chart",
            fontSize: 25,
        },
        scales: {
            xAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: "Months",
                    },
                    stacked: true,
                },
            ],
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: "Values",
                    },
                    stacked: true,
                },
            ],
        },
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />
            <Breadcrumb breadcrumb="home" />

            <div className='grid gap-4 xl:grid-cols-2 2xl:grid-cols-3 mt-5'>
                <div className='p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800'>
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex-shrink-0">
                            <span className="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">$45,385</span>
                            <h3 className="text-base font-light text-gray-500 dark:text-gray-400">Monthly Power Consumption</h3>
                        </div>
                        <div className="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
                            12.5%
                            <HiArrowNarrowUp />
                        </div>
                    </div>
                    <div style={{ minHeight: '435px' }}>
                        <AreaChartComponent />
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
                                Tab 1 content
                            </Tab.Panel>
                            <Tab.Panel className="p-3 bg-white rounded-xl shadow">
                                Tab 2 content
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </div>

            <div className='grid w-full grid-cols-1 gap-4 mt-5 xl:grid-cols-2 2xl:grid-cols-3'>
                <div className='items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800'>
                    <div className="w-full">
                        <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">New products</h3>
                        <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
                        <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                            <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                                <HiArrowNarrowUp />
                                12.5%
                            </span>
                            Since last month
                        </p>
                    </div>
                    <div className="w-full" id="new-products-chart" style={{ minHeight: '155px' }}>
                        <BarChartComponent />
                    </div>
                </div>
                <div className='items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800'>
                    <div className="w-full">
                        <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">Users</h3>
                        <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
                        <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
                            <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                                <HiArrowNarrowUp />
                                3.4%
                            </span>
                            Since last month
                        </p>
                    </div>
                    <div className="w-full" id="new-products-chart" style={{ minHeight: '155px' }}>
                        <BarChartComponent />
                    </div>
                </div>
                <div className='p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800'>
                    <div className="w-full">
                        <h3 className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">Audience by age</h3>
                        <LineChartComponent />
                    </div>
                </div>
            </div>

            <div className='p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800 mt-5'>
                {/* Table here */}
            </div>
        </AuthenticatedLayout>
    );
}
