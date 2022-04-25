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
      <Icon to='/'>Aletheia</Icon>
        <FormWrap>
            <FormContent>
            <div class="card">
          <div class="card-body p-4">
            <div class="row">
              <div class="col-12 mb-4">
                <div class="input-group">
                  <div class="form-outline flex-fill">
                    <input type="search" id="form1" class="form-control form-control-lg" />
                    <label class="form-label" for="form1">Search for free photos and videos</label>
                    <div class="form-helper pt-2"><span class="font-weight-bold">Suggested:</span> 
                      <a href="#!" class="text-black-50">spring,</a>  
                      <a href="#!" class="text-black-50">natural,</a>  
                      <a href="#!" class="text-black-50">outdoors,</a>  
                      <a href="#!" class="text-black-50">forest,</a>  
                      <a href="#!" class="text-black-50">cactus,</a>  
                      <a href="#!" class="text-black-50">flowers,</a>  
                      <a href="#!" class="text-black-50">more</a>
                    </div>
                  </div>
                  <button type="button" class="btn btn-primary">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
            </FormContent>
            <FormContent>
            <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps}>
                  {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                </tr>
              ))}
          </thead>
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
        </FormContent>
        </FormWrap>
    </Container>
    </>
  );
};
export default Progress;