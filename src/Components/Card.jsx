import React, { useRef } from 'react'
import { AiFillEdit, AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { removeTasks } from '../common/slices/prefSlice'
const Card = ({ name, taskId, columnId, index, tasks, setList }) => {
    const dispatch = useDispatch()
    const dragItem = useRef();
    const dragOverItem = useRef();
    const onDragStart = (e, id ,order) => {
    console.log("🚀 ~ file: Card.jsx ~ line 8 ~ onDragStart ~ order", order);
        console.log("coming heree")
        e.dataTransfer.setData("id", id);
        dragItem.current = order;
    };


    const dragEnter = (e, position) => {
        dragOverItem.current = position;
        // console.log(e.target.innerHTML);
    };
    function swapElement(array, indexA, indexB) {
        var tmp = array[indexA];
        array[indexA] = array[indexB];
        array[indexB] = tmp;
        return array
    }
    const drop = (e) => {
    console.log("🚀 ~ file: Card.jsx ~ line 28 ~ drop ~ e", e,dragItem.current);
        // const copyListItems = [...tasks];
        // console.log(copyListItems[dragItem.current],copyListItems[e]  ,"this should right")
        // const dragItemContent = copyListItems[dragItem.current];
        // copyListItems.splice(dragItem.current, 1);
        // copyListItems.splice(dragOverItem.current, 0, dragItemContent);
        // // console.log("🚀 ~ file: Card.jsx ~ line 29 ~ drop ~ copyListItems", copyListItems);
        // // console.log("🚀 ~ file: Card.jsx ~ line 32 ~ drop ~ swapElement(tasks,dragItem.current,dragOverItem.current)", swapElement(tasks, dragItem.current, dragOverItem.current));
        // setList(copyListItems);
        // dragItem.current = null;
        // dragOverItem.current = null;
    };
    return (
        <div className='card_wrapper' onDrop={()=>{drop(index)}} onDragEnter={(e) => dragEnter(e, index)} onDragStart={e => onDragStart(e, taskId ,index)} draggable onDragOver={(e) => { console.log() }}>
            <h1>{name}</h1>
            <div className="icon_wrapper">

                <AiFillEdit size={20} className='edit_icon' />
                <AiOutlineClose onClick={() => { dispatch(removeTasks({ taskId })) }} size={20} className='close_icon' />
            </div>
        </div>
    )
}

export default Card