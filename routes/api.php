<?php

use App\Http\Controllers\Api\Tenant\TenantController;
use App\Http\Controllers\Api\Tenant\TenantPaymentController;

use App\Http\Controllers\Api\Admin\AdminController;
use App\Http\Controllers\Api\Admin\AdminRoomController;
use App\Http\Controllers\Api\Admin\AdminTenantController;
use App\Http\Controllers\Api\Admin\AdminPaymentController;
use App\Http\Controllers\Api\Admin\AdminReadingController;
use App\Http\Controllers\Api\Admin\AdminReceiptController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware(['TenantChecker', 'auth', 'verified', 'web'])
->prefix('tenant')
->as('api.tenant.')
->group(function() {

    // DASHBOARD
    Route::get('/index', [TenantController::class, 'index'])->name('index');

    // PAYMENT
    Route::get('/payment', [TenantPaymentController::class, 'payment'])->name('payment');
});

Route::middleware(['adminChecker', 'auth', 'verified', 'web'])
->prefix('admin')
->as('api.admin.')
->group(function() {

    // DASHBOARD
    Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('dashboard');

    // PAYMENT
    Route::get('/payment', [AdminPaymentController::class, 'payment'])->name('payment');

    // ROOM
    Route::get('room', [AdminRoomController::class, 'index'])->name('room');
    Route::get('/room/delete/{id}', [AdminRoomController::class, 'deleteRoom'])->name('room.delete');
    Route::get('/room/update/{id}', [AdminRoomController::class, 'updateRoom'])->name('room.update');

    // TENANT
    Route::get('tenant', [AdminTenantController::class, 'index'])->name('tenant');
    // Route::get('edit/{id}', [TenantController::class, 'edit'])->name('tenant.edit');
    // Route::get('destroy/{id}', [TenantController::class, 'destroy'])->name('tenant.destroy');

    // FOR READINGS
    Route::get('reading', [AdminReadingController::class, 'index'])->name('reading');

    // FOR RECEIPT
    Route::get('payment', [AdminReceiptController::class, 'index'])->name('payment');
});