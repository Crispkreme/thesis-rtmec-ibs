<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TenantRoomResource extends JsonResource
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
            'tenant_room_id' => $this->tenantRoom->id,
            'tenant_room_number' => $this->tenantRoom->room_number,
            'tenant_room_type' => $this->tenantRoom->room_type,
            'tenant_room_status' => $this->tenantRoom->room_status,    
        ];
    }
}
