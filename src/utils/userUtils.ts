import { User } from "../types/types";

export class UserUtils {
  public static mapToUser(userInfo): User {
    return {
      avatarUrl: userInfo?.avatar_url,
      bio: userInfo?.bio,
      blog: userInfo?.blog,
      company: userInfo?.company,
      createdAt: new Date(userInfo?.created_at),
      email: userInfo?.email,
      eventsUrl: userInfo?.events_url,
      followers: userInfo?.followers,
      followersUrl: userInfo?.followers_url,
      following: userInfo?.following,
      followingUrl: userInfo?.following_url,
      gistsUrl: userInfo?.gists_url,
      gravatarId: userInfo?.gravatar_id,
      htmlUrl: userInfo?.html_url,
      id: userInfo?.id,
      location: userInfo?.location,
      login: userInfo?.login,
      name: userInfo?.name,
      nodeId: userInfo?.node_id,
      organizationsUrl: userInfo?.organizations_url,
      publicGists: userInfo?.public_gists,
      publicRepos: userInfo?.public_repos,
      receivedEventsUrl: userInfo?.received_events_url,
      reposUrl: userInfo?.repos_url,
      siteAdmin: userInfo?.site_admin,
      starredUrl: userInfo?.starred_url,
      subscriptionsUrl: userInfo?.subscriptions_url,
      twitterUsername: userInfo?.twitter_username,
      type: userInfo?.type,
      updatedAt: userInfo?.updated_at,
      url: userInfo?.url,
    };
  }
}
