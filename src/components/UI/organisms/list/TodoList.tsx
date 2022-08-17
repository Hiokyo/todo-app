import React from 'react'

import {Button, List} from 'antd'
import './todoList.css'
import {data} from '../../../mock-data/data'
import { useTranslation } from 'react-i18next';

const TodoList: React.FC = () => {
    const { t } = useTranslation()
    return (
        <div className='list-container'>
            <h1>{t('content.todos')}</h1>
            <div className='list-item'>
                <List
                className="list"
                itemLayout="horizontal"
                dataSource={data}
                renderItem={item => (
                    <List.Item
                    actions={[
                        <Button type="primary">
                            {t('content.btn-edit')}
                        </Button>,
            
                        <Button type="primary" danger>
                            {t('content.btn-delete')}
                        </Button>
                    ]}
                    >
                        {item}
                    </List.Item>
                )}
                />
            </div>
        </div>
    )
}

export default TodoList