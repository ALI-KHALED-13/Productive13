const ItemForm =(props)=>{
    let selected = null;

    for (let key in props.forms){
        if (props.forms[key]) selected = key;
    }
    if (!selected) return null;
    return (
        <div className="item-form">
            <button onClick={()=> props.reset({...props.forms, [selected]:false})}>save</button>
        </div>
    );

}
export default ItemForm;