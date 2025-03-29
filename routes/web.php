<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

// Tất cả các route đều trỏ đến React Router
Route::get('/{path?}', [HomeController::class, 'index'])
    ->where('path', '.*')
    ->name('home');
