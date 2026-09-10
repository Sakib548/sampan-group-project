import { concerns2 } from "./concerns2";

export const divisionGroups = [
  {
    id: "real-estate",
    title: "Real Estate & Land Investment",
    href: "/our-divisions/real-state-and-land-investment",
    items: [1, 2, 4, 5, 7, 8, 9, 13, 39],
  },
  {
    id: "hospitality",
    title: "Hospitality, Resort & Highway Travel",
    href: "/our-divisions/hospitality-highway-travel",
    items: [14, 15, 16, 21, 17, 18, 19, 20],
  },
  {
    id: "golf-zone",
    title: "Golf Zone",
    href: "/our-divisions/golf-zone",
    items: [22, 38],
  },
  {
    id: "education",
    title: "Professional Education",
    href: "/our-divisions/professional-education",
    items: [34],
  },
  {
    id: "agro",
    title: "Agro & Fresh Produce",
    href: "/our-divisions/agro-fresh-produce",
    items: [23, 36],
  },
  {
    id: "retail",
    title: "Retail & Super Shops",
    href: "/our-divisions/retail-super-shops",
    items: [24, 25, 26],
  },
  {
    id: "mobility",
    title: "Automotive, Fuel & Mobility",
    href: "/our-divisions/automotive-fuel-mobility",
    items: [27, 28, 29, 30, 31],
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial",
    href: "/our-divisions/manufacturing-industrial",
    items: [10, 11, 12],
  },
  {
    id: "security",
    title: "Defense & Security",
    href: "/our-divisions/defense-security",
    items: [32, 33],
  },
  {
    id: "maritime",
    title: "Maritime / Alternative Assets",
    href: "/our-divisions/maritime-alternative-assets",
    items: [35],
  },
].map((group) => ({
  ...group,
  items: group.items.map((concernId) => {
    const concern = concerns2.find(
      (item) => Number(item.id) === Number(concernId),
    );
    return {
      id: concern?.id ?? `concern-${concernId}`,
      concernId,
      label: concern?.name ?? `Concern ${concernId}`,
      href: concern?.href ?? group.href,
      external: concern?.external ?? false,
    };
  }),
}));
