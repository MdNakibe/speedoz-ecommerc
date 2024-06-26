<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\HomePageServiceProvider;
use Illuminate\Http\Request;

class HomePageController extends Controller
{
    public function storeSlider(Request $request, HomePageServiceProvider $homePageServiceProvider){
        $responseData = $homePageServiceProvider->storeSlider($request);
        return $responseData;
    }
    public function deleteSlider(Request $request, HomePageServiceProvider $homePageServiceProvider){
        $responseData = $homePageServiceProvider->deleteSlider($request);
        return $responseData;
    }
    public function getSlider(Request $request, HomePageServiceProvider $homePageServiceProvider){
        $responseData = $homePageServiceProvider->getSlider();
        return response()->json(['sliders' => $responseData], 200);
    }
    public function getFeaturedProduct(Request $request, HomePageServiceProvider $homePageServiceProvider){
        $responseData = $homePageServiceProvider->getFeaturedProduct();
        return response()->json(['featuredProducts' => $responseData], 200);
    }
    public function getUrlCategory(Request $request, HomePageServiceProvider $homePageServiceProvider){
        $responseData = $homePageServiceProvider->getUrlCategory($request);
        return response()->json(['products' => $responseData], 200);
    }
    public function getUrlProduct(Request $request, HomePageServiceProvider $homePageServiceProvider){
        $responseData = $homePageServiceProvider->getUrlProduct($request);
        return response()->json(['products' => $responseData], 200);
    }
    public function getBrandProduct(Request $request, HomePageServiceProvider $homePageServiceProvider){
        $responseData = $homePageServiceProvider->getBrandProduct($request);
        return response()->json(['brandProduct' => $responseData], 200);
    }
}
