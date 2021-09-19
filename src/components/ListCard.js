const ListCard =(props)=>{
    const listType = props.listType.slice( props.listType.search('-') + 1 );
    return (
        <div className="listCard" >
            <h2 style={{fontWeight: 'bold'}} contentEditable>{props.title}</h2>
            <hr/>
            {
                props.listType === 'unordred'? 
                <ul contentEditable>
                    {props.content.map(item=> <li><label><input type='checkbox'/>{item}</label></li>)}
                </ul>:
                <ol style={{ listStyleType: listType}} contentEditable>
                    {props.content.map(item=> <li>{item}</li>)}
                </ol>
            }
        </div>
    );
}
export default ListCard
//to do : onchange for the checkboxes || delete on every box || css enhancments || reminder ??