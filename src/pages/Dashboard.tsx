import React from 'react';
import { DollarSign, Users, CreditCard, Activity } from 'lucide-react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import LeftSidebar from '@/components/layout/LeftSidebar';
import Footer from '@/components/layout/Footer';

// Custom Page-specific Components
import StatCard from '@/components/StatCard';
import SalesTrendChart from '@/components/SalesTrendChart';
import RecentOrdersTable from '@/components/RecentOrdersTable';

// shadcn/ui component for general layout
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Dashboard = () => {
  console.log('Dashboard loaded');

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <LeftSidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {/* Top Row: Stat Cards */}
          <section className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <StatCard
              title="Total Revenue"
              value="$45,231.89"
              icon={<DollarSign />}
              description="+20.1% from last month"
              trend="up"
            />
            <StatCard
              title="Subscriptions"
              value="+2350"
              icon={<Users />}
              description="+180.1% from last month"
              trend="up"
            />
            <StatCard
              title="Sales"
              value="+12,234"
              icon={<CreditCard />}
              description="+19% from last month"
              trend="up"
            />
            <StatCard
              title="Active Now"
              value="+573"
              icon={<Activity />}
              description="+201 since last hour"
              trend="neutral"
            />
          </section>

          {/* Bottom Row: Chart and Recent Orders */}
          <section className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <SalesTrendChart
                title="Sales Trend"
                description="Showing total sales for the last 7 months."
              />
            </div>
            <div className="xl:col-span-1">
              <RecentOrdersTable />
            </div>
          </section>

          {/* Example of a plain Card for additional content */}
           <section>
                <Card>
                    <CardHeader>
                        <CardTitle>Additional Information</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>This is a placeholder card to demonstrate how additional sections can be added to the dashboard layout using shadcn/ui's Card component.</p>
                    </CardContent>
                </Card>
           </section>

        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;