<?php

namespace App\Http\Controllers\Admin;

use App\Contracts\RoomContract;
use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\RoomResource;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    protected $roomContract;

    public function __construct(
        RoomContract $roomContract,
    ) {
        $this->roomContract = $roomContract;
    }

    public function index() {

        $rooms = $this->roomContract->getAllRoom();
        
        return Inertia('Admin/Rooms/Room', [
            "rooms" => RoomResource::collection($rooms),
        ]);
    }

    public function deleteRoom($id) {

        $this->roomContract->deleteRoom($id);
        $rooms = $this->roomContract->getAllRoom();

        $responseData = [
            'data' => RoomResource::collection($rooms),
        ];

        return Inertia('Admin/Rooms/Room', [
            'rooms' => json_encode($responseData),
        ]);
    }
}
