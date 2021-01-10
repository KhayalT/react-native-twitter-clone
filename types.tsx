export type RootStackParamList = {
  Root: undefined;
  NewTweet: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Notifications: undefined;
  Messages: undefined;
};

export type HomeNavigatorParamList = {
  HomeScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type TweetType = {
  id: string,
  createdAt: string,
  content: string,
  user: UserType,
  numberOfRetweets?: number,
  numberOfComments?: number,
  numberOfLikes?: number,
  image?: string,
};

export type UserType = {
  id: string,
  name: string,
  username: string,
  image?: string,
};
