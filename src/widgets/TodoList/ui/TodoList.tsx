import { Avatar, Divider, List, Skeleton } from 'antd';
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { DownOutlined } from '@ant-design/icons';
import type { RadioChangeEvent } from 'antd';
import { Form, Radio, Space, Switch, Table } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import type { ColumnsType, TableProps } from 'antd/es/table';
import type { ExpandableConfig, TableRowSelection } from 'antd/es/table/interface';

// interface DataType {
//             gender: string;
//             name: {
//               title: string;
//               first: string;
//               last: string;
//             };
//             email: string;
//             picture: {
//               large: string;
//               medium: string;
//               thumbnail: string;
//             };
//             nat: string;
//           }
              interface DataType {
        key: number;
        name: string;
        age: number;
        address: string;
        description: string;
      }
      
      type TablePaginationPosition =
        | 'topLeft'
        | 'topCenter'
        | 'topRight'
        | 'bottomLeft'
        | 'bottomCenter'
        | 'bottomRight';
      
      const columns: ColumnsType<DataType> = [
        {
          title: 'Name',
          dataIndex: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          sorter: (a, b) => a.age - b.age,
        },
        {
          title: 'Address',
          dataIndex: 'address',
          filters: [
            {
              text: 'London',
              value: 'London',
            },
            {
              text: 'New York',
              value: 'New York',
            },
          ],
          onFilter: (value, record) => record.address.indexOf(value as string) === 0,
        },
        {
          title: 'Action',
          key: 'action',
          sorter: true,
          render: () => (
            <Space size="middle">
              <a>Delete</a>
              <a>
                <Space>
                  More actions
                  <DownOutlined />
                </Space>
              </a>
            </Space>
          ),
        },
      ];
      
      const data: DataType[] = [];
      for (let i = 1; i <= 10; i++) {
        data.push({
          key: i,
          name: 'John Brown',
          age: Number(`${i}2`),
          address: `New York No. ${i} Lake Park`,
          description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
        });
      }
      
      const defaultExpandable = { expandedRowRender: (record: DataType) => <p>{record.description}</p> };
      const defaultTitle = () => 'Here is title';
      const defaultFooter = () => 'Here is footer';
const TodoList = () => {        
        const [bordered, setBordered] = useState(false);
        const [loading, setLoading] = useState(false);
        const [size, setSize] = useState<SizeType>('large');
        const [expandable, setExpandable] = useState<ExpandableConfig<DataType> | undefined>(
          defaultExpandable,
        );
        const [showTitle, setShowTitle] = useState(false);
        const [showHeader, setShowHeader] = useState(true);
        const [showfooter, setShowFooter] = useState(true);
        const [rowSelection, setRowSelection] = useState<TableRowSelection<DataType> | undefined>({});
        const [hasData, setHasData] = useState(true);
        const [tableLayout, setTableLayout] = useState();
        const [top, setTop] = useState<TablePaginationPosition | 'none'>('none');
        const [bottom, setBottom] = useState<TablePaginationPosition>('bottomRight');
        const [ellipsis, setEllipsis] = useState(false);
        const [yScroll, setYScroll] = useState(false);
        const [xScroll, setXScroll] = useState<string>();
      
       
      
        const scroll: { x?: number | string; y?: number | string } = {};
        if (yScroll) {
          scroll.y = 240;
        }
        if (xScroll) {
          scroll.x = '100vw';
        }
      
        const tableColumns = columns.map((item) => ({ ...item, ellipsis }));
        if (xScroll === 'fixed') {
          tableColumns[0].fixed = true;
          tableColumns[tableColumns.length - 1].fixed = 'right';
        }
      
        
      
        return (
          <>
            <Table
                 bordered
                 loading = {false}
                 size='middle'
                 showHeader
              pagination={{ position: [top as TablePaginationPosition, bottom] }}
              columns={tableColumns}
              dataSource={hasData ? data : []}
              scroll={scroll}
            />
          </>
        );
      };
      
        //     const [loading, setLoading] = useState(false);
        //     const [data, setData] = useState<DataType[]>([]);
          
        //     const loadMoreData = () => {
        //       if (loading) {
        //         return;
        //       }
        //       setLoading(true);
        //       fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
        //         .then((res) => res.json())
        //         .then((body) => {
        //           setData([...data, ...body.results]);
        //           setLoading(false);
        //         })
        //         .catch(() => {
        //           setLoading(false);
        //         });
        //     };
          
        //     useEffect(() => {
        //       loadMoreData();
        //     }, []);
          
        //     return (
        //       <div
        //         id="scrollableDiv"
        //         style={{
        //           height: 400,
        //           overflow: 'auto',
        //           padding: '0 16px',
        //           border: '1px solid rgba(140, 140, 140, 0.35)',
        //         }}
        //       >
        //         <InfiniteScroll
        //           dataLength={data.length}
        //           next={loadMoreData}
        //           hasMore={data.length < 50}
        //           loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        //           endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        //           scrollableTarget="scrollableDiv"
        //         >
        //           <List
        //             dataSource={data}
        //             renderItem={(item) => (
        //               <List.Item key={item.email}>
        //                 <List.Item.Meta
        //                   avatar={<Avatar src={item.picture.large} />}
        //                   title={<a href="https://ant.design">{item.name.last}</a>}
        //                   description={item.email}
        //                 />
        //                 <div>Content</div>
        //               </List.Item>
        //             )}
        //           />
        //         </InfiniteScroll>
        //       </div>
        //     );
        //   };
          
export default TodoList;