export { HomePage } from "../pages/HomePage";
export { RecipePage } from "../pages/RecipePage";
export { BlogContainerPage } from "../pages/BlogContainerPage";
export { SaveListPage } from "../pages/SaveListPage";

/**** HOME CONTAINER *****/

export { Header } from "../components/Home/Header/Header";
export { SearchBar } from "../components/Home/Header/SearchBar";
export { Logo } from "../components/Home/Header/Logo";
export { Menu } from "../components/Home/Header/Menu";
export { BlogContainer } from "../components/Home/Container/BlogContainer";
export { BlogPostContainer } from "../components/Home/Container/BlogPostContainer";
export { BlogHeader } from "../components/Home/Container/BlogHeader";
export { BlogMain } from "../components/Home/Container/BlogMain";
export { BlogFooter } from "../components/Home/Container/BlogFooter";
export { PrevNextPageContainer } from "../components/Home/Container/PrevNextPageContainer";

/**** ASIDE CONTAINER  ****/

export { AsideContainer } from "../components/Aside/Container/AsideContainer";
export { EachFeedPost } from "../components/Aside/Container/EachFeedPost";
export { EachSimilarPost } from "../components/Aside/Container/EachSimilarPost";
export { PostTitle } from "../components/Aside/PostTitle";
export { PostImage } from "../components/Aside/PostImage";
export { PostRating } from "../components/Aside/PostRating";
export { Promoted } from "../components/Aside/Promoted";
export { NoPost } from "../components/Aside/NoPost";

/**** RECIPE CONTAINER  ****/

export { RecipeContainer } from "../components/Recipe/Container/RecipeContainer";
export { RecipeDetailContainer } from "../components/Recipe/Container/RecipeDetailContainer";
export { SimilarPostContainer } from "../components/Recipe/Container/SimilarPostContainer";
export { RecipeHeader } from "../components/Recipe/RecipeHeader";
export { RecipeVideo } from "../components/Recipe/RecipeVideo";
export { RecipeInstruction } from "../components/Recipe/RecipeInstruction";
export { RecipeNutrition } from "../components/Recipe/RecipeNutrition";
export { RecipeTopic } from "../components/Recipe/RecipeTopic";
export { RecipeSave } from "../components/Recipe/RecipeSave";

/**** SAVE CONTAINER  ****/

export { SaveListContainer } from "../components/save/SaveListContainer";
export { EachSavedList } from "../components/save/EachSavedList";
export { SavedImage } from "../components/save/SavedImage";
export { SavedContent } from "../components/save/SavedContent";

/*****  SERVICES *****/
export { useFetchBlogList } from "../services/useFetchBlogList";
export { useFetchFeedList } from "../services/useFetchFeedList";
export { useFetchBlogDetails } from "../services/useFetchBlogDetails";

/*** STORE ***/

export { onShowBlogList } from "../store/blogSlice";
export { onShowFeedList } from "../store/blogSlice";
export { onShowSimilarList } from "../store/blogSlice";
export { onShowRecipeDetail } from "../store/blogSlice";
export { onShowSearchedBlogList } from "../store/blogSlice";
export { onShowError } from "../store/blogSlice";
export { onShowSavedList } from "../store/saveSlice";
export { onRemoveSavedBlog } from "../store/saveSlice";

/***  COMMON CONTAINER ****/
export { BlogContainerShimmer } from "./BlogContainerShimmer";
export { TrendyContainerShimmer } from "./TrendyContainerShimmer";
