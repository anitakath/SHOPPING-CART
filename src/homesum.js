console.log('HOMESUM.JS')


// ----------------------------------------------------------------------------- HOMESUM: LINKS TO HOME SECTIONS

const decorContainer = document.querySelector('.decorContainer')
        const decorItem = document.querySelectorAll('.decorItem')
        const itemTitleContainer = document.querySelectorAll('.itemTitleContainer')
    
        console.log(decorContainer)
        console.log(decorItem)
        console.log(decorItem.length)
        console.log(itemTitleContainer)

      for(let i = 0; i < decorItem.length; i++){
          
        decorItem.forEach((x)=>{
            x.addEventListener('click', ()=>{
                itemTitleContainer.forEach((y)=>{
                    y.style.bottom = '5rem'
                    y.style.transition = '1s ease'
                    y.style.letterSpacing = '4px'
                })
            })
        })

       
    }

        /*
        const decorItem = document.querySelectorAll('.decorItem')
        const itemTitleContainer = document.querySelectorAll('.itemTitleContainer')


 /*
        function displayTitle(){
            for(let i = 0; i < itemTitleContainer.length; i++){
                    itemTitleContainer[i].style.bottom = '200px'
                    console.log(itemTitleContainer[i])
                }
        }

        displayTitle();
        */

 /*

        decorItem.forEach((item)=>{
            item.addEventListener('click', ()=>{
                item.style.border = '1px solid gold'
            
               /*
                
                for(let i = 0; i < itemTitleContainer.length; i++){
                    itemTitleContainer[i].style.bottom = '200px'
                    console.log(itemTitleContainer[i])
                }*/
/*
                console.log(item)

                
                itemTitleContainer.forEach((x) =>{
                    x.style.bottom = '4rem'
                    x.style.transition = '1s ease'
                    x.style.letterSpacing = '4px'
                })
                /*
                console.log(item)
                console.log(item.itemTitleContainer)
                console.log(itemTitleContainer)*//*
                
            })
        })

*/





