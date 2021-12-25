<?php

namespace App\Policies;

use App\Models\User;

class ComponentPolicy extends CheckoutablePermissionsPolicy
{
    protected function columnName()
    {
        return 'components';
    }
    public function viewOwn(User $user, Asset $asset = null)
    {
        return $user->hasAccess('components.view.own');
    }
    public function checkinOwn(User $user, Asset $asset = null)
    {
        return $user->hasAccess('components.checkin.own');
    }
}
