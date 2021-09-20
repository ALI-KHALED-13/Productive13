const ListCard =({ list, lists, updateLists})=>{
    const listType = list.listType.slice( list.listType.search('-') + 1 );

    const handleDelete =(ev)=> updateLists(lists.filter(obj=> obj !== list));

    return (
        <div className="listCard" >
            <h2 style={{fontWeight: 'bold'}} contentEditable suppressContentEditableWarning >{list.title}</h2>
            <hr/>
            {
                list.listType === 'unordred'? 
                <ul contentEditable suppressContentEditableWarning>
                    {
                    list.content.map((obj, ind)=> <li  key={list.id + ind} > <label><input type='checkbox'/>{obj.item}</label> </li>)
                    }
                </ul>:
                <ol style={{ listStyleType: listType}} contentEditable suppressContentEditableWarning>
                    {list.content.map((obj, ind)=> <li key={list.id + ind}> {obj.item} </li>)}
                </ol>
            }
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
export default ListCard
//to do : onchange for the checkboxes || css enhancments || reminder ??