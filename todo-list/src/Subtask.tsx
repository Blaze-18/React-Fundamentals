import React, { Component } from 'react'
type SubtaksObj = {
    subTaskDescription: string,
    isDone: boolean
}

interface SubtaskState{
    subtasks: SubtaksObj[],
    inputchange: string
}
interface SubtaskProps{
    onSubTaskChange(subtask:SubtaksObj) : void
}

export class Subtask extends Component<SubtaskProps, SubtaskState> {
    
    constructor(props: SubtaskProps){
        super(props);
        this.state = {
            subtasks: [],
            inputchange: ''
        }
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) :void => {
        this.setState({
            inputchange: event.target.value
        })
    }
    handleSubmit = () => {
        
        const {inputchange, subtasks} = this.state;
        const {onSubTaskChange} = this.props;

        let newSubtask:SubtaksObj = {
            subTaskDescription: '',
            isDone: false
        };
        if(inputchange.trim() !== ''){
                newSubtask = {
                subTaskDescription: inputchange,
                isDone: false
            }
        }
        this.setState({
            subtasks: [...subtasks, newSubtask],
            inputchange:''
        })
        onSubTaskChange(newSubtask)
        console.log("It worked");
    }
    render(): React.ReactNode {
        const {subtasks} = this.state;
        const subTaskLength : number = subtasks.length;
        return (
            <div className='subtask-section'>
                {/*Show current Subtask */}
                <div className='flex items-start'>
                    <form action='submit' className='px-3 py-1 flex flex-col items-start gap-2'>
                        <div className='flex flex-col justify-items-center'>
                            <label htmlFor="subtasks" className='text-xl font-semibold'>Subtasks</label>
                            {subTaskLength > 0 && (<div className=''>
                                <ul className='px-2'>
                                    {subtasks.map((subtask:SubtaksObj,index:number) => (
                                        <li key={index} className='list-disc list-inside'>{subtask.subTaskDescription}</li>
                                    ))}
                                </ul>
                            </div>)}
                        </div>
                        <div className='flex justify-items-center gap-2'>
                            <input name='subtasks' 
                                type="text" 
                                className='border-2 m-1 px-2 py-1' 
                                onChange={this.handleInputChange}
                                value={this.state.inputchange}
                                placeholder='Add New Subtask!'
                            />
                            <button type="button" className="px-3 py-2 text-xs 
                            text-center text-white bg-blue-700 rounded-lg font-semibold
                            hover:bg-blue-800 focus:ring-4 focus:outline-none 
                            focus:ring-blue-300 dark:bg-blue-600 
                            dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={this.handleSubmit}>Add</button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default Subtask