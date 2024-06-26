<?php

namespace App\Http\Controllers;

use App\Models\Admin\Customer;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Illuminate\Validation\Rule;

class LoginRegisterController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'password' => 'required',
        ]);
        
        $credentials = $request->only('name', 'password');
        if (Auth::attempt(['name' => $request->name, 'password' => $request->password])) {
            $user = Auth::user();
            $token = $user->createToken('auth-token')->plainTextToken;
            $userdata['access_token'] = $token;
            $userdata['user'] = $user;
            return response()->json(['data' => $userdata]);
        }
        
        throw ValidationException::withMessages(['name' => 'Invalid credentials']);
    }
    public function customerLogin(Request $request)
    {
        $request->validate([
            'phone' => 'required',
            'password' => 'required',
        ]);
        $customer = Customer::where('phone', $request->phone)->first();

        if (!$customer || ! Hash::check($request->password, $customer->password)) {
            throw ValidationException::withMessages([
                'phone' => ['The provided credentials are incorrect.'],
            ]);
        }
    
        $token = $customer->createToken('customer-auth-token')->plainTextToken;
        $userdata['access_token'] = $token;
        $userdata['customer'] = $customer;
        return response()->json([
            'status' => 'success',
            'data' => $userdata,
        ]);
    
    }
    public function customerRegister(Request $request)
    {
        try{
            Validator::make($request->all(), [
                'name' => 'required|string|max:255',
                'phone' => 'required|unique:customers|max:255',
                'password' => 'required|string|min:8',
            ])->validate();
            $customer = Customer::create([
                'name' => $request->name,
                'phone' => $request->phone,
                'email' => $request->email,
                'password' => bcrypt($request->password),
            ]);
        $token = $customer->createToken('customer-auth-token')->plainTextToken;
        $userdata['access_token'] = $token;
        $userdata['customer'] = $customer;
        return response()->json([
            'data' => $userdata,
        ]);
        }catch (ValidationException $exception) {

            return response()->json([
                'status' => 'error',
                'message' => $exception->getMessage(),
                'errors' => $exception->validator->errors()->toArray(),
            ], 422);
        }
    
    }
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users|max:255',
            'password' => 'required|string|min:8|confirmed',
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);

        $token = $user->createToken('auth-token')->plainTextToken;
        return response()->json(['token' => $token]);
    }
    public function logout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json(['message' => 'Logout successful']);
    }
    public function customerLogout(Request $request)
    {
        $request->user()->tokens()->delete();

        return response()->json(['message' => 'Logout successful']);
    }
    public function userCreate(Request $request){
        Validator::make($request->all(), [
            'name' => [
                'required',
                Rule::unique('users')->ignore($request->id),
            ],
            'email' => [
                'required',
                Rule::unique('users')->ignore($request->id),
            ],
        ])->validate();
        // return response()->json([
        //     'status' => 'success',
        //     'data' => $request->all(),
        // ]);
        // User::updateOrCreate([
        //     'id' => $request['id']
        // ], [
        //     'name' => $request['name'],
        //     'email' => $request['email'],
        //     'profile_name' => $request['profile_name'],
        //     'password' => isset($request['password']) ?? Hash::make($request['password']),
        //     'type' => DB::raw('IFNULL(type, "' . 'user' . '")'),
        // ]);
        $data = [
            'name' => $request['name'],
            'email' => $request['email'],
            'profile_name' => $request['profile_name'],
            'type' => DB::raw('IFNULL(type, "' . 'user' . '")'),
        ];
        
        if (isset($request->password)) {
            $data['password'] = Hash::make($request['password']);
        }
        
        User::updateOrCreate(['id' => $request['id']], $data);

        return response()->json([
            'status' => 'success',
            'data' => 'User added successfully',
        ]);
    }
    public function getUser(){
        $user_data = User::select('id','name','profile_name','permission','email','type')->where('type','!=','admin')->get();
        return response()->json(['data' => $user_data]);
    }
    public function userPermission(Request $request){
        User::where('id',$request->user_id)
        ->update([
            'permission' => $request->permission
        ]);
        return response()->json(['data' => 'Permission Successfully added']);
    }
    public function getPermissionData(Request $request){
        $user_data = User::where('id',$request->user_id)->first();
        return response()->json(['data' => $user_data]);

    }
}
