    //program to display animation series details using api

    var overAll = document.createElement('div');
        overAll.style.display = "flex";
        overAll.style.flexDirection = "row";
        overAll.style.flexWrap = "wrap";

    //for heading
    var heading = document.createElement('h1');
    heading.innerText = "ANIMATION SERIES";
    heading.style.textAlign = "center";
    heading.style.padding = "5px 5px 5px 5px";
    heading.style.width = "100%";
        
        
    async function getUserAsync(){
  
        try{
        
            let response = await fetch(' https://api.jikan.moe/v3/search/anime?q=anime');
            let user = await response.json();

            user.results.forEach(element => {    
                
                //container for image, title, start_date, end_date, imdb
                var container = document.createElement('div');
                container.style.width = "33%";
                container.style.paddingBottom = "5px";


                //for image
                var image = document.createElement('img');
                image.setAttribute('src',element.image_url);
                image.style.height = "75%";
                image.style.width = "75%";
                image.style.padding = "5px";

                //for title
                var title = document.createElement('div');
                title.innerText = 'Title :' + ' ' + element.title;
                title.style.padding = "2px 2px 2px 5px";

                //for start date
                var startDate = document.createElement('div');
                startDate.innerText = 'Start Date :' + " " + element.start_date;
                startDate.style.padding = "5px 5px 5px 5px";
                
                
                //for end date
                var endDate = document.createElement('div');
                endDate.innerText = 'End Date :' + ' ' + element.end_date;
                endDate.style.padding = "5px 5px 5px 5px";
                
                //for type of series
                var type = document.createElement('div');
                type.innerText = 'Type :' + ' ' + element.type;
                type.style.padding = "5px 5px 5px 5px";

                //for imdb score
                var imdb = document.createElement('div');
                imdb.innerText = 'Imdb :' + ' ' + element.score;
                imdb.style.padding = "5px 5px 5px 5px";
                
            
                //for append
                heading.appendChild(container); 
                container.appendChild(image);
                container.appendChild(title);
                container.appendChild(startDate);
                container.appendChild(endDate);
                container.appendChild(type);
                container.appendChild(imdb);
                overAll.appendChild(container);
                
    
            });
   
            }

            catch(err){
                console.log('error');
            }
   
            }

    getUserAsync();
    overAll.appendChild(heading);
    document.body.appendChild(overAll);