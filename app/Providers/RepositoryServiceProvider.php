<?php

namespace App\Providers;

use App\Contracts\RoomContract;
use App\Contracts\TenantContract;
use App\Contracts\ReadingContract;
use App\Contracts\UserContract;
use App\Contracts\ReceiptContract;

use App\Repositories\RoomRepository;
use App\Repositories\TenantRepository;
use App\Repositories\ReadingRepository;
use App\Repositories\UserRepository;
use App\Repositories\ReceiptRepository;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    protected $repositories = [
        RoomContract::class => RoomRepository::class,
        TenantContract::class => TenantRepository::class,
        ReadingContract::class => ReadingRepository::class,
        UserContract::class => UserRepository::class,
        ReceiptContract::class => ReceiptRepository::class,
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
