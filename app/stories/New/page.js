async function fetchStoriesNew() {
    const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json", {cache: "no-store"});
    const data = await response.json;
    console.log(data);
       if (data.length > 0)
        { return data;
        } 
        else {
            return [];
        }
        
    
}

export default function NewStrories() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>New Stories Category</h1>
        </main>
    )
}