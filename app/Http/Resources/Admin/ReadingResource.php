<?php

namespace App\Http\Resources\Admin;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReadingResource extends JsonResource
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
            'voltage' => $this->voltage,
            'current' => $this->current,

            'room_id' => $this->room->id,
            'room_number' => $this->room->room_number,
            'room_status' => $this->room->room_status,
            'created_at' => $this->created_at ? (new Carbon($this->created_at))->format('Y-m-d') : null,
        ];
    }
}
