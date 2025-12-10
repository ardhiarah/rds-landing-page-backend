<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ClientLogo extends Model
{
    protected $fillable = [
        'logo_path',
        'name',
        'sort_order',
        'is_published',
    ];
}

