<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TenantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('tenants')->insert([
            'tenant_id' => 2,
            'tenant_room_id' => 1,
            'total_voltage' => '5',
            'total_current' => '10',
            'previous_balance' => '5',
            'current_balance' => '5',
        ]);
    }
}
