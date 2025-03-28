---
slug: Article-DevOps-Part1
title: معرفی DevOps (بخش اول)
tags: [DevOps]
---
DevOps یک روش توسعه نرم‌افزار است که با ترکیب اتوماسیون کار تیم‌های توسعه و عملیات، به تسریع تحویل نرم‌افزارهای با کیفیت بالا کمک می‌کند. این روش شامل به‌روزرسانی‌های کوچک و مکرر است که توسعه نرم‌افزار را کارآمدتر، سریع‌تر و قابل اعتمادتر می‌کند.
![New Release Banner](./DevOps.png)
<!--truncate-->
# تعریف DevOps
## DevOps چیست؟
DevOps یک روش توسعه نرم‌افزار است که با ترکیب اتوماسیون کار تیم‌های توسعه و عملیات، به تسریع تحویل نرم‌افزارهای با کیفیت بالا کمک می‌کند. این روش شامل به‌روزرسانی‌های کوچک و مکرر است که توسعه نرم‌افزار را کارآمدتر، سریع‌تر و قابل اعتمادتر می‌کند.
## تفاوت DevOps با روش‌های سنتی توسعه نرم‌افزار

در روش‌های سنتی توسعه نرم‌افزار، تیم‌های توسعه و عملیات به صورت جداگانه کار می‌کنند که اغلب منجر به تأخیر و مشکلات هماهنگی می‌شود. DevOps با ایجاد فرهنگ همکاری و استفاده از ابزارهای مشترک، این مشکل را برطرف می‌کند.

## تاریخچه DevOps
## ظهور DevOps
DevOps در پاسخ به نیازهای جدید بازار و بهبود فرآیندهای توسعه نرم‌افزار به وجود آمد. در دهه 2000 میلادی، با رشد سریع فناوری و نیاز به ارائه به‌روزرسانی‌های سریع‌تر، روش‌های سنتی توسعه نرم‌افزار ناکافی به نظر می‌رسید.
## 
تغییر از مدل آبشاری به مدل اجایل و DevOps
قبل از سال 2000، بیشتر نرم‌افزارها با استفاده از مدل آبشاری توسعه می‌یافتند که فرایندی خطی و طولانی بود. با معرفی مدل اجایل، فرآیند توسعه بهبود یافت و با ظهور DevOps، اتوماسیون و پیوستگی به سایر بخش‌های چرخه عمر نرم‌افزار اضافه شد.
## اصول DevOps
فرهنگ همکاری و هماهنگی
یکی از اصول مهم DevOps، ایجاد فرهنگ همکاری بین تیم‌های توسعه و عملیات است. این فرهنگ باعث افزایش اعتماد و کاهش تنش‌ها بین تیم‌ها می‌شود.
اتوماسیون و پیوستگی
استفاده از ابزارهای اتوماسیون برای تست و استقرار نرم‌افزار، یکی دیگر از اصول DevOps است که به تسریع فرآیندها کمک می‌کند.
## چرخه حیات DevOps
- برنامه‌ریزی(plan):
در این مرحله، تیم‌ها ویژگی‌ها و عملکردهای جدید را برای نسخه بعدی برنامه‌ریزی می‌کنند. هدف از این مرحله، به حداکثر رساندن ارزش تجاری محصول با ایجاد یک لیست از ویژگی‌ها است که ارزش محصول را افزایش می‌دهد.
- کدنویسی(Coding):
در این مرحله، توسعه‌دهندگان به برنامه‌نویسی و ساخت ویژگی‌های جدید بر اساس داستان‌های کاربری (UserStore)و آیتم‌های کاری در لیست وظایف می‌پردازند. استفاده از روش‌هایی مانند توسعه مبتنی بر تست (TDD)، برنامه‌نویسی جفتی(Pair Programming) و بازبینی کد توسط همکاران رایج است.
- ساخت، یکپارچه‌سازی و تحویل مداوم(Building)
در این مرحله، کد جدید به پایه کد موجود ادغام شده و برای انتشار و استقرار بسته‌بندی می‌شود. فعالیت‌های اتوماسیون رایج شامل ادغام تغییرات کد به نسخه اصلی، بررسی کد از مخزن کد منبع و اتوماسیون مراحل کامپایل، تست واحد و بسته‌بندی به فایل اجرایی است.
- تست(Testing):
تیم‌ها از تست، معمولاً تست اتوماتیک، برای اطمینان از انطباق برنامه با استانداردها و نیازها استفاده می‌کنند. تست‌های پیوسته امکان شناسایی و رفع مشکلات را در مراحل مختلف توسعه فراهم می‌کند.
- انتشار(Release)
در این مرحله، خروجی ساخت به محیط اجرا منتقل می‌شود. اگر خطا یا نقصی پیدا شود، توسعه‌دهندگان فرصتی برای رفع مشکلات قبل از مشاهده کاربران دارند. هر محیط نیاز به گذر از موانع کیفی دارد.
- استقرار(Deploy):
استقرار به معنای انتقال پروژه به محیط تولیدی است که کاربران بتوانند به تغییرات دسترسی داشته باشند. بهترین عمل استقرار این است که ابتدا به زیرمجموعه‌ای از کاربران نهایی اعمال شود و سپس به همه کاربران، زمانی که پایداری اثبات شد.
- عملیات(Operate):
پس از استقرار ویژگی‌ها در محیط تولیدی، عملیات روزمره شروع می‌شود. نظارت بر عملکرد، رفتار و دسترسی ویژگی‌ها به اطمینان از ارزش‌دهی به کاربران کمک می‌کند.
- نظارت(Monitor):
این مرحله شامل جمع‌آوری بازخورد از کاربران در مورد ویژگی‌ها، عملکرد و ارزش تجاری برای برنامه‌ریزی بهبودها و ویژگی‌های نسخه بعدی است.
- امنیت(Security):
DevSecOps امنیت را از ابتدا و در تمام مراحل توسعه لحاظ می‌کند. این روش، مشکلات امنیتی را زودتر و با هزینه کمتر برطرف می‌کند.

- تطابق (Compliance):
در صنایع مقرراتی، مدیریت و رعایت قوانین از ابتدای چرخه حیات توسعه اهمیت دارد. اثبات تطابق با استانداردها برای ممیزی‌های شخص ثالث ضروری است.
