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
        $tenants = $this->tenantContract->getAllTenant();
        $responseData = [
            'data' => TenantResource::collection($tenants),
            'meta' => [
                'current_page' => $tenants->currentPage(),
                'from' => $tenants->firstItem(),
                'last_page' => $tenants->lastPage(),
                'links' => [
                    'first' => $tenants->url(1),
                    'last' => $tenants->url($tenants->lastPage()),
                    'prev' => $tenants->previousPageUrl(),
                    'next' => $tenants->nextPageUrl(),
                ],
                'path' => $tenants->url($tenants->currentPage()),
                'per_page' => $tenants->perPage(),
                'to' => $tenants->lastItem(),
                'total' => $tenants->total(),
            ],
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
