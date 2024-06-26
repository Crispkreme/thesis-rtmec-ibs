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
        Schema::create('readings', function (Blueprint $table) {
            $table->id();
            $table->string('voltage');
            $table->string('current');
            $table->foreignId('room_id')->constrained('rooms');
            $table->foreignId('room_number')->nullable()->constrained('rooms');
            $table->foreignId('room_status')->nullable()->constrained('rooms');
            $table->timestamps();
        });        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('readings');
    }
};
