<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FreeSpace extends Model
{
    use HasFactory;
    public function mall(){
      return $this->belongsTo(Mall::class);
    }

    public function freeSpaceImages(){
      return $this->hasMany(FreeSpaceImage::class);
    }

}
