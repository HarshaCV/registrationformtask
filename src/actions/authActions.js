export const signIn={credentials}=>{
    return(dispatch,getstate,{getFirebase})=>{
        const firebase=getFirebase();
        firebase.auth().signInwithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type :'LOGIN-SUCCESS'})
        }).catch((err)=>{
            dispatch({ type:'LOGIN-ERROR',err});
        })
    }


}
