<?php

namespace App\Repositories;

use App\Contracts\TenantContract;
use App\Models\Tenant;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class TenantRepository implements TenantContract {

    protected $model;

    public function __construct(Tenant $model)
    {
        $this->model = $model;
    }

    public function getAllTenant()
    {
        $query = Tenant::query();
        $tenants = $query->paginate(10)->onEachSide(1);

        return $tenants;
    }

}