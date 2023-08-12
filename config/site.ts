export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "NextUI Template",
  description: "Edit this and start your project",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Sample Page",
      href: "/SamplePage",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/PolGubau/next13-ui-template",
    sponsor: "https://github.com/sponsors/PolGubau",
  },
};
