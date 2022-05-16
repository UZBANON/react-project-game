import React, {useState, useEffect} from "react";
import TableList from "../components/TableList";
import MyButton from "../components/ui/button/MyButton";
import MyInput from "../components/ui/button/Input/MyInput";
import NewPostForm from "../components/NewPostForm";
import MySelect from "../components/ui/button/select/MySelect";
import FilterAndSearch from "../components/FilterAndSearch";
import MyModal from "../components/ui/button/modal/MyModal";
import {CSSTransition} from 'react-transition-group';
import { usePosts } from "../hooks/useCreatePost";
import PostServiceApi from "../API/PostServiceApi";
import MyLoader from "../components/ui/button/Loader/MyLoader";
import { useFetching } from "../hooks/useFetching";
import { getPageArray, getPageCount } from "../utils/pages";

function MainPage() {
   const [posts, setPosts] = useState([])
   
   const [filter, setFilter] = useState({sort: "", query: ""})
   const [totalPage, setTotalPage] = useState(0)
   const [limit, setLimit] = useState(10) 
   const [page, setPage] = useState(1)
   const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query)
   const pageArray = getPageArray(totalPage)

   const [fetchPosts, isLoading, postError] = useFetching(async () => {
     const response = await PostServiceApi
     .getAllPosts(limit, page)
     setPosts(response.data)
     const totalCount = response.headers['x-total-count']
     setTotalPage(getPageCount(totalCount, limit))
   })


   useEffect(() => {
    fetchPosts()
   }, [page])

   const createPost = (newPost) => {
     setPosts([...posts, newPost])
   }

  

   const removePost = (post) => {
     setPosts(posts.filter(s => s.id !== post.id))
   }

   const changePage = (page) => {
     setPage(page)
   }


  return (
    <>
    <div className="app w-75 mx-auto">
      <MyModal>
      <NewPostForm createPost={createPost} />
      </MyModal>
     
      <FilterAndSearch filter={filter} setFilter={setFilter} />
      {postError && <p>Error</p>}
     {isLoading 
     ?  <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}><MyLoader></MyLoader></div>
     : <TableList remove={removePost} posts={sortedAndSearchPosts} title="Beautiful Posts" />
     }
      
      {pageArray.map(item => (
         <MyButton 
         key={item}
         onClick={() => changePage(item)}
         className={page === item ? 'btn btn-primary' : "btn btn-outline-primary"}>{item}</MyButton>
      ))}

    </div>
    </>
  );
}

export default MainPage;
