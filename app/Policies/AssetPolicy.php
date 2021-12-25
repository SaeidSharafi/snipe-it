<?php

namespace App\Policies;

use App\Models\User;

class AssetPolicy extends CheckoutablePermissionsPolicy
{
    protected function columnName()
    {
        return 'assets';
    }

    public function viewRequestable(User $user, Asset $asset = null)
    {
        return $user->hasAccess('assets.view.requestable');
    }
    public function viewOwn(User $user, Asset $asset = null)
    {
        return $user->hasAccess('assets.view.own');
    }
    public function checkinOwn(User $user, Asset $asset = null)
    {
        return $user->hasAccess('assets.checkin.own');
    }
    public function audit(User $user, Asset $asset = null)
    {
        return $user->hasAccess('assets.audit');
    }
}
