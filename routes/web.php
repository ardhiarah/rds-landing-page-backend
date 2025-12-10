<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PublicApiController;

Route::get('/', function () {
    return Inertia::render('Home');
});

Route::get('/layanan', function () {
    return Inertia::render('Layanan');
});

Route::get('/kontak', function () {
    return Inertia::render('Kontak');
});

Route::get('/galeri', function () {
    return Inertia::render('Galeri');
});

Route::get('/klien', function () {
    return Inertia::render('Klien');
});

Route::get('/program', function () {
    return Inertia::render('Program');
});

Route::get('/tentang', function () {
    return Inertia::render('Tentang');
});

Route::prefix('api')->group(function () {
    Route::get('/gallery', [PublicApiController::class, 'gallery']);
    Route::get('/clients', [PublicApiController::class, 'clients']);
    Route::post('/contact', [PublicApiController::class, 'contact']);
});
