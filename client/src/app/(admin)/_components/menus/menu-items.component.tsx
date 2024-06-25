import Image from "next/image"
import profileImg from "@/app/_common/assets/images/avatar/profile-xs.png"
import { _routes } from "../../_configs/_routes"
import {
  AnalyticsIcon,
  AttentionIcon,
  CalendarIcon,
  ClipboardIcon,
  EditBadgeIcon,
  HistoryIcon,
  HomeIcon,
  HourglassIcon,
  IntegrationIcon,
  LogoutIcon,
  NotificationIcon,
  ProxyIcon,
  ScrapeIcon,
  SettingsIcon,
  SmmIcon,
  StatisticsIcon,
  SupportIcon,
  TestIcon,
  UserIcon,
  WalletIcon,
} from "./icons"
import { Menu } from "@/app/(admin)/_components/menus/types/menu.type"
import { CountBadge } from "./count-badge.component"

export const MenuItems: Menu[] = [
  {
    category: "Menu",
    items: [
      {
        title: "Dashboards",
        icon: <HomeIcon />,
        items: [
          {
            title: "Dashboard Default",
            link: _routes.dashboard,
          },
          {
            title: "Dashboard Two",
            link: _routes._root + "/home-2",
          },
          {
            title: "Statistics",
            link: _routes._root + "/statistics",
          },
          {
            title: "Analytics",
            link: _routes._root + "/analytics",
          },
        ],
      },
      {
        title: "Users",
        link: _routes.users,
        icon: <UserIcon />,
      },
      {
        title: "Generation",
        icon: <IntegrationIcon />,
        items: [
          {
            title: "Creation",
            link: _routes.domains,
          },
          {
            title: "Submissions",
            link: _routes.smmServices,
          },
          {
            title: "Materials",
            link: _routes.botUsers,
          },
          {
            title: "Transcripts",
            link: _routes.domains,
          },
        ],
      },
      {
        title: "Configuration",
        link: _routes.configuration,
        icon: <SettingsIcon />,
      },
      {
        title: "Logout",
        link: _routes.signout,
        icon: <LogoutIcon />,
      },
    ],
  },
  {
    category: "Others",
    items: [
      {
        title: "Transaction",
        link: _routes._root + "/transaction",
        icon: <ClipboardIcon />,
      },
      {
        title: "Statistics",
        link: _routes._root + "/statistics",
        icon: <StatisticsIcon />,
      },
      {
        title: "Analytics",
        link: _routes._root + "/analytics",
        icon: <AnalyticsIcon />,
      },
      {
        title: "My Wallet",
        link: _routes._root + "/my-wallet",
        icon: <WalletIcon />,
      },
      {
        title: "Inbox",
        link: _routes._root + "/messages",
        icon: <NotificationIcon />,
        badges: [
          <EditBadgeIcon key="badge-messages-2" />,
          <div key="badge-messages-1">
            <Image
              priority={true}
              height={profileImg.height}
              width={profileImg.width}
              src={profileImg.src}
              alt="profile"
            />
          </div>,
          <CountBadge key="badge-message-2" count={5} />,
        ],
      },
      {
        title: "Integrations",
        link: _routes._root + "/integrations",
        icon: <IntegrationIcon />,
      },
      {
        title: "Calendar",
        link: _routes._root + "/calendar",
        icon: <CalendarIcon />,
      },
      {
        title: "History",
        link: _routes._root + "/history",
        icon: <HistoryIcon />,
      },
      {
        title: "Support",
        link: _routes._root + "/support-ticket",
        icon: <SupportIcon />,
      },
      {
        title: "Customers",
        link: _routes._root + "/not-used/users",
        icon: <HourglassIcon />,
      },
      {
        title: "404",
        link: "/404",
        icon: <AttentionIcon />,
      },
    ],
  },
]
