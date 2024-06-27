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
})->middleware(['userChecker', 'auth', 'verified'])->name('dashboard');



// ADMIN GROUP ROUTES
Route::middleware(['adminChecker', 'auth', 'verified'])->group(function() {

    // FOR DASHBOARD
    Route::get('admin/dashboard', function () {
        return Inertia::render('Admin/Dashboard');
    })->name('admin.dashboard');

    // FOR ROOMS
    Route::get('admin/room', [RoomController::class, 'index'])->name('admin.room');

    // FOR TENANTS
    Route::get('admin/tenant', [TenantController::class, 'index'])->name('admin.tenant');
    Route::get('admin/edit/{id}', [TenantController::class, 'edit'])->name('admin.tenant.edit');
    Route::get('admin/destroy/{id}', [TenantController::class, 'destroy'])->name('admin.tenant.destroy');

    // FOR READINGS
    Route::get('admin/reading', [ReadingController::class, 'index'])->name('admin.reading');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';