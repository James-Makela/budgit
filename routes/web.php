<?php

use App\Http\Controllers\CostController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\FrequencyController;
use App\Http\Controllers\IncomeController;
use App\Http\Controllers\TransactionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/income', [IncomeController::class, 'index'])->name('income');
    Route::post('/income', [IncomeController::class, 'store']);
    Route::delete('/income/{id}', [IncomeController::class, 'destroy']);

    Route::get('/costs', [CostController::class, 'index'])->name('costs');
    Route::post('/costs', [CostController::class, 'store']);
    Route::put('/costs/{cost}', [CostController::class, 'update']);
    Route::delete('/costs/{id}', [CostController::class, 'destroy']);

    Route::get('/categories', [CategoryController::class, 'index'])->name('categories');
    Route::post('/categories', [CategoryController::class, 'store']);
    Route::delete('/categories/{id}', [CategoryController::class, 'destroy']);

    Route::get('/transactions', [TransactionController::class, 'index'])->name('transactions');
    Route::post('/transactions', [TransactionController::class, 'store']);

    Route::post('/test', function (Request $request) {
        dd($request->all()); // Check if this works
    });
});

// TODO: Move api routes to api file
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/api/categories', [CategoryController::class, 'categoryNames']);
    Route::get('/api/frequencies', [FrequencyController::class, 'frequencyNames']);
});


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
