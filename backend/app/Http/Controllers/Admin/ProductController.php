<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\ProductServiceProvider;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function saveStock(Request $request, ProductServiceProvider $ProductServiceProvider){
        $responseData = $ProductServiceProvider->saveStock($request);
        
        return $responseData;
    }
    public function storProduct(Request $request, ProductServiceProvider $ProductServiceProvider){
        $responseData = $ProductServiceProvider->storProduct($request);
        
        return $responseData;
    }
    public function updateProduct(Request $request, ProductServiceProvider $ProductServiceProvider){
        $responseData = $ProductServiceProvider->updateProduct($request);
        
        return $responseData;
    }
    public function storFeaturedProduct(Request $request, ProductServiceProvider $ProductServiceProvider){
        $responseData = $ProductServiceProvider->storFeaturedProduct($request);
        return $responseData;
    }
    public function storeHelmateProduct(Request $request, ProductServiceProvider $ProductServiceProvider){
        $responseData = $ProductServiceProvider->storeHelmateProduct($request);
        return $responseData;
    }
    public function storeOfferProduct(Request $request, ProductServiceProvider $ProductServiceProvider){
        $responseData = $ProductServiceProvider->storeOfferProduct($request);
        return $responseData;
    }
    public function featuredDelete(Request $request, ProductServiceProvider $ProductServiceProvider){
        $responseData = $ProductServiceProvider->featuredDelete($request);
        return $responseData;
    }
    public function deleteProductImage(Request $request, ProductServiceProvider $ProductServiceProvider){
        $responseData = $ProductServiceProvider->deleteProductImage($request);
        return $responseData;
    }
    public function deleteHelmetProduct(Request $request, ProductServiceProvider $ProductServiceProvider){
        $responseData = $ProductServiceProvider->deleteHelmetProduct($request);
        return $responseData;
    }
    public function getProduct(Request $request, ProductServiceProvider $ProductServiceProvider){
        $responseData = $ProductServiceProvider->getProduct();
        return response()->json(['products' => $responseData], 200);
    }
    public function getHelmateProduct(Request $request, ProductServiceProvider $ProductServiceProvider){
        $responseData = $ProductServiceProvider->getHelmateProduct();
        return response()->json(['helmatsProduct' => $responseData], 200);
    }
    public function getOfferProduct(Request $request, ProductServiceProvider $ProductServiceProvider){
        $responseData = $ProductServiceProvider->getOfferProduct();
        return response()->json(['offerProduct' => $responseData], 200);
    }
    public function getHelmateProductforUi(Request $request, ProductServiceProvider $ProductServiceProvider){
        $responseData = $ProductServiceProvider->getHelmateProductforUi();
        return response()->json(['helmatsProduct' => $responseData], 200);
    }
    public function getOfferProductUi(Request $request, ProductServiceProvider $ProductServiceProvider){
        $responseData = $ProductServiceProvider->getOfferProductUi();
        return response()->json(['offerProduct' => $responseData], 200);
    }
    public function getHelmetProduct(Request $request, ProductServiceProvider $ProductServiceProvider){
        $responseData = $ProductServiceProvider->getHelmetProduct();
        return response()->json(['helmets' => $responseData], 200);
    }
    public function getCategoryWaysProduct(Request $request, ProductServiceProvider $ProductServiceProvider){
        $responseData = $ProductServiceProvider->getCategoryWaysProduct($request);
        return response()->json(['productsData' => $responseData], 200);
    }
    public function getFeaturedProduct(Request $request, ProductServiceProvider $ProductServiceProvider){
        $responseData = $ProductServiceProvider->getFeaturedProduct();
        return response()->json(['featuredProducts' => $responseData], 200);
    }
    public function getManageStock(Request $request, ProductServiceProvider $ProductServiceProvider){
        $responseData = $ProductServiceProvider->getManageStock();
        return response()->json(['stockmanage' => $responseData], 200);
    }
}
