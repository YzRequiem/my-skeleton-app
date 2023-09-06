<script>
	import BarChart from "$lib/components/BarChart.svelte";
	import Button from "$lib/components/Button.svelte";
	import LineChart from "$lib/components/LineChart.svelte";

	import {dataChart, dataBarChart } from "$lib/stores";
	import { date } from "zod";



	export let data;

	// Data for the chart bar
		// bind plantes's name to the bar chart store
	$dataBarChart.labels = data.nomDesPlantes
		// bind plantes's last values to the bar chart store
	$dataBarChart.datasets[0].data = data.lastValues
	
	// Data for the chart line 
		// Select the first plant id by default 
	let planteId = data.plantes[0].id
		// bind plantes's hydroValues to the lne chart store
	$dataChart.datasets[0].data = data.mesuresParPlante[planteId] 
		// bind plantes's threshold to the line chart store
	$dataChart.datasets[1].data =  [data.plantes[planteId].seuil,data.plantes[planteId].seuil,data.plantes[planteId].seuil,data.plantes[planteId].seuil,data.plantes[planteId].seuil,data.plantes[planteId].seuil,data.plantes[planteId].seuil ]
	
	let selectedPlante = data.plantes[0].name
	let selectedPlanteId = data.plantes[0].id
	let mesureDeLaPlanteSelectionee 
	function handleChange(event){
  		planteId = event.target.value;
  		mesureDeLaPlanteSelectionee = data.mesuresParPlante[planteId];
		// id de la plante selectionnée
		console.log(data.plantes);
		console.log(mesureDeLaPlanteSelectionee);
		$dataChart.datasets[0].data = mesureDeLaPlanteSelectionee;
		selectedPlante = data.plantesAssoc[planteId]
		$dataChart.datasets[1].data = [data.plantes[planteId].seuil,data.plantes[planteId].seuil,data.plantes[planteId].seuil,data.plantes[planteId].seuil,data.plantes[planteId].seuil,data.plantes[planteId].seuil,data.plantes[planteId].seuil ]
		console.log(planteId,data.plantes[planteId]);
		selectedPlanteId = planteId
	}
</script>

<div class="container h-full mx-auto justify-center items-center flex flex-col">
	<div class="w-full md:w-4/6 ">
		<h2 class="m-5 py-12 text-xl text-center">Surveillez l'hydratation de vos plantes</h2>
		<BarChart />
	</div>
	<div class="space-y-5 my-10 w-4/6 md:w-3/6">
		<h2 class="m-5 text-xl text-center">Selectionnez votre plante</h2>
		<select class="select" size="4" value="1" on:change={handleChange} >
			{#each data.plantes as plante}
				<option value={plante.id}>
					{plante.name}
				</option>
			{/each}
		</select>
	</div>
	<div class="flex gap-5">
		<div>
			<Button buttonContent={{ text: "Ajouter une plante", href: "/new" }} />
		</div>
		<div>
			<Button buttonContent={{ text: "Supprimer une plante", href: "/supprimer" }} />
		</div>
	</div>

	<div class="w-full md:w-4/6 ">
		{#if selectedPlante}
			 <h2 class="m-5 py-12 text-xl text-center">Hydromértrie de: {selectedPlante}</h2>
			 <!-- delete selected plant form -->
			 <form action="?/supprimer&id={selectedPlanteId}" method="POST" class="flex justify-center m-10">
				<input type="hidden" name="id" value={selectedPlante} />
				<button class="btn variant-ghost-primary" type="submit">Supprimer la plante sélectionnée</button>
			</form>
		{/if}
	
		<LineChart />
	</div>
	
</div>


