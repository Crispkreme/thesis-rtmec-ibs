<?php

namespace App\Http\Resources\Admin;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
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
            'name' => $this->name,
            'email' => $this->email,
            'usertype' => $this->usertype,
            'contact_number' => $this->contact_number,
            'is_tenant' => $this->is_tenant,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
        ];
    }
}
