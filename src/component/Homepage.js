import React from 'react'
import Navbar from './Navbar'
import SideNav from './SideNav'
import StartupCard from './StartupCard'
import '../css/Home.css';
import FeedsPage from './FeedsPage';
import FeedsDisplay from './FeedsDisplay';
import Footer from './Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className='Main-Cont'>
        <div className='Side-Cont'>
          <SideNav />
        </div>
        
        <div className='Home-Container'>
          <StartupCard/>
          {/* <FeedsDisplay/> */}
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default HomePage;



// function HomePage() {
//   const [posts, setPosts] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isPostFormVisible, setIsPostFormVisible] = useState(false);
//   // useEffect(() => {
//   //   setIsLoading(true);
//   //   fetch("http://192.168.1.128:9090/api.venturecapitalist.com/post-feed")
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       setIsLoading(false);
//   //       setPosts(data);
//   //     })
//   //     .catch((error) => console.error(error));
//   // }, []);
//   const handleSubmit = (event, newPost) => {
//     event.preventDefault();
//     setIsLoading(true);
//     // post("http://192.168.1.128:9090/api.venturecapitalist.com/post-feed", {
//     //   method: "POST",
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //   },
//     //   body: JSON.stringify(newPost),
//     // })
//     //   .then((response) => response.json())
//     //   .then((data) => {
//     //     setIsLoading(false);
//     //     setPosts([data, ...posts]);
//     //   })
//     //   .catch((error) => console.error(error));
//   };
//   return (
//     <div className="feeds-page">
//       <h1>Feeds Page</h1>
//       {isPostFormVisible ? (
//         <PostForm
//           onSubmit={handleSubmit}
//           onCancel={() => setIsPostFormVisible(false)}
//         />
//       ) : (
//         <button
//           className="create-post-button"
//           onClick={() => setIsPostFormVisible(true)}
//         >
//           Create Post
//         </button>
//       )}
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         posts.map((post) => <Feed key={post.id} post={post} />)
//       )}
//     </div>
//   );
// }
// export default HomePage;