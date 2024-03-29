<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Booking;

class BookingController extends Controller
{
    public function store(Request $request)
    {
        // Validate the request
        $validatedData = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'reservation_date' => 'required|date',
            'reservation_time' => 'required|date_format:H:i',
            'service_id' => 'required|exists:services,id'
        ]);

        // Create a new booking
        $booking = new Booking();
        $booking->name = $validatedData['name'];
        $booking->email = $validatedData['email'];
        $booking->reservation_date = $validatedData['reservation_date'];
        $booking->reservation_time = $validatedData['reservation_time'];
        $booking->service_id = $validatedData['service_id'];
        $booking->save();

        // Optionally, you can redirect the user after successful booking
        return redirect()->back()->with('success', 'Booking successful!');
    }
}
