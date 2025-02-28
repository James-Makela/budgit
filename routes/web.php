<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AllCostsController;
use App\Http\Controllers\CategoryController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/all-costs', [AllCostsController::class, 'index'])->middleware(['auth', 'verified'])->name('allCosts.index');
Route::get('/all-costs/create', [AllCostsController::class, 'create'])->middleware(['auth', 'verified'])->name('allCosts.create');
Route::post('all-costs/', [AllCostsController::class, 'store'])->middleware(['auth', 'verified'])->name('allCosts.store');

Route::get('/categories', [CategoryController::class, 'index'])->middleware(['auth', 'verified'])->name('categories.index');

require __DIR__.'/auth.php';
