export type UploadProfileImageProps = {
    onImageUpload: (uploaded: boolean) => void;
    ViewKey?: number;
};

export type BalancingStrainProps = {
    ViewKey?: number;
};

export type StrainTypeProps = {
    ViewKey?: number;
};

export type UserTypeProps = {
    ViewKey?: number;
};

export type WeedConsumeProps = {
    ViewKey?: number;
};

export type WeedEffectsProps = {
    ViewKey?: number;
};

export type WeedRegularityProps = {
    ViewKey?: number;
};

export type FavoriteWeedScreenProps = {
    ViewKey?: number;
};

export type CannabisMethodProps = {
    ViewKey?: number;
};

export type CannabisPropertiesProps = {
    ViewKey?: number;
};

export type CannabisStrainProps = {
    ViewKey?: number;
};

export type StrainEffectsProps = {
    ViewKey?: number;
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
}