import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React, { useState } from 'react';
import { Head } from '@inertiajs/react';
import DataTable from 'react-data-table-component';
import Breadcrumb from '@/Components/Breadcrumb';
import CardLayout from '@/Components/CardLayout';
import StatusBadge from '@/Components/StatusBadge';
import { format } from 'date-fns';

const columns = [
  {
    name: 'Room Number',
    selector: row => row.room_number,
    sortable: true,
  },
  {
    name: 'Room Status',
    selector: row => <StatusBadge status={row.room_status} />,
    sortable: true,
  },
  {
    name: 'Total Voltage',
    selector: row => row.voltage,
    sortable: true,
  },
  {
    name: 'Total Current',
    selector: row => row.current,
    sortable: true,
  },
  {
    name: 'Date',
    selector: row => format(new Date(row.created_at), 'MMMM dd, yyyy'),
    sortable: true,
  },
];

const Reading = ({ auth, readings }) => {

  const data = readings.data;
  const [filterText, setFilterText] = useState('');

  const filteredItems = data.filter(
    item =>
      item.room_number.toLowerCase().includes(filterText.toLowerCase()) ||
      item.room_status.toLowerCase().includes(filterText.toLowerCase()) ||
      item.voltage.toLowerCase().includes(filterText.toLowerCase()) ||
      item.current.toLowerCase().includes(filterText.toLowerCase()) ||
      item.created_at.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Tenant Room Reading" />

      <div className="h-full w-full m-4 flex justify-start items-start flex-wrap rounded-tl gap-4 overflow-y-scroll align-content-start bg-[#e5e7eb]">
        <Breadcrumb breadcrumb="power reading" />

        <div className="w-full pt-10">
          <CardLayout
            title="Power Reading Data"
            description="This is the power meter reading data for all tenants."
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

export default Reading;
