<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MallImage extends Model
{
    use HasFactory;

    public function mall(){
      return $this->belongsTo(MallImage::class);
    }
}
