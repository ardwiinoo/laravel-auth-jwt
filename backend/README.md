<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Laravel

Laravel adalah sebuah framework PHP open-source yang dirancang untuk membangun aplikasi web modern. Laravel menyediakan berbagai fitur dan alat yang mempermudah pengembangan aplikasi seperti routing, middleware, migrasi database, dan banyak lagi.

<br>

## Json Web Token

Ini menyediakan solusi untuk memproses dan mengelola token JWT dengan mudah pada aplikasi Laravel. Autentikasi menggunakan JWT memungkinkan aplikasi untuk memastikan bahwa setiap permintaan yang diterima dari client sudah divalidasi dan memiliki akses yang tepat ke sumber daya yang diminta.

<br>

## Implementasi

Akses Dokumentasi JWT for Laravel & Lumen disini:
https://laravel-jwt-auth.readthedocs.io/

### Install via composer

```
composer require php-open-source-saver/jwt-auth
```

### Publish config

```
php artisan vendor:publish --provider="PHPOpenSourceSaver\JWTAuth\Providers\LaravelServiceProvider"
```

### Generate secret key

```
php artisan jwt:secret
```

### Update app/models/User.php

```php
    use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;

    class User extends Authenticatable implements JWTSubject {
        ....

        public function getJWTIdentifier()
        {
            return $this->getKey();
        }

        public function getJWTCustomClaims()
        {
            return [];
        }
    }
```

### Configure config/auth.php

```php
    ...

    'defaults' => [
        'guard' => 'api',
        'passwords' => 'users',
    ],

    ...

    'guards' => [
        'api' => [
            'driver' => 'jwt',
            'provider' => 'users',
        ],
    ],
```

### Make routes in routes/api.php

### Configure your app/controllers/AuthController.php

<br>

## Penjelasan Api

| Command                 | Method | Routes            |
| ----------------------- | ------ | ----------------- |
| User Login              | POST   | api/auth/login    |
| User Register           | POST   | api/auth/register |
| User Login Detail Check | POST   | api/auth/me       |
| Generate New Token      | POST   | api/auth/refresh  |
| User Logout             | POST   | api/auth/logout   |

<br>

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
