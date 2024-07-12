<?php
namespace App\Http\Controllers\Api\Tenant;

use App\Contracts\UserContract;
use App\Contracts\TenantContract;
use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\TenantResource;
use App\Http\Resources\Admin\UserResource;
use Illuminate\Http\Request;

class TenantController extends Controller
{
    protected $tenantContract;
    protected $userContract;

    public function __construct(
        TenantContract $tenantContract,
        UserContract $userContract,
    ) {
        $this->tenantContract = $tenantContract;
        $this->userContract = $userContract;
    }

    public function index() {

        $tenants = $this->userContract->getAllUser();
        
        return Inertia('Admin/Tenants/Tenant', [
            "tenants" => UserResource::collection($tenants),
        ]);
    }

    public function edit() {
        dd('edit');
    }

    public function destroy() {
        dd('destroy');
    }
}
