<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRecordsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('records', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->bigInteger('item')->unsigned();
            $table->bigInteger('user')->unsigned();
            $table->double('in', 10, 2)->nullable();
            $table->double('out', 10, 2)->nullable();
            $table->date('date_added');
            $table->boolean('remove')->nullable()->default(false);
            $table->timestamps();
            $table->foreign('item')->references('id')->on('items')->onDelete('cascade');
            $table->foreign('user')->references('id')->on('users')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('records');
    }
}
