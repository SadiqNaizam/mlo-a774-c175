import React from 'react';

// Import Layout Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';

// Import shadcn/ui Components
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from 'lucide-react';

// Mock data for the customers table, reflecting the page's purpose
const customers = [
  {
    id: 'CUST001',
    name: 'Liam Johnson',
    email: 'liam@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=liamjohnson',
    totalOrders: 5,
    totalSpent: 750.50,
  },
  {
    id: 'CUST002',
    name: 'Olivia Smith',
    email: 'olivia@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=oliviasmith',
    totalOrders: 8,
    totalSpent: 1230.00,
  },
  {
    id: 'CUST003',
    name: 'Noah Williams',
    email: 'noah@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=noahwilliams',
    totalOrders: 2,
    totalSpent: 350.00,
  },
  {
    id: 'CUST004',
    name: 'Emma Brown',
    email: 'emma@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=emmabrown',
    totalOrders: 12,
    totalSpent: 2150.75,
  },
  {
    id: 'CUST005',
    name: 'Ava Jones',
    email: 'ava@example.com',
    avatarUrl: '', // To test fallback
    totalOrders: 1,
    totalSpent: 55.00,
  },
  {
    id: 'CUST006',
    name: 'James Garcia',
    email: 'james@example.com',
    avatarUrl: 'https://i.pravatar.cc/150?u=jamesgarcia',
    totalOrders: 3,
    totalSpent: 420.25,
  },
];

const CustomersPage: React.FC = () => {
  console.log('CustomersPage loaded');

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <LeftSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Customers</CardTitle>
              <CardDescription>
                A list of all customers who have made purchases.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden w-[64px] sm:table-cell">
                      <span className="sr-only">Avatar</span>
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead className="hidden md:table-cell">Email</TableHead>
                    <TableHead className="hidden sm:table-cell text-right">Total Orders</TableHead>
                    <TableHead className="text-right">Total Spent</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {customers.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell className="hidden sm:table-cell">
                        <Avatar className="h-9 w-9">
                          <AvatarImage src={customer.avatarUrl} alt={`${customer.name}'s avatar`} />
                          <AvatarFallback>
                            <User className="h-5 w-5" />
                          </AvatarFallback>
                        </Avatar>
                      </TableCell>
                      <TableCell className="font-medium">{customer.name}</TableCell>
                      <TableCell className="hidden md:table-cell">{customer.email}</TableCell>
                      <TableCell className="hidden sm:table-cell text-right">{customer.totalOrders}</TableCell>
                      <TableCell className="text-right">
                        {new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        }).format(customer.totalSpent)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default CustomersPage;