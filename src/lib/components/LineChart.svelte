<script>
    import { Line } from 'svelte-chartjs';
    import { dataChart } from '$lib/stores';
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
  
  <Line  data={$dataChart} options={{ responsive: true }} />
  