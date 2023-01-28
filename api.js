const getdata=()=>
{
const data=fetch('https://dummyjson.com/posts')
.then((response)=>response.json())
.then((data)=>appendData(data.posts))

}
getdata()
const appendData=(data)=>{
    console.log(data);
    let main=document.querySelector(".maincotainner")
    main.innerHTML=null;
    data.map((ele)=>
    {
        const di=document.createElement("div")
        let title=document.createElement("p")
        title.innerText=ele.title
        di.append(title);
        main.append(di);
        
    })
}