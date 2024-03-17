import data1 from '../data/wordCollectionLevel1.json';
import data2 from '../data/wordCollectionLevel2.json';
import data3 from '../data/wordCollectionLevel3.json';
import data4 from '../data/wordCollectionLevel4.json';
import data5 from '../data/wordCollectionLevel5.json';
import data6 from '../data/wordCollectionLevel6.json';
import { LevelData } from '../types/index';

export default function gettingData(numberLevel: number) {
  const levels = [data1, data2, data3, data4, data5, data6];

  return levels[numberLevel] as LevelData;
}
