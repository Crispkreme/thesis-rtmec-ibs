import React, { useRef } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Add_Room from './Add_Room';

const Room = ({ auth }) => {
    const addRoomRef = useRef(null);

    const openModal = () => {
        addRoomRef.current.openModal();
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Rooms Details</h2>}
        >
            <Head title="Rooms Details" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 flex justify-between items-center text-gray-900">
                            <span>Add Rooms Details</span>
                            <button className="btn" onClick={openModal}>Add Room</button>
                        </div>
                        <Add_Room ref={addRoomRef} />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default Room;
