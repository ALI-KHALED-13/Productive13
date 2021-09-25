import React from 'react';

const ListCard =({ list, lists, updateLists})=>{
    const listType = list.listType.slice( list.listType.search('-') + 1 );

    const handleDelete =(ev)=> {
        ev.target.parentElement.style.animation = 'fadeOutLeft 1s';
        setTimeout(()=> updateLists(lists.filter(card=> card !== list)), 600);
    }
    
    const handleCheck =(ev)=> {
        updateLists( lists.map(card=> { 
                            if(card !== list){ //i.e: the other lists
                                return card //unchanged
                            }
                            const content = card.content.map(obj=> { // representing the single item (line)
                                if (obj.id === ev.target.id){
                                    return {item: obj.item, isChecked: !obj.isChecked, id: obj.id}
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
            <h2 className="title" >{list.title}</h2>
            <hr/>
            {
                list.listType === 'unordred'? 
                <ul>
                    {
                    list.content.map(obj=> { 
                        return <li  key={obj.id} > 
                                    <label style={obj.isChecked? checkedStyle: {}}>
                                        <input type='checkbox'
                                        id={obj.id}
                                        checked={obj.isChecked} 
                                        onChange={handleCheck} 
                                        value={obj.item}
                                        />{obj.item}
                                    </label> 
                               </li>
                    })
                    }
                </ul>:
                <ol style={{ listStyleType: listType}} >
                    {list.content.map(obj=> <li key={obj.id}> {obj.item} </li>)}
                </ol>
            }
            <br />
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}
export default React.memo(ListCard);
