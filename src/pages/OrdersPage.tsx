import React from 'react';
import { MoreHorizontal } from 'lucide-react';

import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
  PaginationEllipsis,
} from '@/components/ui/pagination';

type OrderStatus = 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';

const mockOrders = [
  { id: 'ORD010', customer: 'Liam Johnson', email: 'liam@example.com', date: '2023-07-01', status: 'Delivered' as OrderStatus, total: '$250.00' },
  { id: 'ORD011', customer: 'Olivia Smith', email: 'olivia@example.com', date: '2023-07-02', status: 'Shipped' as OrderStatus, total: '$150.75' },
  { id: 'ORD012', customer: 'Noah Williams', email: 'noah@example.com', date: '2023-07-03', status: 'Pending' as OrderStatus, total: '$350.00' },
  { id: 'ORD013', customer: 'Emma Brown', email: 'emma@example.com', date: '2023-07-04', status: 'Cancelled' as OrderStatus, total: '$450.20' },
  { id: 'ORD014', customer: 'Ava Jones', email: 'ava@example.com', date: '2023-07-05', status: 'Shipped' as OrderStatus, total: '$550.00' },
  { id: 'ORD015', customer: 'James Wilson', email: 'james@example.com', date: '2023-07-06', status: 'Delivered' as OrderStatus, total: '$50.50' },
  { id: 'ORD016', customer: 'Sophia Miller', email: 'sophia@example.com', date: '2023-07-07', status: 'Pending' as OrderStatus, total: '$199.99' },
  { id: 'ORD017', customer: 'Isabella Davis', email: 'isabella@example.com', date: '2023-07-08', status: 'Shipped' as OrderStatus, total: '$75.00' },
];

const getStatusBadgeVariant = (status: OrderStatus): 'default' | 'secondary' | 'destructive' => {
  switch (status) {
    case 'Shipped':
    case 'Delivered':
      return 'default';
    case 'Pending':
      return 'secondary';
    case 'Cancelled':
      return 'destructive';
    default:
      return 'secondary';
  }
};

const OrdersPage = () => {
  console.log('OrdersPage loaded');

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <LeftSidebar />
      <div className="flex flex-col sm:pl-14 flex-1">
        <Header />
        <main className="flex-1 p-4 sm:p-6 flex flex-col gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Orders</CardTitle>
              <CardDescription>
                A list of all recent orders in your store.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden sm:table-cell">Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead className="hidden sm:table-cell">Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Total</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="hidden sm:table-cell font-medium">{order.id}</TableCell>
                      <TableCell>
                        <div className="font-medium">{order.customer}</div>
                        <div className="text-xs text-muted-foreground">{order.email}</div>
                      </TableCell>
                       <TableCell className="hidden sm:table-cell">{order.date}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusBadgeVariant(order.status)}>{order.status}</Badge>
                      </TableCell>
                      <TableCell className="text-right">{order.total}</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button size="icon" variant="ghost">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>View Order Details</DropdownMenuItem>
                            <DropdownMenuItem>Update Status</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-destructive">Cancel Order</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="text-xs text-muted-foreground">
                Showing <strong>1-{mockOrders.length}</strong> of <strong>32</strong> orders
              </div>
              <Pagination className="ml-auto mr-0 w-auto">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                   <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </CardFooter>
          </Card>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default OrdersPage;