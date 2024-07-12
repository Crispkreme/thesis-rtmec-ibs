<?php

namespace App\Repositories;

use App\Contracts\ReadingContract;
use App\Models\Reading;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class ReadingRepository implements ReadingContract {

    protected $model;

    public function __construct(Reading $model)
    {
        $this->model = $model;
    }

    public function getAllReading()
    {
        $query = Reading::query();
        $readings = $query->get();

        return $readings;
    }

}