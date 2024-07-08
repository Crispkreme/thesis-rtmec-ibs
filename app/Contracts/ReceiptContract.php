<?php

namespace App\Contracts;

interface ReceiptContract {

    public function getReceiptByUserID($id, $paginate, $perPage);
    public function getReceiptStatusByUserID($id, $paginate, $perPage, $status);
}