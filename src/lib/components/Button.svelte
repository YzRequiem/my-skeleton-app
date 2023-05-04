<script lang="ts">
    export let buttonContent = {};

    import { drawerStore } from '@skeletonlabs/skeleton';

    function drawerClose(): void {
        drawerStore.close();
    };
    
</script>

<div>
    <a href={buttonContent.href} on:click={drawerClose} class="btn variant-ghost-primary">{buttonContent.text} </a>
</div>