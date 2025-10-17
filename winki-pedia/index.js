

let searchResultsEl=document.getElementById("searchResults")
let searchEl=document.getElementById("search")
let spinnerEl=document.getElementById("spinner")

function createAndAppendResult(result){
    let {title,link,description}=result;
    //1.div container---resul-item
    let resultItem=document.createElement("div")
    resultItem.classList.add("result-item")
    searchResultsEl.appendChild(resultItem)

    //2.Anchor title result-Url
    let resultTitleUrl=document.createElement("a")
    resultTitleUrl.classList.add("result-title")
    resultTitleUrl.textContent=title;
    resultTitleUrl.href=link;
    resultTitleUrl.target="__blank"
    resultItem.appendChild(resultTitleUrl)

    ///3. Title break;
    let titleBreak=document.createElement("br")
    resultItem.appendChild(titleBreak)

    ///4.Anchor url
    let urlEl=document.createElement("a")
    urlEl.classList.add("result-url");
    urlEl.href=link;
    urlEl.target="__blank"
    urlEl.textContent=link;
    resultItem.appendChild(urlEl)

    ///5.line break
    let linebreak=document.createElement("br")
    resultItem.appendChild(linebreak)

    ///6.description

    let descriptionEl=document.createElement("p")
    descriptionEl.classList.add("line-description")
    descriptionEl.textContent=description;
    resultItem.appendChild(descriptionEl)

}
function displayResults(searchResult){
    spinnerEl.classList.toggle("d-none");
    for(let result of searchResult){
        createAndAppendResult(result)
    }
}
function searchWikipedia(event){
    if(event.key==="Enter"){
        spinnerEl.classList.add("d-none")
        searchResultsEl.textContent="";
        let searchInput=searchEl.value;
        let url="https://apis.ccbp.in/wiki-search?search="+searchInput;
        let options={
            method:"GET"
        }
        fetch(url,options)
        .then(function(response){
            return response.json()
        })
        .then(function(jsonData){
            console.log(jsonData)
            let {search_results}=jsonData
            displayResults(search_results)

        })
    }

}
searchEl.addEventListener("keydown",searchWikipedia)