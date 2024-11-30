---
slug: /servicecatalog/Logforwarder
sidebar_position: 18
---

## معرفی Logforwarder

سرویس Log Forwarder امکان ارسال و مدیریت متمرکز لاگ‌ها از منابع مختلف به سیستم‌های نظارتی را فراهم می‌کند. این سرویس برای جمع‌آوری و انتقال لاگ‌ها به ابزارهایی مانند Elasticsearch یا Graylog مناسب است و در مانیتورینگ و تحلیل سیستم‌ها و اپلیکیشن‌ها استفاده می‌شود.

## ساخت سرویس
پس از ساخت "**namespace**" موردنظر از بخش اپلیکیشن های من ، ساخت اپلیکیشن را انتخاب نمایید.

از روش های موجود برای ساخت اپلیکیشن "**سرویس کاتالوگ**" را انتخاب نمایید.

![servicecatalog](/img/servicecatalog/servicecatalog00.png)

ازبین سرویس کاتالوگ های موجود، سرویس مورد نظر خود را انتخاب کنید.

![servicecatalog](/img/servicecatalog/servicecatalog000.png)

اطلاعات موردنیاز و منابع موردنیاز برای ساخت سرویس کاتالوگ مورد نظر را تکمیل نمایید.

<table>
    <thead>
        <tr>
            <td>ورودی</td>
            <td>توضیحات</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>نام اپلیکیشن</td>
            <td>نام فقط می‌تواند شامل حروف کوچک، اعداد یا (-) باشد و نمی‌تواند با کاراکتر (-) شروع یا پایان یابد.</td>
        </tr>
        <tr>
            <td>مقصد لاگ</td>
            <td>می‌تواند مقادیر (ElasticSearch, Kafka, Logstash) باشد.</td>
        </tr>
        <tr>
            <td>آدرس Elasticsearch</td>
            <td>پس از ساخت سرویس Elasticsearch با انتخاب سرویس از بخش "نمای کلی" قسمت "اتصال داخلی" کپی کرده و در این فیلد قرار دهید.</td>
        </tr>
        <tr>
            <td>نام کاربری Elasticsearch</td>
            <td>نام کاربری بکار برده شده در این سرویس را قراردهید.</td>
        </tr>
        <tr>
            <td>رمز عبور Elasticsearch</td>
            <td>رمزعبور بکار برده شده در این سرویس را قراردهید.</td>
        </tr>
    </tbody>
</table>

:::info نکته
در این مرحله به نسخه انتخابی سرویس ElasticSearch توجه نمایید.
:::

<table>
    <thead>
        <tr>
            <td>ورودی</td>
            <td>توضیحات</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>نام اپلیکیشن</td>
            <td>نام فقط می‌تواند شامل حروف کوچک، اعداد یا (-) باشد و نمی‌تواند با کاراکتر (-) شروع یا پایان یابد.</td>
        </tr>
        <tr>
            <td>مقصد لاگ</td>
            <td>می‌تواند مقادیر (ElasticSearch, Kafka, Logstash) باشد.</td>
        </tr>
        <tr>
            <td>آدرس Kafka</td>
            <td>پس از ساخت سرویس Kafka با انتخاب سرویس از بخش "نمای کلی" قسمت "اتصال داخلی" کپی کرده و در این فیلد قرار دهید.</td>
        </tr>
        <tr>
            <td>تاپیک Kafka</td>
            <td>لطفاً نام تاپیک مورد نظر را وارد کنید.</td>
        </tr>
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <td>ورودی</td>
            <td>توضیحات</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>نام اپلیکیشن</td>
            <td>نام فقط می‌تواند شامل حروف کوچک، اعداد یا (-) باشد و نمی‌تواند با کاراکتر (-) شروع یا پایان یابد.</td>
        </tr>
        <tr>
            <td>مقصد لاگ</td>
            <td>می‌تواند مقادیر (ElasticSearch, Kafka, Logstash) باشد.</td>
        </tr>
        <tr>
            <td>آدرس Logstash</td>
            <td>پس از ساخت سرویس Logstash با انتخاب سرویس از بخش "نمای کلی" قسمت "اتصال داخلی" کپی کرده و در این فیلد قرار دهید.</td>
        </tr>
    </tbody>
</table>

![servicecatalog](/img/servicecatalog/servicecatalog39.png)

![servicecatalog](/img/servicecatalog/servicecatalog39-1.png)

پس از تایید مرحله آخر، سرویس کاتالوگ موردنظر در قسمت "**اپلیکشن های من**" قابل مشاهده می‌باشد.

![servicecatalog](/img/servicecatalog/servicecatalog40.png)
