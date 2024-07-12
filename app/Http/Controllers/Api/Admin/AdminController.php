<?php

namespace App\Http\Controllers\Api\Admin;

use App\Contracts\RoomContract;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

use App\Http\Requests\RoomUpdateRequest;
use Illuminate\Http\Request;

use Exception;

class AdminController extends Controller
{
    protected $roomContract;

    public function __construct(
        RoomContract $roomContract,
    ) {
        $this->roomContract = $roomContract;
    }

    public function dashboard()
    {
        return Inertia('Admin/Dashboard');
    }

    public function addRoom(RoomUpdateRequest $request) {

        DB::beginTransaction();

        try {

            $params = $request->validated();
            
            $room = $this->roomContract->addRoom($params);

            DB::commit();

            return response()->json(['message' => 'Room added successfully', 'room' => $room], 201);

        } catch (Exception $e) {

            DB::rollback();

            Log::error('Error in addRoom: ' . $e->getMessage());

            return response()->json([
                'error' => 'Failed to add room', 
                'message' => $e->getMessage()
            ], 500);
        }
    }

    public function getAllRoom() {
        return response()->json([
            'data' => $this->roomContract->getAllRoom()
        ], 200);
    }
}
