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

        return Inertia('Admin/Tenants/Tenant', [
            'tenants' => json_encode([
                'data' => TenantResource::collection($tenants),
            ]),
        ]);
    }

    public function edit() {
        dd('edit');
    }

    public function destroy() {
        dd('destroy');
    }
}
