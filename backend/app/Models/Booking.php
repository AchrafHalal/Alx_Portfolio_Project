<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    protected $fillable = ['name', 'email', 'reservation_date', 'reservation_time', 'service_id'];

    public function service()
    {
        return $this->belongsTo(Service::class);
    }
}