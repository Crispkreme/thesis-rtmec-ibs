import React, { useEffect, useState } from "react";
import apiService from '@/Services/apiServices';
import { FiEdit2, FiTrash2 } from "react-icons/fi";

const Room_Table = () => {
    const [roomData, setRoomData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async (page = 1) => {
        try {
            const response = await apiService.get(`/admin/room/get-all-room?page=${page}`);
            const data = response.data.original; // Adjusting to the nested structure

            if (data && Array.isArray(data.data)) {
                setRoomData(data.data);
                setCurrentPage(data.current_page);
                setLastPage(data.last_page);
            } else {
                console.error('Invalid data format:', response);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleNextPage = () => {
        if (currentPage < lastPage) {
            fetchData(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            fetchData(currentPage - 1);
        }
    };

    return (
        <div>
            <div className="table-responsive overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Room Number</th>
                            <th>Room Type</th>
                            <th>Room Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            roomData.map((room, index) => (
                                <tr key={index}>
                                    <td>{room.id}</td>
                                    <td>{room.room_number}</td>
                                    <td>{room.room_type}</td>
                                    <td>{room.room_status}</td>
                                    <td className="flex justify-center flex-wrap items-center">
                                        <button className="btn-md btn btn-warning mr-2">
                                            <FiEdit2 className="mr-1"/>
                                            Update
                                        </button>
                                        <button className="btn-md btn btn-error">
                                            <FiTrash2 className="mr-1"/>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
                <span>{currentPage} of {lastPage}</span>
                <button onClick={handleNextPage} disabled={currentPage === lastPage}>Next</button>
            </div>
        </div>
    );
};

export default Room_Table;
