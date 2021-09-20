const ListCard =({ list, lists, updateLists})=>{
    const listType = list.listType.slice( list.listType.search('-') + 1 );

    const handleDelete =()=> updateLists(lists.filter(card=> card !== list));

    const handleCheck =(ev)=> {
        updateLists( lists.map(card=> { 
                            if(card !== list){ //i.e: the other lists
                                return card //unchanged
                            }
                            const content = card.content.map(obj=> { // representing the single item (line)
                                if (obj.item === ev.target.value || obj.item === ev.target.textContent){ // clicking on the label or the input el.
                                    return {item: obj.item, isChecked: !obj.isChecked}
                                }else {
                                    return obj
                                }
                            })
                            return {...card, content}
                        }
                    )
                )
    }

    const checkedStyle = {color: '#e0e0de', textDecoration: 'line-through'};

    return (
        <div className="listCard" >
            <h2 style={{fontWeight: 'bold'}} contentEditable suppressContentEditableWarning >{list.title}</h2>
            <hr/>
            {
                list.listType === 'unordred'? 
                <ul contentEditable suppressContentEditableWarning>
                    {
                    list.content.map((obj, ind)=> { 
                        return <li  key={list.id + ind} > 
                                    <label style={obj.isChecked? checkedStyle: {}}>
                                        <input type='checkbox' checked={obj.isChecked} onChange={handleCheck} value={obj.item}/>{obj.item}
                                    </label> 
                               </li>
                    })
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
//to do : onchange for the checkboxes || css enhancments  ??