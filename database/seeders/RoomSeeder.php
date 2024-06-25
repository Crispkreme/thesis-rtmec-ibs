<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('rooms')->insert([
            'room_number' => 'room 1',
            'room_type' => 'single',
            'room_status' => 'available',
        ]);

        DB::table('rooms')->insert([
            'room_number' => 'room 2',
            'room_type' => 'bedspacer',
            'room_status' => 'occupied',
        ]);

        DB::table('rooms')->insert([
            'room_number' => 'room 3',
            'room_type' => 'single',
            'room_status' => 'available',
        ]);

        DB::table('rooms')->insert([
            'room_number' => 'room 4',
            'room_type' => 'single',
            'room_status' => 'available',
        ]);

        DB::table('rooms')->insert([
            'room_number' => 'room 5',
            'room_type' => 'single',
            'room_status' => 'available',
        ]);

        DB::table('rooms')->insert([
            'room_number' => 'room 6',
            'room_type' => 'single',
            'room_status' => 'available',
        ]);

        DB::table('rooms')->insert([
            'room_number' => 'room 7',
            'room_type' => 'single',
            'room_status' => 'available',
        ]);

        DB::table('rooms')->insert([
            'room_number' => 'room 8',
            'room_type' => 'bedspacer',
            'room_status' => 'occupied',
        ]);

        DB::table('rooms')->insert([
            'room_number' => 'room 9',
            'room_type' => 'bedspacer',
            'room_status' => 'occupied',
        ]);

        DB::table('rooms')->insert([
            'room_number' => 'room 10',
            'room_type' => 'bedspacer',
            'room_status' => 'occupied',
        ]);
    }
}
