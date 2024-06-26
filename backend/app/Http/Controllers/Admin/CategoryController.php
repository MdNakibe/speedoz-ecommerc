<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\CategoryServiceProvider;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getOfferCategory(CategoryServiceProvider $CategoryServiceProvider){
        $responseData = $CategoryServiceProvider->getOfferCategory();
        return response()->json(['offercategory' => $responseData], 200);
    }
    public function getCategory(CategoryServiceProvider $CategoryServiceProvider){
        $responseData = $CategoryServiceProvider->getCategory();
        return response()->json(['categories' => $responseData], 200);
    }
    public function getMotorcycleCategory(CategoryServiceProvider $CategoryServiceProvider){
        $responseData = $CategoryServiceProvider->getMotorcycleCategory();
        return response()->json(['helmets' => $responseData], 200);
    }
    public function getSubcategory(CategoryServiceProvider $CategoryServiceProvider){
        $responseData = $CategoryServiceProvider->getSubcategory();
        return response()->json(['subcategories' => $responseData], 200);
    }
    public function getChildcategory(CategoryServiceProvider $CategoryServiceProvider){
        $responseData = $CategoryServiceProvider->getChildcategory();
        return response()->json(['childcategories' => $responseData], 200);
    }
    public function getCategoryForProduct(CategoryServiceProvider $CategoryServiceProvider){
        $responseData = $CategoryServiceProvider->getCategoryForProduct();
        return response()->json(['categories' => $responseData], 200);
    }
    public function getBrand(CategoryServiceProvider $CategoryServiceProvider){
        $responseData = $CategoryServiceProvider->getBrand();
        return response()->json(['brands' => $responseData], 200);
    }
    public function getPromoVideo(CategoryServiceProvider $CategoryServiceProvider){
        $responseData = $CategoryServiceProvider->getPromoVideo();
        return response()->json(['promo' => $responseData], 200);
    }
    public function storCategory(Request $request, CategoryServiceProvider $CategoryServiceProvider){
        $responseData = $CategoryServiceProvider->storCategory($request);
        return $responseData;
    }
    public function deleteCategory(Request $request, CategoryServiceProvider $CategoryServiceProvider){
        $responseData = $CategoryServiceProvider->deleteCategory($request);
        return $responseData;
    }
    public function deleteBrand(Request $request, CategoryServiceProvider $CategoryServiceProvider){
        $responseData = $CategoryServiceProvider->deleteBrand($request);
        return $responseData;
    }
    public function storBrand(Request $request, CategoryServiceProvider $CategoryServiceProvider){
        $responseData = $CategoryServiceProvider->storBrand($request);
        return $responseData;
    }
    public function storPromotioanlVideo(Request $request, CategoryServiceProvider $CategoryServiceProvider){
        $responseData = $CategoryServiceProvider->storPromotioanlVideo($request);
        return $responseData;
    }
    
}
