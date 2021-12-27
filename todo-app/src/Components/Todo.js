import React, {useState} from 'react'
import { useSelector ,useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../Actions';

const Todo = () => {
  const [inputData, setInputData] = useState('')
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);
    return (
        <div>
          <div className='container'>
            <div className='app-wrapper'>
              <div className='addItems'>
                <input type='text' placeholder='eg:-milk,egg ...' value={inputData} onChange={(event) => setInputData(event.target.value)} className='task-input'/>
                <i className='fas fa-plus button-add' onClick={() => dispatch(addTodo(inputData), setInputData(''))}></i>
              </div>

              <div className='showItems'>
                {list.map((elem) => {
                  return(
                    <div className='list-item' key={elem.id}>
                      <h3>{elem.data}</h3>
                      <i className='far fa-trash-alt button-delete' title='delete-item' onClick={() => dispatch(deleteTodo(elem.id))}></i>
                    </div>
                  )
                })}

                {<div className={list ? 'clear-btn-container show-btn' : 'hide-btn' }>
                  <button className='clearBtn' onClick={() => dispatch(removeTodo())}>Clear All</button>
                </div>}
              </div>
            </div>
          </div>
        </div>
    )
}

export default Todo;