<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\api\SubCategoryController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::middleware('auth:api')->get('/user', function (Request $request){
    return $request->user();
});


//Route::get('/subcategories/{id}', function (string $id) {
//    return 'User '.$id;
//});

Route::get('/subcategories/{id?}', [SubCategoryController::class, 'index'])->name('getSubCategory');


//Route::controller(SubCategoryController::class)->group(function () {
//    Route::get('/subcategories/{id}', 'index');
////    Route::post('/orders', 'store');
//});
//Route::get('/subcategories', [SubCategoryController::class, 'index']);
//Route::get('/subcategories/{id}', [SubCategoryController::class, 'index']);
//Route::post('/subcategories', [SubCategoryController::class, 'index']);
//Route::put('/subcategories/{id}', [SubCategoryController::class, 'index']);
//Route::delete('/subcategories/{id}', [SubCategoryController::class, 'index']);

