<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Symfony\Contracts\Service\Attribute\Required;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/cities', function (Request $request) {
    $cities = [
        ['name' => 'Addis Ababa'],
        ['name' => 'Dire Dawa'],
        ['name' => 'Mekelle'],
        ['name' => 'Gondar'],
        ['name' => 'Hawassa'],
        ['name' => 'Bahir Dar'],
        ['name' => 'Adama (Nazret)'],
        ['name' => 'Jimma'],
        ['name' => 'Harar'],
        ['name' => 'Jijiga'],
        ['name' => 'Shashamane'],
        ['name' => 'Gambela'],
        ['name' => 'Debre Markos'],
        ['name' => 'Debre Birhan'],
        ['name' => 'Asella'],
        ['name' => 'Axum'],
        ['name' => 'Dessie'],
        ['name' => 'Nekemte'],
        ['name' => 'Ambo'],
        ['name' => 'Sodo'],
        ['name' => 'Dilla'],
        ['name' => 'Woldia'],
    ];

    return response()->json($cities);
});

Route::get('/addis-ababa-subcities', function (Request $request) {
    $subcities = [
        ['name' => 'Arada'],
        ['name' => 'Bole'],
        ['name' => 'Kirkos'],
        ['name' => 'Lideta'],
        ['name' => 'Nifas Silk-Lafto'],
        ['name' => 'Yeka'],
        ['name' => 'Gullele'],
        ['name' => 'Kolfe Keranio'],
        ['name' => 'Akaky Kaliti'],
        ['name' => 'Addis Ketema'],
        ['name' => 'Lemi Kura'],
        ['name' => 'Gullele'],
    ];

    return response()->json($subcities);
});

Route::get('/mall-types', function (Request $request) {
    $mallTypes = [
        ['name' => 'Shopping Malls'],
        ['name' => 'Regional Malls'],
        ['name' => 'Community Malls'],
        ['name' => 'Neighborhood Malls'],
        ['name' => 'Outlet Malls'],
        ['name' => 'Luxury Malls'],
        ['name' => 'Lifestyle Centers'],
        ['name' => 'Power Centers'],
        ['name' => 'Mixed-Use Developments'],
        ['name' => 'Entertainment Malls'],
        ['name' => 'Transit-Oriented Malls'],
        ['name' => 'Eco-Friendly Malls'],
        ['name' => 'Christian Malls'],
        ['name' => 'Muslim Malls'],
        ['name' => 'Jewish Malls'],
        ['name' => 'Hindu Malls'],
        ['name' => 'Buddhist Malls'],
        ['name' => 'Multi-Faith Malls'],
    ];

    return response()->json($mallTypes);
});


Route::get('/mall-purpose', function (Request $request) {
    $purposes = [
        ['name'=>'supermarket'],
        ['name'=>'clothing store'],
        ['name'=>'electronics store'],
        ['name'=>'jewelry shop'],
        ['name'=>'restaurant'],
        ['name'=>'coffee shop'],
        ['name'=>'barber shop'],
        ['name'=>'beauty salon'],
        ['name'=>'fitness center'],
        // Add more purposes as needed
    ];

    return response()->json($purposes);
});

Route::get('/addis-ababa-locations', function (Request $request) {
    $locations = [
        ['name'=>'Meskel Square'],
        ['name'=>'Bole International Airport'],
        ['name'=>'Piazza'],
        ['name'=>'4-kilo'],
        ['name'=>'6-kilo'],
        ['name'=>'Merkato'],
        ['name'=>'Addis Ababa University'],
        ['name'=>'Entoto Hill'],
        ['name'=>'Bole Medhanealem'],
        ['name'=>'Megenagna'],
        ['name'=>'CMC'],
        ['name'=>'Ayat'],
        ['name'=>'Lebu'],
        ['name'=>'Legehar'],
        ['name'=>'Mexico'],
        ['name'=>'Tor-hayloch'],
        ['name'=>'Sealite-Mihret'],
        ['name'=>'Ayer Tena'],
        ['name'=>'Yeka Abado'],
        ['name'=>'Jakros'],
        ['name'=>'Goro'],
        ['name'=>'22-Mazoria'],
        ['name'=>'Karalo'],
        ['name'=>'Kotebe'],
        ['name'=>'Winget'],
        ['name'=>'Enkulal-Fabrika'],
        ['name'=>'Tulu-Dimtu'],
        ['name'=>'Saris'],
        ['name'=>'Bole-Bulbula'],
        ['name'=>'Sarbet'],
        ['name'=>'Bisrate-Gebriel'],
        ['name'=>'Urael'],
        ['name'=>'France'],
        ['name'=>'Shola'],
        ['name'=>'Bella'],
        ['name'=>'Jan-Meda'],
        ['name'=>'5-kilo'],
        ['name'=>'Unity-Park'],
        ['name'=>'Senga-Tera'],

        // Add more locations as needed
    ];

    return response()->json($locations);
});

Route::get('/job-type', function(Request $request){
    $jobs = [
        ['name'=> 'Full-Time'],
        ['name'=> 'Hybrid'],
        ['name'=> 'Remote'],
        ['name'=> 'Contractual'],
    ];
    return response()->json($jobs);
});


Route::get('/job-experience', function(Request $request){
    $experience =[
        ['name'=>'Fresher'],
        ['name'=>'Intermediate'],
        ['name'=>'Expert'],
    ];
    return response()->json($experience);
});