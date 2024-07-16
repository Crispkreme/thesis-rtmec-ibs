<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TenantBill extends Model
{
    use HasFactory;

    protected $fillable = [
        'tenant_id',
        'tenant_room_id',
        'previous_balance',
        'current_balance',
    ];
}
