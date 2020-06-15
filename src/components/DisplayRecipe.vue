<template>
    <div class="display-recipe">
        <h2>{{ recipe.strMeal }}</h2>
        <img :src="recipe.strMealThumb" :alt="recipe.strMeal" />
    </div>
</template>

<script>
export default {
    name: "DisplayRecipe",
    props: {
        recipe: {
            type: Object
        }
    }
};
</script>
