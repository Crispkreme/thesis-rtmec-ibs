<?php

use App\Http\Controllers\Admin\ReadingController;
use App\Http\Controllers\Admin\RoomController;
use App\Http\Controllers\Admin\TenantController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['TenantChecker', 'auth', 'verified'])->name('dashboard');


// ADMIN GROUP ROUTES
Route::middleware(['adminChecker', 'auth', 'verified'])
->prefix('admin')
->as('admin.')
->group(function() {

    // FOR DASHBOARD
    Route::get('dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('dashboard');

    // FOR ROOMS
    Route::get('room', [RoomController::class, 'index'])->name('room');

    // FOR TENANTS
    Route::get('tenant', [TenantController::class, 'index'])->name('tenant');
    Route::get('edit/{id}', [TenantController::class, 'edit'])->name('tenant.edit');
    Route::get('destroy/{id}', [TenantController::class, 'destroy'])->name('tenant.destroy');

    // FOR READINGS
    Route::get('reading', [ReadingController::class, 'index'])->name('reading');

    // FOR RECEIPT
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';