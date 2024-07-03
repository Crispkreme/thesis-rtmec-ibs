import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import React from 'react';
import { Head } from '@inertiajs/react';
import DataTable from 'react-data-table-component';
import Breadcrumb from '@/Components/Breadcrumb';

const columns = [
  {
    name: 'Room Number',
    selector: row => row.room_number,
    sortable: true,
  },
  {
    name: 'Room Status',
    selector: row => row.room_status,
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
    selector: row => row.created_at,
    sortable: true,
  },
];

const Reading = ({ auth, readings }) => {

  const data = readings.data;

  return (
    <AuthenticatedLayout user={auth.user}>
      
      <Head title="Tenant Room Reading" />

      <div className="h-full w-full m-4 flex justify-start items-start flex-wrap rounded-tl gap-4 overflow-y-scroll align-content-start bg-[#e5e7eb]">
        
        <Breadcrumb breadcrumb="power reading" />

        <div className="w-full pt-10">
          <DataTable
            columns={columns}
            data={data}
            noDataComponent="No records available."
          />
        </div>

      </div>
      
    </AuthenticatedLayout>
  );
}

export default Reading;
