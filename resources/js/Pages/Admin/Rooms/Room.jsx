import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import RoomCard from '@/Components/RoomCard';
import Breadcrumb from '@/Components/Breadcrumb';
import CardLayout from '@/Components/CardLayout';
import RoomDataCard from '@/Components/RoomDataCard';
import Modal from '@/Components/Modal';

import { 
  HiOutlineSearch,
  HiOutlinePencil,
  HiOutlineClipboardList,
  HiArrowNarrowUp 
} from 'react-icons/hi';
import apiService from '@/Services/apiServices';

const Room = ({ auth, rooms, totalRooms, tenantRooms }) => {
  const [filterText, setFilterText] = useState('');
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [tenantBillModalOpen, setTenantBillModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleViewDetails = (room) => {
    setSelectedRoom(room);
    setViewModalOpen(true);
  };

  const handleUpdateDetails = (room) => {
    setSelectedRoom(room);
    setUpdateModalOpen(true);
  };

  const handleTenantBillDetails = (room) => {
    setSelectedRoom(room);
    setTenantBillModalOpen(true);
  };

  const handleTenantBillSubmit = () => {
    apiService
      .get("/admin/list/payment")
      .then(() => {
        alert('handleTenantBillSubmit');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleUpdateRoomSubmit = () => {
    alert('handleTenantBillSubmit');
  }

  const handleViewRoomSubmit = () => {
    alert('handleTenantBillSubmit');
  }

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
                cardColor="bg-gray-300"
                onViewDetails={() => handleViewDetails(room)}
                onUpdateDetails={() => handleUpdateDetails(room)}
                onTenantBillDetails={() => handleTenantBillDetails(room)}
              />
            ))}
          </div>
        </div>
        <CardLayout
          title="Room Data"
          description="This is the room data for all tenants."
        >
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full p-2 pl-10 border border-gray-300 rounded"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
            <svg
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width="20"
              height="20"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 4a6 6 0 014.58 10.19l5.29 5.3a1 1 0 01-1.42 1.42l-5.3-5.29A6 6 0 118 4z" />
            </svg>
          </div>
          <div className="overflow-x-auto">
            {tenantRooms.data.map(tenantRoom => (
              <RoomDataCard 
                key={tenantRoom.id}
                tenantRoomNumber={tenantRoom.tenant_room_number}
                tenantRoomType={tenantRoom.tenant_room_type}
                tenantRoomStatus={tenantRoom.tenant_room_status}
                roomAvailable={tenantRoom.tenant_room_status === 'available' ? 'True' : 'False'}
                className='mb-2'
              />
            ))}
          </div>
        </CardLayout>
      </div>

      {viewModalOpen && (
        <Modal
          isOpen={viewModalOpen}
          onClose={() => setViewModalOpen(false)}
          modalTitle='Room Details'
          modalIcon={<HiOutlineSearch className='mr-2'/>}
        >
          <form className="p-4 md:p-5">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label
                  htmlFor="room_number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Room Number
                </label>
                <input
                  type="text"
                  name="room_number"
                  id="room_number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedRoom.room_number}
                  readOnly
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="room_type"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Room Type
                </label>
                <select
                  id="room_type"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedRoom.room_type}
                  readOnly
                >
                  <option>{selectedRoom.room_type}</option>
                </select>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="room_status"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Status
                </label>
                <select
                  id="room_status"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedRoom.room_status}
                  readOnly
                >
                  <option>{selectedRoom.room_status}</option>
                </select>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="room_available"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Available
                </label>
                <select
                  id="room_available"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedRoom.room_status === 'available' ? 'True' : 'False'}
                  readOnly
                >
                  <option>{selectedRoom.room_status === 'available' ? 'True' : 'False'}</option>
                </select>
              </div>
            </div>
          </form>
        </Modal>
      )}

      {updateModalOpen && (
        <Modal
          isOpen={updateModalOpen}
          onClose={() => setUpdateModalOpen(false)}
          modalTitle='Edit Room Details'
          modalIcon={<HiOutlinePencil className='mr-2'/>}
          button={
            <button 
              type="submit" 
              className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-white-500 text-base font-medium text-dark hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" 
              onClick={handleUpdateRoomSubmit}
            >Update Tenant Details</button>
          }
        >
          <form class="alt bbt bbz bcv cip cpa">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label
                  htmlFor="room_number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Tenant Name
                </label>
                <select
                  id="room_type"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  readOnly
                >
                  <option></option>
                </select>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="room_number"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Room Number
                </label>
                <input
                  type="text"
                  name="room_number"
                  id="room_number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedRoom.room_number}
                  readOnly
                />
              </div>
              <div class="col-span-2 sm:col-span-1">
                <label
                  htmlFor="room_type"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Room Type
                </label>
                <select
                  id="room_type"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedRoom.room_type}
                  readOnly
                >
                  <option>{selectedRoom.room_type}</option>
                </select>
              </div>
              <div class="col-span-2 sm:col-span-1">
                <label
                  htmlFor="room_status"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Status
                </label>
                <select
                  id="room_status"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedRoom.room_status}
                  readOnly
                >
                  <option>{selectedRoom.room_status}</option>
                </select>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="room_available"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Available
                </label>
                <select
                  id="room_available"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  value={selectedRoom.room_status === 'available' ? 'True' : 'False'}
                  readOnly
                >
                  <option>{selectedRoom.room_status === 'available' ? 'True' : 'False'}</option>
                </select>
              </div>
            </div>
          </form>
        </Modal>
      )}

      {tenantBillModalOpen && (
        <Modal
          isOpen={tenantBillModalOpen}
          onClose={() => setTenantBillModalOpen(false)}
          modalTitle='Create Tenant Bill'
          modalIcon={<HiOutlineClipboardList className='mr-2'/>}
          button={
            <button 
              type="submit" 
              className="inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-white-500 text-base font-medium text-dark hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" 
              onClick={handleTenantBillSubmit}
            >Create Tenant Bill</button>
          }
        >
          <p class="text-sm text-gray-500"> Are you sure you want to add <span class="font-bold">Tenant Bill</span>?</p>
        </Modal>
      )}

    </AuthenticatedLayout>
  );
};

export default Room;
