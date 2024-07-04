<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Admin\RoomController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// FOR ADMIN FUNCTIONALITY
Route::post('/admin/room/add-room', [AdminController::class, 'addRoom']);
Route::get('/admin/room/get-all-room', [AdminController::class, 'getAllRoom']);

// FOR ROOM FUNCTIONALITY
Route::get('/admin/room/delete/{id}', [RoomController::class, 'deleteRoom'])->name('admin.room.delete');
Route::get('/admin/room/update/{id}', [RoomController::class, 'updateRoom'])->name('admin.room.update');
Route::get('/admin/room', [RoomController::class, 'index'])->name('api.admin.room');