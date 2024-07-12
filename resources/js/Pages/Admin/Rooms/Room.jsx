import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import DataTable from 'react-data-table-component';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Breadcrumb from '@/Components/Breadcrumb';
import CardLayout from '@/Components/CardLayout';
import StatusBadge from '@/Components/StatusBadge';
import apiService from '@/Services/apiServices';
import { format } from 'date-fns';
import { HiOutlinePencil, HiOutlineTrash } from 'react-icons/hi';
import DeleteModal from '@/Components/DeleteModal';
import Notification from '@/Components/Notification';
import UpdateModal from '@/Components/UpdateModal';

const Room = ({ auth, rooms }) => {

  const [filterText, setFilterText] = useState('');
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);
  const [rowToDelete, setRowToDelete] = useState(null);
  const [rowToUpdate, setRowToUpdate] = useState(null);
  const [notification, setNotification] = useState(null);
  const [tableData, setTableData] = useState(rooms.data);

  const handleUpdate = (row) => {
    setRowToUpdate(row);
    setUpdateModalOpen(true);
  };

  const handleConfirmUpdate = (updatedRow) => {
    
    if (!updatedRow) {
      console.error('No updated row data.');
      return;
    }

    const { id } = updatedRow;

    apiService
      .post(`/admin/room/update/${id}`, updatedRow)
      .then((res) => {
        setNotification('Room updated successfully');
        setUpdateModalOpen(false);
        setRowToUpdate(null);
        fetchRooms();
      })
      .catch((error) => {
        console.error('Error updating room:', error);
      });
  };

  const handleDelete = (row) => {
    setRowToDelete(row);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (!rowToDelete) {
      console.error('No row to delete.');
      return;
    }

    const { id } = rowToDelete;

    apiService
      .get(`/admin/room/delete/${id}`)
      .then((res) => {
        setNotification('Room deleted successfully');
        setDeleteModalOpen(false);
        setRowToDelete(null);
        fetchRooms(); // Assuming fetchRooms fetches the updated data
      })
      .catch((error) => {
        console.error('Error deleting room:', error);
      });
  };

  const handleCloseModal = () => {
    setDeleteModalOpen(false);
    setRowToDelete(null);
  };

  const fetchRooms = () => {
    apiService
      .get('/admin/room')
      .then((response) => {
        setTableData(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching rooms:', error);
      });
  };

  const columns = [
    {
      name: 'Room Number',
      selector: (row) => row.room_number,
      sortable: true,
    },
    {
      name: 'Room Type',
      selector: (row) => row.room_type,
      sortable: true,
    },
    {
      name: 'Occupants',
      selector: (row) => row.occupants,
      sortable: true,
    },
    {
      name: 'Status',
      selector: (row) => row.occupant_status,
      sortable: true,
    },
    {
      name: 'Room Status',
      selector: (row) => <StatusBadge status={row.room_status} />,
      sortable: true,
    },
    {
      name: 'Date',
      selector: (row) => format(new Date(row.created_at), 'MMMM dd, yyyy'),
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div className="flex space-x-2">
          <button
            onClick={() => handleUpdate(row)}
            className="px-2 py-1 text-white bg-blue-500 rounded"
          >
            <HiOutlinePencil />
          </button>
          <button
            onClick={() => handleDelete(row)}
            className="px-2 py-1 text-white bg-red-500 rounded"
          >
            <HiOutlineTrash />
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const filteredItems = tableData.filter(
    (item) =>
      item.room_number.toLowerCase().includes(filterText.toLowerCase()) ||
      item.room_type.toLowerCase().includes(filterText.toLowerCase()) ||
      item.room_status.toLowerCase().includes(filterText.toLowerCase()) ||
      item.occupants.toLowerCase().includes(filterText.toLowerCase()) ||
      item.occupant_status.toLowerCase().includes(filterText.toLowerCase()) ||
      format(new Date(item.created_at), 'MMMM dd, yyyy')
        .toLowerCase()
        .includes(filterText.toLowerCase())
  );

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Tenant Room Reading" />

      <div className="h-full w-full m-4 flex justify-start items-start flex-wrap rounded-tl gap-4 overflow-y-scroll align-content-start bg-[#e5e7eb]">
        <Breadcrumb breadcrumb="rooms" />

        <div className="w-full pt-10">
          <CardLayout
            title="Room Data"
            description="This is the room data for all tenants."
          >
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search"
                className="w-[300px] p-2 border border-gray-300 rounded"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
              />
            </div>
            <div className="overflow-x-auto">
              <DataTable
                columns={columns}
                data={filteredItems}
                pagination
                paginationComponentOptions={{
                  rowsPerPageText: 'Rows per page:',
                  rangeSeparatorText: 'of',
                }}
                noDataComponent="No records available."
              />
            </div>
          </CardLayout>
        </div>
      </div>

      <DeleteModal
        isOpen={deleteModalOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCloseModal}
        title="Confirm Deletion"
        message="Are you sure you want to delete this room?"
      />

      <Notification message={notification} onClose={() => setNotification(null)} />

      <UpdateModal
        isOpen={updateModalOpen}
        onConfirm={handleConfirmUpdate}
        onCancel={handleCloseModal}
        row={rowToUpdate}
      />

    </AuthenticatedLayout>
  );
};

export default Room;
