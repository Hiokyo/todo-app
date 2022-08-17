import React from 'react'
import './changeLanguage.css'
import { Select } from 'antd';
import i18n from '../../../../translation/i18n';



const { Option } = Select;

const translation = (value:any) => {
    i18n.changeLanguage(value)
  }

const ChangeLanguage = () => {
  return (
    <div className='change-language container'>
        <Select defaultValue="en" onChange = {translation}>\
            <Option value="vi">VN</Option>
            <Option value="en">EN</Option>
        </Select>
    </div>
  )
}

export default ChangeLanguage