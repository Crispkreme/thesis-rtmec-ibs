<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TenantPayment extends Model
{
    use HasFactory;

    protected $fillable = [
        'payment_id',
        'tenant_id',
        'product_name',
        'quantity',
        'amount',
        'currency',
        'payment_status',
        'payment_method',
    ];
}
