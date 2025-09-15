import React from 'react'
import Header from '@/components/layout/Header'

const layout = ({ children }) => {
  return (
    <div>
        {/* Header top pe hamesha rahega */}
        <Header />

        {/* Page content */}
        <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {children}
        </main>
    </div>
  );
};

export default layout