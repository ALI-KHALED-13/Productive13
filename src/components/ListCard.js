const ListCard =(props)=>{
    const listType = props.listType.slice( props.listType.search('-') + 1 );
    return (
        <div className="listCard" contentEditable>
            <h2 style={{fontWeight: 'bold'}}>{props.title}</h2>
            <hr/>
            {
                props.listType === 'unordred'? 
                <ul>
                    {props.content.map(item=> <li><label><input type='checkbox'/>{item}</label></li>)}
                </ul>:
                <ol style={{ listStyleType: listType}}>
                    {props.content.map(item=> <li>{item}</li>)}
                </ol>
            }
        </div>
    );
}
export default ListCard
//to do : onchange for the checkboxes || delete on every box || css enhancments || reminder ??