<?php

namespace App\Repositories;

use App\Contracts\UserContract;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class UserRepository implements UserContract {

    protected $model;

    public function __construct(User $model)
    {
        $this->model = $model;
    }

    public function getAllUser()
    {
        return $this->model
            ->where('usertype', 'tenant')
            ->get();
    }

}