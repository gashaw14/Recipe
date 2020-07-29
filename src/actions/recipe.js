import uuid from 'uuid';


//ADD RECIPE
export const addRecipe = ({menuTitle='',steps='',ingredient='', checkbox=false}={})=>{
    return {
        type:'ADD_RECIPE',
       recipe: { 
            id:uuid(),
            menuTitle,
            steps,
            ingredient,
            checkbox

        }
       

    }
}
export const removeRecipe = ({id})=>{ 
return{
    type: 'REMOVE_RECIPE',
    id
}
}
//edit recipe
export const editRecipe =(id,update)=>{
return {
    type:'EDIT_RECIPE',
    id,
    update
}
}
