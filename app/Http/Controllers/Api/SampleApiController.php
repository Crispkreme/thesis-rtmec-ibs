<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SampleApiController extends Controller
{
    //

    public function sampleIndex() {
        return Inertia('Sample/Index');
    }
}
