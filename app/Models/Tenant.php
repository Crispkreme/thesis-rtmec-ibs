<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tenant extends Model
{
    use HasFactory;

    protected $fillable = [
        'tenant_id',
        'tenant_room_id',
        'total_voltage',
        'total_current',
        'previous_balance',
        'current_balance',
    ];
    
    // FOR ROOM
    public function tenantRoom()
    {
        return $this->belongsTo(Room::class, 'tenant_room_id');
    }

    // FOR TENANT
    public function tenant()
    {
        return $this->belongsTo(User::class, 'tenant_id');
    }
}
