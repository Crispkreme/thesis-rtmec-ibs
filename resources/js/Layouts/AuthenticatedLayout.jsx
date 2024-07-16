import { useState } from 'react';
import Footer from '@/Components/Footer';
import NavLink from '@/Components/NavLink';
import { BiDoorOpen } from 'react-icons/bi'
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
        { href: route('api.admin.dashboard'), icon: HiOutlineHome },
        { href: route('api.admin.room'), icon: BiDoorOpen },
        { href: route('api.admin.room'), icon: HiOutlineOfficeBuilding },
        { href: route('api.admin.tenant'), icon: HiOutlineUserGroup },
        { href: route('api.admin.reading'), icon: HiOutlineCalculator },
        { href: route('api.admin.reading'), icon: HiOutlinePresentationChartBar },
        { href: "#", icon: HiOutlineCreditCard },
        { href: "#", icon: HiOutlineCog },
        { href: route('logout'), icon: HiLogout }
    ];

    const userLinks = [
        { href: route('api.tenant.index'), icon: HiOutlineHome },
        { href: route('api.tenant.payment'), icon: HiOutlineCreditCard },
        { href: "#", icon: HiOutlineCog },
        { href: route('logout'), icon: HiLogout }
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

                        <Footer />

                        <p class="my-10 text-sm text-center text-gray-500">
                            © 2024 <a href="#" class="hover:underline" target="_blank">Real-Time Monitoring of Energy Consumption using IoT-based Meters </a>. All rights reserved.
                        </p>

                    </main>
                </div>
            </div>
        </div>
    );
}
