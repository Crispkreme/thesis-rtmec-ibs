import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { HiOutlineUserGroup } from "react-icons/hi";
import { 
    AiOutlineFileSync,
    AiOutlineFileProtect,
    AiOutlineSolution,
    AiOutlineProfile 
} from "react-icons/ai";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout user={auth.user}>

            <Head title="Dashboard" />
    
            <div className="h-full w-full m-4 flex justify-start items-start flex-wrap rounded-tl gap-4 overflow-y-scroll">
                <div className="capitalize">
                    <nav aria-label="breadcrumb" className="w-max">
                        <ol className="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
                            <li className="flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
                                <a href="#">
                                    <p className="block antialiased font-sans text-sm leading-normal text-blue-900 font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100">dashboard</p>
                                </a>
                                <span className="text-gray-500 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none">/</span>
                            </li>
                            <li className="flex items-center text-blue-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-blue-500">
                                <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">home</p>
                            </li>
                        </ol>
                    </nav>
                    <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-gray-900">home</h6>
                </div>
    
                <div className="w-full pt-10">
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5">
                        
                        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                                <HiOutlineUserGroup className="w-6 h-6 text-white" />
                            </div>
                            <div className="p-4 text-right">
                                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Tenants</p>
                                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">$53k</h4>
                            </div>
                            <div className="border-t border-blue-gray-50 p-4">
                                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                    <strong className="text-green-500">+55%</strong>&nbsp;than last week
                                </p>
                            </div>
                        </div>
                        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                                <AiOutlineFileSync className="w-6 h-6 text-white"/>
                            </div>
                            <div className="p-4 text-right">
                                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Previous Bill</p>
                                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">2,300</h4>
                            </div>
                            <div className="border-t border-blue-gray-50 p-4">
                                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                    <strong className="text-green-500">+3%</strong>&nbsp;than last month
                                </p>
                            </div>
                        </div>
                        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-green-600 to-green-400 text-white shadow-green-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                                <AiOutlineFileProtect className="w-6 h-6 text-white"/>
                            </div>
                            <div className="p-4 text-right">
                                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Current Bill</p>
                                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">3,462</h4>
                            </div>
                            <div className="border-t border-blue-gray-50 p-4">
                                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                    <strong className="text-red-500">-2%</strong>&nbsp;than yesterday
                                </p>
                            </div>
                        </div>
                        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-orange-600 to-orange-400 text-white shadow-orange-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                                <AiOutlineSolution className="w-6 h-6 text-white"/>
                            </div>
                            <div className="p-4 text-right">
                                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Paid Payment</p>
                                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">$103,430</h4>
                            </div>
                            <div className="border-t border-blue-gray-50 p-4">
                                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                    <strong className="text-green-500">+5%</strong>&nbsp;than yesterday
                                </p>
                            </div>
                        </div>
                        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
                            <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-red-600 to-red-400 text-white shadow-red-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
                                <AiOutlineProfile className="w-6 h-6 text-white"/>
                            </div>
                            <div className="p-4 text-right">
                                <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Unpaid Payment</p>
                                <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">$103,430</h4>
                            </div>
                            <div className="border-t border-blue-gray-50 p-4">
                                <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
                                    <strong className="text-green-500">+5%</strong>&nbsp;than yesterday
                                </p>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
            
        </AuthenticatedLayout>
    );
}
