<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bookmark extends Model
{
    use HasFactory;

    public function mall(){
      return $this->belongsTo(Mall::class);
    }

    public function user(){
      return $this->belongsTo(User::class);
    }
}
