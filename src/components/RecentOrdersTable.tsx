import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

// Mock data for recent orders
const recentOrders = [
  {
    id: 'ORD001',
    customer: { name: 'Liam Johnson', email: 'liam@example.com' },
    date: '2023-06-23',
    amount: 250.0,
    status: 'Shipped',
  },
  {
    id: 'ORD002',
    customer: { name: 'Olivia Smith', email: 'olivia@example.com' },
    date: '2023-06-22',
    amount: 150.0,
    status: 'Delivered',
  },
  {
    id: 'ORD003',
    customer: { name: 'Noah Williams', email: 'noah@example.com' },
    date: '2023-06-21',
    amount: 350.0,
    status: 'Shipped',
  },
  {
    id: 'ORD004',
    customer: { name: 'Emma Brown', email: 'emma@example.com' },
    date: '2023-06-20',
    amount: 450.0,
    status: 'Pending',
  },
  {
    id: 'ORD005',
    customer: { name: 'Ava Jones', email: 'ava@example.com' },
    date: '2023-06-19',
    amount: 550.0,
    status: 'Cancelled',
  },
];

type OrderStatus = 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';

const StatusBadge = ({ status }: { status: OrderStatus }) => {
  const variant: "default" | "secondary" | "destructive" =
    status === 'Shipped' || status === 'Delivered'
      ? 'default'
      : status === 'Pending' || status === 'Processing'
      ? 'secondary'
      : 'destructive';
  
  return <Badge variant={variant} className="capitalize">{status.toLowerCase()}</Badge>;
};

const RecentOrdersTable = () => {
    console.log('RecentOrdersTable loaded');

    return (
        <Card>
            <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>
                        You made {recentOrders.length} orders this month.
                    </CardDescription>
                </div>
                <Button asChild size="sm" className="ml-auto gap-1">
                    <Link to="/orders">
                        View All
                        <ArrowUpRight className="h-4 w-4" />
                    </Link>
                </Button>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead className="hidden sm:table-cell">Date</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                            <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {recentOrders.slice(0, 5).map((order) => (
                            <TableRow key={order.id}>
                                <TableCell>
                                    <div className="font-medium">{order.customer.name}</div>
                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                        {order.customer.email}
                                    </div>
                                </TableCell>
                                <TableCell className="hidden sm:table-cell">{order.date}</TableCell>
                                <TableCell className="text-right">
                                    ${order.amount.toFixed(2)}
                                </TableCell>
                                <TableCell className="text-right">
                                    <StatusBadge status={order.status as OrderStatus} />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default RecentOrdersTable;