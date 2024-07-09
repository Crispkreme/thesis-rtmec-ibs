import { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/react';

import { 
    HiOutlineHome, 
    HiOutlineOfficeBuilding, 
    HiOutlineUserGroup, 
    HiOutlinePresentationChartBar, 
    HiOutlineCreditCard,
    HiOutlineCalculator,
    HiOutlineCog,
    HiLogout
} from "react-icons/hi";

export default function Authenticated({ user, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    const capitalizeWords = (string) => {
        return string
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
    };

    const navLinkClass = "h-12 w-12 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white hover:duration-300 hover:ease-linear focus:bg-white no-underline hover:no-underline focus:no-underline";
    const iconClass = "text-white no-underline text-2xl hover:text-black active:text-black";

    const adminLinks = [
        { href: route('admin.dashboard'), icon: HiOutlineHome },
        { href: route('admin.room'), icon: HiOutlineOfficeBuilding },
        { href: route('admin.tenant'), icon: HiOutlineUserGroup },
        { href: route('admin.reading'), icon: HiOutlineCalculator },
        { href: route('admin.reading'), icon: HiOutlinePresentationChartBar },
        { href: "#", icon: HiOutlineCreditCard },
        { href: "#", icon: HiOutlineCog },
        { href: "#", icon: HiLogout }
    ];

    const userLinks = [
        { href: route('api.tenant.index'), icon: HiOutlineHome },
        { href: route('api.tenant.payment'), icon: HiOutlineCreditCard },
        { href: "#", icon: HiOutlineCog },
        { href: "#", icon: HiLogout }
    ];

    return (
        <div className="h-screen w-full bg-[#e5e7eb] relative flex overflow-hidden">
            <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white pt-16">
                {user.usertype === "admin" ? adminLinks.map((link, index) => (
                    <div key={index} className={navLinkClass}>
                        <NavLink href={link.href} active={route().current(link.href)} className="hover:no-underline active:no-underline">
                            <link.icon className={iconClass} />
                        </NavLink>
                    </div>
                )) : userLinks.map((link, index) => (
                    <div key={index} className={navLinkClass}>
                        <NavLink href={link.href} className="hover:no-underline active:no-underline">
                            <link.icon className={iconClass} />
                        </NavLink>
                    </div>
                ))}
            </aside>

            <div className="w-full h-full flex flex-col">
                <header className="h-16 w-full flex items-center relative justify-between px-5 bg-gray-800 fixed top-0 left-0 right-0 z-10">
                    <div className="flex items-center space-x-4">
                        <div className="flex flex-col items-end text-white">
                            <div className="text-md font-medium">RTMEC</div>
                            <div className="text-sm font-regular">IOT</div>
                        </div>
                    </div>
                    <div className="flex flex-shrink-0 items-center space-x-4 text-white">
                        <div className="flex flex-col items-end ">
                            <div className="text-md font-medium">{capitalizeWords(user.usertype)}</div>
                            <div className="text-sm font-regular">{capitalizeWords(user.name)}</div>
                        </div>
                        <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"></div>
                    </div>
                </header>

                <div className='relative w-full h-full overflow-y-auto bg-gray-50 dark:bg-gray-900'>
                    
                    <main className="overflow-hidden bg-gray-50 dark:bg-gray-900">
                        
                        <div className='px-4 pt-6'>
                            {children}
                        </div>

                        <div className='p-4 my-6 mx-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 xl:p-8 dark:bg-gray-800'>
                            <ul className="flex flex-wrap items-center mb-6 space-y-1 md:mb-0">
                                <li><a href="#" className="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Terms and conditions</a></li>
                                <li><a href="#" className="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Privacy Policy</a></li>
                                <li><a href="#" className="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Licensing</a></li>
                                <li><a href="#" className="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6 dark:text-gray-400">Cookie Policy</a></li>
                                <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline dark:text-gray-400">Contact</a></li>
                            </ul>
                            <div className='flex space-x-6 sm:justify-center'>
                                {/* social media links */}
                            </div>
                        </div>

                        <p class="my-10 text-sm text-center text-gray-500">
                            © 2024 <a href="#" class="hover:underline" target="_blank">Real-Time Monitoring of Energy Consumption using IoT-based Meters </a>. All rights reserved.
                        </p>

                    </main>
                </div>
            </div>
        </div>
    );
}
