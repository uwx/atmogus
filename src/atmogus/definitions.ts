/* eslint-disable */
// This file is automatically generated, do not edit!

import "@atcute/client/lexicons";

declare module "@atcute/client/lexicons" {
  namespace LolAtmogusActivityPresences {
    /** A record representing one or more application presence data. */
    interface Record {
      $type: "lol.atmogus.activity.presences";
      createdAt: string;
      presences: LolAtmogusDefsActivity.Presence[];
    }
  }

  namespace LolAtmogusDefsActivity {
    /** Images for the presence and their hover texts */
    interface Assets {
      [Brand.Type]?: "lol.atmogus.defs.activity#assets";
      largeImage?: string;
      largeText?: string;
      smallImage?: string;
      smallText?: string;
    }
    /** An activity sourced from a user's Discord Activity. */
    interface DiscordActivitySource {
      [Brand.Type]?: "lol.atmogus.defs.activity#discordActivitySource";
      applicationId?: string;
    }
    /** Represents an emoji used for a custom status */
    interface Emoji {
      [Brand.Type]?: "lol.atmogus.defs.activity#emoji";
      name: string;
      animated?: boolean;
      id?: string;
    }
    /** Information for the current party of the player */
    interface Party {
      [Brand.Type]?: "lol.atmogus.defs.activity#party";
      size?: PartySize;
    }
    /** Represents the activity party's current and maximum size */
    interface PartySize {
      [Brand.Type]?: "lol.atmogus.defs.activity#partySize";
      currentSize: number;
      maxSize: number;
    }
    /** An application's presence data */
    interface Presence {
      [Brand.Type]?: "lol.atmogus.defs.activity#presence";
      /** Activity app name */
      name: string;
      /**
       * Activity type, which determines the header text for the Rich Presence data \
       * Minimum: 0
       */
      type: number;
      /** Images used for the Rich Presence data (and their hover texts) */
      assets?: Assets;
      /** What the player is currently doing in your Activity */
      details?: string;
      emoji?: Emoji;
      /** Information for the current party of the player */
      party?: Party;
      source?: Brand.Union<DiscordActivitySource | SteamActivitySource>;
      /** User's current party status */
      state?: string;
      /** Unix timestamps to display start and/or end times */
      timestamps?: Timestamps;
      url?: string;
    }
    /** An activity sourced from a user's Steam 'now playing'. */
    interface SteamActivitySource {
      [Brand.Type]?: "lol.atmogus.defs.activity#steamActivitySource";
      gameName: string;
      appId?: number;
    }
    /** Timestamps for the start and/or end of the match */
    interface Timestamps {
      [Brand.Type]?: "lol.atmogus.defs.activity#timestamps";
      /** Time of when the activity ends */
      end?: string;
      /** Time of when the activity started */
      start?: string;
    }
  }

  namespace LolAtmogusActivityCurrent {
    /** A record representing a user's current game activity */
    interface Record {
      $type: "lol.atmogus.activity.current";
      activity?: LolAtmogusDefsActivity.Presence;
    }
  }

  namespace LolAtmogusGetUserActivity {
    interface Params {
      /** Handle or DID of account to fetch profile of */
      actor: string;
    }
    type Input = undefined;
    interface Output {
      activity: LolAtmogusDefsActivity.Presence;
    }
  }

  interface Records {
    "lol.atmogus.activity.presences": LolAtmogusActivityPresences.Record;
    "lol.atmogus.activity.current": LolAtmogusActivityCurrent.Record;
  }

  interface Queries {
    "lol.atmogus.getUserActivity": {
      params: LolAtmogusGetUserActivity.Params;
      output: LolAtmogusGetUserActivity.Output;
    };
  }

  interface Procedures {}
}
