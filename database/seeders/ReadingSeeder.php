<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReadingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // Example readings for room_id 1
        DB::table('readings')->insert([
            'room_id' => 1,
            'voltage' => '0.2',
            'current' => '0.3',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('readings')->insert([
            'room_id' => 1,
            'voltage' => '0.7',
            'current' => '1.2',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('readings')->insert([
            'room_id' => 1,
            'voltage' => '6',
            'current' => '0.4',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('readings')->insert([
            'room_id' => 1,
            'voltage' => '8',
            'current' => '0.3',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Example readings for room_id 2
        DB::table('readings')->insert([
            'room_id' => 2,
            'voltage' => '0.9',
            'current' => '0.8',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('readings')->insert([
            'room_id' => 2,
            'voltage' => '0.7',
            'current' => '0.3',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('readings')->insert([
            'room_id' => 2,
            'voltage' => '0.2',
            'current' => '0.3',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('readings')->insert([
            'room_id' => 2,
            'voltage' => '0.2',
            'current' => '0.3',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('readings')->insert([
            'room_id' => 2,
            'voltage' => '0.2',
            'current' => '0.3',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        // Example readings for room_id 3
        DB::table('readings')->insert([
            'room_id' => 3,
            'voltage' => '0.2',
            'current' => '0.3',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('readings')->insert([
            'room_id' => 3,
            'voltage' => '0.2',
            'current' => '0.3',
            'created_at' => now(),
            'updated_at' => now(),
        ]);

        DB::table('readings')->insert([
            'room_id' => 3,
            'voltage' => '0.2',
            'current' => '0.3',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}