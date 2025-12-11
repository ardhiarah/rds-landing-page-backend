<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;
use App\Models\GalleryImage;
use App\Models\ClientLogo;
use App\Models\ServiceItem;
use App\Models\ContactSubmission;

class PublicPageController extends Controller
{
    public function home()
    {
        $clientLogos = ClientLogo::query()
            ->where('is_published', true)
            ->orderBy('sort_order')
            ->orderBy('id')
            ->limit(8)
            ->get()
            ->map(function ($logo) {
                return [
                    'id' => $logo->id,
                    'logo_url' => url(Storage::url($logo->logo_path)),
                    'name' => $logo->name,
                ];
            })
            ->values();

        return Inertia::render('Home', [
            'clientLogos' => $clientLogos,
        ]);
    }

    public function layanan()
    {
        $schedules = ServiceItem::query()
            ->where('is_published', true)
            ->where('type', 'schedule')
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get()
            ->map(function ($item) {
                return [
                    'id' => $item->id,
                    'image_url' => url(Storage::url($item->image_path)),
                    'caption' => $item->caption,
                ];
            })
            ->values();

        $events = ServiceItem::query()
            ->where('is_published', true)
            ->where('type', 'event')
            ->orderBy('sort_order')
            ->orderBy('id')
            ->get()
            ->map(function ($item) {
                return [
                    'id' => $item->id,
                    'image_url' => url(Storage::url($item->image_path)),
                    'caption' => $item->caption,
                ];
            })
            ->values();

        return Inertia::render('Layanan', [
            'schedules' => $schedules,
            'events' => $events,
        ]);
    }

    public function kontak()
    {
        return Inertia::render('Kontak');
    }

    public function submitContact(Request $request)
    {
        $data = $request->validate([
            'nama' => 'required|string|max:255',
            'email' => 'required|email',
            'institusi' => 'nullable|string|max:255',
            'pesan' => 'required|string',
        ]);

        $created = ContactSubmission::create([
            'name' => $data['nama'],
            'email' => $data['email'],
            'institution' => $data['institusi'] ?? null,
            'message' => $data['pesan'],
        ]);

        Log::info('Contact form submission saved', ['id' => $created->id]);

        return response()->json(['ok' => true]);
    }

    public function galeri()
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
            })
            ->values();

        return Inertia::render('Galeri', [
            'items' => $items,
        ]);
    }

    public function klien()
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
            })
            ->values();

        return Inertia::render('Klien', [
            'items' => $items,
        ]);
    }

    public function program()
    {
        return Inertia::render('Program');
    }

    public function tentang()
    {
        return Inertia::render('Tentang');
    }
}
