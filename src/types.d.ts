declare module "MyTypes" {
  export type LeaderboardItem = {
    order: number;
    team: string;
    clicks: number;
  };
  export type Click = {
    teamName: string;
    sessionId: string;
  };

  export type ClickResponse = {
    your_clicks: number;
    team_clicks: number;
  };
}
