<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AdminPaymentController extends Controller
{
    public function listPayment(Request $request, $id)
    {
        return Inertia::render('Admin/Payments/AdminListPayment');
    }
}
