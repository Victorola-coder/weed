export type User = {
  otp: {
    code: null | string;
    expiresAt: string;
  };
  _id: string;
  username: string;
  email: string;
  phone: string;
  userType: "Individual" | "Medical";
  //   "password": "$2a$12$eZwjwc8sVMDsdu7Oo6N26.UoLttmBGlrh3FDTPd.8c3Sdu9TSfLpu",
  image: string;
  isActive: boolean;
  isAdmin: boolean;
  onlineStatus: boolean;
  features: any[];
  createdAt: string;
  weedprofile: any[];
  favouriteWay?: Record<string, any>;
  oftenIndulge?: Record<string, any>;
  preferredStrain?: Record<string, any>;
  preferBalance?: Record<string, any>;
  effectCana?: Record<string, any>;
  recreOrMed?: Record<string, any>;
  enjoyCana?: Record<string, any>;
};
