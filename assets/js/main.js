const getContainerForData = document.querySelector('#container');
const getSubmit = document.querySelector('#submit');

fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(data => {
        var getData = data.results;


        getSubmit.addEventListener('click', ()=>{

            let getSearch = document.querySelector('#search').value;
            let FirtsWordToUperCase = getSearch[0].toUpperCase() + getSearch.substring(1);

            let createNewExpresionWithValue = new RegExp(getSearch);
            let createNewExpresionUpperCase = new RegExp(FirtsWordToUperCase);

            let dataName = getData.filter(item =>{
                return (createNewExpresionWithValue).test(item.name) || (createNewExpresionUpperCase).test(item.name);
            });

            if(dataName){
                
                dataName.forEach((data)=>{

                    let createNewImage = document.createElement('img');
                    createNewImage.src = data.image;    

                    let createNewName = document.createElement('p');
                    createNewName.textContent = data.name.toLowerCase();

                    let createContainerPrincipal = document.createElement('div');

                    getContainerForData.append(createContainerPrincipal);

                    createContainerPrincipal.append(createNewImage);
                    createContainerPrincipal.append(createNewName);

                });

            }
        
        });

    });
