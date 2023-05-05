import { localStorageStore } from "@skeletonlabs/skeleton";
import { writable, type Writable } from "svelte/store";



export const valuess = writable([0,2])


export const dataChart = writable({
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
        data: [30,30, 30, 30, 30, 30, 30],
      },
      {
        label: 'My Second dataset',
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
        data: [0],
      },
    ],
  }
  )

export const dataBarChart = writable(
    {
        labels: [ 'Plante 1 ', 'Plante 2', 'Plante 3', 'Plante 4', 'Plante 5' ],
        datasets: [
          {
            label: "% d'humidité pour la dernière heure "   ,
            data: [12, 19, 3, 5, 2, 3],
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