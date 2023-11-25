export type Wallet = {
  createdDate: string;
  id: number;
  imageUrls: any[];
  modifiedDate: string;
  name: string;
  status: string;
  user: {
    authInfo: { accountStatus: string; email: string; loginType: string; role: string };
    createdDate: string;
    id: number;
    modifiedDate: string;
    name: null;
    universityName: null;
  };
};
export type WalletList = Wallet[];
