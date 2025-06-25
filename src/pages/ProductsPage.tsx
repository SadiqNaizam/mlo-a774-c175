import React, { useState } from 'react';
import {
  MoreHorizontal,
  PlusCircle,
} from "lucide-react";

// Custom Layout Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";

// Mock Data for the products table
const mockProducts = [
  {
    id: "prod_001",
    name: "Ergonomic Office Chair",
    status: "in-stock",
    price: 299.99,
    stock: 120,
    imageUrl: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "prod_002",
    name: "Mechanical Keyboard",
    status: "in-stock",
    price: 149.00,
    stock: 75,
    imageUrl: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "prod_003",
    name: "4K UHD Monitor",
    status: "low-stock",
    price: 499.50,
    stock: 10,
    imageUrl: "https://images.unsplash.com/photo-1545665277-31acaa23de40?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "prod_004",
    name: "Wireless Mouse",
    status: "out-of-stock",
    price: 49.99,
    stock: 0,
    imageUrl: "https://images.unsplash.com/photo-1615663249873-4d4376405ad7?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: "prod_005",
    name: "Adjustable Standing Desk",
    status: "in-stock",
    price: 599.00,
    stock: 30,
    imageUrl: "https://images.unsplash.com/photo-1593152167538-4116346337a2?q=80&w=400&auto=format&fit=crop",
  },
];

const ProductsPage = () => {
  console.log('ProductsPage loaded');
  const [isAddProductDialogOpen, setIsAddProductDialogOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <LeftSidebar />
      <div className="flex flex-1 flex-col sm:pl-14">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Products</h1>
            <div className="ml-auto flex items-center gap-2">
              <Dialog open={isAddProductDialogOpen} onOpenChange={setIsAddProductDialogOpen}>
                <DialogTrigger asChild>
                  <Button size="sm" className="h-8 gap-1">
                    <PlusCircle className="h-3.5 w-3.5" />
                    <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                      Add Product
                    </span>
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Add New Product</DialogTitle>
                    <DialogDescription>
                      Fill in the details below to add a new product to your catalog.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="name" className="text-right">Name</Label>
                      <Input id="name" placeholder="Product Name" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="description" className="text-right">Description</Label>
                      <Textarea id="description" placeholder="Type your product description here." className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="price" className="text-right">Price ($)</Label>
                      <Input id="price" type="number" placeholder="99.99" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="stock" className="text-right">Stock</Label>
                      <Input id="stock" type="number" placeholder="100" className="col-span-3" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setIsAddProductDialogOpen(false)}>Cancel</Button>
                    <Button type="submit" onClick={() => setIsAddProductDialogOpen(false)}>Save Product</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Product Catalog</CardTitle>
              <CardDescription>
                Manage your products and view their sales performance.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="hidden w-[100px] sm:table-cell">
                      <span className="sr-only">Image</span>
                    </TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="hidden md:table-cell">Price</TableHead>
                    <TableHead className="hidden md:table-cell">Stock</TableHead>
                    <TableHead>
                      <span className="sr-only">Actions</span>
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockProducts.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="hidden sm:table-cell">
                        <img
                          alt="Product image"
                          className="aspect-square rounded-md object-cover"
                          height="64"
                          src={product.imageUrl}
                          width="64"
                        />
                      </TableCell>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>
                        <Badge variant={
                          product.status === 'in-stock' ? 'default' :
                          product.status === 'low-stock' ? 'secondary' : 'destructive'
                        } className="capitalize">
                          {product.status.replace('-', ' ')}
                        </Badge>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">${product.price.toFixed(2)}</TableCell>
                      <TableCell className="hidden md:table-cell">{product.stock}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button aria-haspopup="true" size="icon" variant="ghost">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Toggle menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
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

export default ProductsPage;