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

    // public function getAllReading()
    // {
    //     $query = Reading::query();
    //     $readings = $query->get();

    //     return $readings;
    // }

}