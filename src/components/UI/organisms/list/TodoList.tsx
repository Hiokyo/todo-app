import React, { useState } from 'react'

import { actions, useStore } from '../../../../store'
import { List, Checkbox} from 'antd'
import { useTranslation } from 'react-i18next';
import { message } from 'antd'
import './todoList.css'

const TodoList: React.FC = () => {
  const {state, dispatch} = useStore()
  const {todos} = state
  const [name, setName] = useState("")
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
              <Checkbox onClick={ () => {console.log(todos.id);
              }}>
              </Checkbox>
              <input 
                className='input' 
                defaultValue={todos.todo}
                onChange= {(event => {
                    setName(event.target.value)
                })}
                onKeyDown= {(event) => {
                  if (event.key === "Enter" || event.key === "Escape") {
                    if ( !!name.trim()){
                      dispatch(actions.editTodo({ todo: name.trim(), id: todos.id}));
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