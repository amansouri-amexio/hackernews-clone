async function fetchStoriesTop() {
    const response = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json", {cache: "no-store"});
    const data = await response.json;
    
       if (data.length > 0)
        { return data;
        } 
        else {
            return [];
        }
        
        
    
}
export default function TopStories() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Top Stories category</h1>
        </main>
    )
}