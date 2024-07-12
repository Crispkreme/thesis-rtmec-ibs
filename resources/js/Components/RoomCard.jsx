import React from 'react';
import { HiOutlineHome } from 'react-icons/hi';

const RoomCard = ({ roomNumber, roomType, roomStatus, roomAvailable }) => {

    const cardColor = roomStatus === 'occupied' ? 'bg-red-400' : 'bg-green-400';

    return (
        <div className={`w-96 h-auto rounded-lg flex-shrink-0 ${cardColor} overflow-hidden m-4`}>
            <div className={`${cardColor} text-white p-4 flex items-center justify-center`}>
                <HiOutlineHome size={30} />
            </div>
            <div className="p-6">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <div className="flex flex-col space-y-4">
                            <div>
                                <div className="font-bold text-lg text-white">Room Name</div>
                                <div className="text-white-700">{roomNumber}</div>
                            </div>
                            <div>
                                <div className="font-bold text-lg text-white">Room Type</div>
                                <div className="text-white-700">{roomType}</div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="flex flex-col space-y-4">
                            <div>
                                <div className="font-bold text-lg text-white">Status Room</div>
                                <div className="text-white-700">{roomStatus}</div>
                            </div>
                            <div>
                                <div className="font-bold text-lg text-white">Room Available</div>
                                <div className="text-white-700">{roomAvailable}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;
