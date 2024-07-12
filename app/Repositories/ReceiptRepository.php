<?php

namespace App\Repositories;

use App\Contracts\ReceiptContract;
use App\Models\Receipt;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class ReceiptRepository implements ReceiptContract {

    protected $model;

    public function __construct(Receipt $model)
    {
        $this->model = $model;
    }

    public function getReceiptByUserID($id, $paginate = true, $perPage = 10) {
        $query = $this->model
            ->with(['owner', 'tenant'])
            ->where('tenant_id', $id);
    
        if ($paginate) {
            return $query->paginate($perPage);
        } else {
            return $query->get();
        }
    }

    public function getReceiptStatusByUserID($id, $paginate = true, $perPage = 10, $status) {
        $query = $this->model
            ->with(['owner', 'tenant'])
            ->where('tenant_id', $id)
            ->where('receipt_status', $status);
    
        if ($paginate) {
            return $query->paginate($perPage);
        } else {
            return $query->get();
        }
    }
    
}