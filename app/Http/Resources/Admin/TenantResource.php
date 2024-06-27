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

            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
        ];

        // $table->foreignId('tenant_id')->constrained('users');
        // $table->foreignId('tenant_name')->constrained('users');
        // $table->foreignId('is_tenant')->constrained('users');
        // $table->foreignId('created_tenant_at')->constrained('users');

        // $table->foreignId('tenant_room_id')->constrained('rooms');
        // $table->foreignId('tenant_room_number')->constrained('rooms');
        // $table->foreignId('tenant_room_status')->constrained('rooms');
    }
}
