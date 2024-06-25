<?php

use App\Http\Controllers\AdminController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/admin/room/add-room', [AdminController::class, 'addRoom']);
Route::get('/admin/room/get-all-room', [AdminController::class, 'getAllRoom']);