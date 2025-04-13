import React from "react"


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

interface DialogProps {
    selectedTask : TaskObj | null,
    isDialogOpen: boolean,
    onClose: () => void
}
interface DialogStates{
    localTask : TaskObj | null,
}

class DialogBox extends React.Component<DialogProps, DialogStates>{
    constructor(props: DialogProps){
        super(props);
        this.state = {
            localTask : props.selectedTask
        }
    }
    componentDidUpdate(prevProps: Readonly<DialogProps>): void {
        if(prevProps.selectedTask !== this.props.selectedTask){
            this.setState({
                localTask: this.props.selectedTask
            })
        }
    }
    handleCheckBox = async (subTaskIndex: number) => {
        const {localTask} = this.state;

        if(!localTask || !localTask.subTasks) return;
        
        const updatedSubTasks = [...localTask.subTasks]
        updatedSubTasks[subTaskIndex].isDone = !updatedSubTasks[subTaskIndex].isDone;

        const updatedTask : TaskObj = {
            ...localTask,
            subTasks: updatedSubTasks
        };
        
        this.setState({ localTask: updatedTask });
        
        try {
      
            const apiURL = "https://api.jsonbin.io/v3/b/67e08e9a8960c979a577194c";
            const getResponse = await fetch(apiURL);
            
            if (!getResponse.ok) {
                throw new Error("Failed to fetch tasks");
            }
            
            const data = await getResponse.json();
            const allTasks = data.record;
 
            const updatedAllTasks = allTasks.map((task: TaskObj) => 
                task.task_id === updatedTask.task_id ? updatedTask : task
            );
            

            const updateResponse = await fetch(
                apiURL,
                {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Master-Key": "$2a$10$hzsFfM57ghIiD1WThdgK6uS3a5sZSXDBVUkJhN3fr7LoKVR93wSXi",
                    },
                    body: JSON.stringify(updatedAllTasks),
                }
            );
            
            if (!updateResponse.ok) {
                throw new Error("Failed to update tasks");
            }

            console.log("Task updated successfully");
        } catch (error) {
            console.error("Error occurred when updating subtasks:", error);
        }
    }

    render(): React.ReactNode {
        const {isDialogOpen, onClose} = this.props;
        const {localTask} = this.state
        return(
            <>
                {isDialogOpen && <div className='fixed inset-0 backdrop-blur-md'></div>}
                <dialog open={isDialogOpen} className='fixed top-1/3 left-1/2 
                transform -translate-x-1/2 -translate-y-1/2 w-96 p-6 border
                border-gray-300 rounded-lg shadow-lg 
                bg-white'>
                {localTask && <>
                        
                    <div className="h-auto w-full p-4">
                        {/* Task Name */}
                        <div className="mb-4">
                            <h1 className="text-2xl font-bold text-gray-800">{localTask.task_name}</h1>
                        </div>

                        {/* Task Details */}
                        <div className="mb-6">
                            <h1 className="text-xl text-gray-700">{localTask.task_details}</h1>
                        </div>

                        {/* Subtasks */}
                        {localTask.subTasks && localTask.subTasks.length > 0 && (
                            <div className="mb-6">
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">Subtasks</h2>
                            <ol className="space-y-2">
                                {localTask.subTasks.map((subTask, index) => (
                                <li key={index} className="flex items-center">
                                    <input
                                    type="checkbox"
                                    id={`subtask-${index}`}
                                    className="mr-2 h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                                    onChange={() => this.handleCheckBox(index)}
                                    checked={subTask.isDone}
                                    />
                                    <label htmlFor={`subtask-${index}`} className="text-gray-700">
                                        {subTask.subTaskDescription}
                                    </label>
                                </li>
                                ))}
                            </ol>
                            </div>
                        )}

                        {/* Close Button */}
                        <div className="flex justify-end">
                            <button
                            onClick={onClose}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                            >
                            Close
                            </button>
                        </div>
                    </div>
                    </>}
                </dialog>
            </>
        );
    }

}

export default DialogBox;

