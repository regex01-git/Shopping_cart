export async function FetchOne(id){
    try{
        console.log("id",id)
            let response=await fetch(`https://dummyjson.com/products/${id}`);
            response=await response.json()
            
            return {
                status:"success",
                data:response
            }
    }catch(err){
        console.log(err)
             return {
                status:"rejected",
                data:"Request denied by fetching by Id"
            }
    }
} 