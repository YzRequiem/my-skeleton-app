import { localStorageStore } from "@skeletonlabs/skeleton";
import { writable, type Writable } from "svelte/store";






export const valuess = writable([0,2])

type DataChart = {
  labels: string[];
  datasets: {
    label: string;
    fill: boolean;
    lineTension: number;
    backgroundColor: string;
    borderColor: string;
    borderCapStyle: string;
    borderDash: number[];
    borderDashOffset: number;
    borderJoinStyle: string;
    pointBorderColor: string;
    pointBackgroundColor: string;
    pointBorderWidth: number;
    pointHoverRadius: number;
    pointHoverBackgroundColor: string;
    pointHoverBorderColor: string;
    pointHoverBorderWidth: number;
    pointRadius: number;
    pointHitRadius: number;
    data: number[];
  }[];
};


export const dataChart = writable<DataChart>({
    labels: ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
    datasets: [
      {
        label: 'Hydrométrie De la plante',
        fill: true,
        lineTension: 0.3,
        backgroundColor: 'rgba(225, 204,230, .3)',
        borderColor: '#10C387',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgb(205, 130,1 58)',
        pointBackgroundColor: 'rgb(255, 255, 255)',
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(0, 0, 0)',
        pointHoverBorderColor: 'rgba(220, 220, 220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [],
      },
      {
        label: 'Seuil critique',
        fill: true,
        lineTension: 0.3,
        backgroundColor: 'rgba(184, 185, 210, .3)',
        borderColor: 'red',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgb(35, 26, 136)',
        pointBackgroundColor: 'rgb(255, 255, 255)',
        pointBorderWidth: 10,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgb(0, 0, 0)',
        pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [],
      },

      ],
  }
  )

  type DataBarChart = {
    labels: string[];
    datasets: {
      label: string;
      data: number[]; // Définissez le type de données ici
      backgroundColor: string[];
      borderWidth: number;
      borderColor: string[];
    }[];
  };
  
  export const dataBarChart = writable<DataBarChart>(
  {
        labels: [ 'Plante 1 ', 'Plante 2', 'Plante 3', 'Plante 4', 'Plante 5' ],
        datasets: [
          {
            label: "% d'humidité lors de la dernière prise de mesure "   ,
            data: [],
            backgroundColor: [
              'rgba(255, 134,159,0.4)',
              'rgba(98,  182, 239,0.4)',
              'rgba(255, 218, 128,0.4)',
              'rgba(113, 205, 205,0.4)',
              'rgba(170, 128, 252,0.4)',
              'rgba(255, 177, 101,0.4)',
            ],
            borderWidth: 2,
            borderColor: [
              'rgba(255, 134, 159, 1)',
              'rgba(98,  182, 239, 1)',
              'rgba(255, 218, 128, 1)',
              'rgba(113, 205, 205, 1)',
              'rgba(170, 128, 252, 1)',
              'rgba(255, 177, 101, 1)',
            ],
          },
        ],
      }
  )