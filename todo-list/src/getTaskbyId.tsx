import tasks from './assets/taskData.json';
type TaskObj = {
    task_id : number, 
    task_name : string,
    task_details: string,
    created_at : string,
    isDone: boolean,
    isPinned: boolean,
    subTasks?: string[],
}
function getTaskById(id: number) : TaskObj{
    
    const task = tasks.find((task) => task.task_id === id);
    if(task){
        return task;
    }else{
        throw new Error(`Task with id: ${id} is not found`);
    }

}

export default getTaskById;