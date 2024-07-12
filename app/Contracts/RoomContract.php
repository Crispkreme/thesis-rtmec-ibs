<?php

namespace App\Contracts;

interface RoomContract {

    public function addRoom($params);
    public function deleteRoom($id);
    public function getAllRoom();
}