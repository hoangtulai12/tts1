

const sortPosts = (postsSort,sort,type)=>{

    if (postsSort) {
         if  (sort)
         {
            postsSort?.sort((a,b)=>{
                 if (a[type] < b[type]) {
                     return -1
                 }
                 if (a[type] > b[type]) {
                     return 1
                 }
                 return 0
             })  
         }
         if (!sort)
         {
            postsSort?.sort((a,b)=>{
              if (a[type] > b[type]) {
                  return -1
              }
              if (a[type] < b[type]) {
                  return 1
              }
              return 0
          })  
    
         }
        
    }
}
export default sortPosts