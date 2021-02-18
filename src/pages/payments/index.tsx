import React from 'react';
import { LeftArrow, RightArrow } from '../../components/ArrowButtons';
import TableCell from '../../components/Table/TableCell';
import TableRow from '../../components/Table/TableRow';
import { DashboardAnalyticsItem } from '../../sharedTypes/dashboardAnalytics';
import Table from '../../views/Table';
import DashboardAnalytics from '../../views/DashboardAnalytics';
import HorizontalDivider from '../../components/HorizontalDivider';

const dashboardItems: DashboardAnalyticsItem[] = [
  {
    changeInPercent: 7.0,
    figure: 3500,
    currency: '$',
    id: 1,
    timeString: 'since last month',
    title: 'income this month',
  },
  {
    changeInPercent: 7.0,
    figure: 150,
    currency: '$',
    id: 2,
    timeString: 'since last week',
    title: 'increase income',
  },
  {
    changeInPercent: -4.5,
    figure: 5100,
    id: 3,
    timeString: 'since last month',
    title: 'expected next month',
    currency: '$',
  },
];

const tableLabels: string[] = [
  'Date',
  'Payment by',
  'Description',
  'Balance',
  'Payment',
  'Contract',
];

const Payments: React.FC = () => {
  return (
    <div className="w-full font-body">
      <DashboardAnalytics items={dashboardItems} transparent={true} />
      <HorizontalDivider styles="my-6" />
      <div className="flex">
        <h3 className="font-bold text-2xl">Payments</h3>
        <div className="flex items-center ml-auto">
          <LeftArrow
            clickHandler={() => {
              return;
            }}
          />
          <div className="text-xl font-semibold text-gray-700 font-display mx-6">
            01 / 02
          </div>
          <RightArrow
            clickHandler={() => {
              return;
            }}
          />
        </div>
      </div>

      <Table styles="mt-6 text-center m-auto" labels={tableLabels}>
        <TableRow>
          <TableCell>31. 07. 2020</TableCell>
          <TableCell>Elephant House</TableCell>
          <TableCell>Phase 4 completion</TableCell>
          <TableCell>$ 200</TableCell>
          <TableCell>2300</TableCell>
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
    </div>
  );
};

export default Payments;
