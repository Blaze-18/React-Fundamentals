type ButtonProps = {
    text:string,
    btnText: string
}
const Button = ({text, btnText}: ButtonProps ) => (
    <div className='flex justify-start items-center gap-3'>
        <h1 className='text-2xl font-bold'>{text}</h1>
        <button className='btn-styles'>
            {btnText}
        </button>
    </div>
);
export default Button;