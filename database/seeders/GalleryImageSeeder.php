<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use App\Models\GalleryImage;

class GalleryImageSeeder extends Seeder
{
    public function run(): void
    {
        $svg = '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#555" font-size="16">Gallery Image</text></svg>';

        $start = (int) GalleryImage::max('sort_order');
        for ($i = 1; $i <= 12; $i++) {
            $path = "gallery/sample-{$i}.svg";
            Storage::disk('public')->put($path, $svg);

            GalleryImage::create([
                'image_path' => $path,
                'caption' => "Foto Kegiatan {$i}",
                'sort_order' => $start + $i,
                'is_published' => true,
            ]);
        }
    }
}

