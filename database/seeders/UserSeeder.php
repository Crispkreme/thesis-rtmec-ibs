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
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('admin'),
            'usertype' => 'admin',
            'is_tenant' => true,
            'email_verified_at' => now(), 
            'created_at' => now(), 
            'updated_at' => now(), 
        ]);
        DB::table('users')->insert([
            'name' => 'tenant 1',
            'email' => 'tenant1@gmail.com',
            'password' => Hash::make('tenant1'),
            'usertype' => 'tenant',
            'is_tenant' => true,
            'email_verified_at' => now(), 
            'created_at' => now(), 
            'updated_at' => now(), 
        ]);
        DB::table('users')->insert([
            'name' => 'tenant 2',
            'email' => 'tenant2@gmail.com',
            'password' => Hash::make('tenant2'),
            'usertype' => 'tenant',
            'is_tenant' => true,
            'email_verified_at' => now(), 
            'created_at' => now(), 
            'updated_at' => now(), 
        ]);
        DB::table('users')->insert([
            'name' => 'tenant 3',
            'email' => 'tenant3@gmail.com',
            'password' => Hash::make('tenant3'),
            'usertype' => 'tenant',
            'is_tenant' => true,
            'email_verified_at' => now(), 
            'created_at' => now(), 
            'updated_at' => now(), 
        ]);
        DB::table('users')->insert([
            'name' => 'tenant 4',
            'email' => 'tenant4@gmail.com',
            'password' => Hash::make('tenant4'),
            'usertype' => 'tenant',
            'is_tenant' => true,
            'email_verified_at' => now(), 
            'created_at' => now(), 
            'updated_at' => now(), 
        ]);
        DB::table('users')->insert([
            'name' => 'tenant 5',
            'email' => 'tenant5@gmail.com',
            'password' => Hash::make('tenant5'),
            'usertype' => 'tenant',
            'is_tenant' => true,
            'email_verified_at' => now(), 
            'created_at' => now(), 
            'updated_at' => now(), 
        ]);
        DB::table('users')->insert([
            'name' => 'tenant 6',
            'email' => 'tenant6@gmail.com',
            'password' => Hash::make('tenant6'),
            'usertype' => 'tenant',
            'is_tenant' => true,
            'email_verified_at' => now(), 
            'created_at' => now(), 
            'updated_at' => now(), 
        ]);
        DB::table('users')->insert([
            'name' => 'tenant 7',
            'email' => 'tenant7@gmail.com',
            'password' => Hash::make('tenant7'),
            'usertype' => 'tenant',
            'is_tenant' => true,
            'email_verified_at' => now(), 
            'created_at' => now(), 
            'updated_at' => now(), 
        ]);
        DB::table('users')->insert([
            'name' => 'tenant 8',
            'email' => 'tenant8@gmail.com',
            'password' => Hash::make('tenant8'),
            'usertype' => 'tenant',
            'is_tenant' => true,
            'email_verified_at' => now(), 
            'created_at' => now(), 
            'updated_at' => now(), 
        ]);
        DB::table('users')->insert([
            'name' => 'tenant 9',
            'email' => 'tenant9@gmail.com',
            'password' => Hash::make('tenant9'),
            'usertype' => 'tenant',
            'is_tenant' => true,
            'email_verified_at' => now(), 
            'created_at' => now(), 
            'updated_at' => now(), 
        ]);
        DB::table('users')->insert([
            'name' => 'tenant 10',
            'email' => 'tenant10@gmail.com',
            'password' => Hash::make('tenant10'),
            'usertype' => 'tenant',
            'is_tenant' => true,
            'email_verified_at' => now(), 
            'created_at' => now(), 
            'updated_at' => now(), 
        ]);
    }
}
