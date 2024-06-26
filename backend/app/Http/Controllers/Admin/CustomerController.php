<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin\Order;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function order(Request $request){
        $order = Order::where('customer_id', $request['id'])
                ->with('info.product')
                ->get();
        return response()->json([
            'status' => 'success',
            'customerOrder' => $order,
        ]);
    }
}
