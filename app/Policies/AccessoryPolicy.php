<?php

namespace App\Policies;

use App\Models\User;

class AccessoryPolicy extends CheckoutablePermissionsPolicy
{
    protected function columnName()
    {
        return 'accessories';
    }
    public function viewOwn(User $user, Asset $asset = null)
    {
        return $user->hasAccess('accessories.view.own');
    }
    public function checkinOwn(User $user, Asset $asset = null)
    {
        return $user->hasAccess('accessories.checkin.own');
    }
}
