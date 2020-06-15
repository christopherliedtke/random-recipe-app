<template>
    <div>
        <select
            v-if="categories.length > 0"
            v-model="selectedCategory"
            name="category"
            id=""
        >
            <option value="">Any</option>
            <option v-for="category in categories" :key="category.idCategory">
                {{ category.strCategory }}
            </option>
        </select>
        <button @click="getRecipes">Random Recipe</button>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "GetRecipeBtn",
    props: {},
    data: function() {
        return { categories: [], selectedCategory: "" };
    },
    created() {
        this.getAllCategories();
    },

    methods: {
        async getRecipes() {
            let newRecipe;
            try {
                if (this.selectedCategory) {
                    const allMeals = await axios.get(
                        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.selectedCategory}`
                    );

                    const randomMealId =
                        allMeals.data.meals[
                            Math.floor(
                                Math.random() * allMeals.data.meals.length
                            )
                        ].idMeal;

                    const meal = await axios.get(
                        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${randomMealId}`
                    );

                    newRecipe = meal.data.meals[0];
                } else {
                    const meal = await axios.get(
                        "https://www.themealdb.com/api/json/v1/1/random.php"
                    );
                    newRecipe = meal.data.meals[0];
                }

                this.$emit("receivedNewRecipe", newRecipe);
            } catch (error) {
                console.log("Error on getRecipes(): ", error);
            }
        },
        async getAllCategories() {
            try {
                const response = await axios.get(
                    "https://www.themealdb.com/api/json/v1/1/categories.php"
                );
                this.categories = response.data.categories;
            } catch (error) {
                console.log("Error on getAllCategories(): ", error);
            }
        }
    }
};
</script>
