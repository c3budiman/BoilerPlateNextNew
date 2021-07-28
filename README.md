# Panduan

## Contoh penggunaan css

- styles -> GlobalStyles.js, import url. taro di public cssnya untuk yg global
- untuk yg page only, taro di public. tapi lu pake head :

```js
<Head>
    <link rel="stylesheet" href="/react-vis.css" />
</Head>
```

## Untuk Sidebar Menu Listing

- ada di lib/routes, tinggal tambah atau kurang sesuka hati
- componentnya terdapat di components/SidebarMenu.js

## Untuk Header

- langsung aja edit di components/Header.js

## Untuk page yang non dashboard, lu bisa add di

- components/page.js => ada const namanya NonDashboardRoutes
