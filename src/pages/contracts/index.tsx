import React from 'react';
import TableRow from '../../components/Table/TableRow';
import TableCell from '../../components/Table/TableCell';
import Table from '../../views/Table';
import HorizontalDivider from '../../components/HorizontalDivider';

const tableLabels = [
  'Date',
  'Contract With',
  'Project name',
  'Duration',
  'Due date',
  'Contract',
];

const TestTable = () => {
  return (
    <Table styles="mt-6 text-center m-auto" labels={tableLabels}>
      <TableRow>
        <TableCell>Test</TableCell>
        <TableCell>Test</TableCell>
        <TableCell>Test</TableCell>
        <TableCell>Test</TableCell>
        <TableCell>Test</TableCell>
        <TableCell>Test</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Test</TableCell>
        <TableCell>Test</TableCell>
        <TableCell>Test</TableCell>
        <TableCell>Test</TableCell>
        <TableCell>Test</TableCell>
        <TableCell>Test</TableCell>
      </TableRow>
    </Table>
  );
};

const Contracts: React.FC = () => {
  return (
    <>
      <h3 className="font-bold font-display text-2xl">New Contracts</h3>
      <TestTable />
      <HorizontalDivider styles="mt-6 mb-12" />
      <h3 className="font-bold font-display text-2xl">Contracts</h3>
      <TestTable />
    </>
  );
};

export default Contracts;
