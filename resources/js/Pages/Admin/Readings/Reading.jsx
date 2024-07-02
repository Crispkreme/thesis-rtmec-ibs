import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import React from 'react';
import { Head } from '@inertiajs/react';

const Reading = ({ auth, readings }) => {
  return (
    <AuthenticatedLayout user={auth.user}>

      <Head title="Tenant Room Reading" />

      <div className="h-full w-full m-4 flex justify-start items-start flex-wrap rounded-tl gap-4 overflow-y-scroll">
          <div className="capitalize">
              <nav aria-label="breadcrumb" className="w-max">
                  <ol className="flex flex-wrap items-center w-full bg-opacity-60 rounded-md bg-transparent p-0 transition-all">
                      <li className="flex items-center text-blue-gray-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-light-blue-500">
                          <a href="#">
                              <p className="block antialiased font-sans text-sm leading-normal text-blue-900 font-normal opacity-50 transition-all hover:text-blue-500 hover:opacity-100">dashboard</p>
                          </a>
                          <span className="text-gray-500 text-sm antialiased font-sans font-normal leading-normal mx-2 pointer-events-none select-none">/</span>
                      </li>
                      <li className="flex items-center text-blue-900 antialiased font-sans text-sm font-normal leading-normal cursor-pointer transition-colors duration-300 hover:text-blue-500">
                          <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">power reading</p>
                      </li>
                  </ol>
              </nav>
              <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-gray-900">power reading</h6>
          </div>

          <div className="w-full pt-10">
              <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5">
                <table>
                  <thead></thead>
                  <tbody></tbody>
                  <tfoot></tfoot>
                </table>
              </div>
          </div>
      </div>

    </AuthenticatedLayout>
  )
}

export default Reading