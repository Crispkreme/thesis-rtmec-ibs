import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { HiOutlineUserGroup, HiArrowNarrowUp, HiChevronDown } from 'react-icons/hi';
import { AiOutlineFileSync, AiOutlineFileProtect, AiOutlineSolution, AiOutlineProfile } from 'react-icons/ai';
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
                    stacked: true, // corrected from "true" to true
                },
            ],
            yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: "Values",
                    },
                    stacked: true, // corrected from "true" to true
                },
            ],
        },
    };

    return (

        // https://www.tailwindawesome.com/resources/flowbite-admin-dashboard/demo

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

                    <div className="sm:hidden">
                        <label for="tabs" className="sr-only">Select tab</label>
                        <select id="tabs" className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option>Statistics</option>
                            <option>Services</option>
                            <option>FAQ</option>
                        </select>
                    </div>

                    <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                        <li className="w-full">
                            <button id="faq-tab" data-tabs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="true" className="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500">Top products</button>
                        </li>
                        <li className="w-full">
                            <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false" className="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300">Top Customers</button>
                        </li>
                    </ul>

                    <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
                        <div className="pt-4" id="faq" role="tabpanel" aria-labelledby="faq-tab">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center min-w-0">
                                            <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/iphone.png" alt="imac image" />
                                            <div className="ml-3">
                                                <p className="font-medium text-gray-900 truncate dark:text-white">
                                                    iPhone 14 Pro 
                                                </p>
                                                <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                                                    </svg>
                                                    2.5% 
                                                    <span className="ml-2 text-gray-500">vs last month</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $445,467
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center min-w-0">
                                            <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/imac.png" alt="imac image" />
                                            <div className="ml-3">
                                                <p className="font-medium text-gray-900 truncate dark:text-white">
                                                    Apple iMac 27"
                                                </p>
                                                <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                                                    </svg>
                                                    12.5% 
                                                    <span className="ml-2 text-gray-500">vs last month</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $256,982
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center min-w-0">
                                            <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/watch.png" alt="watch image" />
                                            <div className="ml-3">
                                                <p className="font-medium text-gray-900 truncate dark:text-white">
                                                    Apple Watch SE
                                                </p>
                                                <div className="flex items-center justify-end flex-1 text-sm text-red-600 dark:text-red-500">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"></path>
                                                    </svg>
                                                    1.35% 
                                                    <span className="ml-2 text-gray-500">vs last month</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $201,869
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center min-w-0">
                                            <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/ipad.png" alt="ipad image" />
                                            <div className="ml-3">
                                                <p className="font-medium text-gray-900 truncate dark:text-white">
                                                    Apple iPad Air
                                                </p>
                                                <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z"></path>
                                                    </svg>
                                                    12.5% 
                                                    <span className="ml-2 text-gray-500">vs last month</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $103,967
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center min-w-0">
                                            <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/imac.png" alt="imac image" />
                                            <div className="ml-3">
                                                <p className="font-medium text-gray-900 truncate dark:text-white">
                                                    Apple iMac 24"
                                                </p>
                                                <div className="flex items-center justify-end flex-1 text-sm text-red-600 dark:text-red-500">
                                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"></path>
                                                    </svg>
                                                    2% 
                                                    <span className="ml-2 text-gray-500">vs last month</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $98,543
                                        </div>
                                    </div>
                                </li>               
                            </ul>
                        </div>
                        <div className="hidden pt-4" id="about" role="tabpanel" aria-labelledby="about-tab">
                            <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                                <li className="py-3 sm:py-4">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-shrink-0">
                                            <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png" alt="Neil image" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-medium text-gray-900 truncate dark:text-white">
                                            Neil Sims
                                            </p>
                                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                            email@flowbite.com
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                            $3320
                                        </div>
                                    </div>
                                </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green.png" alt="Neil image" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-gray-900 truncate dark:text-white">
                                        Bonnie Green
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        email@flowbite.com
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        $2467
                                    </div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/michael-gough.png" alt="Neil image" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-gray-900 truncate dark:text-white">
                                        Michael Gough
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        email@flowbite.com
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        $2235
                                    </div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/thomas-lean.png" alt="Neil image" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-gray-900 truncate dark:text-white">
                                        Thomes Lean
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        email@flowbite.com
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        $1842
                                    </div>
                                </div>
                            </li>
                            <li className="py-3 sm:py-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex-shrink-0">
                                        <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/lana-byrd.png" alt="Neil image" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-medium text-gray-900 truncate dark:text-white">
                                        Lana Byrd
                                        </p>
                                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        email@flowbite.com
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        $1044
                                    </div>
                                </div>
                            </li>
                            </ul>
                        </div>
                    </div>

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
                                3,4% 
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
