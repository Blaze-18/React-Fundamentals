import React from 'react'
import Subtask from './Subtask';
import getAllTasks from './getAllTasks';
import getFormattedDateTime from './formatTime';
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
    subTasks?: SubtaskObj[],
}
interface AddtaskStates{
    isClicked : boolean,
    titleInput: string,
    descriptionInput: string,
    subtasks: SubtaskObj[],
}
interface AddTaskProps{
    onNewTaskAdd(): void
}
export class AddTask extends React.Component<AddTaskProps, AddtaskStates> {
    constructor(props: AddTaskProps) {
        super(props);
        this.state = {
            isClicked: false,
            titleInput: '',
            descriptionInput: '',
            subtasks: [],
        }
    }
    handleSubtaskData = (subtask: SubtaskObj) =>{
        this.setState((prevState) =>({
            subtasks: [... prevState.subtasks , subtask]
        }))
    }
    saveTask = async () => {
        try {
            const prevTasks = await getAllTasks();
            if(prevTasks === null){
                throw new Error('Tasks fetch failed when updating new task');
                return;
            }
            const totalTasks = prevTasks.length;

            const {titleInput, descriptionInput} = this.state
            const updateTime = getFormattedDateTime();
            const newTask : TaskObj = {
                task_id: totalTasks + 1,
                task_name: titleInput,
                task_details: descriptionInput,
                created_at: updateTime,
                isDone: false,
                isPinned: false,
                subTasks: this.state.subtasks
            }
            const updatedTasks = [... prevTasks, newTask];
            const url = 'https://api.jsonbin.io/v3/b/67e08e9a8960c979a577194c'
            const response = await fetch(
                url,
                {
                    method: "PUT",
                    headers:{
                        "Content-Type": "application/json",
                        "X-Master-Key": "$2a$10$hzsFfM57ghIiD1WThdgK6uS3a5sZSXDBVUkJhN3fr7LoKVR93wSXi",
                    },
                    body: JSON.stringify(updatedTasks),
                }
            );
            if (!response.ok) {
                throw new Error("Failed to update tasks");
            }

            console.log("Task updated successfully");
            this.handleCloseButton();
            this.props.onNewTaskAdd();
        }catch (error) {
            console.log('Error Occured at add task function: ' + error)
        }
    }
    handleAddButton = () : void =>{
        this.setState({
            isClicked: true
        })
    }
    handleInputChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
        if(event.target.name === 'title'){
            this.setState({
                titleInput: event.target.value
            });
        }
        if(event.target.name === 'description'){
            this.setState({
                descriptionInput: event.target.value
            });
        }
    }
    handleCloseButton = () : void =>{
        this.setState({
            isClicked: false
        })
    }
    render(): React.ReactNode {
        return(
            <div>
                
                <button type="button" className="text-white bg-blue-700 
                hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium 
                rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 
                dark:hover:bg-blue-700 focus:outline-none
                dark:focus:ring-blue-800" onClick={this.handleAddButton}>Add New Task
                </button>
                
                {this.state.isClicked && 
                <div className='fixed inset-0 backdrop-blur-md'></div>}
                
                    <dialog open={this.state.isClicked} className='fixed top-1/3 left-1/2 
                    transform -translate-x-1/2 -translate-y-1/2 w-96 p-6 border
                    border-gray-300 rounded-lg shadow-lg 
                    bg-white'>
                        <div className='mx-1 px-1 flex flex-col justify-center items-center border-2 rounded-sm gap-1'>
                            <div className='m-2 p-2'>
                                <h1 className='text-2xl font-bold text-blue-700'>Create New Task</h1>
                            </div>
                            <div className='m-1 px-2 w-full'>
                                <form action="submit" className='flex justify-between items-center'>
                                    <div className='flex justify-items-center'>
                                        <label htmlFor="title" className='text-xl font-semibold'>Title</label>
                                    </div>
                                    <div className='fex justify-items-center'>
                                        <input 
                                            type="text" 
                                            name='title' 
                                            onChange={this.handleInputChange}
                                            placeholder='Enter Task Title'
                                            value= {this.state.titleInput}
                                            className='m-1 px-2 py-1 border-2 rounded-md min-w-61 max-w-61'
                                        />
                                    </div>
                                    
                                </form>
                            </div>
                            <div className='m-1 px-2 w-full'>
                                
                                <form action="submit" className='p-1 flex flex-col justify-between gap-1'>
                                    <div className='flex justify-items-center'>
                                        <label  htmlFor="description" 
                                                className='text-xl font-semibold'>Description
                                        </label>
                                    </div>
                                    <div className='flex justify-items-center'><textarea 
                                        name="description" 
                                        onChange={this.handleInputChange} 
                                        className='p-2 border-2 w-full rounded-md'
                                        value={this.state.descriptionInput}
                                        placeholder='Enter Task Description'
                                        ></textarea></div> 
                                </form>
                            
                            </div>
                            <div className='w-full'>
                            
                                <Subtask onSubTaskChange={this.handleSubtaskData}></Subtask>
                            
                            </div>
                            <div className='m-3 p-1 w-full flex justify-between'>

                                <button onClick={this.handleCloseButton} className="focus:outline-none
                                text-white bg-red-700 hover:bg-red-800 focus:ring-4
                                focus:ring-red-300 font-medium rounded-lg text-sm px-5 
                                py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700
                                dark:focus:ring-red-900">
                                    Close
                                </button>

                                <button onClick={this.saveTask} className='focus:outline-none text-white bg-green-700 
                                hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium 
                                rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 
                                dark:hover:bg-green-700 dark:focus:ring-green-800'>Save Task
                                </button>
                        
                            </div>
                        </div>
                    </dialog>
            </div>
        );
    }
}
