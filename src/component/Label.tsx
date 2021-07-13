
export interface LabelProps {
    content: string;
}

export default Label;
function Label(prop: LabelProps) {
    return (
        <div className='label-back'>
            <p>
                {prop.content}
            </p>
        </div>
    )
}