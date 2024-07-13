import React from 'react';
import { HiOutlineHome } from 'react-icons/hi';

const RoomCard = ({ roomNumber, roomType, roomStatus, roomAvailable }) => {

    const cardColor = roomStatus === 'occupied' ? 'bg-red-400' : 'bg-green-400';

    return (
        <div className={`w-50 h-auto rounded-lg flex-shrink-0 ${cardColor} overflow-hidden m-4`}>
            <div className={`${cardColor} text-white p-4 flex items-center justify-center`}>
                <HiOutlineHome size={30} />
            </div>
            <div className="p-6">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <div className="flex flex-col space-y-4">
                            <div>
                                <h5 className="font-bold text-white">
                                    <span className="text-sm">Room Name</span>
                                </h5>
                                <div className="text-white-700 text-sm">{roomNumber}</div>
                            </div>
                            <div>
                                <h5 className="font-bold text-white">
                                    <span className="text-sm">Room Type</span>
                                </h5>
                                <div className="text-white-700 text-sm">{roomType}</div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="flex flex-col space-y-4">
                            <div>
                                <h5 className="font-bold text-white">
                                    <span className="text-sm">Status Room</span>
                                </h5>
                                <div className="text-white-700 text-sm">{roomStatus}</div>
                            </div>
                            <div>
                                <h5 className="font-bold text-white">
                                    <span className="text-sm">Room Available</span>
                                </h5>
                                <div className="text-white-700 text-sm">{roomAvailable}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;
