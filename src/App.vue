<template>
    <main id="app">
        <GetRecipeBtn @receivedNewRecipe="setRecipe" />
        <DisplayRecipe :recipe="this.recipe" />
    </main>
</template>

<script>
import GetRecipeBtn from "./components/GetRecipeBtn.vue";
import DisplayRecipe from "./components/DisplayRecipe.vue";
export default {
    name: "App",
    components: {
        GetRecipeBtn,
        DisplayRecipe
    },
    data: function() {
        return {
            recipe: {}
        };
    },
    methods: {
        setRecipe(newRecipe) {
            this.recipe = newRecipe;
        }
    }
};
</script>

<style lang="scss">
@import "@/styles/index.scss";
</style>
