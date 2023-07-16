async function fetchStories() {
    const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json", {cache: "no-store"});
    const data = await response.json;
    console.log(data);
       // if (data.length > 0)
        /*{ return data;
        } 
        else {
            return [];
        }*/
        return data;
        
    
}

export default async function Stories() {
    const data =  await fetchStories();
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Stories List</h1>
            
            <ol>
             <li>{data}</li>
            </ol>
            
            
            
        </main>
    )
}