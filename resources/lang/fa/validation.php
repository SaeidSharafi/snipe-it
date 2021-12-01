<?php

return array(

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | such as the size rules. Feel free to tweak each of these messages.
    |
    */

    'accepted'             => ':attribute باید تایید شود.',
    'active_url'           => ':attribute یک URL معتبر نیست.',
    'after'                => ':attribute باید در تاریخی بعد از :date باشد.',
    'after_or_equal'       => 'attribute باید یک تاریخ بعد یا برابر :date باشد.',
    'alpha'                => ':attribute فقط شامل حروف می‌باشد.',
    'alpha_dash'           => ':attribute فقط شامل حروف، اعداد و خط های فاصله می‌باشد.',
    'alpha_num'            => ':attribute فقط شامل حروف و اعداد می‌باشد.',
    'array'                => 'attribute باید یک آرایه باشد.',
    'before'               => ':attribute باید در تاریخی قبل از :date باشد.',
    'before_or_equal'      => ':attribute باید تاریخ قبل یا برابر :date باشد.',
    'between'              => [
            'numeric' => ':attribute باید بین :min و :max باشد.',
            'file'    => ':attribute باید از :min تا :max کیلوبایت باشد.',
            'string'  => ':attribute باید بین :min تا :max کاراکتر.',
            'array'   => ':attribute must have between :min and :max items.',
    ],
    'boolean'              => 'فیلد :attribute باید درست یا غلط باشد.',
    'confirmed'            => 'تایید :attribute منطبق نیست.',
    'date'                 => 'تاریخ :attribute معتبر نیست.',
    'date_format'          => ':attribute منطبق بر قالب :format نیست.',
    'different'            => ':attribute و :other باید متفاوت باشد.',
    'digits'               => ':attribute باید :digits رقم باشد.',
    'digits_between'       => ':attribute باید بین :min تا :max رقم باشد.',
    'dimensions'           => 'attribute: ابعاد تصویر نامعتبر است.',
    'distinct'             => 'فیلد :attribute دارای مقدار تکراری است.',
    'email'                => 'قالب :attribute نامعتبر است.',
    'exists'               => ':attribute انتخاب شده نامعتبر است.',
    'file'                 => ':attribute باید یک فایل باشد.',
    'filled'               => 'فیلد :attribute باید مقدار داشته باشد.',
    'image'                => ':attribute باید یک عکس باشد.',
    'in'                   => ':attribute انتخاب شده نامعتبر است.',
    'in_array'             => 'فیلد :attribute در :other وجود ندارد.',
    'integer'              => ':attribute باید یک عدد باشد.',
    'ip'                   => ':attribute باید یک آدرس IP معتبر باشد.',
    'ipv4'                 => ':attribute باید یک آدرس IPv4 معتبر باشد.',
    'ipv6'                 => ':attribute باید یک آدرس IPv6 معتبر باشد.',
    'json'                 => ':attribute باید یک رشته معتبر JSON باشد.',
    'max'                  => [
            'numeric' => ':attribute نمی‌تواند بزرگتر از :max باشد.',
            'file'    => ':attribute نمی‌تواند بزرگتر از :max کیلوبایت باشد.',
            'string'  => ':attribute نمی‌تواند بیشتر از :max کاراکتر باشد.',
            'array'   => ':attribute نمی‌تواند بیشتر از :max آیتم داشته باشد.',
    ],
    'mimes'                => ':attribute باید فایلی از نوع :values باشد.',
    'mimetypes'            => ':attribute باید یک فایل از نوع :values باشد.',
    'min'                  => [
            'numeric' => ':attribute نمیتواند کمتر از :min باشد.',
            'file'    => ':attribute باید حداقل :min کیلوبایت باشد.',
            'string'  => ':attribute باید حداقل :min کاراکتر باشد.',
            'array'   => ':attribute باید حداقل :min آیتم باشد.',
    ],
    'not_in'               => ':attribute انتخاب شده نامعتبر است.',
    'numeric'              => ':attribute باید عدد باشد.',
    'present'              => 'فیلد :attribute باید باشد.',
    'valid_regex'          => 'regex وارد شده معتبر نمی‌باشد.',
    'regex'                => 'قالب :attribute نامعتبر است.',
    'required'             => 'فیلد :attribute ضروری است.',
    'required_if'          => 'فیلد :attribute ضروری است، وقتی که :other :value است.',
    'required_unless'      => 'فیلد attribute: مورد نیاز است مگر اینکه :other در :values باشد.',
    'required_with'        => 'فیلد :attribute ضروری است، وقتی که :values موجود باشد.',
    'required_with_all'    => 'فیلد attribute: زمانی که :values وجود دارد.',
    'required_without'     => 'فیلد :attribute ضروری است، وقتی که :values حاضر نباشند.',
    'required_without_all' => 'فیلد attribute: وقتی که هیچ یک از :values وجود ندارد، مورد نیاز است.',
    'same'                 => ':attribute و :other باید بر یکسان باشند.',
    'size'                 => [
            'numeric' => ':attribute باید :size باشد.',
            'file'    => ':attribute باید :size کیلوبایت باشد.',
            'string'  => ':attribute باید :size کاراکتر باشد.',
            'array'   => ':attribute باید شامل :size آیتم باشد.',
    ],
    'string'               => ':attribute باید یک رشته باشد.',
    'timezone'             => ':attribute باید یک منطقه معتبر باشد.',
    'unique'               => ':attribute نباید تکراری باشد.',
    'uploaded'             => 'خط در آپلود :attribute',
    'url'                  => 'قالب :attribute نامعتبر است.',
    "unique_undeleted"     => ":attribute باید غیر تکراری باشد.",
    "non_circular"         => ":attribute must not create a circular reference.",

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */


    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'alpha_space' => "فیلد :attribute شامل یک کاراکتر غیر مجاز می‌باشد.",
        "email_array"      => "یک یا چند آدرس ایمیل نامعتبر می باشد",
        "hashed_pass"      => "رمز عبور فعلی شما اشتباه است",
        'dumbpwd'          => 'این رمز عبور خیلی رایج است',
        "statuslabel_type" => "شما باید یک برچسب معتبر را انتخاب کنید",
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap attribute place-holders
    | with something more reader friendly such as E-Mail Address instead
    | of "email". This simply helps us make messages a little cleaner.
    |
    */

    'attributes' => [],

);
