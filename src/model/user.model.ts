export type User = {
  otp: {
    code: null | string;
    expiresAt: string;
  };
  _id: string;
  username: string;
  email: string;
  phone: string;
  userType: "Individual";
  //   "password": "$2a$12$eZwjwc8sVMDsdu7Oo6N26.UoLttmBGlrh3FDTPd.8c3Sdu9TSfLpu",
  image: string;
  isActive: boolean;
  isAdmin: boolean;
  onlineStatus: boolean;
  features: [];
  createdAt: string;
};
