<?php

namespace App\Policies;

use App\Models\User;
use Tests\Laravel\App;

abstract class CheckoutablePermissionsPolicy extends SnipePermissionsPolicy {
    /**
     * Determine whether the user can checkout the accessory.
     *
     * @param \App\User $user
     * @return mixed
     */
    public function checkout(User $user, $item = null) {
        return $user->hasAccess($this->columnName() . '.checkout');
    }

    /**
     * Determine whether the user can checkin the accessory.
     *
     * @param \App\User $user
     * @return mixed
     */
    public function checkin(User $user, $item = null,$owner = null) {

        if ($user->hasAccess($this->columnName() . '.checkin')) {
            return true;
        } else if ($user->hasAccess($this->columnName() . '.checkin.own')) {
            if ($item instanceof \App\Models\Asset) {

                if ($item->assigned_to == auth()->user()->id
                        && $item->assigned_type == 'App\Models\User') {
                    return true;
                }
            }elseif ($item instanceof \App\Models\Accessory){
                if ($owner == auth()->user()->id) {
                    return true;
                }
            }
        }
        return false;

    }

    /**
     * Determine whether the user can manage the accessory.
     *
     * @param \App\User $user
     * @return mixed
     */
    public function manage(User $user, $item = null) {
        return $user->hasAccess($this->columnName() . '.checkin')
                || $user->hasAccess($this->columnName() . '.edit')
                || $user->hasAccess($this->columnName() . '.checkout');
    }
}
