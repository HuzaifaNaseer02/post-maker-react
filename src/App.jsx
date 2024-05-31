import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModalHandler = () => setIsModalVisible(true);
  const hideModalHandler = () => setIsModalVisible(false);

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList
          isPosting={isModalVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;

//Just a change to test GITHUB
