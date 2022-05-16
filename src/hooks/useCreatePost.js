import {useMemo} from "react";

export const useSortPosts = (posts, sort) => {
    const SortedPosts = useMemo(() => {
        if(sort){
          return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
      }, [sort, posts])    

      return SortedPosts;
} 

export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortPosts(posts, sort)
    const sortedAndSearchPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])

    return sortedAndSearchPosts;

}