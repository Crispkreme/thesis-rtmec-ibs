<?php

namespace App\Http\Controllers\Api\Admin;

use App\Contracts\RoomContract;
use App\Contracts\TenantContract;
use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\RoomResource;
use App\Http\Resources\Admin\TenantRoomResource;
use Illuminate\Http\Request;

class AdminRoomController extends Controller
{
    protected $roomContract;

    public function __construct(
        RoomContract $roomContract,
        TenantContract $tenantContract,
    ) {
        $this->roomContract = $roomContract;
        $this->tenantContract = $tenantContract;
    }

    public function index() {
        
        $rooms = $this->roomContract->getAllRoom();
        $totalRooms = $this->roomContract->countAllAvailableRooms();
        $tenantRooms = $this->tenantContract->getAllTenantRoom();
        
        return Inertia('Admin/Rooms/Room', [
            "rooms" => RoomResource::collection($rooms),
            "tenantRooms" => TenantRoomResource::collection($tenantRooms),
            "totalRooms" => $totalRooms,
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

    public function updateRoom($id) {
        dd($id);
    }
}
