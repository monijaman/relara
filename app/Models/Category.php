<?php

namespace App\Models;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
//use Spatie\MediaLibrary\HasMedia;
//use Spatie\MediaLibrary\InteractsWithMedia;
//use Spatie\MediaLibrary\MediaCollections\Models\Media;


class Category extends Model
{
    use HasFactory;

    public const STATUS_SELECT = [
        '0' => 'Inactive',
        '1' => 'Active',
    ];

    public $table = 'categories';

    protected $appends = [
        'photo',
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
        'created_at',
        'updated_at',
        'deleted_at',
    ];

//    public function registerMediaConversions(Media $media = null): void
//    {
//        $this->addMediaConversion('thumb')->fit('crop', 50, 50);
//        $this->addMediaConversion('preview')->fit('crop', 120, 120);
//
//    }

    public function getPhotoAttribute()
    {
//        $file = $this->getMedia('photo')->last();
//        if ($file) {
//            $file->url = $file->getUrl();
//            $file->thumbnail = $file->getUrl('thumb');
//            $file->preview = $file->getUrl('preview');
//        }
//
//        return $file;
    }

    public function subcategories()
    {
        return $this->hasMany(SubCategory::class, 'category_id', 'id');
    }

    protected function setNameAttribute($value)
    {
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = Str::slug($value);
    }

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
