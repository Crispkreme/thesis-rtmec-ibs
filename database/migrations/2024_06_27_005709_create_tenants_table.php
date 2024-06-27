<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tenants', function (Blueprint $table) {
            $table->id();

            $table->foreignId('tenant_id')->constrained('users');
            $table->foreignId('tenant_name')->nullable()->constrained('users');
            $table->foreignId('is_tenant')->nullable()->constrained('users');
            $table->foreignId('created_tenant_at')->nullable()->constrained('users');

            $table->foreignId('tenant_room_id')->constrained('rooms');
            $table->foreignId('tenant_room_number')->nullable()->constrained('rooms');
            $table->foreignId('tenant_room_status')->nullable()->constrained('rooms');

            $table->string('total_voltage');
            $table->string('total_current');
            $table->string('previous_balance');
            $table->string('current_balance');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tenants');
    }
};
