<script>
    import { Line } from 'svelte-chartjs';
    import { data } from './data.js';

    export let michel
    // import michel from routes +page.svelte
 // console.log(data.datasets[0].data);

     data.datasets[0].data = michel
   
   
  
    import {
      Chart as ChartJS,
      Title,
      Tooltip,
      Legend,
      LineElement,
      LinearScale,
      PointElement,
      CategoryScale,
    } from 'chart.js';
  
    ChartJS.register(
      Title,
      Tooltip,
      Legend,
      LineElement,
      LinearScale,
      PointElement,
      CategoryScale
    );
  </script>
  
  <Line  {data} options={{ responsive: true }} />
  