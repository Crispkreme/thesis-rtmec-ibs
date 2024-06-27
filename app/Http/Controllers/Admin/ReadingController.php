<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Contracts\ReadingContract;
use App\Http\Resources\Admin\ReadingResource;

class ReadingController extends Controller
{
    protected $readingContract;

    public function __construct(
        ReadingContract $readingContract,
    ) {
        $this->readingContract = $readingContract;
    }

    public function index() {

        $readings = $this->readingContract->getAllReading();
        
        return Inertia('Admin/Readings/Reading', [
            "$readings" => ReadingResource::collection($readings),
        ]);
    }
}
