<?php

namespace App\Http\Controllers\Admin;

use App\Contracts\TenantContract;
use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\TenantResource;
use Illuminate\Http\Request;

class TenantController extends Controller
{
    protected $tenantContract;

    public function __construct(
        TenantContract $tenantContract,
    ) {
        $this->tenantContract = $tenantContract;
    }

    public function index() {

        $searchData = request("searchData");
        $searchStatus = request("searchStatus");
        $searchField = request("sort_field", 'created_at');
        $searchDirection = request("sort_direction", 'desc');

        if ($searchData && $searchStatus) {
            $queryResult = $this->tenantContract->searchTenantByNameAndRoomStatus($searchData, $searchStatus, $searchField, $searchDirection);
        } elseif ($searchData) {
            $queryResult = $this->tenantContract->searchTenantByName($searchData, $searchField, $searchDirection);
        } elseif ($searchStatus) {
            $queryResult = $this->tenantContract->searchTenantByRoomStatus($searchStatus, $searchField, $searchDirection);
        } else {
            $queryResult = $this->tenantContract->getAllTenant($searchField, $searchDirection);
        }

        $responseData = [
            'data' => TenantResource::collection($queryResult),
            'meta' => [
                'current_page' => $queryResult->currentPage(),
                'from' => $queryResult->firstItem(),
                'last_page' => $queryResult->lastPage(),
                'links' => [
                    'first' => $queryResult->url(1),
                    'last' => $queryResult->url($queryResult->lastPage()),
                    'prev' => $queryResult->previousPageUrl(),
                    'next' => $queryResult->nextPageUrl(),
                ],
                'path' => $queryResult->url($queryResult->currentPage()),
                'per_page' => $queryResult->perPage(),
                'to' => $queryResult->lastItem(),
                'total' => $queryResult->total(),
            ],
            'queryParams' => $queryResult ?: null,
        ];
        return Inertia('Admin/Tenants/Tenant', [
            'tenants' => json_encode($responseData),
        ]);
    }

    public function edit() {
        dd('edit');
    }

    public function destroy() {
        dd('destroy');
    }
}
