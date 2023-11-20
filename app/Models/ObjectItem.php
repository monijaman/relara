<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class ObjectItem extends Model
{
    use HasFactory;


    public const STATUS_SELECT = [
        '0' => 'Inactive',
        '1' => 'Active',
    ];

    protected $dates = [
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $fillable = [
        'name',
        'slug',
        'status',
        'code',
        'category_id',
        'subcategory_id',
        'description',
        'photo',
        'status',
        'view_count',
        'created_at',
        'updated_at',
        'deleted_at',
    ];
    protected function setNameAttribute($value)
    {
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }
}
