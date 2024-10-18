import type { StackScreenProps } from "@react-navigation/stack";

export type RootStackParamList = {
  "auth-stack": undefined;
  "app-stack": undefined;
};

export type AuthStackParamsList = {
  "splash-screen": undefined;
  "age-screen": undefined;
  "rejection-screen": undefined;
  "signup-screen": undefined;
  "signin-screen": undefined;
  "welcome-screen": undefined;
  "profilesetup-screen": undefined;
  "favouriteweed-screen": undefined;
  "weedprofile-screen": undefined;
  "secondweedprofile-screen": undefined;
  "thirdweedprofile-screen": undefined;
  "app-stack": undefined;
  "chat-screen": Record<string, any>;
  "consumerprofile-screen": undefined;
  "main-filter": undefined;
  "weed-filter": undefined;
  "weed-key": undefined;
  "scanning-screen": undefined;
  "subscription-screen": undefined;
  "edit-profile-screen": undefined;
  "card-consumer-profile-screen": undefined;
};

export type SplashScreenProps = StackScreenProps<
  AuthStackParamsList,
  "splash-screen"
>;
export type AgeSelectionScreenProps = StackScreenProps<
  AuthStackParamsList,
  "age-screen"
>;
export type RejectionScreenProps = StackScreenProps<
  AuthStackParamsList,
  "rejection-screen"
>;
export type SignUpScreenProps = StackScreenProps<
  AuthStackParamsList,
  "signup-screen"
>;
export type SignInScreenProps = StackScreenProps<
  AuthStackParamsList,
  "signin-screen"
>;
export type WelcomeScreenProps = StackScreenProps<
  AuthStackParamsList,
  "welcome-screen"
>;
export type ProfileSetupScreenProps = StackScreenProps<
  AuthStackParamsList,
  "profilesetup-screen"
>;
export type FavouriteWeedScreenProps = StackScreenProps<
  AuthStackParamsList,
  "favouriteweed-screen"
>;

export type WeedProfileScreenProps = StackScreenProps<
  AuthStackParamsList,
  "weedprofile-screen"
>;

export type SecondWeedProfileScreenProps = StackScreenProps<
  AuthStackParamsList,
  "secondweedprofile-screen"
>;

export type ThirdWeedProfileScreenProps = StackScreenProps<
  AuthStackParamsList,
  "thirdweedprofile-screen"
>;

export type EditProfileScreenProps = StackScreenProps<
  AuthStackParamsList,
  "edit-profile-screen"
>;

export type CardConsumerProfileScreenProps = StackScreenProps<
  AuthStackParamsList,
  "card-consumer-profile-screen"
>;

export type AppStackProps = StackScreenProps<AuthStackParamsList, "app-stack">;
export type ChatScreenProps = StackScreenProps<
  AuthStackParamsList,
  "chat-screen"
>;
export type ConsumerProfileProps = StackScreenProps<
  AuthStackParamsList,
  "consumerprofile-screen"
>;
export type MainFilterProps = StackScreenProps<
  AuthStackParamsList,
  "main-filter"
>;
export type WeedFilterProps = StackScreenProps<
  AuthStackParamsList,
  "weed-filter"
>;
export type WeedKeyProps = StackScreenProps<AuthStackParamsList, "weed-key">;
export type ScanningScreenProps = StackScreenProps<
  AuthStackParamsList,
  "scanning-screen"
>;
export type SubscriptionScreenProps = StackScreenProps<
  AuthStackParamsList,
  "subscription-screen"
>;

export type AppStackParamsList = {
  "messages-screen": undefined;
  "home-screen": undefined;
  "favourites-screen": undefined;
  "profile-screen": undefined;
};

export type MessagesScreenProps = StackScreenProps<
  AppStackParamsList,
  "messages-screen"
>;

export type HomeScreenProps = StackScreenProps<
  AppStackParamsList,
  "home-screen"
>;

export type FavouriteScreenProps = StackScreenProps<
  AppStackParamsList,
  "favourites-screen"
>;

export type ProfileScreenProps = StackScreenProps<
  AppStackParamsList,
  "profile-screen"
>;
