export interface CarInfo {
  name: string;
  color: string;
  id?: number;
}

export interface CarRecord {
  id: number;
  wins: number;
  time: number;
}

export interface DriveData {
  velocity: number;
  distance: number;
}
