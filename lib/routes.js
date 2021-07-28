import { HomeTwoTone, ShoppingTwoTone, } from '@ant-design/icons';

export default [
  {
    path: "/",
    name: "Home",
    icon: <HomeTwoTone style={{ fontSize: '16px' }} />
  },
  {
    name: "Apps",
    icon: <ShoppingTwoTone style={{ fontSize: '16px' }} />,
    children: [
      {
        path: "/apps/calendar",
        name: "Calendar"
      },
      {
        path: "/apps/messages",
        name: "Messages"
      },
      {
        path: "/apps/social",
        name: "Social"
      },
      {
        path: "/apps/chat",
        name: "Chat"
      }
    ]
  }
];
