<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        if (! User::query()->where('email', 'admin@gmail.com')->exists()) {
            User::create([
                'name' => 'Admin',
                'username' => 'admin',
                'email' => 'admin@gmail.com',
                'username' => 'admin',
                'password' => Hash::make('password'),
            ]);
        }
    }
}
