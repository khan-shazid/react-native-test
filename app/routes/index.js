import { createStackNavigator, createAppContainer } from "react-navigation";
import PostListContainer from "../module/posts/containers/PostListContainer";

const AppNavigator = createStackNavigator(
  {
    posts: PostListContainer,
  },
  {
    initialRouteName: "posts"
  }
);

export default createAppContainer(AppNavigator);
