import { IconDashboard, IconDeviceAnalytics, IconHelp, IconNotification, IconReportAnalytics, IconActivity, IconDog, IconPresentationAnalytics, IconRocket, IconBinaryTree, IconGraph, IconUsers, IconReplaceUser, IconMessage, IconSortAZ } from "@tabler/icons-react"

import { AppSidebarItemsProps } from "@/types/type"

// Menu items.
export const appSidebarItems: AppSidebarItemsProps = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Application",
      url: "/app",
      icon: IconDashboard,
      items: [
        {
          title: "Overview",
          url: "/app/overview",
          description: "A high-level overview of the key metrics and trends in your Twitter account",
          icon: IconRocket,
        },
        {
          title: "Notifications",
          url: "/app/notifications",
          icon: IconNotification
        },
      ],
    },
    {
      title: "Metrics & Insights",
      url: "/app/metrics",
      icon: IconDeviceAnalytics,
      items: [

        {
          title: "Tweets",
          url: "/app/metrics/tweets",
          description: "A list of your tweets",
          icon: IconMessage,
        },
        {
          title: "Followers",
          url: "/app/metrics/followers",
          description: "A list of your followers",
          icon: IconReplaceUser,
        },
        {
          title: "Engagement",
          url: "/app/metrics/engagement",
          description: "Your engagement rates (e.g., likes, retweets, replies) over time",
          icon: IconPresentationAnalytics,
        },
        {
          title: "Growth",
          url: "/app/metrics/growth",
          description: "A graph showing follower growth rate over time",
          icon: IconBinaryTree,
        },


      ],
    }, {
      title: "Analysis & Tracking",
      url: "/app/analysis",
      icon: IconDeviceAnalytics,
      items: [
        {
          title: "Analytics",
          url: "/app/metrics/analytics",
          icon: IconGraph,
        },
        {
          title: "Sentiment",
          url: "/app/analysis/sentiment",
          description: "Analyzing the overall sentiment of tweets related to your content",
          icon: IconPresentationAnalytics,
        },
        {
          title: "Keywords",
          url: "/app/analysis/keywords",
          icon: IconSortAZ,
        },
        {
          title: "Activity",
          url: "/app/insights/activity",
          icon: IconActivity,
        },
      ],
    },
    {
      title: "Help",
      url: "/app/help",
      icon: IconHelp,
      items: [
        {
          title: "Support",
          url: "#",
          icon: IconDashboard,
        },
        {
          title: "Docs",
          url: "/app/help/docs",
          icon: IconDog,
        },
      ],
    },
    {
      title: "Architecture",
      url: "#",
      icon: IconDashboard,
      items: [
        {
          title: "Accessibility",
          url: "#",
          icon: IconDashboard,
        },
        {
          title: "Fast Refresh",
          url: "#",
          icon: IconDashboard,
        },
        {
          title: "Next.js Compiler",
          url: "#",
          icon: IconDashboard,
        },
        {
          title: "Supported Browsers",
          url: "#",
          icon: IconDashboard,
        },
        {
          title: "Turbopack",
          url: "#",
          icon: IconDashboard,
        },
      ],
    },
  ],
}
