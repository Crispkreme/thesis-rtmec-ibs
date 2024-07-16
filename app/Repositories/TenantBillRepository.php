<?php

namespace App\Repositories;

use App\Contracts\TenantBillContract;
use App\Models\TenantBill;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class TenantBillRepository implements TenantBillContract {

    protected $model;

    public function __construct(TenantBill $model)
    {
        $this->model = $model;
    }

}