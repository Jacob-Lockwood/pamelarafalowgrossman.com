export const sections = [
  { title: "Environmental", value: 'environmental' },
  { title: "Community", value: 'community' },
  { title: "Music", value: 'music' },
  { title: "Film", value: 'film' },
  { title: "Women's Health", value: 'womensHealth' },
] as const satisfies { title: string, value: string }[];
export type SectionTitle = typeof sections[number]["title"];
export type SectionValue = typeof sections[number]["value"];
