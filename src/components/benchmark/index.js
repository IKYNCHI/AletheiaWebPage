import React, {useMemo} from 'react'
import {useTable} from 'react-table'
import { Columns } from './table';
import MOCK_DATA from './MOCK_DATA.json'
import { Container, FormWrap, Icon, FormContent, Form, FormInput, FormButton } from './BenchmarkElements'
import './table.css'

const Progress = () => {

  //Use useMemo() if you want to have the older data in cache
  const columns = useMemo(() => Columns, [])
  const data = useMemo(() => MOCK_DATA, [])

  const tableInstance = useTable({
    columns,
    data,
  })
  
  const {getTableProps, getTableBodyProps,headerGroups,rows,prepareRow, } = tableInstance


  return (
    <>
    <Container>
        <FormWrap>
            <Icon to='/'>Aletheia</Icon>
            <FormContent>
                <Form action='#'>
                    <FormInput type='search' required />
                    <FormButton type='submit'>Search</FormButton>
                </Form>
            </FormContent>
        </FormWrap>
        <table {...getTableProps()} col-xs-3 table-bordered table-striped table-condensed table-fixed>
          <theader>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps}>
                  {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
              ))}
          </theader>
          <tbody {...getTableBodyProps()}>
            {
              rows.map(row => {
                prepareRow(row)
                return(
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return <td {...cell.getCellProps()}>
                        {cell.render('Cell')}</td>
                    })}
                  </tr>
                )
              })
            }
          </tbody>
        </table>
    </Container>
    </>
  );
};
export default Progress;