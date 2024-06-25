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

    // public function getAllRoom()
    // {
    //     $rooms = $this->model->latest()->paginate(5);
    //     return response()->json($rooms);
    // }

    public function getAllRoom()
    {
        $rooms = $this->model->latest()->paginate(5);
        $formattedResponse = [
            'data' => $rooms->items(),
            'current_page' => $rooms->currentPage(),
            'last_page' => $rooms->lastPage(),
            'per_page' => $rooms->perPage(),
            'total' => $rooms->total(),
            'next_page_url' => $rooms->nextPageUrl(),
            'prev_page_url' => $rooms->previousPageUrl(),
        ];

        return response()->json($formattedResponse);
    }

}