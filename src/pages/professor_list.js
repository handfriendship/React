import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {PageHeader, Table} from 'antd';

const url = "http://localhost:8000/univ/professor.json";

class ProfessorListPage extends React.Component {
    
    state = {
        dataSource: []
    }

    componentDidMount = async () => {
        const {data} = await axios.get(url);
        console.log(data); 
        const temp = [];
        data.map(element => (
            this.setState({
                dataSource: [...this.state.dataSource].concat({name:element.name, phone:element.phone})
            })
        ))

    }
/*
    dataSource = [
       
        {
          key: '1',
          'name': 'Mike', // 여기의 name은 dataIndex랑 매칭되는 듯?
          'phone': 32
        },
        {
          key: '2',
          '이름': 'John',
          '전화번호': 42
          
        },
      ];
      */ 
      columns = [ //columns 안에 {} 이거 한 개가 열 한개를 말함.
        {
          title: '이름',
          dataIndex: 'name',
          key: 'name',
        }, 
        {
          title: '전화번호',
          dataIndex: 'phone',
          key: 'phoneNum',
        }
      ];
     
    render() {
        return (
            <>
                <PageHeader title="교수 목록" subTitle="subTitle" />
                <Table dataSource={this.state.dataSource} columns={this.columns} />
            </>
        );
    }
}

export default ProfessorListPage;