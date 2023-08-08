import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
      { title: 'my new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
      { title: 'welcome party', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
      { title: 'web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }  
    ]);
    return (
      <div className="home">
        {blogs.map((blog) => (
            <div className="blog-preview" key={blog.id}>
                <h2>{ blog.title }</h2>
                <p>written by { blog.author }</p>

            </div>

        ))}
      </div>
    );
  }
   
  export default Home;
  