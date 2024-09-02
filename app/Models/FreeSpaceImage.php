<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FreeSpaceImage extends Model
{
    use HasFactory;

    public function freeSpace(){
      return $this->belongsTo(FreeSpace::class);
    }
}
