export interface TireCategoryType {
  tier: "티어" | number;
  selection: "채택수" | number;
  iq: "총 IQ" | number;
}

export const TIER_CATEGORIES = [
  {
    tier: "티어",
    selection: "채택수",
    iq: "총 IQ",
  },
  {
    tier: "알파",
    selection: 1,
    iq: 100,
  },
  {
    tier: "베타",
    selection: 5,
    iq: 500,
  },
  {
    tier: "감마",
    selection: 10,
    iq: 1000,
  },
  {
    tier: "텔타",
    selection: 20,
    iq: 2000,
  },
  {
    tier: "세타",
    selection: 50,
    iq: 5000,
  },
  {
    tier: "람다",
    selection: 100,
    iq: 10000,
  },
  {
    tier: "뮤",
    selection: 300,
    iq: 30000,
  },
  {
    tier: "오미크론",
    selection: 1000,
    iq: 100000,
  },
  {
    tier: "시그마",
    selection: 10000,
    iq: 1000000,
  },
];
