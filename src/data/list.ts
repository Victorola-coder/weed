import { Dispatch, SetStateAction } from "react";

export type UploadProfileImageProps = {
  onImageUpload: Dispatch<SetStateAction<string | null>>;
  ViewKey?: number;
};

export type BalancingStrainProps = {
  ViewKey?: number;
  setSelectedLabels: React.Dispatch<React.SetStateAction<string[]>>;
  selectedLabels: string[];
};

export type StrainTypeProps = {
  ViewKey?: number;
  setSelectedLabels: React.Dispatch<React.SetStateAction<string[]>>;
  selectedLabels: string[];
};

export type UserTypeProps = {
  ViewKey?: number;
  setSelectedLabels: React.Dispatch<React.SetStateAction<string[]>>;
  selectedLabels: string[];
  setSelectedEnjoyableCanna: React.Dispatch<React.SetStateAction<string[]>>;
  selectedEnjoyableCanna: string[];
};

export type WeedConsumeProps = {
  ViewKey?: number;
  setSelectedLabels: React.Dispatch<React.SetStateAction<string[]>>;
  selectedLabels: string[];
};

export type WeedEffectsProps = {
  ViewKey?: number;
  setSelectedLabels: React.Dispatch<React.SetStateAction<string[]>>;
  selectedLabels: string[];
};

export type WeedRegularityProps = {
  ViewKey?: number;
  setSelectedLabels: React.Dispatch<React.SetStateAction<string[]>>;
  selectedLabels: string[];
};

export type FavoriteWeedScreenProps = {
  ViewKey?: number;
  setSelectedLabels: React.Dispatch<React.SetStateAction<string[]>>;
  selectedLabels: string[];
};

export type CannabisMethodProps = {
  ViewKey?: number;
  setSelectedLabels: React.Dispatch<React.SetStateAction<string[]>>;
  selectedLabels: string[];
  others: string;
  setOthers: React.Dispatch<React.SetStateAction<string>>;
};

export type CannabisPropertiesProps = {
  ViewKey?: number;
  setSelectedLabels: React.Dispatch<React.SetStateAction<string[]>>;
  selectedLabels: string[];
  others: string;
  setOthers: React.Dispatch<React.SetStateAction<string>>;
};

export type CannabisStrainProps = {
  ViewKey?: number;
  setSelectedLabels: React.Dispatch<React.SetStateAction<string[]>>;
  selectedLabels: string[];
  // others: string;
  // setOthers: React.Dispatch<React.SetStateAction<string>>;
};

export type StrainEffectsProps = {
  ViewKey?: number;
  setSelectedLabels: React.Dispatch<React.SetStateAction<string[]>>;
  selectedLabels: string[];
  others: string;
  setOthers: React.Dispatch<React.SetStateAction<string>>;
};

export interface CardData {
  id: number;
  userName: string;
  userImage: string;
  weedImage1: string;
  weedName1: string;
  weedBio1: string;
  weedBasics1: string[];
  weedImage2: string;
  weedName2: string;
  weedBio2: string;
  weedBasics2: string[];
  weedImage3: string;
  weedName3: string;
  weedBio3: string;
  weedBasics3: string[];
}

export type WeedFilterScreenProps = {
  ViewKey?: number;
};

export type ChatCardProps = {
  onPress: () => void;
  image: any;
  name: string;
  message: string;
  time: string;
  unreadCount: number;
  isOnline: boolean;
};
