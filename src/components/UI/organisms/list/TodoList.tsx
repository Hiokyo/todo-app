import React from 'react'

import { actions, useStore } from '../../../../store'

import { List, Checkbox} from 'antd'
import './todoList.css'
import { useTranslation } from 'react-i18next';
import { message } from 'antd'

const TodoList: React.FC = () => {
  const {state, dispatch} = useStore()
  const {todos, todoInput } = state
  const { t } = useTranslation()

  const editSuccess = () => {
    message.success(t('content.edit-success'));
  };
  
  const editError = () => {
    message.error(t('content.edit-failure'));
  };
  return (
    <div className='list-container'>
      <h1>{t('content.todos')}</h1>
      <div className='list-item'>
          <List
          className="list"
          itemLayout="horizontal"
          dataSource={todos}
          renderItem={(todos)=> (
            <List.Item>
              <Checkbox>
              </Checkbox>
              <input 
                className='input' 
                defaultValue={todos.todo}
                onChange= {(event => {
                    dispatch(actions.setTodoInput(event.target.value))
                })}
                onKeyDown= {(event) => {
                  if (event.key === "Enter" || event.key === "Escape") {
                    if ( todoInput.trim() !== ""){
                      dispatch(actions.editTodo({ todo: todoInput.trim(), id: todos.id}));
                      editSuccess();
                    }
                    else editError();
                  }
                }}
              />
            </List.Item>                        
          )}
          />  
      </div>
    </div>
  )
}

export default TodoList