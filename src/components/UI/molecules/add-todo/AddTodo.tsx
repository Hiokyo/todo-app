import React, {useState} from 'react'
import { useStore, actions } from '../../../../store';
import { useTranslation } from "react-i18next";
import { Button, Input, message } from 'antd';

import './addTodo.css'
import { setTodoInput } from '../../../../store/actions';

const AddTodo: React.FC = () => {
    const { t } = useTranslation();

    const [loading, setLoading] = useState(false);
    const {state, dispatch} = useStore();
    const {todoInput} = state;

    const addSuccess = () => {
        message.success(t("content.add-success"))
    }
    const addError = () => {
        message.error(t("content.add-failure"))
    }

    const handleAdd = () => {
        if (todoInput.trim() !== "" ){
            setLoading(true);
            const fakeApi = setTimeout(() => {
                dispatch(actions.addTodo(todoInput.trim()));
                setLoading(false);
                addSuccess();
                dispatch(setTodoInput(""));         
              }, 1000);
        }
        else {
            addError();
        }
    }

    return (
        <div className='add-task container'>
            <Input 
                placeholder= {t("content.add-placeholder")}
                value={todoInput}
                onPressEnter = {handleAdd}
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />
            <Button
                type="primary" 
                loading={loading}
                ghost
                onClick={handleAdd}
            >
            {t("content.btn-add")}
            </Button>
        </div>
    )
}

export default AddTodo
