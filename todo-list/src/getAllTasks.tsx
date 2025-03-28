type SubtaskObj = {
    subTaskDescription: string,
    isDone: boolean
}
type TaskObj = {
    task_id : number, 
    task_name : string,
    task_details: string,
    created_at : string,
    isDone: boolean,
    isPinned: boolean,
    subTasks?: SubtaskObj[]
}

async function getAllTasks(): Promise<TaskObj[] | null>{
    const URL: string = "https://api.jsonbin.io/v3/b/67e08e9a8960c979a577194c";
    try{
        const response = await fetch(
            URL
        );
        if(!response.ok){
            throw new Error(`Failed to fetch tasks: ${response.statusText}`);
        }
        const taskdata = await response.json();
        const tasks: TaskObj[] = taskdata.record;
        return tasks;
    }catch(e){
        console.error("Error Occured Fetching Data: "+ e);
        return null;
    }
    
}

export default getAllTasks;