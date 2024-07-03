// Dashboard component (excerpt)
import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { AiOutlineFileSync, AiOutlineFileProtect, AiOutlineSolution, AiOutlineProfile } from 'react-icons/ai';
import Breadcrumb from '@/Components/Breadcrumb';
import DashboardCard from '@/Components/DashboardCard';
import MixedChart from '@/Components/MixedChart'; // Ensure correct import

export default function Dashboard({ auth }) {
    // Example of 3 different data sets 
    const data1 = [3, 1, 5, 8, 20, 10, 15, 30];
    const data2 = [2, 3, 10, 5, 5, 9, 10, 10];
    const total = data1.map((num, idx) => num + data2[idx]);

    // Inside data props
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
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />
            <div className="h-full w-full m-4 flex justify-start items-start flex-wrap gap-4 overflow-y-scroll">
                <Breadcrumb breadcrumb="home" />
                <div className="w-full pt-10">
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5">
                        <DashboardCard
                            title="Total Tenants"
                            amount="$53k"
                            percentage="+55%"
                            iconColor="from-blue-600 to-blue-400"
                            iconComponent={<HiOutlineUserGroup className="w-6 h-6 text-white" />}
                        />
                        <DashboardCard
                            title="Previous Bill"
                            amount="2,300"
                            percentage="+3%"
                            iconColor="from-pink-600 to-pink-400"
                            iconComponent={<AiOutlineFileSync className="w-6 h-6 text-white" />}
                        />
                        <DashboardCard
                            title="Current Bill"
                            amount="3,462"
                            percentage="-2%"
                            iconColor="from-green-600 to-green-400"
                            iconComponent={<AiOutlineFileProtect className="w-6 h-6 text-white" />}
                        />
                        <DashboardCard
                            title="Paid Payment"
                            amount="$103,430"
                            percentage="+5%"
                            iconColor="from-orange-600 to-orange-400"
                            iconComponent={<AiOutlineSolution className="w-6 h-6 text-white" />}
                        />
                        <DashboardCard
                            title="Unpaid Payment"
                            amount="$103,430"
                            percentage="+5%"
                            iconColor="from-red-600 to-red-400"
                            iconComponent={<AiOutlineProfile className="w-6 h-6 text-white" />}
                        />
                    </div>
                </div>
                <div className="w-full flex flex-wrap gap-4">

                    <div className="w-full md:w-1/2">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <MixedChart data={data} options={options} /> 
                        </div>
                    </div>
                    
                    <div className="w-full md:w-1/4 grid grid-cols-1 gap-4">

                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <MixedChart data={data} options={options} /> 
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <MixedChart data={data} options={options} /> 
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <MixedChart data={data} options={options} /> 
                        </div>
                        
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}
