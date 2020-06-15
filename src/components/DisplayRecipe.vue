<template>
    <div class="display-recipe">
        <img :src="recipe.strMealThumb" :alt="recipe.strMeal" />
        <h2>{{ recipe.strMeal }}</h2>
        <button
            class="btn-primary"
            @click="showRecipeDetail = !showRecipeDetail"
        >
            {{ showRecipeDetail ? "Hide Details" : "Show Details" }}
        </button>
        <div class="recipe-details" v-if="showRecipeDetail">
            <h3>Ingredients</h3>
            <ul>
                <li v-for="item in ingredients" :key="item.id">
                    {{ item.name }} &ndash; ({{ item.measure }})
                </li>
            </ul>
            <h3>Instructions</h3>
            <p v-for="instruction in instructions" :key="instruction">
                {{ instruction }}
            </p>
            <a
                v-if="recipe.strSource"
                class="btn-primary"
                style="margin: 1rem 0 2rem 0"
                :href="recipe.strSource"
                target="_blank"
                rel="noopener noreferrer"
                >Original Source</a
            >
            <iframe
                v-if="youtubeUrl"
                :src="youtubeUrl"
                height="315"
                frameborder="0"
                allowfullscreen
            ></iframe>
        </div>
    </div>
</template>

<script>
export default {
    name: "DisplayRecipe",
    props: {
        recipe: {
            type: Object
        }
    },
    data: function() {
        return {
            showRecipeDetail: false
        };
    },
    computed: {
        ingredients: function() {
            let ingredients = [];
            for (let key in this.recipe) {
                if (key.includes("Ingredient") && this.recipe[key]) {
                    ingredients.push({
                        id: key.replace("strIngredient", ""),
                        name: this.recipe[key]
                    });
                }
            }

            for (let key in this.recipe) {
                if (key.includes("Measure") && this.recipe[key]) {
                    ingredients.forEach((ingredient, index) => {
                        if (ingredient.id == key.replace("strMeasure", "")) {
                            ingredients[index].measure = this.recipe[key];
                        }
                    });
                }
            }
            return ingredients;
        },
        instructions: function() {
            return this.recipe.strInstructions
                .split(".")
                .join(".#separator")
                .split("#separator");
        },
        youtubeUrl: function() {
            return this.recipe.strYoutube.replace("watch?v=", "embed/");
        }
    }
};
</script>
