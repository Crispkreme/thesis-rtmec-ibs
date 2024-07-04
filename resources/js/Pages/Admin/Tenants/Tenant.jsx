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
import Switch from '@/Components/Switch';

const Tenant = ({ auth, tenants }) => {

  const [filterText, setFilterText] = useState('');
  const [tableData, setTableData] = useState(tenants.data);

  const columns = [
    {
      name: 'Tenant Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: 'Contact Number',
      selector: (row) => row.contact_number,
      sortable: true,
    },
    {
      name: 'Tenant',
      selector: (row) => <Switch isTenant={row.is_tenant} />,
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
            // onClick={() => handleUpdate(row)}
            className="px-2 py-1 text-white bg-blue-500 rounded"
          >
            <HiOutlinePencil />
          </button>
          <button
            // onClick={() => handleDelete(row)}
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
      item.name.toLowerCase().includes(filterText.toLowerCase()) ||
      item.email.toLowerCase().includes(filterText.toLowerCase()) ||
      item.contact_number.toLowerCase().includes(filterText.toLowerCase()) ||
      item.is_tenant.toLowerCase().includes(filterText.toLowerCase()) ||
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

      {/* <DeleteModal
        isOpen={deleteModalOpen}
        onConfirm={handleConfirmDelete}
        onCancel={handleCloseModal}
        title="Confirm Deletion"
        message="Are you sure you want to delete this room?"
      />

      <Notification 
        message={notification} 
        onClose={() => setNotification(null)} 
      /> */}

    </AuthenticatedLayout>
  );
}

export default Tenant