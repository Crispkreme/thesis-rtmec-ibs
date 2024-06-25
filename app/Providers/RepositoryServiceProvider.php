<?php

namespace App\Providers;

use App\Contracts\RoomContract;
use App\Repositories\RoomRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    protected $repositories = [
        RoomContract::class => RoomRepository::class,
    ];

    /**
     * Register services.
     */
    public function register(): void
    {
        foreach($this->repositories as $contract => $repository) {
            $this->app->singleton($contract,$repository);
        }
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
