<?php

namespace App\Repositories;

use App\Contracts\TenantPaymentContract;
use App\Models\TenantPayment;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class TenantPaymentRepository implements TenantPaymentContract {

    protected $model;

    public function __construct(TenantPayment $model)
    {
        $this->model = $model;
    }

}