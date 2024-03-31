<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});
Route::post('/get-started', 'App\Http\Controllers\EmailController@sendEmail')->name('get-started');

