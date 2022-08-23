import React, {useState, useEffect} from 'react'
import { useStore, actions } from '../../../../store';
import { useTranslation } from "react-i18next";
import { Button, Input, message, Select } from 'antd';

import './addTodo.css'
import { setTodoInput } from '../../../../store/actions';

const {Option} = Select;

const AddTodo: React.FC = () => {
    const { t } = useTranslation();

    const [loading, setLoading] = useState(false);
    const {state, dispatch} = useStore();
    const {todos, todoInput} = state;
    const {tagInput} = state

    const handleChange = (value: string) => {
        dispatch(actions.setTagInput(value))
    };
    
    useEffect(() => {
        localStorage.setItem("todo", JSON.stringify(todos));
    }, [todos]);

    const addSuccess = () => {
        message.success(t("content.add.success"))
    }
    const addError = () => {
        message.error(t("content.add.failure"))
    }

    const handleAdd = () => {
        if (todoInput.trim() !== "" ){
            setLoading(true);
            const fakeApi = setTimeout(() => {
                dispatch(actions.addTodo({todos:todoInput.trim(), tags: tagInput }));
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
                placeholder= {t("content.add.placeholder")}
                value={todoInput}
                onPressEnter = {handleAdd}
                onChange={e => {
                    dispatch(actions.setTodoInput(e.target.value))
                }}
            />
            <Select className='select' onChange={handleChange}>
                <Option value="individual">{t("content.tag.individual")}</Option>
                <Option value="work">{t("content.tag.work")}</Option>
                <Option value="other">{t("content.tag.other")}</Option>
            </Select>
            <Button
                className='btn-add'
                type="primary" 
                loading={loading}
                ghost
                onClick={handleAdd}
            >
            {t("content.btn.add")}
            </Button>
        </div>
    )
}

export default AddTodo
