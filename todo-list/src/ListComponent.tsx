interface ListState{
    todoList : TaskObj[],
    isChecked : boolean,
    selectedTask: TaskObj | null,
    isDialogOpen: boolean,

}
type SubtaksObj ={
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
    subTasks?: SubtaksObj[],
}
import { Component, ReactNode } from 'react';
import getAllTasks from './getAllTasks';
import DialogBox from './DialogBox';
import { AddTask } from './AddTask';

export class ListComponent extends Component <object,ListState>{
    
    constructor(props:object){
        super(props);
        this.state = {
            todoList: [],
            isChecked: false,
            selectedTask : null,
            isDialogOpen: false,

        }
    }
    async componentDidMount(): Promise<void> {
        const tasks = await getAllTasks();
        console.log(tasks)
        if(tasks === null){
            console.log("OOOPS");
        }
        if (tasks) {
            this.setState({
                todoList: tasks
            });
        }
    }
    handleTaskClick = (task : TaskObj) : void => {
        this.setState({
            isDialogOpen: true,
            selectedTask: task,
        })
    }
    handleNewTask = async () =>{
        const tasks = await getAllTasks();
        if(tasks === null){
            console.log('Fetching task failed')
        }
        if(tasks){
            this.setState({
                todoList: tasks,
            })
        }
    }
    hideDialogBox = ():void => {
        this.setState({
            selectedTask: null,
            isDialogOpen: false,
        })
    }
    handleDeleteTask = async (taskID: number) =>{
        try {
            const presentData = await getAllTasks();
            if(presentData === null){
                throw new Error("Fetch failed while deleting: ");
            }
            const updatedTask = presentData.filter((task)=>(task.task_id !== taskID));
            const url = 'https://api.jsonbin.io/v3/b/67e08e9a8960c979a577194c';
            const updateResponse = await fetch(
                url,
                {
                    method: 'PUT',
                    headers:{
                        'Content-Type': 'application/json',
                        'X-Master-Key': '$2a$10$hzsFfM57ghIiD1WThdgK6uS3a5sZSXDBVUkJhN3fr7LoKVR93wSXi'
                    },
                    body: JSON.stringify(updatedTask)
                }
            )
            if(!updateResponse.ok){
                throw new Error('Updating JSON while deleting failed. response: ' + updateResponse.status);
            }
            console.log('Updated succssesfully. Response: '+ updateResponse.statusText);
            this.handleNewTask();
        } catch (error) {
            console.log("Deleting failed: " +error )
        }
    }

    render():ReactNode {
        const { todoList, isDialogOpen, selectedTask} = this.state;

            return (
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-3xl font-bold">My Tasks</h1>
                        <ul className="my-4 flex flex-col gap-4 outline-2 p-4">
                            {todoList.map((task) => (
                                <div
                                    key={task.task_id} // Add key here
                                    className="flex justify-between items-center gap-20 outline-1 p-2 rounded-2xl"
                                    onClick={() => this.handleTaskClick(task)}
                                >
                                    {/* Task Name */}
                                    <label htmlFor="task-item" className="flex-1">
                                        <li className="list-none text-xl px-1 py-1">
                                            {task.task_name}
                                        </li>
                                    </label>
                                    {/* Delete Button */}
                                    <div className="flex justify-center items-center">
                                        <button
                                        type="button"
                                        onClick={(e) => {
                                        e.stopPropagation(); // Prevent the parent onClick from firing
                                        this.handleDeleteTask(task.task_id);
                                    }}
                                    className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 
                                    focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center 
                                    dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </ul>
                        <DialogBox selectedTask={selectedTask} isDialogOpen={isDialogOpen} onClose={this.hideDialogBox}></DialogBox> 
                        <AddTask onNewTaskAdd={this.handleNewTask}></AddTask>   
                </div>
            )
        }
    }


export default ListComponent;
