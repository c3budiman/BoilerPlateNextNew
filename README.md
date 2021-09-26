# Panduan

## Mulai Menggunakan

- clone repo ini.
- rename folder hasil clone ke nama projek.
- cd ke projek jalankan ini di cmd :

```bash
git remote remove origin
```

- lalu buat repo baru di datasintesaid or personal dan tambahkan origin sesuai dengan repo baru klean.
- untuk jalanin nya biasa ae :

```bash
npm install
npm run dev
```

## CSS

- untuk menambah css global bisa di : \_app.js, import aja biasa kek dibawah. karena nextjs 11 udah support built in css.

```js
import "../public/app.css";
```

- untuk yg page only, taro css lu di public/css/pagesnya. bisa kek diatas atau pake head gini.

```js
<Head>
  <link rel="stylesheet" href="/css/pagesnya/styleanda.css" />
</Head>
```

## Coloring

- untuk mengubah tema warna, bisa langsung ke components/styles/GlobalStyles.js lalu ada const namanya theme. tinggal lu sesuaikan dah.

```js
const theme = {
  primaryColor: "#007bff",
};
```

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

## Untuk Fetching API

- pertama lu import dlu fetcher, tujuannya biar semua api dibungkus dlu lewat fungsi itu, jadi klo ada pergantian url atau harus global ada nambah param bisa diganti lewat fungsi itu aja.

```js
import { FetcherPost } from "../utils/fetcher";
var response = await FetcherPost("/api/loginDummy", values);
```

## ENV

- gw gasuka bikin file .env, tapi klo lu mau bikin bisa. tapi klo lu males ugha, silahkan ke next.config.js terus tambahin deh suka suka lu kek contoh dibawah. yg di nextconfig.js tapi di push ke git karena ga diignore. dan di server di pull juga. jadi be careful jgn masukkan settingan yg berbau local kesini.

```js
env: {
    backend: "https://nms-poc-api.devlabs.id",
    APPNAME: "boiler next js",
  }
```

## Row Col

- Row disini lu bisa pake sama ae kek bootstrap. cuman lebih bagus karena ada align, justify sama gutter.
- Col tapi sedikit berbeda, di bootstrap max 12 disini max 24.
- align buat vertical align bisa midle, top, bottom dll
- justify buat horizontal align bisa start, center, space-between dll

```js
import { Row, Col } from 'antd';

<Row
    type="flex"
    align="middle"
    justify="start"
    gutter={[10,10]}
>
  <Col xs={12} sm={12} md={12} lg={12} >
    some content here 50%
  </Col>
  <Col xs={12} sm={12} md={12} lg={12} >
    some content here also 50%
  </Col>
</Row>

```

### Contributing

- klo ada yg mau lu bagusin lagi, atau mau otak atik di boiler ini, sabi ae. dan agar tidak berantakan tolong jgn nambah package2 tidak jelas di package.json biar boiler ini tidak berat. serta tolong di cek linter nya dengan cara,

```shell
npm run initlint
```

- kalo hasilnya begini :

```shell
✔ No ESLint warnings or errors
```

- baru lu boleh push ke sini. otherwise fix dlu error klean ye.

## Useful References

- Dokumentasi ANTD
  <https://ant.design/components/overview/>
- <https://github.com/DatasintesaID/templateone-fe.git>
- url preview live buat template :
  <https://templateone-fe.vercel.app/>
