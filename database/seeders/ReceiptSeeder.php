<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ReceiptSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('receipts')->insert([
            'owner_id' => 1,
            'tenant_id' => 2,
            'receipt_status' => 'paid',
            'total_amount'  => 100,
            'amount_paid' => 100,
            'balance' => 100,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('receipts')->insert([
            'owner_id' => 1,
            'tenant_id' => 3,
            'receipt_status' => 'paid',
            'total_amount'  => 100,
            'amount_paid' => 100,
            'balance' => 100,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('receipts')->insert([
            'owner_id' => 1,
            'tenant_id' => 4,
            'receipt_status' => 'paid',
            'total_amount'  => 100,
            'amount_paid' => 100,
            'balance' => 100,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('receipts')->insert([
            'owner_id' => 1,
            'tenant_id' => 5,
            'receipt_status' => 'paid',
            'total_amount'  => 100,
            'amount_paid' => 100,
            'balance' => 100,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('receipts')->insert([
            'owner_id' => 1,
            'tenant_id' => 6,
            'receipt_status' => 'unpaid',
            'total_amount'  => 100,
            'amount_paid' => 100,
            'balance' => 100,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('receipts')->insert([
            'owner_id' => 1,
            'tenant_id' => 7,
            'receipt_status' => 'unpaid',
            'total_amount'  => 100,
            'amount_paid' => 100,
            'balance' => 100,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('receipts')->insert([
            'owner_id' => 1,
            'tenant_id' => 8,
            'receipt_status' => 'unpaid',
            'total_amount'  => 100,
            'amount_paid' => 100,
            'balance' => 100,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('receipts')->insert([
            'owner_id' => 1,
            'tenant_id' => 9,
            'receipt_status' => 'paid',
            'total_amount'  => 100,
            'amount_paid' => 100,
            'balance' => 100,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
        DB::table('receipts')->insert([
            'owner_id' => 1,
            'tenant_id' => 10,
            'receipt_status' => 'unpaid',
            'total_amount'  => 100,
            'amount_paid' => 100,
            'balance' => 100,
            'created_at' => now(),
            'updated_at' => now(),
        ]);    
    }
}
