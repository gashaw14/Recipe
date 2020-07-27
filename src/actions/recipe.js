import uuid from 'uuid';


//ADD RECIPE
export const addRecipe = ({menuTitle='',steps=''}={})=>{
    return {
        type:'ADD_RECIPE',
       recipe: { 
            id:uuid(),
            menuTitle,
            steps

        }
       

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
