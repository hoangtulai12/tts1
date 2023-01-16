


const filter =(filterList,query,type)=>{
        switch (type) {
            case "users":
                const usersFilterName =  filterList?.filter((user) => {
                    return user.name.toLowerCase().includes(query[0].toLowerCase())
                }); 
                const usersFilterEmail =  usersFilterName?.filter((user) => {
                    return user.email.toLowerCase().includes(query[1].toLowerCase())
                });
                if(query[2]==="male" || query[2]==="female"){
                    const usersFilterGender =  usersFilterEmail?.filter((user) => {
                        return user.gender === query[2]
                    }); 

                    return usersFilterGender
                }else{
                    return usersFilterEmail
                }
            case "posts" :
                if("posts"){
                    const postsFilterTitle =  filterList?.filter((post) => {
                        return post.title.toLowerCase().includes(query[0].toLowerCase())
                    }); 
                    const postsFilterContent =  postsFilterTitle?.filter((post) => {
                        return post.body.toLowerCase().includes(query[1].toLowerCase())
                    });
                    return postsFilterContent
            }        
            default:
                break;
        }

}
    


export default filter