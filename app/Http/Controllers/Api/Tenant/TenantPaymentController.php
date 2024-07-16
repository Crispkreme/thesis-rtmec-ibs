<?php

namespace App\Http\Controllers\Api\Tenant;

use App\Contracts\ReceiptContract;
use App\Http\Controllers\Controller;
use App\Http\Resources\Admin\ReceiptResource;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TenantPaymentController extends Controller
{   
    protected $receiptContract;

    public function __construct(
        ReceiptContract $receiptContract,
    ) {
        $this->receiptContract = $receiptContract;
    }

    public function payment()
    {   
        $userId = auth()->user()->id;
        $paginate = false;
        $paidPaginate = true; 
        $paidStatus = 'paid'; 
        $unpaidStatus = 'unpaid'; 

        $receipts = $this->receiptContract->getReceiptByUserID($userId, $paginate, 0);
        $paidReceipts = $this->receiptContract->getReceiptStatusByUserID($userId, $paidPaginate, 10, $paidStatus);
        $unpaidReceipts = $this->receiptContract->getReceiptStatusByUserID($userId, $paidPaginate, 10, $unpaidStatus);

        return Inertia::render('Tenant/Payments/Payment', [
            'receipts' => ReceiptResource::collection($receipts),
            'paidReceipts' => ReceiptResource::collection($paidReceipts),
            'unpaidReceipts' => ReceiptResource::collection($unpaidReceipts),
        ]);
    }

    public function listPayment()
    {
        dd('saaaaaa');
        return Inertia('Tenant/Payments/ListPayment');
    }
}
