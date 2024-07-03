import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import DataTable from 'react-data-table-component';
import Breadcrumb from '@/Components/Breadcrumb';
import CardLayout from '@/Components/CardLayout';
import StatusBadge from '@/Components/StatusBadge';
import { format } from 'date-fns';
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";

const handleUpdate = (row) => {
  console.log('Update row:', row);
};

const handleDelete = (row) => {
  console.log('Delete row:', row);
};

const columns = [
  {
    name: 'Room Number',
    selector: row => row.room_number,
    sortable: true,
  },
  {
    name: 'Room Type',
    selector: row => row.room_type,
    sortable: true,
  },
  {
    name: 'Occupants',
    selector: row => row.occupants,
    sortable: true,
  },
  {
    name: 'Status',
    selector: row => row.occupant_status,
    sortable: true,
  },
  {
    name: 'Room Status',
    selector: row => <StatusBadge status={row.room_status} />,
    sortable: true,
  },
  {
    name: 'Date',
    selector: row => format(new Date(row.created_at), 'MMMM dd, yyyy'),
    sortable: true,
  },
  {
    name: 'Actions',
    cell: row => (
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

const Room = ({ auth, rooms }) => {

  const data = rooms.data;
  const [filterText, setFilterText] = useState('');

  const filteredItems = data.filter(
    item =>
      item.room_number.toLowerCase().includes(filterText.toLowerCase()) ||
      item.room_type.toLowerCase().includes(filterText.toLowerCase()) ||
      item.room_status.toLowerCase().includes(filterText.toLowerCase()) ||
      item.occupants.toLowerCase().includes(filterText.toLowerCase()) ||
      item.occupant_status.toLowerCase().includes(filterText.toLowerCase()) ||
      item.created_at.toLowerCase().includes(filterText.toLowerCase())
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
                onChange={e => setFilterText(e.target.value)}
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
    </AuthenticatedLayout>
  );
}

export default Room