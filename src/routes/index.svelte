<script>
    export const prerender = true;

    import { harmonyData } from "../stores/stores.js";
    import HarmonyEntryView from "../components/HarmonyEntryView.svelte"
</script>

<div id="main_heading">
    <h1>Harmony of the Gospels</h1>
    <h2>Website created by Jason Anderson</h2>
</div>

<div id="harmony_list">
    {#each $harmonyData as {id, eventTitle}}
        <HarmonyEntryView id={id}, title={eventTitle}/>
    {/each}
</div>

<style>
    * {
        background-color: rgb(227, 242, 255);
    }

    #main_heading {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    #harmony_list {
        display: flex;
        flex-direction: column;
    }
</style>