import { ref } from "vue";

export const useRecipes = () => {
    const recipes = ref([
        {
            id: 1,
            title: 'Marmitako (Tuna Stew)',
            time: 45,
            difficulty: 'Medium',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Marmitako.JPG',
            image_attribution: '"Marmitako" by Núria Pueyo, CC BY-SA 2.5 <https://creativecommons.org/licenses/by-sa/2.5>, via Wikimedia Commons'
        },
        {
            id: 2,
            title: 'Cocotxas de bacalao al pilpil (Cod cheeks in pilpil sauce)',
            time: 45,
            difficulty: 'Hard',
            image: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/CocotxasPilPil.jpg',
            image_attribution: '"CocotxasPilPil" by BocaDorada, CC BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0>, via Wikimedia Commons'
        },
        {
            id: 3,
            title: 'Basque Cheesecake',
            time: 60,
            difficulty: 'Medium',
            image: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Basque-cheesecake.jpg',
            image_attribution: '"Basque-cheesecake" by The-Wuje, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons'
        }
    ]);

    /**
     * Get a recipe by its ID
     * @param id Recipe ID
     */
    const getRecipeById = (id: number) => {
        return recipes.value.find(recipe => recipe.id === id);
    }

    return { recipes, getRecipeById };
}