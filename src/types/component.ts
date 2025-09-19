export type ID = string | number;

  export interface Person {
    name: string;
    age: number;
    city?: string; // readonly property
  }