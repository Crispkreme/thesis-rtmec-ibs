import Authenticated from '@/Layouts/AuthenticatedLayout'
import React from 'react';
import { Head } from '@inertiajs/react';

const Reading = ({ auth, readings }) => {
  return (
    <Authenticated
      user={auth.user}
      header={
        <h2 className='font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight'>
          Readings
        </h2>
      }
    >
      <Head title="Rooms Details" />

      <div className="py-2">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <pre>
              { JSON.stringify(readings, undefined, 2) }
            </pre>
          </div>
        </div>
      </div>

    </Authenticated>
  )
}

export default Reading