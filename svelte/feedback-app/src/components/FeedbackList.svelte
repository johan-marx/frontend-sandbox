<script>
    import { FeedbackStore} from '../stores';
    import { fade, scale} from 'svelte/transition';
    // import { each, onDestroy, onMount } from "svelte/internal";
    import FeedbackItem from "./FeedbackItem.svelte";
    let feedback = [];

    // const unsubscribe = FeedbackStore.subscribe(
    //     (data) => {
    //         feedback = data
    //     }
    // );

    // onMount(
    //     () => {
    //         console.log('mounted')
    //     }
    // );

    // onDestroy(
    //     () => {
    //         unsubscribe();
    //     }
    // )
</script>

{#each $FeedbackStore as item (item.id)}
<div in:scale out:fade>
    <FeedbackItem {item}></FeedbackItem>
</div>
{/each}