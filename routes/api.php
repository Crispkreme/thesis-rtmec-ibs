<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\Admin\RoomController;
use App\Http\Controllers\Api\SampleApiController;
use App\Http\Controllers\Api\Tenant\TenantController;
use App\Http\Controllers\Api\Tenant\PaymentController;
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

Route::get('/admin/sample', [SampleApiController::class, 'sampleIndex']);

Route::middleware(['TenantChecker', 'auth', 'verified', 'web'])
->prefix('tenant')
->as('api.tenant.')
->group(function() {

    // DASHBOARD
    Route::get('/index', [TenantController::class, 'index'])->name('index');

    // PAYMENT
    Route::get('/payment', [PaymentController::class, 'payment'])->name('payment');
});