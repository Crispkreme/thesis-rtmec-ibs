<?php

namespace App\Repositories;

use App\Contracts\TenantContract;
use App\Models\Tenant;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class TenantRepository implements TenantContract {

    protected $model;
    protected function getOrderByColumn($searchField)
    {
        $allowedFields = ['name', 'email', 'created_at']; 
        if (in_array($searchField, $allowedFields)) {
            return 'users.' . $searchField;
        }
        $allowedRoomFields = ['room_number', 'room_status']; 
        if (in_array($searchField, $allowedRoomFields)) {
            return 'rooms.' . $searchField;
        }
        return 'tenants.id';
    }

    public function __construct(Tenant $model)
    {
        $this->model = $model;
    }

    public function getAllTenant($searchField, $searchDirection)
    {
        $tenants = Tenant::with(['tenant', 'tenantRoom'])
            ->whereHas('tenant', function($query) {
                $query->where('usertype', '!=', 'admin');
            })
            ->join('users', 'tenants.tenant_id', '=', 'users.id')
            ->join('rooms', 'tenants.tenant_room_id', '=', 'rooms.id')
            ->orderBy($this->getOrderByColumn($searchField), $searchDirection)
            ->select('tenants.*') 
            ->paginate(10)
            ->onEachSide(1);
        
        return $tenants;
    }

    public function searchTenantByName($searchData, $searchField, $searchDirection)
    {
        return Tenant::with(['tenant'])
                ->whereHas('tenant', function($query) use ($searchData) {
                    $query->where('name', 'like', '%' . $searchData . '%');
                })
                ->orderBy($searchField, $searchDirection)
                ->paginate(10)
                ->onEachSide(1);
    }

    public function searchTenantByRoomStatus($searchStatus, $searchField, $searchDirection)
    {
        return Tenant::with(['tenantRoom'])
                ->whereHas('tenantRoom', function($query) use ($searchStatus) {
                    $query->where('room_status', 'like', '%' . $searchStatus . '%');
                })
                ->orderBy($searchField, $searchDirection)
                ->paginate(10)
                ->onEachSide(1);
    }

    public function searchTenantByNameAndRoomStatus($searchData, $searchStatus, $searchField, $searchDirection) 
    {
        return Tenant::with(['tenant', 'tenantRoom'])
                ->whereHas('tenant', function ($query) use ($searchData) {
                    $query->where('name', 'like', '%' . $searchData . '%');
                })
                ->whereHas('tenantRoom', function ($query) use ($searchStatus) {
                    $query->where('room_status', 'like', '%' . $searchStatus . '%');
                })
                ->orderBy($searchField, $searchDirection)
                ->paginate(10)
                ->onEachSide(1);
    }
}