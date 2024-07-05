<?php

namespace App\Http\Resources\Admin;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;

class ReceiptResource extends JsonResource
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
            'owner_id' => $this->owner->id,
            'reading_id' => $this->reading->id,
            'receipt_status' => $this->receipt_status,

            'tenant_id' => $this->tenant->id,
            'total_amount' => $this->tenant->current_balance,
            'balance' => $this->tenant->balance,

            'amount_paid' => $this->amount_paid,
            'created_at' => $this->created_at ? (new Carbon($this->created_at))->format('Y-m-d') : null,
        ];
    }
}
