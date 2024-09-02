<?php

use App\Http\Controllers\GalleryController;
use App\Http\Controllers\ProfileController;
use App\Models\Mall;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {

  $malls = Mall::with('galleries', 'images', 'ratings')->get();

  $malls = $malls->map(function ($mall) {
    return [
        'id' => $mall->id,
        'name' => $mall->name,
        'ratings' => $mall->ratings,
        'address' => $mall->address,
        'image_url' => $mall->images->first()->image_path ?? null, // Get the first image's URL or null if not available
        'estimated_people' => $mall->estimated_people,
        'office_number' => $mall->office_number,
        'rating' => $mall->ratings->first()->rating ?? null,
    ];
});


  // return dd($malls);

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'envVariables' => [
            'APP_URL' => env('APP_URL')
        ],
        'malls' => $malls
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
})->name('spaces');

Route::get('/mall-detail/{mall}', function(Mall $mall){
    // dd($mall);
    return Inertia::render('MallDetail',[
      'mall' => $mall->only(
        'id',
        'name',
        'website',
        'rating'


      )
    ]);
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
