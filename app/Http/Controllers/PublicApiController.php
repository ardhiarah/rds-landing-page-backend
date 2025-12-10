<?php

namespace App\Http\Controllers;

use App\Models\GalleryImage;
use App\Models\ClientLogo;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class PublicApiController extends Controller
{
    public function gallery()
    {
        $items = GalleryImage::query()
            ->where('is_published', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get()
            ->map(function ($img) {
                return [
                    'id' => $img->id,
                    'image_url' => url(Storage::url($img->image_path)),
                    'caption' => $img->caption,
                ];
            });

        return response()->json($items);
    }

    public function clients()
    {
        $items = ClientLogo::query()
            ->where('is_published', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get()
            ->map(function ($client) {
                return [
                    'id' => $client->id,
                    'logo_url' => url(Storage::url($client->logo_path)),
                    'name' => $client->name,
                ];
            });

        return response()->json($items);
    }

    public function contact(Request $request)
    {
        $data = $request->validate([
            'nama' => 'required|string|max:255',
            'email' => 'required|email',
            'institusi' => 'nullable|string|max:255',
            'pesan' => 'required|string',
        ]);

        Log::info('Contact form submission', $data);

        return response()->json(['ok' => true]);
    }
}
