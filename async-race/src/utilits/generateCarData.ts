import { CarInfo } from '../types/index';

export default function generateCarData(numberOfCars = 1) {
  const marks = [
    'Toyota',
    'Mercedes-Benz',
    'BMW',
    'Audi',
    'Ford',
    'Chevrolet',
    'Honda',
    'Hyundai',
    'Volkswagen',
    'Nissan',
    'Kalymaga',
    'Koryto',
  ];
  const models = [
    'Corolla',
    'E-Class',
    '3 Series',
    'A4',
    'Mustang',
    'Camaro',
    'Civic',
    'Elantra',
    'Golf',
    'Altima',
    'Vedro',
    'Klyacha',
  ];

  const arrayOfCarsData: CarInfo[] = [];

  for (let i = 0; i < numberOfCars; i += 1) {
    const carData: CarInfo = {
      name: `${marks[Math.floor(Math.random() * marks.length)]} ${models[Math.floor(Math.random() * models.length)]}`,
      color: `#${Math.floor(Math.random() * (0xffffff + 1)).toString(16)}`,
    };
    arrayOfCarsData.push(carData);
  }
  return arrayOfCarsData;
}
