const ItemForm =(props)=>{
    let selected = null;

    for (let key in props.forms){
        if (props.forms[key]) selected = key;
    }
    if (!selected) return null;

    return (
        <div className="item-form">
                <input maxLength="30" placeholder="set a title"/>
                 {selected !== 'list'? <textarea placeholder='your note content'/>:
                                    <div id="lista"contentEditable>separate your list items into separate line</div>
                 }
                <button onClick={(ev)=> {
                    props.reset({...props.forms, [selected]:false});
                    console.log((ev.target.previousElementSibling.innerHTML).split('<div>'))
                    }}>save</button>
        </div>
    );

}
export default ItemForm;