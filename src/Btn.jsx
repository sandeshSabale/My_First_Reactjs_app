//export naming component
export function Newbtn (){

    return (

<button>subscribe</button>


    )


}

//export default component
 export function NewbtnSecond(){

    return (

        <button>Unsubscribe</button>
        
        
            )
        


}




//now use dynamic component means use 

export function Dynamic(){

    let myName = 'sandesh';


    return (
        <>
            <h1>hello my name is {myName}</h1>

        </>


    )



}



