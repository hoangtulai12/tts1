

const sortUsers = (usersSort,sort,type)=>{

    if (usersSort) {
         if  (sort)
         {
             usersSort?.sort((a,b)=>{
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
             usersSort?.sort((a,b)=>{
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
export default sortUsers