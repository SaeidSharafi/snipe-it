<?php

namespace App\Http\Controllers\Assets;

use App\Helpers\Helper;
use App\Http\Controllers\Controller;
use App\Models\Actionlog;
use App\Models\Asset;
use App\Models\Company;
use App\Models\Setting;
use App\Models\User;
use App\Notifications\RequestAssetCancelation;
use App\Notifications\RequestAssetNotification;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AssetRejectController extends Controller {


    /**
     * Reject asset request
     *
     * @author [A. Gianotto] [<snipe@snipe.net>]
     * @param int $assetId
     * @since [v4.0]
     * @return JsonResponse
     */
    public function store($assetId,$userId)
    {

        $user =  User::findOrFail($userId);

        $this->authorize('checkin', Asset::class);
        // Check if the asset exists and is requestable
        if (is_null($asset = Asset::RequestableAssets()->find($assetId))) {
            return redirect()->route('assets.requested')
                    ->with('error', trans('admin/hardware/message.does_not_exist_or_not_requestable'));
        }
        if (!Company::isCurrentUserHasAccess($asset)) {
            return redirect()->route('assets.requested')
                    ->with('error', trans('general.insufficient_permissions'));
        }

        $data['item'] = $asset;
        $data['target'] = $user;
        $data['item_quantity'] = 1;
        $settings = Setting::getSettings();

        $logaction = new Actionlog();
        $logaction->item_id = $data['asset_id'] = $asset->id;
        $logaction->item_type = $data['item_type'] = Asset::class;
        $logaction->created_at = $data['requested_date'] = date("Y-m-d H:i:s");

        if ($user->location_id) {
            $logaction->location_id = $user->location_id;
        }
        $logaction->target_id = $data['user_id'] = $userId;
        $logaction->target_type = User::class;


        // If it's already requested, cancel the request.
        if ($asset->isRequestedBy($user)) {
            $asset->cancelRequest($userId);
            $asset->decrement('requests_counter', 1);

            $logaction->logaction('request canceled');
            $settings->notify(new RequestAssetCancelation($data));

            return redirect()->route('assets.requested')
                    ->with('success', trans('admin/hardware/message.requests.canceled'));
        }


        return redirect()->route('assets.requested')
                ->with('error', trans('admin/hardware/message.checkin.error'));



    }
}