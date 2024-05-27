<?php

use App\Http\Controllers\GalleryController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'envVariables' => [
            'APP_URL' => env('APP_URL')
        ]
        
    ]);

    
});

Route::get('/gallery', function(){
    return Inertia::render('Gallery');
});

Route::get('/blogs', function(){
    return Inertia::render('Blog');
});

Route::get('/contacts', function(){
    return Inertia::render('Contact');
});

Route::get('/malls', function(){
    return Inertia::render('Mall', [
        'envVariables' => [
            'APP_URL' => env('APP_URL')
        ]
    ]);
});

Route::get('/spaces', function(){
 return Inertia::render('Space',[
    'envVariables' => [
        'APP_URL' => env('APP_URL')
    ]
 ]);
});

Route::get('/mall-detail', function(){
    return Inertia::render('MallDetail');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
