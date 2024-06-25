<?php

namespace App\Repositories;

use App\Contracts\RoomContract;
use App\Models\Room;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class RoomRepository implements RoomContract {

    protected $model;

    public function __construct(Room $model)
    {
        $this->model = $model;
    }

    public function addRoom($params)
    {
        return $this->model->create($params);
    }

    public function getAllRoom()
    {
        return $this->model->latest();
    }
}