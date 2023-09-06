<script>
    import { Bar } from 'svelte-chartjs';
    import { dataBarChart } from '$lib/stores';
  
    import {
      Chart,
      Title,
      Tooltip,
      Legend,
      BarElement,
      CategoryScale,
      LinearScale,
    } from 'chart.js';

    Chart.register(
      Title,
      Tooltip,
      Legend,
      BarElement,
      CategoryScale,
      LinearScale
    );
  </script>
  
  <Bar data={$dataBarChart} options={{ responsive: true }} />
  