export enum Gender {
  Man = "MALE",
  Woman = "FEMALE",
  None = null,
}

export type Card = {
  id: number;
  nickname: string; // required
  contact: string; // required
  gender: Gender; // required
  cardname: string; //required
  age: number;
  mbti: string;
  instagramId: string;
  blogUrl: string;
  youtubeUrl: string;
  githubId: string;
};
export type CardList = Card[];
