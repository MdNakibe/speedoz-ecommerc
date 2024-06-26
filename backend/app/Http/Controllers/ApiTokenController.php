<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class ApiTokenController extends Controller
{
    public function generateToken()
    {
        // Replace this with your user retrieval logic, e.g., authenticate the user.
        $user = User::find(1);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        $token = $user->createToken('token-name')->plainTextToken;

        return response()->json(['token' => $token]);
    }
}
