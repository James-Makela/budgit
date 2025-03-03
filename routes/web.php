<?php

use App\Http\Controllers\CostController;
use App\Http\Controllers\CategoryController;
use App\Models\Cost;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('costs', [CostController::class, 'index'])->name('costs');
});

Route::get('api/categories', [CategoryController::class, 'categoryNames']);

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
