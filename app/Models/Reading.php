<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reading extends Model
{
    use HasFactory;

    protected $fillable = [
        'room_id',
        'room_number',
        'room_status',
        'voltage',
        'current',
    ];

    public function room()
    {
        return $this->belongsTo(Room::class, 'room_id');
    }

    public function roomNumber()
    {
        return $this->belongsTo(Room::class, 'room_number');
    }

    public function roomStatus()
    {
        return $this->belongsTo(Room::class, 'room_status');
    }
}
