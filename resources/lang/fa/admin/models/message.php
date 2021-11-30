<?php

return array(

    'does_not_exist' => 'مدل موجود نیست.',
    'assoc_users'	 => 'برخی از اموال از این مدل استفاده میکنند و نمی تواند حذف شود. لطفا ابتدا اموال را حذف کنید و سپس برای حذف کردن مجددا تلاش کنید. ',


    'create' => array(
        'error'   => 'مدل ساخته نشده است، لطفا دوباره تلاش کنید.',
        'success' => 'مدل با موفقیت ساخته شد.',
        'duplicate_set' => 'یک مدل اموال با آن نام، سازنده و شماره ی مدل در حال حاضر موجود است.',
    ),

    'update' => array(
        'error'   => 'مدل به روزرسانی نشده است، لطفا دوباره تلاش کنید',
        'success' => 'مدل با موفقیت به روز رسانی شد.'
    ),

    'delete' => array(
        'confirm'   => 'آیا شما مطمئن هستید که می خواهید این مدل اموال را حذف کنید؟',
        'error'   => 'در زمان حذف کردن مدل، مشکلی وجود داشت. لطفا دوباره تلاش کنید.',
        'success' => 'مدل با موفقیت حذف شد.'
    ),

    'restore' => array(
        'error'   		=> 'مدل بازیابی نشد، لطفا دوباره تلاش کنید',
        'success' 		=> 'مدل با موفقیت بازیابی شد.'
    ),

    'bulkedit' => array(
        'error'   		=> 'هیچ فیلدی تغییر نکرده بود، بنابراین چیزی به روز نشد.',
        'success' 		=> 'مدل های به روز شده'
    ),

    'bulkdelete' => array(
        'error'   		    => 'No models were selected, so nothing was deleted.',
        'success' 		    => ':success_count model(s) deleted!',
        'success_partial' 	=> ':success_count model(s) were deleted, however :fail_count were unable to be deleted because they still have assets associated with them.'
    ),

);
