<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->decimal('peso', 5, 2)->nullable();   // Peso en kg, puede ser nulo
            $table->decimal('altura', 4, 2)->nullable(); // Altura en metros, puede ser nulo
            $table->integer('edad')->nullable();         // Edad, puede ser nula
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['peso', 'altura', 'edad']);
        });
    }
};
