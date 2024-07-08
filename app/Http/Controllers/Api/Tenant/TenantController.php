<?php

namespace App\Http\Controllers\Api\Tenant;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TenantController extends Controller
{
    public function index()
    {
        return Inertia('Tenant/Dashboard');
    }
}
