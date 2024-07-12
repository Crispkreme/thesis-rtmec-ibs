import React from 'react';
import { HiOutlineHome } from 'react-icons/hi';

const RoomDataCard = ({ roomNumber, roomType, roomStatus, roomAvailable }) => {

    const cardColor = roomStatus === 'occupied' ? 'bg-red-200 hover:bg-red-300' : 'bg-green-200 hover:bg-green-300';

    return (
        <div className={`flex items-center justify-between rounded-[5px] px-4 py-3.5 ${cardColor} dark:bg-meta-4 dark:hover:bg-meta-3 dark:text-white`}>
            <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full flex items-center justify-center">
                    <HiOutlineHome size={30} className="text-black dark:text-white" />
                </div>
                <div>
                    <h5 className="text-sm font-bold leading-6 text-black dark:text-white">{roomNumber}</h5>
                    <p className="text-xs font-medium">{roomType}</p>
                </div>
            </div>
            <div className="text-right">
                <p className="mb-1 font-medium text-black dark:text-white">{roomStatus}</p>
                <p className="flex items-center justify-end gap-1 text-xs font-medium text-meta-3">
                    {roomAvailable}
                </p>
            </div>
        </div>
    )
}

export default RoomDataCard