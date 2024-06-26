<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => 'user',
            'email' => 'user@gmail.com',
            'password' => Hash::make('user'),
            'usertype' => 'user',
            'is_tenant' => true,
            'email_verified_at' => now(), 
            'created_at' => now(), 
            'updated_at' => now(), 
        ]);

        DB::table('users')->insert([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('admin'),
            'usertype' => 'admin',
            'is_tenant' => true,
            'email_verified_at' => now(), 
            'created_at' => now(), 
            'updated_at' => now(), 
        ]);
    }
}
