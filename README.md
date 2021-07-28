# Panduan

## Mulai Menggunakan

- clone repo ini.
- rename folder hasil clone ke nama projek.
- jalankan ini di cmd :
```bash
git remote remove origin
```
- lalu buat repo baru di datasintesaid or personal dan tambahkan origin sesuai dengan repo baru klean.
- selesai.

## CSS

- untuk menambah css bisa di : components -> styles -> GlobalStyles.js, bagian import url.
- untuk yg page only, taro di public. tapi pake head seperti ini :

```js
<Head>
    <link rel="stylesheet" href="/react-vis.css" />
</Head>
```

## Untuk Sidebar

- menu listing ada di lib/routes, tinggal tambah atau kurangi sesuka hati or sesuai figma :D
- componentnya terdapat di components/SidebarMenu.js

## Untuk Header

- langsung aja edit di components/Header.js

## Untuk page yang non dashboard atau ga pengen pake layout dashboard, lu bisa add di

- components/page.js => ada const namanya NonDashboardRoutes
- lalu buat layout baru, dan sesuaikan di page.js tersebut tq.

## Other Components?

- check it out :
https://github.com/DatasintesaID/templateone-fe.git
