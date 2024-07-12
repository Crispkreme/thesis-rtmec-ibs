import apiService from '@/Services/apiServices';
import React, { useRef, useImperativeHandle, useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const Add_Room = React.forwardRef((props, ref) => {

    const modalRef = useRef(null);
    const [roomNumber, setRoomNumber] = useState("");
    const [roomType, setRoomType] = useState("");
    
    useImperativeHandle(ref, () => ({
        openModal: () => modalRef.current.showModal(),
        closeModal: () => closeModal(),
    }));

    const handleSubmit = (e) => {
        e.preventDefault();

        apiService.post('/admin/room/add-room', {
            room_number: roomNumber,
            room_type: roomType,
        }).then((res) => {
            console.log(res);
            closeModal();
        }).catch((error) => {
            console.error(error);
        });
    };

    const closeModal = () => {
        setRoomNumber("");
        setRoomType("");  
        modalRef.current.close();
    };

    return (
        <dialog ref={modalRef} className="modal" onClick={(e) => e.target === modalRef.current && closeModal()}>
            <div className="modal-box">
                <form onSubmit={handleSubmit}>
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={closeModal}>
                        <FaTimes />
                    </button>
                    <h3 className="font-bold text-lg">Add Room</h3>
                    <p className="py-4">Add Room Details</p>
                    <div className="py-4">
                        <label className="input input-bordered flex items-center gap-2 w-full sm:w-auto">
                            <input 
                                value={roomNumber}
                                onChange={(e) => setRoomNumber(e.target.value)}
                                type="text" 
                                className="grow border-none outline-none w-full sm:w-auto" 
                                placeholder="Room Number" 
                            />
                        </label>
                        <label className="form-control w-full sm:w-auto">
                            <div className="label">
                                <span className="label-text">Select Room Type</span>
                            </div>
                            <select 
                                value={roomType}
                                onChange={(e) => setRoomType(e.target.value)}
                                className="select select-bordered w-full sm:w-auto"
                            >
                                <option value="">Room Type</option>
                                <option value='single'>Single</option>
                                <option value='bedspacer'>Bedspacer</option>
                            </select>
                        </label>
                    </div>
                    <div className="flex justify-end">
                        <button type="submit" className="btn btn-primary mr-2">Submit</button>
                        <button type="button" className="btn" onClick={closeModal}>Close</button>
                    </div>
                </form>
            </div>
        </dialog>
    );
});

export default Add_Room;
