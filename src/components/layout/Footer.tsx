import React from 'react';

const Footer: React.FC = () => {
  console.log('Footer loaded');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-4">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} ShopAdmin Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;