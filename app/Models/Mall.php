<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mall extends Model
{
    use HasFactory;

    public function images(){
      return $this->hasMany(MallImage::class);
    }

    public function ratings(){
      return $this->hasMany(Rating::class);
    }

    public function reviews(){
      return $this->hasMany(Review::class);
    }

    public function amenities(){
      return $this->hasMany(Amenity::class);
    }

    public function events(){
      return $this->hasMany(Event::class);
    }

    public function freeSpaces(){
      return $this->hasMany(FreeSpace::class);
    }

    public function Galleries(){
      return $this->hasMany(Gallery::class);
    }
}
