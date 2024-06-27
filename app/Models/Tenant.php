<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tenant extends Model
{
    use HasFactory;

    protected $fillable = [
        'tenant_id',
        'tenant_name',
        'is_tenant',
        'created_tenant_at',
        'tenant_room_id',
        'tenant_room_number',
        'tenant_room_status',
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

    public function tenantRoomNumber()
    {
        return $this->belongsTo(Room::class, 'tenant_room_number');
    }

    public function tenantRoomStatus()
    {
        return $this->belongsTo(Room::class, 'tenant_room_status');
    }

    // FOR TENANT
    public function tenant()
    {
        return $this->belongsTo(User::class, 'tenant_id');
    }

    public function tenantName()
    {
        return $this->belongsTo(User::class, 'tenant_name');
    }

    public function isTenant()
    {
        return $this->belongsTo(User::class, 'is_tenant');
    }

    public function createdTenantAt()
    {
        return $this->belongsTo(User::class, 'created_tenant_at');
    }
}
