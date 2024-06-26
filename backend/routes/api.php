<?php

use App\Http\Controllers\Admin\AditionalPage;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\CustomerController;
use App\Http\Controllers\Admin\HomePageController;
use App\Http\Controllers\Admin\ProductController;
// Frontend 
use App\Http\Controllers\Frontend\HomeController;


use App\Http\Controllers\ApiTokenController;
use App\Http\Controllers\LoginRegisterController;
use App\Http\Controllers\SslCommerzPaymentController;
use Illuminate\Support\Facades\Route;

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
Route::post('/login', [LoginRegisterController::class, 'login']);
Route::post('/customer-login', [LoginRegisterController::class, 'customerLogin']);
Route::post('/customer-register', [LoginRegisterController::class, 'customerRegister']);
Route::post('/register', [LoginRegisterController::class, 'register']);

Route::post('/generate-token', [ApiTokenController::class, 'generateToken']);
Route::middleware('auth:sanctum', 'admin')->group(function(){
    Route::get('/verification-token', function () {
        return response()->json(true);
    });
    Route::post('/user-create', [LoginRegisterController::class, 'userCreate']);
    Route::post('/user-permission', [LoginRegisterController::class, 'userPermission']);
    Route::post('/get-permission-data', [LoginRegisterController::class, 'getPermissionData']);
    Route::get('/get-user', [LoginRegisterController::class, 'getUser']);
    Route::post('/logout', [LoginRegisterController::class, 'logout']);
    
    // Category
    Route::get('/get-offer-category',[CategoryController::class, 'getOfferCategory']);
    Route::get('/get-category',[CategoryController::class, 'getCategory']);
    Route::get('/get-helmets-category',[CategoryController::class, 'getMotorcycleCategory']);
    Route::get('/get-subcategory',[CategoryController::class, 'getSubcategory']);
    Route::get('/get-childcategory',[CategoryController::class, 'getChildcategory']);
    Route::get('/get-category-for-product',[CategoryController::class, 'getCategoryForProduct']);
    Route::get('/get-brands',[CategoryController::class, 'getBrand']);
    Route::get('/get-promo-video',[CategoryController::class, 'getPromoVideo']);
    Route::post('/store-category',[CategoryController::class, 'storCategory']);
    Route::post('/delete-category',[CategoryController::class, 'deleteCategory']);
    Route::post('/delete-brand',[CategoryController::class, 'deleteBrand']);
    Route::post('/store-brand',[CategoryController::class, 'storBrand']);
    Route::post('/store-promotioanl-video',[CategoryController::class, 'storPromotioanlVideo']);


    // Product store-product
    Route::post('/save-stock',[ProductController::class, 'saveStock']);
    Route::post('/store-product',[ProductController::class, 'storProduct']);
    Route::post('/update-product',[ProductController::class, 'updateProduct']);
    Route::post('/store-featured-product',[ProductController::class, 'storFeaturedProduct']);
    Route::post('/store-helmate-product',[ProductController::class, 'storeHelmateProduct']);
    Route::post('/store-offer-product',[ProductController::class, 'storeOfferProduct']);
    Route::get('/get-offer-product',[ProductController::class, 'getOfferProduct']);
    Route::get('/get-helmate-product',[ProductController::class, 'getHelmateProduct']);
    Route::post('/featured-delete',[ProductController::class, 'featuredDelete']);
    Route::post('/delete-product-image',[ProductController::class, 'deleteProductImage']);
    Route::get('/get-product', [ProductController::class, 'getProduct']);
    Route::get('/get-helmet-product',[ProductController::class, 'getHelmetProduct']);
    Route::post('/delete-helmet-product',[ProductController::class, 'deleteHelmetProduct']);
    Route::get('/get-featured-product',[ProductController::class, 'getFeaturedProduct']);
    Route::get('/get-manage-stock',[ProductController::class, 'getManageStock']);

    // Home Page Api
    Route::post('/store-slider',[HomePageController::class, 'storeSlider']);
    Route::post('/delete-slider',[HomePageController::class, 'deleteSlider']);
    Route::get('/get-slider',[HomePageController::class, 'getSlider']);

    // Aditional 
    Route::post('/store-news',[AditionalPage::class, 'storeNews']);
    Route::get('/get-news',[AditionalPage::class, 'getNews']);
    Route::get('/get-contact',[AditionalPage::class, 'getContact']);
    Route::get('/get-email',[AditionalPage::class, 'getEmail']);

    //  Order Process 
    Route::post('/get-order',[AditionalPage::class, 'getOrder']);
    Route::post('/update-order',[AditionalPage::class, 'updateOrder']);

    // inventory

    Route::get('/get-stock',[AditionalPage::class, 'getStock']);


});
 // Frontend
 Route::get('/get-menus',[HomeController::class, 'getMenu']);
 Route::get('/get-product',[ProductController::class, 'getProduct']);
 Route::post('/get-category-ways-product',[ProductController::class, 'getCategoryWaysProduct']);
 Route::get('/get-slider',[HomePageController::class, 'getSlider']);
 Route::get('/get-featured-product',[HomePageController::class, 'getFeaturedProduct']);

 Route::get('/get-brands',[CategoryController::class, 'getBrand']);
 Route::post('/get-url-category',[HomePageController::class, 'getUrlCategory']);
 Route::post('/get-url-product',[HomePageController::class, 'getUrlProduct']);
 Route::post('/get-brand-product',[HomePageController::class, 'getBrandProduct']);
 
 Route::get('/get-promo-video',[CategoryController::class, 'getPromoVideo']);
 Route::get('/get-helmate-product-for-ui',[ProductController::class, 'getHelmateProductforUi']);
 Route::get('/get-offer-product-ui',[ProductController::class, 'getOfferProductUi']);

    //addtional data
Route::post('/store-contact',[AditionalPage::class,'storeContact']); 
Route::post('/store-email',[AditionalPage::class,'storeEmail']); 
Route::post('/get-news-data',[AditionalPage::class,'getNewsData']); 

Route::post('/store-order',[AditionalPage::class,'storeOrder']); 

Route::get('/get-location',[AditionalPage::class,'getLocation']); 

Route::post('/pay', [SslCommerzPaymentController::class, 'index']);
Route::post('/pay-via-ajax', [SslCommerzPaymentController::class, 'payViaAjax']);

Route::post('/success', [SslCommerzPaymentController::class, 'success']);
Route::post('/fail', [SslCommerzPaymentController::class, 'fail']);
Route::post('/cancel', [SslCommerzPaymentController::class, 'cancel']);

Route::middleware('auth:sanctum', 'customer')->group(function () {
    Route::get('/verification-customer-token', function () {
        return response()->json(true);
    });
    Route::post('/customer-order', [CustomerController::class, 'order']);
    Route::post('/customer-logout', [LoginRegisterController::class, 'customerLogout']);
    // Add more customer routes here
});