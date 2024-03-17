export type ClassList = string[];

export enum UserDataKeys {
  firstName,
  surname,
}

export type UserData = Record<string, string>;

interface Word {
  audioExample: string;
  textExample: string;
  textExampleTranslate: string;
  id: number;
  word: string;
  wordTranslate: string;
}

interface Level {
  id: string;
  name: string;
  imageSrc: string;
  cutSrc: string;
  author: string;
  year: string;
}

export interface Round {
  levelData: Level;
  words: Word[];
}
export interface LevelData {
  rounds: Round[];
}
