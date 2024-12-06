---
slug: /paas/cli
sidebar_position: 5
---


#  خط فرمان(CLI) 


CLI یا رابط خط فرمان، ابزاری است که به کاربران اجازه می‌دهد تا با استفاده از دستورات متنی با سیستم‌عامل یا نرم‌افزارها تعامل داشته باشند. این نوع رابط کاربری به کاربران کمک می‌کندکه به سرعت و به‌طور مستقیم به عملکردهای سیستم دسترسی پیدا کنند. با تایپ دستورات مشخص، کاربران می‌توانند عملیات مختلفی مانند مدیریت فایل‌ها، نصب نرم‌افزار و پیکربندی سیستم را انجام دهند. 

یکی از مزایای اصلی CLI، قابلیت اسکریپت‌نویسی آن است که به کاربران کمک می‌کندتا وظایف تکراری را بصورت خودکار انجام دهند و به راحتی اسکریپت‌هایی برای انجام عملیات پیچیده بنویسند. همچنین، CLI معمولاً از منابع کمتری نسبت به رابط‌های گرافیکی استفاده می‌کند و به همین دلیل می‌تواند در محیط‌های محدود و سرورهای بدون رابط گرافیکی بسیار کارآمد باشد. به طور کلی، CLI ابزاری قدرتمند برای توسعه‌دهندگان و مدیران سیستم است که به آن‌ها کنترل بیشتری بر روی سیستم‌ها و نرم‌افزارها می‌دهد.



پس از ورود به صفحه کانتینر با صفحه پیشخوان مواجه می‌شوید:

![paas_projects_list](/img/container/paas_projects_list.png)
## ساخت سرویس

پس از ساخت "**namespace**" موردنظر از بخش اپلیکیشن‌های من، ساخت اپلیکیشن را انتخاب نمایید.

از روش‌های موجود برای ساخت اپلیکیشن 
"**خط فرمان cli**"را انتخاب نمایید.

![paas_projects_list](/img/container/paas-10.png)

### نحوه راه‌اندازی CLI

1. ابتدا فایل فشرده شده ابزار CLI را دانلود کنید.
[آدرس فایل](https://backend.abriment.com/static/paas/cli/abriment-paas-cli.zip)

2. فایل را از حالت فشرده خارج کنید

3. سپس وارد فولدر (abriment_cli) شوید
ابتدا فایل setup.sh را قابل اجرا کنید

4. ابتدا فایل setup.sh را قابل اجرا کنید.

```
chmod +x ./setup.sh
```

5. سپس فایل setup.sh را اجرا کنید

```
$ ./setup.sh
```
6. برای استفاده از kubectl ابتدا بایستی در سامانه ابریمنت وارد شوید

```
$ kubectl login
Enter Abriment UserName: admin
Enter Abriment Password:
Logging in to Abriment was
```
7. حال می‌توانید از دستورات kubectl روی نیم‌اسپیس‌های خود استفاده کنید.

پس از دستور `$ kubectl get pod -n` نام پروژه قرار می‌گیرد.

```
kubectl get pod -n ff5ea28c39fd402aa1e82d1b9fd7eb37-test 

---------------------------------------------------------------------------
        Name	               READY     STATUS	    RESTARTS	 AGE
y-filebrowser-f689ffc46-tdnpg	1/1 	Running 	0        13d
est-8f4f7ddd4-nngjh             1/1 	Running 	0   	 16h
```

:::info نکته

- تمامی دستورات kubectl فقط در محدوده نیم‌اسپیس‌های شما قابل اجرا می‌باشد.

- نام نیم‌اسپیس با نام پروژه در ابریمنت متفاوت می‌باشد برای کپی نام نیم‌اسپیس به صفحه (پروژه‌های من) مراجعه کرده و با زدن دکمه کپی پروژه مورد نظر ،نام نیم‌اسپیس کپی می‌شود. 

:::


 لیستی از مهم‌ترین کامندهای `kubectl` برای کار با کلاسترهای Kubernetes آورده شده است:

### ۱. اطلاعات کلی
- **لیست کردن کلاسترها:**
  ```
  kubectl config get-contexts
  ```

- **انتخاب کلاستر:**
  ```
  kubectl config use-context <context-name>
  ```

### ۲. مدیریت پادها (Pods)
- **لیست کردن پادها:**
  ```
  kubectl get pods
  ```

- **ایجاد پاد:**
  ```
  kubectl run <pod-name> --image=<image-name>
  ```

- **حذف پاد:**
  ```
  kubectl delete pod <pod-name>
  ```

### ۳. مدیریت سرویس‌ها (Services)
- **لیست کردن سرویس‌ها:**
  ``` 
  kubectl get services
  ```

- **ایجاد سرویس:**
  ``` 
  kubectl expose pod <pod-name> --type=<service-type> --port=<port>
  ```

- **حذف سرویس:**
  ``` 
  kubectl delete service <service-name>
  ```

### ۴. مدیریت دیپلویمنت‌ها (Deployments)
- **لیست کردن دیپلویمنت‌ها:**
  ``` 
  kubectl get deployments
  ```

- **ایجاد دیپلویمنت:**
  ``` 
  kubectl create deployment <deployment-name> --image=<image-name>
  ```

- **حذف دیپلویمنت:**
  ``` 
  kubectl delete deployment <deployment-name>
  ```

### ۵. بررسی وضعیت
- **بررسی وضعیت پاد:**
  ``` 
  kubectl describe pod <pod-name>
  ```

- **چک کردن لاگ‌های پاد:**
  ``` 
  kubectl logs <pod-name>
  ```

### ۶. سایر کامندها
- **اجرا کردن شل در پاد:**
  ``` 
  kubectl exec -it <pod-name> -- /bin/ 
  ```

- **آپدیت کردن منابع:**
  ``` 
  kubectl apply -f <file.yaml>
  ```



همچنین درصورت نیاز از مستندات [kubctl](href="https://backend.abriment.com/static/paas/cli/abriment-paas-cli.zip") استفاده نمایید.
