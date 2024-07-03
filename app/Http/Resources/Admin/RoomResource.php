<?php

namespace App\Http\Resources\Admin;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RoomResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'room_number' => $this->room_number,
            'room_type' => $this->room_type,
            'room_status' => $this->room_status,
            'occupants' => $this->occupants,
            'occupant_status' => $this->occupant_status,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
        ];
    }
}
