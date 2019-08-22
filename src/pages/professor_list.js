import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {PageHeader, Table} from 'antd';

const columns = [
    { title: '이름', dataIndex: 'name', key: 'name' },
    { title: '전화번호', dataIndex: 'phone', key: 'phone'}
];

const ProfessorListPage = () => {
    const [professorList, setProfessorList] = useState([]);

    useEffect(() => {
        const fetchList = async () => {
            const url = "http://localhost:8000/univ/professor.json";
            const {data} = await axios.get(url);
            setProfessorList(data);
        }
        fetchList();
    }, []);

    return (
        <div>
            <PageHeader title="교수목록" subTitle="subTitle" />

            <Table columns={columns} dataSource={professorList}
                    pagination={false}
            />
        </div>
    );
}

export default ProfessorListPage;