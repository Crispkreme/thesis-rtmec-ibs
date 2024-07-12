<?php

namespace App\Http\Resources\Admin;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TenantResource extends JsonResource
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
            'total_voltage' => $this->total_voltage,
            'total_current' => $this->total_current,
            'previous_balance' => $this->previous_balance,
            'current_balance' => $this->current_balance,
    
            'tenant_id' => $this->tenant->id,
            'tenant_name' => $this->tenant->name,
            'tenant_email' => $this->tenant->email,
            'tenant_is_tenant' => $this->tenant->is_tenant,
    
            'tenant_room_id' => $this->tenantRoom->id,
            'tenant_room_number' => $this->tenantRoom->room_number,
            'tenant_room_type' => $this->tenantRoom->room_type,
            'tenant_room_status' => $this->tenantRoom->room_status,
    
            'created_at' => $this->created_at ? (new Carbon($this->created_at))->format('Y-m-d') : null,
        ];
    }
}
