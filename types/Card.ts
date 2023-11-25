export enum Gender {
  Man = "남자",
  Woman = "여자",
  None = "선택 안 함",
}

export type Card = {
  id: number;
  nickname: string;
  contact: string;
  gender: Gender;
  age: number;
  mbti: string;
};
export type CardList = Card[];
