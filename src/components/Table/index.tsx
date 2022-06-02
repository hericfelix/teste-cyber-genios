import React, { useMemo } from 'react';
import {
  Container,
  StyledTable,
  THead,
  TBody,
  TH,
  TR,
  TD,
  IconContainer,
  Loader,
} from './style';
import { useTable, useFlexLayout, Column, CellProps } from 'react-table';

import InfiniteScroll from 'react-infinite-scroll-component';
import { usePaginate } from '../../providers/paginate';
import { ICar } from '../../ts/interfaces';
import { Icon } from '@iconify/react';
import { useCars } from '../../providers/cars';
import { useModals } from '../../providers/modals';

export const Table = () => {
  const { setSelectedCarId } = useCars();
  const { paginatedCars, canLoadMoreCars, handleLoadMoreCars } = usePaginate();
  const { setIsEditModalOpen, setIsDeleteModalOpen } = useModals();

  const columns = useMemo<Column<ICar>[]>(
    () => [
      {
        Header: 'Nome',
        accessor: 'name' as keyof ICar,
      },
      {
        Header: 'Ano',
        accessor: 'launchYear' as keyof ICar,
      },
      {
        Header: 'Velocidade máx Km/h',
        accessor: 'maxSpeed' as keyof ICar,
        Cell: (c: CellProps<ICar>) => <p>{c.value} Km/h</p>,
      },
      {
        Header: 'Nota Economia',
        accessor: 'economyRating' as keyof ICar,
        Cell: (c: CellProps<ICar>) => <p>{c.value}/10</p>,
      },
      {
        Header: 'Nota Economia',
        accessor: 'userRating' as keyof ICar,
        Cell: (c: CellProps<ICar>) => <p>{c.value}/10</p>,
      },
      {
        Header: '',
        id: 'icons',
        width: 80,
        Cell: (c: CellProps<ICar>) => (
          <IconContainer>
            <Icon
              icon="akar-icons:trash-can"
              onClick={() => {
                setSelectedCarId(c.row.original.id);
                setIsDeleteModalOpen(true);
              }}
            />
            <Icon
              icon="clarity:edit-line"
              onClick={() => {
                setSelectedCarId(c.row.original.id);
                setIsEditModalOpen(true);
              }}
            />
          </IconContainer>
        ),
      },
    ],

    []
  );

  const data = useMemo(() => paginatedCars, [paginatedCars]);
  console.log(paginatedCars);
  const { getTableProps, getTableBodyProps, headerGroups, prepareRow, rows } =
    useTable<ICar>(
      {
        columns,
        data,
      },

      useFlexLayout
    );

  return (
    <Container>
      <div>
        <InfiniteScroll
          style={{ textAlign: 'center', paddingBottom: '12px' }}
          dataLength={data.length}
          next={handleLoadMoreCars}
          hasMore={canLoadMoreCars}
          loader={<Loader width={28} height={28} color="#000" type="spokes" />}
        >
          <StyledTable {...getTableProps()}>
            <THead>
              {headerGroups.map((headerGroup) => {
                const { key, ...restHeaderGroup } =
                  headerGroup.getHeaderGroupProps();
                return (
                  <TR key={key} {...restHeaderGroup}>
                    {headerGroup.headers.map((column) => {
                      const { key, ...restHeaderProps } =
                        column.getHeaderProps();
                      return (
                        <TH key={key} {...restHeaderProps}>
                          {column.render('Header')}
                        </TH>
                      );
                    })}
                  </TR>
                );
              })}
            </THead>
            <TBody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                const { key, ...restRowProps } = row.getRowProps();
                return (
                  <TR key={key} {...restRowProps}>
                    {row.cells.map((cell) => {
                      const { key, ...restCellProps } = cell.getCellProps();
                      return (
                        <TD key={key} {...restCellProps}>
                          {cell.render('Cell')}
                        </TD>
                      );
                    })}
                  </TR>
                );
              })}
            </TBody>
          </StyledTable>
        </InfiniteScroll>
      </div>
    </Container>
  );
};

export default Table;
