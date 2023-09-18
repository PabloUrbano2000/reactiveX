export interface GithubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: ItemType;
  site_admin: boolean;
  score: Score;
}

export interface Score {
  value: Value;
  type: ScoreType;
}

export enum ScoreType {
  BigNumber = "Big Number",
}

export enum Value {
  The10N = "1.0n",
}

export enum ItemType {
  User = "User",
}
