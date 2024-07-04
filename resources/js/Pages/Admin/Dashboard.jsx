import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { AiOutlineFileSync, AiOutlineFileProtect, AiOutlineSolution, AiOutlineProfile } from 'react-icons/ai';
import Breadcrumb from '@/Components/Breadcrumb';
import DashboardCard from '@/Components/DashboardCard';
// import BarChart from '@/Components/BarChart';
// import PieChart from '@/Components/PieChart';

export default function Dashboard({ auth }) {
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
                            {/* <BarChart /> */}
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 grid grid-cols-1 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            {/* <PieChart /> */}
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            {/* <PieChart /> */}
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            {/* <PieChart /> */}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
