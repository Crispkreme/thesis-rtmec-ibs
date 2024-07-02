<?php

namespace App\Contracts;

interface TenantContract {

    public function getAllTenant($searchField, $searchDirection);
    public function searchTenantByName($searchData, $searchField, $searchDirection);
    public function searchTenantByRoomStatus($searchStatus, $searchField, $searchDirection);
    public function searchTenantByNameAndRoomStatus($searchData, $searchStatus, $searchField, $searchDirection);
}