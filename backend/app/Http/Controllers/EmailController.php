<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\GetStartedEmail;

class EmailController extends Controller
{
    public function sendEmail(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);
        $email = $request->input('email');

        Mail::to($email)->send(new GetStartedEmail());


        return response()->json(['message' => 'Email sent successfully']);
    }
}

