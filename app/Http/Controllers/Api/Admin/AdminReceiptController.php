<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Contracts\ReceiptContract;

class AdminReceiptController extends Controller
{
    protected $receiptContract;

    public function __construct(
        ReceiptContract $receiptContract,
    ) {
        $this->receiptContract = $receiptContract;
    }

    public function index() {

        // $readings = $this->readingContract->getAllReading();

        // return Inertia('Admin/Readings/Reading', [
        //     "readings" => ReadingResource::collection($readings),
        // ]);

        dd('payment index');
    }
}
