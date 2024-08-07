import React from 'react'

const Footer = () => {
    return (
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
    )
}

export default Footer