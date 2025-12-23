export type GoogleSignInBodyType = {
  providerId: string;
  providerAccountId: string;

  accessToken?: string | null;
  refreshToken?: string | null;
  accessTokenExpires?: Date | null;

  user: {
    email?: string | null;
    name?: string | null;
    image?: string | null;
  };
};
