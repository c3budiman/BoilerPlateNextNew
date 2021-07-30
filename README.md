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
- untuk yg page only, taro di public. tapi pake head seperti dibawah ini,

```js
<Head>
  <link rel="stylesheet" href="/styleanda.css" />
</Head>
```

## Coloring

- untuk mengubah tema warna, bisa langsung ke assets/antd-custom.less
- lalu tinggal sesuaikan dengan warna dari figma/yang klean inginkan, contoh

```less
@primary-color: #fed45e;
```

- config yg disana cuman yg dipake template, klo mau dilengkapi bisa kemari,
  <https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less>

## Untuk Sidebar

- menu listing ada di lib/routes, tinggal tambah atau kurangi sesuka hati or sesuai figma :D
- componentnya terdapat di components/SidebarMenu.js

## Untuk Header

- langsung aja edit di components/Header.js

## Untuk Page yang tidak ingin menggunakan template

- components/page.js => ada const namanya NonDashboardRoutes
- lalu buat layout baru, dan sesuaikan di page.js tersebut tq.

## Untuk Notification

- Contoh

```js
import { notification } from "antd";

notification["error"]({
  message: "Error Title",
  description: "Deskripsi error klean",
});
```

## Untuk Loading Global Page / Fullpage.

- Contoh

```js
import { useAppState } from "/components/shared/AppProvider";
const YourPage = () => {
  const [_state, dispatch] = useAppState();
  // to show loading :
  dispatch({ type: "showLoading" });

  // to hide loading :
  dispatch({ type: "hideLoading" });
};
```

## Other Components?

- check it out :
  <https://github.com/DatasintesaID/templateone-fe.git>
- url preview live buat template :
  <https://templateone-fe.vercel.app/>
