import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import RoomCard from '@/Components/RoomCard';
import Breadcrumb from '@/Components/Breadcrumb';
import CardLayout from '@/Components/CardLayout';
import { HiArrowNarrowUp } from 'react-icons/hi';
import RoomDataCard from '@/Components/RoomDataCard';

const Room = ({ auth, rooms, totalRooms, tenantRooms }) => {

  return (
    <AuthenticatedLayout user={auth.user}>

      <Head title="Tenant Room Reading" />
      <Breadcrumb breadcrumb="home" />

      <div className='grid gap-4 xl:grid-cols-2 2xl:grid-cols-3 mt-5'>
        <div className='p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800'>
          <div className="flex items-center justify-between mb-4">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">{totalRooms}</span>
              <h3 className="text-base font-light text-gray-500 dark:text-gray-400">Room Availability</h3>
            </div>
            <div className="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
              12.5%
              <HiArrowNarrowUp />
            </div>
          </div>
          <div className="flex flex-wrap justify-center bg-gray-100 min-h-screen">
            {rooms.data.map(room => (
              <RoomCard
                key={room.id}
                roomNumber={room.room_number}
                roomType={room.room_type}
                roomStatus={room.room_status}
                roomAvailable={room.room_status === 'available' ? 'True' : 'False'}
              />
            ))}
          </div>
        </div>
        <CardLayout
          title="Room Data"
          description="This is the room data for all tenants."
        >
          <div className="mb-4">
            {/* <input
              type="text"
              placeholder="Search"
              className="w-[300px] p-2 border border-gray-300 rounded"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            /> */}
          </div>
          <div className="overflow-x-auto">
            <RoomDataCard 
              key={tenantRooms.id}
              roomNumber={tenantRooms.room_number}
              roomType={tenantRooms.room_type}
              roomStatus={tenantRooms.room_status}
              roomAvailable={tenantRooms.room_status === 'available' ? 'True' : 'False'}
            />
          </div>
        </CardLayout>
      </div>

    </AuthenticatedLayout>
  );
};

export default Room;
