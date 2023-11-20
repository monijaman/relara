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
        Schema::create('object_items', function (Blueprint $table) {
            $table->id();
            $table->string('name', 100);
            $table->tinyInteger('status')->default(1);
            $table->string('code')->nullable();
            $table->integer('category_id')->nullable();
            $table->integer('subcategory_id')->nullable();
            $table->string('slug');
            $table->string('photo')->nullable();
            $table->integer('view_count')->nullable();
            $table->string('description')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('object_items');
    }
};
