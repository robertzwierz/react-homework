import React from "react";
import ReactDOM from "react-dom";
import GreetingCard from "./components/GreetingCard";
import UserProfile from "./components/UserProfile";
import LikeButton from "./components/LikeButton";
import Todo from "./components/ToDo";
import ProductList from "./components/ProductList";
import Accordion from "./components/Accordion";
import CommentList from "./components/CommentList";
import ThemeProvider from "./components/ThemeProvider";

const App = () => {
  return (
    <div>
      <GreetingCard name="John" />
      <UserProfile name="Alice" email="alice@gmail.com" src="profile.jpg" />
      <LikeButton />
      <Todo task="Complete homework" />
      <ProductList
        products={[
          { name: "Product 1", price: 19.99, description: "Description 1" },
          { name: "Product 2", price: 29.99, description: "Description 2" },
        ]}
      />
      <Accordion
        items={[
          { title: "Section 1", content: "Content 1" },
          { title: "Section 2", content: "Content 2" },
        ]}
      />
      <CommentList
        comments={[
          { username: "User 1", commentText: "Comment 1" },
          { username: "User 2", commentText: "Comment 2" },
        ]}
      />
      <ThemeProvider>{}</ThemeProvider>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
