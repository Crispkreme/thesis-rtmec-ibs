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
        return $this->model->where('isDeleted', false)
        ->get();
    }

    public function deleteRoom($id)
    {
        $room = $this->model->findOrFail($id);

        if ($room) {
            $room->isDeleted = true;
            $room->save();
        }
        
        return $room;
    }

    public function countAllRooms() {
        return $this->model->count();
    }

    public function countAllAvailableRooms() {
        return $this->model
            ->where('room_status', 'available')
            ->where('occupant_status', 'incomplete')
            ->count();
    }

}