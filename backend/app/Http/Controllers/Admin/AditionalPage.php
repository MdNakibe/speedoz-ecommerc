<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Services\AditionalPageServiceProvider;

use Illuminate\Http\Request;

class AditionalPage extends Controller
{
    public function storeNews(Request $request, AditionalPageServiceProvider $aditionalPageServiceProvider){
        $responseData = $aditionalPageServiceProvider->storeNews($request);
        return $responseData;
    }
    public function storeContact(Request $request, AditionalPageServiceProvider $aditionalPageServiceProvider){
        $responseData = $aditionalPageServiceProvider->storeContact($request);
        return $responseData;
    }
    public function storeEmail(Request $request, AditionalPageServiceProvider $aditionalPageServiceProvider){
        $responseData = $aditionalPageServiceProvider->storeEmail($request);
        return $responseData;
    }
    public function storeOrder(Request $request, AditionalPageServiceProvider $aditionalPageServiceProvider){
        $responseData = $aditionalPageServiceProvider->storeOrder($request);
        return $responseData;
    }
    public function getNews(AditionalPageServiceProvider $aditionalPageServiceProvider){
        $responseData = $aditionalPageServiceProvider->getNews();
        return response()->json(['news' => $responseData], 200);
    }
    public function getContact(AditionalPageServiceProvider $aditionalPageServiceProvider){
        $responseData = $aditionalPageServiceProvider->getContact();
        return response()->json(['contact' => $responseData], 200);
    }
    public function getEmail(AditionalPageServiceProvider $aditionalPageServiceProvider){
        $responseData = $aditionalPageServiceProvider->getEmail();
        return response()->json(['email' => $responseData], 200);
    }
    public function getStock(AditionalPageServiceProvider $aditionalPageServiceProvider){
        $responseData = $aditionalPageServiceProvider->getStock();
        return response()->json(['stockCheck' => $responseData], 200);
    }
    public function getOrder(Request $request, AditionalPageServiceProvider $aditionalPageServiceProvider){
        $responseData = $aditionalPageServiceProvider->getOrder($request);
        return response()->json(['order' => $responseData], 200);
    }
    public function updateOrder(Request $request, AditionalPageServiceProvider $aditionalPageServiceProvider){
        $responseData = $aditionalPageServiceProvider->updateOrder($request);
        return $responseData;
    }
    public function getNewsData(Request $request,AditionalPageServiceProvider $aditionalPageServiceProvider){
        $responseData = $aditionalPageServiceProvider->getNewsData($request);
        return response()->json(['news' => $responseData], 200);
    }
    public function getLocation(Request $request,AditionalPageServiceProvider $aditionalPageServiceProvider){
        $responseData = $aditionalPageServiceProvider->getLocation();
        return response()->json(['area' => $responseData], 200);
    }
}
