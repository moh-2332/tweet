interface SideBarDef {
  icon: string;
  title: string;
  to: string;
}

const SIDE_BAR_ITEMS: SideBarDef[] = [
  {
    icon: "home",
    title: "Home",
    to: "/home",
  },
  {
    icon: "search",
    title: "Explore",
    to: "/search",
  },
  {
    icon: "notifications_none",
    title: "Notifications",
    to: "/notifications-none",
  },
  {
    icon: "mail_outline",
    title: "Messages",
    to: "/mail-outline",
  },
  {
    icon: "bookmark_border",
    title: "Bookmarks",
    to: "/bookmark-border",
  },
  {
    icon: "list_alt",
    title: "Lists",
    to: "/list-alt",
  },
  {
    icon: "perm_identity",
    title: "Profile",
    to: "/perm-identity",
  },
  {
    icon: "more_horiz",
    title: "More",
    to: "/more-horiz",
  },
];

export default SIDE_BAR_ITEMS;
