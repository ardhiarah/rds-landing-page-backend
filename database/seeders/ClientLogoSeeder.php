<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;
use App\Models\ClientLogo;

class ClientLogoSeeder extends Seeder
{
    public function run(): void
    {
        $svg = '<svg xmlns="http://www.w3.org/2000/svg" width="240" height="120"><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#555" font-size="16">Client Logo</text></svg>';

        $start = (int) ClientLogo::max('sort_order');
        for ($i = 1; $i <= 12; $i++) {
            $path = "clients/sample-{$i}.svg";
            Storage::disk('public')->put($path, $svg);

            ClientLogo::create([
                'logo_path' => $path,
                'name' => "Klien {$i}",
                'sort_order' => $start + $i,
                'is_published' => true,
            ]);
        }
    }
}
